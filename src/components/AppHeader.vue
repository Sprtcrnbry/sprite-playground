<template>
  <header class="bg-white shadow-sm sticky top-0 z-50 transition-all duration-300">
    <nav class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex justify-between items-center h-16">
        <!-- Logo -->
        <div class="flex-shrink-0">
          <RouterLink
            to="/"
            class="text-2xl font-bold text-primary-600 transition-colors hover:text-primary-700"
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

            <!-- Always show Features button, but handle navigation differently -->
            <a
              href="#features"
              @click="handleFeaturesClick"
              class="text-gray-500 hover:text-primary-600 px-3 py-2 text-sm font-medium transition-colors relative group"
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

        <!-- CTA Button -->
        <div class="hidden md:block">
          <RouterLink to="/contact" class="btn-primary"> Get Started </RouterLink>
        </div>

        <!-- Mobile menu button -->
        <div class="md:hidden">
          <button
            @click="mobileMenuOpen = !mobileMenuOpen"
            class="text-gray-500 hover:text-gray-900 focus:outline-none focus:text-gray-900 p-2 transition-colors"
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
          <div class="px-2 pt-2 pb-3 space-y-1 sm:px-3 border-t border-gray-200 bg-white">
            <RouterLink
              to="/"
              class="block px-3 py-2 text-base font-medium rounded-lg transition-colors hover:bg-gray-50"
              @click="mobileMenuOpen = false"
            >
              Home
            </RouterLink>
            <!-- Features link for mobile -->
            <a
              href="#features"
              @click="handleFeaturesClick"
              class="block px-3 py-2 text-base font-medium rounded-lg transition-colors hover:bg-gray-50"
            >
              Features
            </a>
            <RouterLink
              to="/about"
              class="block px-3 py-2 text-base font-medium rounded-lg transition-colors hover:bg-gray-50"
              @click="mobileMenuOpen = false"
            >
              About
            </RouterLink>
            <RouterLink
              to="/contact"
              class="block px-3 py-2 text-base font-medium rounded-lg transition-colors hover:bg-gray-50"
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

const route = useRoute()
const router = useRouter()
const mobileMenuOpen = ref(false)

const getNavLinkClass = (routeName: string) => {
  return route.name === routeName
    ? 'text-gray-900 font-semibold'
    : 'text-gray-500 hover:text-primary-600'
}

// Handle Features navigation - go to home if not there, then scroll
const handleFeaturesClick = (event: Event) => {
  event.preventDefault()
  mobileMenuOpen.value = false

  // If we're not on the home page, navigate there first
  if (route.name !== 'Home') {
    router.push('/').then(() => {
      // Wait a bit for the page to load, then scroll
      setTimeout(() => {
        scrollToFeatures()
      }, 100)
    })
  } else {
    // If we're already on home page, just scroll
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
