
<template>

  <div class="container">
    <h1>Adopt</h1>
    <div class="row">
     <div class="col-sm-4" v-for="(item, index) in cats" :key="'cat-' + index">
       <prismic-image class="img-fluid cats__profile-pic" :field="item.data.images[0].image"/>
       <prismic-link :field="'/adopt/'+ item.slugs[0]" class = "cats__name">
         {{ item.data.name[0].text }}
       </prismic-link>
       <div class = "cats__details" v-show="item.data.gender">
         <span v-show="item.data.gender">{{ item.data.gender }}</span><span v-show="item.data.birth_date">&nbsp;&bull;&nbsp;{{ item.data.birth_date | moment("from", true) }} old</span>
       </div>
     </div>
   </div>
  </div>

</template>

<style>
</style>

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
