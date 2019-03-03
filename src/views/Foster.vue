<template>

  <div class="container">
    <h1>Foster</h1>

    <prismic-rich-text :field="fields.description" class="intro"/>
    <p class="intro">If you are interested in becoming a Little Wanderers foster parent, please fill out our online application below.</p>

    <div class = "text-center">
      <a href = "https://docs.google.com/forms/d/e/1FAIpQLSfglgaToBPXtODnhjP-nQo-XVU0tcFOZQ1IgaMbkoyofOyr5Q/viewform" target="_blank" class = "btn">Foster Applicaiton</a>
    </div>
    <p class="mt-4 text-center">To contact our foster manager, Olivia, please email <a href = "mailto:fosteringlwnyc@gmail.com">fosteringlwnyc@gmail.com</a>. </p>

    <div class = "my-5 w-75 mx-auto">
      <div class = "row">
        <div class = "col-md-6">
          <router-link :to="{ name: 'howToFoster'}" class = "card card--btn">
            <i class="fas fa-question-circle"></i>
            <div class = "card__title">Foster Faqs</div>
            <div class = "card__subtitle">What is a foster parent and how do I become one?</div>
          </router-link>
        </div>
        <div class = "col-md-6">
          <router-link :to="{ name: 'howToFoster'}" class = "card card--btn">
            <i class="fas fa-book-open"></i>
            <div class = "card__title">Foster Handbook</div>
            <div class = "card__subtitle">Learn how to be the best foster you can be!</div>
          </router-link>
        </div>
      </div>
    </div>
  </div>

</template>

<script>

export default {
  name: 'Foster',
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
  .card{
    border: 1px solid $lightgray;
    padding: 30px 30px;
    text-align: center;
    color: $black;
    box-shadow: -3px 3px 0px 1px $lightgray;
    i{
      font-size: 36px;
      color: $blue;
      margin-bottom: 10px;
    }
    &:hover{
      text-decoration: none;
    }
  }

  .card--btn{
    &:hover{
      border: 1px solid $yellow;
      box-shadow: -3px 3px 0px 1px $yellow;
      color: $black;
    }
  }

  .card__title{
    @include source-bold;
    font-size: 19px;
    margin-bottom: 0;
    text-transform: uppercase;
  }

  .card__subtitle{
    font-size: 14px;
  }
</style>
