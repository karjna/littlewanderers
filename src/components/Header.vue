<template>
  <header class="header" v-bind:class="[isHome ? 'home' : 'interior']">
    <NavModal/>
    <router-link to="/" class = "header__logo" v-if="!isHome">
      <img src="../assets/img/interior.png" alt="Little Wanderers logo">
    </router-link>
    <div class = "float-right">
      <router-link to="donate" class="header__link">Donate</router-link>
      <router-link  :to="{ name: 'cats'}" class="header__btn btn">Adopt</router-link>
    </div>
  </header>
</template>

<script>
import NavModal from './NavModal.vue';

export default {
  name: 'Header',
  computed: {
    isHome: function () {
        return this.$route.name == 'home'
    }
  },
  components: {
    NavModal
  }
}
</script>

<style lang="scss">
  .header{
    padding: 20px 40px;
    position: relative;
    z-index: 2;
  }

  .header.home{
    position: absolute;
    width: 100%;
  }

  .header.interior{
    border-bottom: 1px solid $lightgray;
    padding: 40px 40px 10px;
    margin-bottom: 60px;
  }

  .header__link{
    @include courier;
    margin-right: 25px;
  }

  .header__logo{
    display: inline-block;
    margin: 0 auto;
    width:250px;
    position: absolute;
    top: 0px;
    left: 0;
    right: 0;
    img{
      width: 100%;
    }
  }
</style>
