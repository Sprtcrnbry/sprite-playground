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
      <header class="mb-12">
        <div v-if="post.featured" class="mb-4">
          <span
            class="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-primary-100 dark:bg-primary-900/30 text-primary-800 dark:text-primary-300"
            >Featured Post</span
          >
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
      <div
        class="prose prose-lg prose-gray dark:prose-invert max-w-none"
        v-html="post.content"
      ></div>
    </article>
  </div>
</template>

<script setup lang="ts">
import { computed, onMounted, watch } from 'vue'
import { useRoute } from 'vue-router'
import { useBlog } from '@/composables/useBlog'

const route = useRoute()
const { loading, error, fetchPosts, getPostById, formatDate } = useBlog()

// Fix: Convert route param ID to number for lookup
const postId = computed(() => Number(route.params.id))

// getPostById returns a computed; unwrap its value!
const post = computed(() => getPostById(postId.value).value)

// Fetch posts on mount, and re-fetch if navigating to another post
onMounted(fetchPosts)
watch(() => route.params.id, fetchPosts)
</script>
