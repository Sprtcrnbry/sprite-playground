import { ref, onMounted, onUnmounted, type Ref } from 'vue'

export function useScrollStagger(threshold = 0.1, rootMargin = '0px 0px -50px 0px') {
  const targetRef: Ref<HTMLElement | null> = ref(null)
  const isVisible = ref(false)
  const isScrollingUp = ref(false)

  let observer: IntersectionObserver | null = null
  let lastScrollY = 0
  let scrollDirection = 'down' // Track scroll direction separately

  const updateScrollDirection = () => {
    const currentScrollY = window.scrollY
    if (currentScrollY < lastScrollY) {
      scrollDirection = 'up'
      isScrollingUp.value = true
    } else if (currentScrollY > lastScrollY) {
      scrollDirection = 'down'
      isScrollingUp.value = false
    }
    // Don't update if scrollY is the same (no movement)
    lastScrollY = currentScrollY
  }

  const createObserver = () => {
    if (typeof window === 'undefined') return

    // Initialize scroll position
    lastScrollY = window.scrollY

    // Add scroll listener for direction detection
    window.addEventListener('scroll', updateScrollDirection, { passive: true })

    observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Use the scroll direction that was detected during scrolling
            isScrollingUp.value = scrollDirection === 'up'
            isVisible.value = true
          } else {
            isVisible.value = false
          }
        })
      },
      {
        threshold,
        rootMargin,
      },
    )

    if (targetRef.value) {
      observer.observe(targetRef.value)
    }
  }

  onMounted(() => {
    setTimeout(() => {
      createObserver()
    }, 100)
  })

  onUnmounted(() => {
    if (observer) {
      observer.disconnect()
    }
    if (typeof window !== 'undefined') {
      window.removeEventListener('scroll', updateScrollDirection)
    }
  })

  return {
    targetRef,
    isVisible,
    isScrollingUp,
  }
}
