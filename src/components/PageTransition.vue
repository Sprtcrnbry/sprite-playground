<template>
  <Transition name="page-fade" mode="out-in" @enter="onEnter">
    <div :key="$route.fullPath" class="page-content">
      <slot />
    </div>
  </Transition>
</template>

<script setup lang="ts">
import { useRoute } from 'vue-router'

const $route = useRoute()

const onEnter = () => {
  window.scrollTo(0, 0)
}
</script>

<style scoped>
.page-fade-enter-active {
  transition: all 0.3s ease-out;
}

.page-fade-leave-active {
  transition: all 0.2s ease-in;
}

.page-fade-enter-from {
  opacity: 0;
  transform: translateY(20px);
}

.page-fade-leave-to {
  opacity: 0;
}
</style>
