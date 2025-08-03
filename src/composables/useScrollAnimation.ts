import { ref, onMounted, onUnmounted } from 'vue'

export function useScrollAnimation(threshold: number = 0.1, hideOnScrollUp: boolean = true) {
  const isVisible = ref(false)
  const targetRef = ref<HTMLElement | null>(null)

  let observer: IntersectionObserver

  const initObserver = () => {
    if (!targetRef.value) return

    observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Element is coming into view
            isVisible.value = true
          } else if (hideOnScrollUp) {
            // Element is going out of view and hideOnScrollUp is enabled
            isVisible.value = false
          }
        })
      },
      {
        threshold,
        rootMargin: '50px 0px -50px 0px',
      },
    )

    observer.observe(targetRef.value)
  }

  onMounted(() => {
    initObserver()
  })

  onUnmounted(() => {
    if (observer && targetRef.value) {
      observer.unobserve(targetRef.value)
    }
  })

  return {
    isVisible,
    targetRef,
  }
}
