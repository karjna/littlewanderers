import Vue from 'vue'
import Router from 'vue-router'
import NotFound from './views/NotFound.vue'
import Preview from './views/Preview.vue'
import Home from './views/Home.vue'
import Cat from './views/Cat.vue'
import Cats from './views/Cats.vue'
import About from './views/About.vue'
import Donate from './views/Donate.vue'
import Contact from './views/Contact.vue'
import Events from './views/Events.vue'
import Foster from './views/Foster.vue'
import HowToFoster from './views/HowToFoster.vue'
import Resources from './views/Resources.vue'
import Tails from './views/Tails.vue'
import Volunteer from './views/Volunteer.vue'


Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/adopt',
      name: 'cats',
      component: Cats
    },
    {
      path: '/adopt/:uid',
      name: 'cat',
      component: Cat
    },
    {
      path: '/not-found',
      name: 'not-found',
      component: NotFound
    },
    {
      path: '/about',
      name: 'about',
      component: About
    },
    {
      path: '/donate',
      name: 'donate',
      component: Donate
    },
    {
      path: '/contact',
      name: 'contact',
      component: Contact
    },
    {
      path: '/adoption-events',
      name: 'events',
      component: Events
    },
    {
      path: '/foster',
      name: 'foster',
      component: Foster
    },
    {
      path: '/foster/faqs',
      name: 'howToFoster',
      component: HowToFoster
    },
    {
      path: '/rescue-resources',
      name: 'resources',
      component: Resources
    },
    {
      path: '/happy-tails',
      name: 'tails',
      component: Tails
    },
    {
      path: '/volunteer',
      name: 'volunteer',
      component: Volunteer
    },
    {
      path: '*',
      redirect: { name: 'not-found' }
    }
  ]
})
