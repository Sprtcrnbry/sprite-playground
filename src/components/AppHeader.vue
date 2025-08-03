<template>
  <header class="bg-white dark:bg-gray-900 shadow-sm sticky top-0 z-50 transition-all duration-300">
    <nav class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex justify-between items-center h-16">
        <!-- Logo with black color -->
        <div class="flex-shrink-0">
          <RouterLink
            to="/"
            class="text-2xl font-bold text-black dark:text-white transition-colors hover:text-gray-700 dark:hover:text-gray-300"
          >
            {{ siteConfig.name }}
          </RouterLink>
        </div>

        <!-- Desktop Navigation -->
        <div class="hidden md:block">
          <div class="ml-10 flex items-baseline space-x-8">
            <RouterLink
              to="/"
              class="px-3 py-2 text-sm font-medium transition-colors duration-200 relative group"
              :class="getNavLinkClass('Home')"
            >
              Home
              <span
                class="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-rose-500 to-purple-500 group-hover:w-full transition-all duration-300"
              ></span>
            </RouterLink>

            <a
              href="#features"
              @click="handleFeaturesClick"
              class="text-gray-500 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 px-3 py-2 text-sm font-medium transition-colors relative group"
            >
              Features
              <span
                class="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-rose-500 to-purple-500 group-hover:w-full transition-all duration-300"
              ></span>
            </a>

            <RouterLink
              to="/about"
              class="px-3 py-2 text-sm font-medium transition-colors duration-200 relative group"
              :class="getNavLinkClass('About')"
            >
              About
              <span
                class="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-rose-500 to-purple-500 group-hover:w-full transition-all duration-300"
              ></span>
            </RouterLink>

            <RouterLink
              to="/contact"
              class="px-3 py-2 text-sm font-medium transition-colors duration-200 relative group"
              :class="getNavLinkClass('Contact')"
            >
              Contact
              <span
                class="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-rose-500 to-purple-500 group-hover:w-full transition-all duration-300"
              ></span>
            </RouterLink>
          </div>
        </div>

        <!-- Dark mode toggle and CTA -->
        <div class="hidden md:flex items-center space-x-4">
          <!-- Dark Mode Toggle -->
          <button
            @click="toggleDarkMode"
            class="p-2 rounded-lg bg-gray-100 dark:bg-gray-800 text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
            :title="isDark ? 'Switch to light mode' : 'Switch to dark mode'"
          >
            <!-- Sun icon for light mode -->
            <svg
              v-if="isDark"
              class="w-5 h-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
              />
            </svg>
            <!-- Moon icon for dark mode -->
            <svg v-else class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
              />
            </svg>
          </button>

          <RouterLink to="/contact" class="btn-primary"> Get Started </RouterLink>
        </div>

        <!-- Mobile menu button -->
        <div class="md:hidden flex items-center space-x-2">
          <!-- Mobile dark mode toggle -->
          <button
            @click="toggleDarkMode"
            class="p-2 rounded-lg bg-gray-100 dark:bg-gray-800 text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
          >
            <svg
              v-if="isDark"
              class="w-4 h-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
              />
            </svg>
            <svg v-else class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
              />
            </svg>
          </button>

          <button
            @click="mobileMenuOpen = !mobileMenuOpen"
            class="text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white focus:outline-none p-2 transition-colors"
          >
            <svg
              class="h-6 w-6 transition-transform duration-200"
              :class="{ 'rotate-90': mobileMenuOpen }"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                v-if="!mobileMenuOpen"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
              <path
                v-else
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
      </div>

      <!-- Mobile Navigation -->
      <Transition
        enter-active-class="transition-all duration-300 ease-out"
        enter-from-class="opacity-0 transform -translate-y-4"
        enter-to-class="opacity-100 transform translate-y-0"
        leave-active-class="transition-all duration-200 ease-in"
        leave-from-class="opacity-100 transform translate-y-0"
        leave-to-class="opacity-0 transform -translate-y-4"
      >
        <div v-show="mobileMenuOpen" class="md:hidden">
          <div
            class="px-2 pt-2 pb-3 space-y-1 sm:px-3 border-t border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900"
          >
            <RouterLink
              to="/"
              class="block px-3 py-2 text-base font-medium rounded-lg transition-colors hover:bg-gray-50 dark:hover:bg-gray-800 text-gray-900 dark:text-white"
              @click="mobileMenuOpen = false"
            >
              Home
            </RouterLink>
            <a
              href="#features"
              @click="handleFeaturesClick"
              class="block px-3 py-2 text-base font-medium rounded-lg transition-colors hover:bg-gray-50 dark:hover:bg-gray-800 text-gray-900 dark:text-white"
            >
              Features
            </a>
            <RouterLink
              to="/about"
              class="block px-3 py-2 text-base font-medium rounded-lg transition-colors hover:bg-gray-50 dark:hover:bg-gray-800 text-gray-900 dark:text-white"
              @click="mobileMenuOpen = false"
            >
              About
            </RouterLink>
            <RouterLink
              to="/contact"
              class="block px-3 py-2 text-base font-medium rounded-lg transition-colors hover:bg-gray-50 dark:hover:bg-gray-800 text-gray-900 dark:text-white"
              @click="mobileMenuOpen = false"
            >
              Contact
            </RouterLink>
            <RouterLink
              to="/contact"
              class="btn-primary w-full mt-4"
              @click="mobileMenuOpen = false"
            >
              Get Started
            </RouterLink>
          </div>
        </div>
      </Transition>
    </nav>
  </header>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { RouterLink, useRoute, useRouter } from 'vue-router'
import { siteConfig } from '@/config/site'
import { useDarkMode } from '@/composables/useDarkMode'

const route = useRoute()
const router = useRouter()
const mobileMenuOpen = ref(false)

// Dark mode composable
const { isDark, toggleDarkMode } = useDarkMode()

const getNavLinkClass = (routeName: string) => {
  return route.name === routeName
    ? 'text-gray-900 dark:text-white font-semibold'
    : 'text-gray-500 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400'
}

const handleFeaturesClick = (event: Event) => {
  event.preventDefault()
  mobileMenuOpen.value = false

  if (route.name !== 'Home') {
    router.push('/').then(() => {
      setTimeout(() => {
        scrollToFeatures()
      }, 100)
    })
  } else {
    scrollToFeatures()
  }
}

const scrollToFeatures = () => {
  const featuresSection = document.querySelector('#features')

  if (featuresSection) {
    const headerOffset = 80
    const elementPosition = featuresSection.getBoundingClientRect().top
    const offsetPosition = elementPosition + window.pageYOffset - headerOffset

    window.scrollTo({
      top: offsetPosition,
      behavior: 'smooth',
    })
  }
}
</script>
