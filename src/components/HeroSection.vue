<template>
  <!-- Use min-h-0 and let content determine height -->
  <section
    id="home"
    class="relative bg-gradient-to-br from-rose-50 via-white to-amber-50 pt-20 sm:pt-16 md:pt-20 lg:pt-24 pb-8 sm:pb-12 md:pb-16 lg:pb-20"
  >
    <!-- Decorative background elements -->
    <div class="absolute inset-0 overflow-hidden">
      <div
        class="absolute -top-40 -right-32 w-80 h-80 bg-rose-200/30 rounded-full mix-blend-multiply filter blur-xl animate-blob"
      ></div>
      <div
        class="absolute -bottom-32 -left-40 w-72 h-72 bg-amber-200/30 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-2000"
      ></div>
      <div
        class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-blue-200/20 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-4000"
      ></div>
    </div>

    <!-- Much more compact content -->
    <div class="relative w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="lg:grid lg:grid-cols-12 lg:gap-12 items-center">
        <!-- Left Content - Significantly reduced spacing -->
        <div class="lg:col-span-6 lg:pr-6">
          <!-- Personal greeting -->
          <div
            class="inline-flex items-center bg-rose-100 text-rose-800 px-3 py-1.5 rounded-full text-sm font-medium mb-3 animate-fade-in"
          >
            <svg class="w-4 h-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M14.828 14.828a4 4 0 01-5.656 0M9 10h1m4 0h1M9 16v-4a2 2 0 012-2h2a2 2 0 012 2v4M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
              />
            </svg>
            👋 Welcome to my corner of the web
          </div>

          <!-- Compact heading -->
          <h1
            class="text-3xl sm:text-4xl md:text-5xl lg:text-5xl font-bold text-gray-900 leading-tight animate-slide-up"
          >
            Hi, I'm building
            <span
              class="bg-gradient-to-r from-rose-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent"
            >
              amazing experiences
            </span>
            with modern web tech
          </h1>

          <!-- Shorter description -->
          <p class="mt-3 text-base sm:text-lg text-gray-600 leading-relaxed animate-slide-up-delay">
            I'm passionate about creating beautiful, functional websites that make a real
            difference. Let me share my journey in web development.
          </p>

          <!-- Compact buttons -->
          <div class="mt-4 flex flex-col sm:flex-row gap-3 animate-slide-up-delay-2">
            <RouterLink to="/about" class="btn-primary group">
              <span>Learn About Me</span>
              <svg
                class="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform"
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
            <a href="#features" @click="scrollToFeatures" class="btn-secondary group">
              <span>See My Work</span>
              <svg
                class="w-4 h-4 ml-2 group-hover:translate-y-1 transition-transform"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M19 14l-7 7m0 0l-7-7m7 7V3"
                />
              </svg>
            </a>
          </div>

          <!-- Compact stats -->
          <div class="mt-6 grid grid-cols-3 gap-4 animate-fade-in-up">
            <div class="text-center group">
              <div
                class="text-xl sm:text-2xl font-bold text-gray-900 group-hover:text-rose-600 transition-colors"
              >
                3+
              </div>
              <div class="text-xs text-gray-600 mt-0.5">Years Learning</div>
            </div>
            <div class="text-center group">
              <div
                class="text-xl sm:text-2xl font-bold text-gray-900 group-hover:text-purple-600 transition-colors"
              >
                15+
              </div>
              <div class="text-xs text-gray-600 mt-0.5">Projects Built</div>
            </div>
            <div class="text-center group">
              <div
                class="text-xl sm:text-2xl font-bold text-gray-900 group-hover:text-indigo-600 transition-colors"
              >
                ∞
              </div>
              <div class="text-xs text-gray-600 mt-0.5">Coffee Cups</div>
            </div>
          </div>

          <!-- Current status -->
          <div class="mt-4 flex items-center text-sm animate-pulse-status">
            <div class="flex items-center">
              <div class="w-3 h-3 bg-green-500 rounded-full animate-pulse mr-3"></div>
              <span class="text-gray-600">Currently available for new projects</span>
            </div>
          </div>
        </div>

        <!-- Right Content - Much smaller -->
        <div class="mt-6 lg:mt-0 lg:col-span-6">
          <div class="relative animate-float">
            <div class="relative max-w-xs sm:max-w-sm mx-auto">
              <!-- Tiny decorative circles -->
              <div
                class="absolute -top-2 -left-2 w-8 h-8 sm:w-12 sm:h-12 bg-rose-300/20 rounded-full animate-pulse-slow"
              ></div>
              <div
                class="absolute -bottom-2 -right-2 w-10 h-10 sm:w-16 sm:h-16 bg-amber-300/20 rounded-full animate-pulse-slow animation-delay-1000"
              ></div>
              <div
                class="absolute top-1/2 -right-4 w-6 h-6 sm:w-10 sm:h-10 bg-purple-300/20 rounded-full animate-pulse-slow animation-delay-2000"
              ></div>

              <!-- Very compact card -->
              <div
                class="relative bg-white/70 backdrop-blur-sm p-4 sm:p-5 rounded-3xl shadow-2xl border border-white/50 hover:shadow-3xl transition-shadow duration-500"
              >
                <!-- Small profile section -->
                <div class="mb-3 text-center">
                  <div
                    class="w-16 h-16 sm:w-20 sm:h-20 mx-auto bg-gradient-to-br from-rose-400 via-purple-500 to-indigo-600 rounded-full p-1 hover:scale-105 transition-transform duration-300"
                  >
                    <div
                      class="w-full h-full bg-white rounded-full flex items-center justify-center"
                    >
                      <img
                        src="/images/mukadongoanomalipink.jpg"
                        alt="Developer Profile"
                        class="w-12 h-12 sm:w-16 sm:h-16 rounded-full object-cover"
                      />
                    </div>
                  </div>
                  <div class="mt-2">
                    <h3 class="text-sm sm:text-base font-semibold text-gray-900">Sprite Night</h3>
                    <p class="text-rose-600 font-medium text-xs sm:text-sm">Web Developer</p>
                  </div>
                </div>

                <!-- Mini tech stack -->
                <div class="space-y-2">
                  <div class="text-center">
                    <p class="text-xs font-medium text-gray-700 mb-2">Currently working with:</p>
                  </div>

                  <div class="flex flex-wrap gap-1 justify-center">
                    <span
                      class="inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800"
                    >
                      Vue.js
                    </span>
                    <span
                      class="inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium bg-cyan-100 text-cyan-800"
                    >
                      TypeScript
                    </span>
                    <span
                      class="inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium bg-emerald-100 text-emerald-800"
                    >
                      Tailwind
                    </span>
                  </div>

                  <!-- Mini quote -->
                  <div
                    class="mt-2 p-2 bg-gradient-to-r from-rose-50 to-amber-50 rounded-xl border-l-3 border-rose-300"
                  >
                    <p class="text-xs italic text-gray-700 text-center">
                      "Building the web, one component at a time ✨"
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { RouterLink } from 'vue-router'

const scrollToFeatures = (event: Event) => {
  event.preventDefault()
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
