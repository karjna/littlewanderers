<template>
  <div id="app">
    <Header />
    <router-view/>
    <Footer/>
  </div>
</template>

<script>
import Footer from './components/Footer.vue'
import Header from './components/Header.vue'


export default {
  name: 'App',
  components: {
    Footer,
    Header
  }

}
</script>

<style>
@import "./assets/css/resetr.css";
@import "./assets/css/prismic-edit-button.css";
</style>
