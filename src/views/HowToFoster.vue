<template>

  <div class="container">
    <h1>Foster</h1>

    <prismic-rich-text :field="fields.description" class="intro"/>
    <p class="intro">If you are interested in becoming a Little Wanderers foster parent, please fill out our online application below.</p>

    <div class = "text-center">
      <a href = "https://docs.google.com/forms/d/e/1FAIpQLSfglgaToBPXtODnhjP-nQo-XVU0tcFOZQ1IgaMbkoyofOyr5Q/viewform" target="_blank" class = "btn">Foster Applicaiton</a>
    </div>
    <p class="mt-4 text-center">To contact our foster manager, Olivia, please email <a href = "mailto:fosteringlwnyc@gmail.com">fosteringlwnyc@gmail.com</a>. </p>

    <div class = "my-5 mw-80">
      <router-link :to="{ name: 'howToFoster'}" class = "card--btn">
        <i class="fas fa-question-circle"></i>
        <div class = "card__title">What is a foster parent and how do I become one?</div>
      </router-link>
    </div>
  </div>

</template>

<script>

export default {
  name: 'HowToFoster',
  data () {
    return {
      fields: {
        description: null,
        foster_faqs: null,
      }
    }
  },
  methods: {
    getContent () {

      this.$prismic.client.getSingle('foster_page').then((response) => {

          console.log(response);
          if (response) {
            this.fields.description = response.data.description1
            this.fields.foster_faqs = response.data.foster_faqs
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

</style>
