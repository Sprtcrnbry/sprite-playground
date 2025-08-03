import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '../views/HomePage.vue'
import AboutPage from '../views/AboutPage.vue'
import ContactPage from '../views/ContactPage.vue'
import { getPageTitle } from '@/config/site'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomePage,
    meta: {
      title: getPageTitle('Home'),
      transition: 'slide-fade',
    },
  },
  {
    path: '/about',
    name: 'About',
    component: AboutPage,
    meta: {
      title: getPageTitle('About'),
      transition: 'slide-up',
    },
  },
  {
    path: '/contact',
    name: 'Contact',
    component: ContactPage,
    meta: {
      title: getPageTitle('Contact'),
      transition: 'slide-down',
    },
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    }
    if (to.hash) {
      return {
        el: to.hash,
        behavior: 'smooth',
        top: 80,
      }
    }
    return {
      top: 0,
      behavior: 'smooth',
    }
  },
})

// Update page title on route change
router.afterEach((to) => {
  document.title = (to.meta.title as string) || getPageTitle()
})

export default router
