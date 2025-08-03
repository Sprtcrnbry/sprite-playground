<template>
  <div class="min-h-screen bg-gray-50">
    <!-- Hero Section -->
    <section class="bg-white py-20">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center">
          <h1 class="text-4xl md:text-5xl font-bold text-gray-900 mb-6 animate-fade-in-1">
            About <span class="text-primary-600">ModernSite</span>
          </h1>
          <p class="text-xl text-gray-600 max-w-3xl mx-auto animate-fade-in-2">
            We're passionate about building the future of web development, one innovative solution
            at a time.
          </p>
        </div>
      </div>
    </section>

    <!-- Content Section -->
    <section class="py-16">
      <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="prose prose-lg mx-auto">
          <h2 class="text-3xl font-bold text-gray-900 mb-8 animate-fade-in-3">Our Story</h2>
          <p class="text-gray-600 mb-6 animate-fade-in-4">
            Founded in 2024, ModernSite emerged from a simple belief: web development should be
            accessible, powerful, and enjoyable. Our team of experienced developers and designers
            came together to create tools that bridge the gap between complexity and usability.
          </p>
          <p class="text-gray-600 mb-6 animate-fade-in-5">
            We've helped over 50,000 developers and businesses create stunning websites using modern
            technologies like Vue.js, React, and cutting-edge CSS frameworks.
          </p>

          <h3 class="text-2xl font-semibold text-gray-900 mb-4 mt-12 animate-fade-in-6">
            Our Mission
          </h3>
          <p class="text-gray-600 mb-6 animate-fade-in-7">
            To democratize modern web development by providing intuitive tools, comprehensive
            documentation, and a supportive community that empowers creators at every skill level.
          </p>
        </div>
      </div>
    </section>

    <!-- Team Section -->
    <section class="py-16 bg-white">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-16">
          <h2 class="text-3xl font-bold text-gray-900 animate-fade-in-3">Meet Our Team</h2>
          <p class="mt-4 text-xl text-gray-600 animate-fade-in-4">
            The passionate people behind ModernSite
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div class="text-center animate-fade-in-5">
            <img
              :src="team[0].image"
              :alt="team[0].name"
              class="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
            />
            <h3 class="text-xl font-semibold text-gray-900">{{ team[0].name }}</h3>
            <p class="text-primary-600 font-medium">{{ team[0].role }}</p>
            <p class="mt-2 text-gray-600 text-sm">{{ team[0].bio }}</p>
          </div>

          <div class="text-center animate-fade-in-6">
            <img
              :src="team[1].image"
              :alt="team[1].name"
              class="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
            />
            <h3 class="text-xl font-semibold text-gray-900">{{ team[1].name }}</h3>
            <p class="text-primary-600 font-medium">{{ team[1].role }}</p>
            <p class="mt-2 text-gray-600 text-sm">{{ team[1].bio }}</p>
          </div>

          <div class="text-center animate-fade-in-7">
            <img
              :src="team[2].image"
              :alt="team[2].name"
              class="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
            />
            <h3 class="text-xl font-semibold text-gray-900">{{ team[2].name }}</h3>
            <p class="text-primary-600 font-medium">{{ team[2].role }}</p>
            <p class="mt-2 text-gray-600 text-sm">{{ team[2].bio }}</p>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

interface TeamMember {
  id: number
  name: string
  role: string
  bio: string
  image: string
}

const team = ref<TeamMember[]>([
  {
    id: 1,
    name: 'Togawa Sakiko',
    role: 'Founder & CEO',
    bio: 'Full-stack developer with 10+ years building scalable web applications.',
    image: '/images/togawasakiko.jpg',
  },
  {
    id: 2,
    name: 'Hoshimachi Suisei',
    role: 'Lead Designer',
    bio: 'UI/UX expert passionate about creating beautiful, accessible interfaces.',
    image: '/images/suisei1.jpg',
  },
  {
    id: 3,
    name: 'Amaori Renako',
    role: 'Developer Advocate',
    bio: 'Helping developers succeed through education and community building.',
    image: '/images/mukadongoanomalipink.jpg',
  },
])
</script>
