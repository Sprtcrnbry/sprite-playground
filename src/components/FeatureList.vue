<template>
  <section id="features" class="py-20 bg-gray-50 dark:bg-gray-800 transition-colors duration-300">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="text-center">
        <h2 class="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white animate-fade-in-1">
          Everything You Need
        </h2>
        <p
          class="mt-4 text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto animate-fade-in-2"
        >
          Powerful features designed to help you build better websites faster
        </p>
      </div>

      <div class="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div
          v-for="feature in features"
          :key="feature.id"
          class="bg-white dark:bg-gray-900 rounded-2xl shadow-sm hover:shadow-md dark:shadow-gray-900/20 dark:hover:shadow-gray-900/40 transition-shadow duration-300 overflow-hidden animate-fade-in-3"
        >
          <!-- Image Section -->
          <div
            class="h-48 bg-gradient-to-br from-primary-100 to-primary-200 dark:from-primary-900/30 dark:to-primary-800/30 relative overflow-hidden"
          >
            <img :src="feature.image" :alt="feature.title" class="w-full h-full object-cover" />
            <!-- Direct SVG icons based on type -->
            <div
              class="absolute bottom-4 left-4 w-12 h-12 bg-white/90 dark:bg-gray-800/90 rounded-lg flex items-center justify-center backdrop-blur-sm"
            >
              <!-- Rocket Icon -->
              <svg
                v-if="feature.iconType === 'rocket'"
                class="w-6 h-6 text-primary-600"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M13 10V3L4 14h7v7l9-11h-7z"
                />
              </svg>
              <!-- Shield Icon -->
              <svg
                v-else-if="feature.iconType === 'shield'"
                class="w-6 h-6 text-primary-600"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                />
              </svg>
              <!-- Cog Icon -->
              <svg
                v-else-if="feature.iconType === 'cog'"
                class="w-6 h-6 text-primary-600"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
                />
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                />
              </svg>
            </div>
          </div>

          <!-- Content Section -->
          <div class="p-6">
            <h3 class="text-xl font-semibold text-gray-900 dark:text-white mb-3">
              {{ feature.title }}
            </h3>
            <p class="text-gray-600 dark:text-gray-300 leading-relaxed">
              {{ feature.description }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref } from 'vue'

interface Feature {
  id: number
  title: string
  description: string
  iconType: string // Changed from 'icon' to 'iconType'
  image: string
}

const features = ref<Feature[]>([
  {
    id: 1,
    title: 'Lightning Fast',
    description:
      'Built with Vite for incredibly fast development and build times. Hot module replacement keeps you productive.',
    iconType: 'rocket',
    image:
      'https://images.unsplash.com/photo-1558655146-d09347e92766?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
  },
  {
    id: 2,
    title: 'Secure by Default',
    description:
      'Modern security practices built-in. Your applications are protected from common vulnerabilities.',
    iconType: 'shield',
    image:
      'https://images.unsplash.com/photo-1563013544-824ae1b704d3?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
  },
  {
    id: 3,
    title: 'Highly Customizable',
    description:
      'Tailwind CSS provides unlimited customization options while maintaining consistency and performance.',
    iconType: 'cog',
    image:
      'https://images.unsplash.com/photo-1517077304055-6e89abbf09b0?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
  },
])
</script>
