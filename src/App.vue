<template>
  <div class="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300">
    <AppHeader />

    <main>
      <PageTransition>
        <RouterView />
      </PageTransition>
    </main>

    <AppFooter />
  </div>
</template>

<script setup lang="ts">
import { RouterView } from 'vue-router'
import AppHeader from './components/AppHeader.vue'
import AppFooter from './components/AppFooter.vue'
import PageTransition from './components/PageTransition.vue'
</script>
