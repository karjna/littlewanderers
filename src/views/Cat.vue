
<template>
  <div class="container">
    <prismic-edit-button :documentId="documentId"/>
    <div v-for="(item, index) in fields.images" :key="'reference-item-' + index">

          <div>
            <prismic-image :field="item.image"/>
          </div>

    </div>

    <h1 class="cat__name">
      {{ $prismic.richTextAsPlain(fields.name) }}
    </h1>
    <ul>
      <li class="cat__status">
        {{ fields.status }}
      </li>
      <li class ="cat__gender" v-show="fields.gender">
        {{ fields.gender }}
      </li>
      <li class ="cat__age" v-show="fields.birthDate">
        {{ fields.birthDate }}
      </li>
      <li class ="cat__breed" v-show="fields.colorBreed.text">
        {{ fields.colorBreed.text }}
      </li>
      <li class ="cat__felv" v-show="fields.felv">
        {{ fields.felv }}
      </li>
      <li class ="cat__fiv" v-show="fields.fiv">
        {{ fields.fiv }}
      </li>
      <li class ="cat__special" v-show="fields.specialNeeds">
        {{ fields.specialNeeds }}
      </li>
    </ul>

    <prismic-rich-text :field="fields.bio" class="description"/>

  </div>
</template>

<script>
export default {
  name: 'Cat',
  data () {
    return {
      documentId: '',
      fields: {
        bio: null,
        birthDate: null,
        colorBreed:null,
        dateFound: null,
        felv: null,
        fiv: null,
        gender: null,
        images:null,
        instagrams: null,
        locationFound: null,
        name: null,
        uid: null,
        specialNeeds: null,
        status: null,
      }
    }
  },
  methods: {
    getContent (uid) {
      this.$prismic.client.getByUID('cats', uid)
        .then((document) => {
          console.log(document);
          if (document) {
            this.documentId = document.id
            this.fields.bio = document.data.bio
            this.fields.birthDate = document.data.birth_date
            this.fields.colorBreed = document.data.color_breed
            this.fields.dateFound = document.data.date_found
            this.fields.felv = document.data.felv
            this.fields.fiv = document.data.fiv
            this.fields.gender = document.data.gender
            this.fields.instagrams = document.data.instagrams
            this.fields.locationFound = document.data.location_found
            this.fields.name = document.data.name
            this.fields.specialNeeds = document.data.special_needs
            this.fields.status = document.data.status
            this.fields.images = document.data.images
          } else {
            this.$router.push({ name: 'not-found' })
          }
        })
    }
  },
  created () {
    this.getContent(this.$route.params.uid)
  },
  beforeRouteUpdate (to, from, next) {
    this.getContent(to.params.uid)
    next()
  }
}
</script>

<style lang="scss">

  .wrapper {
    background: pink;
  }
</style>
