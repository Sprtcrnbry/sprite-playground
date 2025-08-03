<template>
  <div class="min-h-screen bg-white">
    <AppHeader />

    <!-- Router View - This is where page content changes -->
    <main>
      <RouterView />
    </main>

    <AppFooter />
  </div>
</template>

<script setup lang="ts">
import { RouterView } from 'vue-router'
import AppHeader from './components/AppHeader.vue'
import AppFooter from './components/AppFooter.vue'
</script>
