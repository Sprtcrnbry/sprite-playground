<template>
  <section ref="targetRef" class="py-20 bg-gray-50 dark:bg-gray-800 transition-colors duration-300">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="text-center mb-16">
        <h2
          class="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4 transition-all duration-800"
          :class="isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'"
          :style="{ transitionDelay: isVisible ? '100ms' : '600ms' }"
        >
          Latest from Our Blog
        </h2>
        <p
          class="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto transition-all duration-800"
          :class="isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'"
          :style="{ transitionDelay: isVisible ? '200ms' : '500ms' }"
        >
          Stay updated with our latest insights, tutorials, and thoughts on modern web development
        </p>
      </div>

      <div v-if="loading" class="text-center">
        <div
          class="animate-spin rounded-full h-12 w-12 border-b-2 border-primary-600 mx-auto"
        ></div>
        <p class="mt-4 text-gray-600 dark:text-gray-400">Loading latest posts...</p>
      </div>

      <div v-else-if="error" class="text-center text-red-600 dark:text-red-400">
        <p>{{ error }}</p>
      </div>

      <div v-else class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
        <article
          v-for="(post, index) in latestPosts"
          :key="post.id"
          class="bg-white dark:bg-gray-900 rounded-2xl shadow-sm hover:shadow-md dark:shadow-gray-900/20 dark:hover:shadow-gray-900/40 transition-all duration-300 overflow-hidden group"
          :class="[
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8',
            'transition-all duration-800',
          ]"
          :style="{
            transitionDelay: isVisible
              ? `${300 + index * 150}ms` // Normal order: 0, 1, 2 (300ms, 450ms, 600ms)
              : `${300 + (latestPosts.length - 1 - index) * 150}ms`, // Reverse order: 2, 1, 0 (600ms, 450ms, 300ms)
          }"
        >
          <!-- Featured badge -->
          <div v-if="post.featured" class="px-6 pt-6">
            <span
              class="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-primary-100 dark:bg-primary-900/30 text-primary-800 dark:text-primary-300"
            >
              <svg class="w-3 h-3 mr-1" fill="currentColor" viewBox="0 0 20 20">
                <path
                  d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                />
              </svg>
              Featured
            </span>
          </div>

          <div class="p-6" :class="{ 'pt-4': post.featured }">
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

            <p class="text-gray-600 dark:text-gray-300 mb-4 line-clamp-3">
              {{ post.excerpt }}
            </p>

            <div class="flex items-center justify-between">
              <div class="flex flex-wrap gap-2">
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

      <div
        class="text-center transition-all duration-800"
        :class="isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'"
        :style="{ transitionDelay: isVisible ? '700ms' : '100ms' }"
      >
        <RouterLink to="/blog" class="inline-flex items-center btn-primary">
          View All Posts
          <svg class="w-4 h-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
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
  </section>
</template>

<script setup lang="ts">
import { onMounted } from 'vue'
import { RouterLink } from 'vue-router'
import { useBlog } from '@/composables/useBlog'
import { useScrollAnimation } from '@/composables/useScrollAnimation'

// Use scroll animation with hide-on-scroll-up enabled
const { isVisible, targetRef } = useScrollAnimation(0.1, true)

const { loading, error, getLatestPosts, fetchPosts, formatDate } = useBlog()

const latestPosts = getLatestPosts(3)

onMounted(() => {
  fetchPosts()
})
</script>

<style scoped>
.line-clamp-3 {
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
</style>
