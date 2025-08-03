<template>
  <div class="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
    <!-- Hero Section -->
    <section class="bg-white dark:bg-gray-800 py-20">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center">
          <h1
            class="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6 animate-fade-in-1"
          >
            Our <span class="text-primary-600 dark:text-primary-400">Blog</span>
          </h1>
          <p class="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto animate-fade-in-2">
            Insights, tutorials, and thoughts on modern web development, design, and technology
          </p>
        </div>
      </div>
    </section>

    <!-- Blog Posts -->
    <section class="py-16">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div v-if="loading" class="text-center py-12 animate-fade-in-1">
          <div
            class="animate-spin rounded-full h-12 w-12 border-b-2 border-primary-600 mx-auto"
          ></div>
          <p class="mt-4 text-gray-600 dark:text-gray-400">Loading posts...</p>
        </div>

        <div
          v-else-if="error"
          class="text-center py-12 text-red-600 dark:text-red-400 animate-fade-in-1"
        >
          <p>{{ error }}</p>
        </div>

        <div v-else>
          <!-- Featured Posts -->
          <div v-if="featuredPosts.length > 0" class="mb-16">
            <h2 class="text-2xl font-bold text-gray-900 dark:text-white mb-8 animate-fade-in-3">
              Featured Posts
            </h2>
            <div class="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <article
                v-for="(post, index) in featuredPosts"
                :key="post.id"
                class="bg-white dark:bg-gray-800 rounded-2xl shadow-sm hover:shadow-md dark:shadow-gray-900/20 dark:hover:shadow-gray-900/40 transition-all duration-300 overflow-hidden group animate-fade-in-4"
                :class="`animate-fade-in-${4 + index}`"
              >
                <div class="p-8">
                  <div class="flex items-center justify-between mb-4">
                    <div class="flex items-center text-sm text-gray-500 dark:text-gray-400">
                      <time :datetime="post.date">{{ formatDate(post.date) }}</time>
                      <span class="mx-2">•</span>
                      <span>{{ post.author }}</span>
                    </div>
                    <span
                      class="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-primary-100 dark:bg-primary-900/30 text-primary-800 dark:text-primary-300"
                    >
                      Featured
                    </span>
                  </div>

                  <h3
                    class="text-2xl font-bold text-gray-900 dark:text-white mb-4 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors"
                  >
                    {{ post.title }}
                  </h3>

                  <p class="text-gray-600 dark:text-gray-300 mb-6 line-clamp-3">
                    {{ post.excerpt }}
                  </p>

                  <div class="flex items-center justify-between">
                    <div class="flex flex-wrap gap-2">
                      <span
                        v-for="tag in post.tags.slice(0, 3)"
                        :key="tag"
                        class="inline-flex items-center px-2 py-1 rounded text-xs font-medium bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300"
                      >
                        {{ tag }}
                      </span>
                    </div>

                    <RouterLink
                      :to="`/blog/${post.id}`"
                      class="inline-flex items-center text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300 font-semibold transition-colors group"
                    >
                      Read Full Post
                      <svg
                        class="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M17 8l4 4m0 0l-4 4m4-4H3"
                        />
                      </svg>
                    </RouterLink>
                  </div>
                </div>
              </article>
            </div>
          </div>

          <!-- All Posts -->
          <div>
            <h2 class="text-2xl font-bold text-gray-900 dark:text-white mb-8 animate-fade-in-5">
              All Posts
            </h2>
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <article
                v-for="(post, index) in posts"
                :key="post.id"
                class="bg-white dark:bg-gray-800 rounded-2xl shadow-sm hover:shadow-md dark:shadow-gray-900/20 dark:hover:shadow-gray-900/40 transition-all duration-300 overflow-hidden group animate-fade-in-6"
                :class="`animate-fade-in-${Math.min(6 + (index % 3), 8)}`"
              >
                <div class="p-6">
                  <div class="flex items-center text-sm text-gray-500 dark:text-gray-400 mb-3">
                    <time :datetime="post.date">{{ formatDate(post.date) }}</time>
                    <span class="mx-2">•</span>
                    <span>{{ post.author }}</span>
                  </div>

                  <h3
                    class="text-xl font-semibold text-gray-900 dark:text-white mb-3 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors"
                  >
                    {{ post.title }}
                  </h3>

                  <p class="text-gray-600 dark:text-gray-300 mb-4 line-clamp-2">
                    {{ post.excerpt }}
                  </p>

                  <div class="flex items-center justify-between">
                    <div class="flex flex-wrap gap-1">
                      <span
                        v-for="tag in post.tags.slice(0, 2)"
                        :key="tag"
                        class="inline-flex items-center px-2 py-1 rounded text-xs font-medium bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300"
                      >
                        {{ tag }}
                      </span>
                    </div>

                    <RouterLink
                      :to="`/blog/${post.id}`"
                      class="inline-flex items-center text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300 font-medium text-sm transition-colors group"
                    >
                      Read more
                      <svg
                        class="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M17 8l4 4m0 0l-4 4m4-4H3"
                        />
                      </svg>
                    </RouterLink>
                  </div>
                </div>
              </article>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { onMounted } from 'vue'
import { RouterLink } from 'vue-router'
import { useBlog } from '@/composables/useBlog'

const { posts, loading, error, getFeaturedPosts, fetchPosts, formatDate } = useBlog()

const featuredPosts = getFeaturedPosts()

onMounted(() => {
  fetchPosts()
})
</script>

<style scoped>
.line-clamp-2 {
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.line-clamp-3 {
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
</style>
