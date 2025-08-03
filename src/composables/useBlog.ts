import { ref, computed } from 'vue'

export interface BlogPost {
  id: number
  title: string
  excerpt: string
  content: string
  date: string
  author: string
  tags: string[]
  featured: boolean
}

const posts = ref<BlogPost[]>([])
const loading = ref(false)
const error = ref<string | null>(null)

export function useBlog() {
  const fetchPosts = async () => {
    loading.value = true
    error.value = null

    try {
      const response = await fetch('/data/posts.json')
      if (!response.ok) {
        throw new Error('Failed to fetch posts')
      }
      const data = await response.json()
      posts.value = data.sort(
        (a: BlogPost, b: BlogPost) => new Date(b.date).getTime() - new Date(a.date).getTime(),
      )
    } catch (err) {
      error.value = err instanceof Error ? err.message : 'An error occurred'
    } finally {
      loading.value = false
    }
  }

  const getLatestPosts = (count: number = 3) => {
    return computed(() => posts.value.slice(0, count))
  }

  const getFeaturedPosts = () => {
    return computed(() => posts.value.filter((post) => post.featured))
  }

  const getPostById = (id: number) => {
    return computed(() => posts.value.find((post) => post.id === id))
  }

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    })
  }

  return {
    posts: computed(() => posts.value),
    loading: computed(() => loading.value),
    error: computed(() => error.value),
    fetchPosts,
    getLatestPosts,
    getFeaturedPosts,
    getPostById,
    formatDate,
  }
}
