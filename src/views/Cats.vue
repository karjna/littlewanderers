
<template>

  <div class="container">
    <h1>Adopt</h1>
    <div class="row">
     <div class="col-sm-4" v-for="(item, index) in cats" :key="'cat-' + index">
       <div class = "cats__profile">
         <router-link :to="'/adopt/'+ item.slugs[0]" class="cats__profile-pic" :style="{ backgroundImage: `url('${item.data.images[0].image.url}')` }"></router-link>
         <router-link :to="'/adopt/'+ item.slugs[0]" class = "cats__name">
           {{ item.data.name[0].text }}
         </router-link>
         <div class = "cats__details" v-show="item.data.gender">
           <span v-show="item.data.gender">{{ item.data.gender }}</span><span v-show="item.data.birth_date">&nbsp;&bull;&nbsp;{{ item.data.birth_date | moment("from", true) }} old</span>
         </div>
       </div>
     </div>
   </div>
  </div>

</template>



<script>

export default {
  name: 'Cats',
  data () {
    return {
      cats: null
    }
  },
  methods: {
    getContent () {

      this.$prismic.client.query(
        this.$prismic.Predicates.at('document.type', 'cats')).then((response) => {
          console.log(response);
          if (response) {
            this.cats = response.results
          } else {
            this.$router.push({ name: 'not-found' })
          }

      })
    }
  },
  created () {
    this.getContent()
  },
  beforeRouteUpdate (to, from, next) {
    this.getContent()
    next()
  }
}
</script>


<style lang="scss">
  .cats__profile{
    text-align: center;
    margin: 30px 0 40px;
  }

  .cats__profile-pic{
    margin: 0 auto;
    width:300px;
    height:300px;
    display: block;
    border-radius: 300px;
    border:10px solid white;
    background-size: cover;
    background-position: center;
    box-shadow: 0px 2px 4px 1px rgba(0,0,0,0.23);
  }

  .cats__name{
    color: $black;
    @include source-heavy
    font-size: 28px;
    margin: 20px 0 0;
    display: block;
  }

  .cats__details{
    color: $gray;
    letter-spacing: 2.5px;
    @include source-light;
  }

</style>
