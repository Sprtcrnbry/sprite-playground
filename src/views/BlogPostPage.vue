<template>
  <div class="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
    <div v-if="loading" class="text-center py-24">
      <div class="animate-spin rounded-full h-12 w-12 border-b-2 border-primary-600 mx-auto"></div>
      <p class="mt-4 text-gray-600 dark:text-gray-400">Loading post...</p>
    </div>

    <div v-else-if="error" class="text-center py-24 text-red-600 dark:text-red-400">
      <p>{{ error }}</p>
    </div>

    <div v-else-if="!post" class="text-center py-24">
      <h1 class="text-2xl font-bold text-gray-900 dark:text-white mb-4">Post Not Found</h1>
      <p class="text-gray-600 dark:text-gray-400 mb-8">
        The post you're looking for doesn't exist.
      </p>
      <RouterLink to="/blog" class="btn-primary">Back to Blog</RouterLink>
    </div>

    <article v-else class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <!-- Back to blog -->
      <nav class="mb-8">
        <RouterLink
          to="/blog"
          class="inline-flex items-center text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300 transition-colors group"
        >
          <svg
            class="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M15 19l-7-7 7-7"
            />
          </svg>
          Back to Blog
        </RouterLink>
      </nav>

      <!-- Article header -->
      <header class="mb-12">
        <div v-if="post.featured" class="mb-4">
          <span
            class="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-primary-100 dark:bg-primary-900/30 text-primary-800 dark:text-primary-300"
          >
            <svg class="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
              <path
                d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
              />
            </svg>
            Featured Post
          </span>
        </div>

        <h1 class="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6 leading-tight">
          {{ post.title }}
        </h1>

        <div class="flex items-center text-gray-600 dark:text-gray-400 mb-6">
          <time :datetime="post.date" class="font-medium">{{ formatDate(post.date) }}</time>
          <span class="mx-3">•</span>
          <span>By {{ post.author }}</span>
        </div>

        <div class="flex flex-wrap gap-2">
          <span
            v-for="tag in post.tags"
            :key="tag"
            class="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300"
          >
            {{ tag }}
          </span>
        </div>
      </header>

      <!-- Article content -->
      <div class="prose prose-lg prose-gray dark:prose-invert max-w-none">
        <div v-html="post.content"></div>
      </div>

      <!-- Share buttons -->
      <footer class="mt-16 pt-8 border-t border-gray-200 dark:border-gray-700">
        <div class="flex items-center justify-between">
          <div>
            <h3 class="text-lg font-semibold text-gray-900 dark:text-white mb-2">
              Share this post
            </h3>
            <div class="flex space-x-4">
              <a
                href="#"
                class="text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
              >
                Twitter
              </a>
              <a
                href="#"
                class="text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
              >
                LinkedIn
              </a>
              <a
                href="#"
                class="text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
              >
                Facebook
              </a>
            </div>
          </div>

          <RouterLink to="/blog" class="btn-secondary"> More Posts </RouterLink>
        </div>
      </footer>
    </article>
  </div>
</template>

<script setup lang="ts">
import { onMounted, watch, computed } from 'vue' // ← Added 'computed' to imports
import { useRoute, RouterLink } from 'vue-router'
import { useBlog } from '@/composables/useBlog'

const route = useRoute()
const { loading, error, getPostById, fetchPosts, formatDate } = useBlog()

const postId = computed(() => parseInt(route.params.id as string))
const post = getPostById(postId.value)

onMounted(() => {
  fetchPosts()
})

// Fetch posts when route changes
watch(
  () => route.params.id,
  () => {
    if (!post.value) {
      fetchPosts()
    }
  },
)
</script>
