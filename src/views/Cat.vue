
<template>
  <div>
    <prismic-edit-button :documentId="documentId"/>

    <div class= "cat__header">
        <div class="container">
          <div class = "row">
            <div class = "col-sm-4">
              <div class = "d-inline-block cat__profile-pic-container" v-for="(item, index) in fields.images" :key="'reference-item-' + index">

                  <div v-if="index == 0" class="cat__profile-pic" :style="{ backgroundImage: `url('${item.image.url}')` }"></div>
                  <prismic-image v-if="index !== 0" :field="item.image" class = "d-none"/>
              </div>
            </div>
          <div class = "col-sm-8 position-relative">
            <div class = "cat__header-right">
              <div class="cat__status">
                {{ fields.status }}
              </div>
              <h1 class="cat__name">
                {{ $prismic.richTextAsPlain(fields.name) }}
              </h1>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="container">
      <div class = "row">
        <div class = "col-sm-4">
          <div class = "stat__section">

            <div class = "row">
              <div class = "col-sm-6">
                <div class ="stat--large stat__gender" v-show="fields.gender">
                  <img src="../assets/img/detail/print.png" alt="Paw icon" class = "stat__icon">{{ fields.gender }}
                </div>
              </div>
              <div class = "col-sm-6">
                <div class ="stat--large stat__age" v-show="fields.birthDate">
                  <img src="../assets/img/detail/metrics.png" alt="Metrics icon" class = "stat__icon"><isolateMoment>{{ fields.birthDate | moment("from", true) }}</isolateMoment>
                </div>
              </div>
            </div>
            <div class = 'row'>
              <div class = "col-sm-12">
                <div class ="stat--large stat__breed" v-show="fields.colorBreed">
                  <img src="../assets/img/detail/award.png" alt="Award icon" class = "stat__icon">{{ $prismic.richTextAsPlain(fields.colorBreed) }}
                </div>
              </div>
            </div>
          </div>
          <div class = "stat__section">
            <h3 class = "stat__header">Health</h3>
            <div class = "row">
              <div class = "col-sm-4" v-show="fields.felv">
                <div class ="stat stat__felv">
                  {{ fields.felv }}

                  <div class = "stat__label">FELV+</div>
                </div>
              </div>
              <div class = "col-sm-4" v-show="fields.fiv">
                <div class ="stat stat__fiv">
                  {{ fields.fiv }}

                  <div class = "stat__label">FIV+</div>
                </div>
              </div>
              <div class = "col-sm-4" v-show="fields.specialNeeds">
                <div class ="stat stat__special">
                  {{ fields.specialNeeds }}

                  <div class = "stat__label">FELV+</div>
                </div>
              </div>
            </div>
            <div class = "row">
              <div class = "col-sm-4" v-show="fields.vaccinated">
                <div class ="stat stat__vaccinated">
                  {{ fields.vaccinated }}

                  <div class = "stat__label">Vaccinations</div>
                </div>
              </div>
              <div class = "col-sm-4" v-show="fields.vetted">
                <div class ="stat stat__vetted">
                  {{ fields.vetted }}

                  <div class = "stat__label">Vetted</div>
                </div>
              </div>
              <div class = "col-sm-4" v-show="fields.neutered">
                <div class ="stat stat__neutered">
                  {{ fields.neutered }}

                  <div class = "stat__label">Spay/Neuter</div>
                </div>
              </div>
            </div>
          </div>

          <div class = "stat__section">
            <h3 class = "stat__header">Behavior</h3>
            <div class = "stat__label stat__label--top">This cat is good with:</div>
            <div class = "row">
              <div class = "col-sm-4" v-show="fields.goodCats">
                <div class ="stat stat__goodCats">
                  <i v-bind:class ="fields.goodCats | behaviorFavicon"></i>

                  <span class = "stat__label stat__label--inline">Cats</span>
                </div>
              </div>
              <div class = "col-sm-4" v-show="fields.goodDogs">
                <div class ="stat stat__goodDogs">
                  <i v-bind:class ="fields.goodDogs | behaviorFavicon"></i>

                  <span class = "stat__label stat__label--inline">Dogs</span>
                </div>
              </div>
              <div class = "col-sm-4" v-show="fields.goodKids">
                <div class ="stat stat__goodKids">
                  <i v-bind:class ="fields.goodKids | behaviorFavicon"></i>

                  <span class = "stat__label stat__label--inline">Kids</span>
                </div>
              </div>
            </div>
          </div>

          <div class = "stat__section" v-show="fields.dateFound">
            <h3 class = "stat__header">Intake</h3>
            <div class = "row">
              <div class = "col-sm-12" v-show="fields.dateFound">
                <div class ="stat stat__dateFound">
                  {{ fields.dateFound | moment("MMMM DD, YYYY")}}

                  <div class = "stat__label">Intake Date</div>
                </div>
              </div>

            </div>
          </div>

        </div>
        <div class = "col-sm-8">
          <div class = "bio" v-if="fields.bio">
            <prismic-rich-text :field="fields.bio" class="bio__text"/>
          </div>

          <div class = "behavior" v-if="fields.behavior">
            <div class = "courier-header--dark-yellow text-center mt-5">Behavior Notes</div>
            <prismic-rich-text :field="fields.behavior" class="behavior__text"/>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Vue from 'vue';

function _isolateNumber(text) {
  var textArray = text.split(' ');
  return '<span>'+ textArray[0] +'</span> ' + textArray[1] + ' old';
}

Vue.component('isolateMoment', {
  render: function (h) {
    let html = _isolateNumber(this.$slots.default[0].text);
    return h('div',{domProps:{"innerHTML": html}})
  }
});

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
        goodCats: null,
        goodDogs: null,
        goodKids: null,
        vaccinated: null,
        vetted: null,
        neutered: null,
        behavior: null,
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
            this.fields.goodCats = document.data.good_with_cats_
            this.fields.goodDogs = document.data.good_with_dogs_
            this.fields.goodKids = document.data.good_with_kids
            this.fields.vaccinated = document.data.vaccinated
            this.fields.vetted = document.data.vetted
            this.fields.neutered = document.data.neutered
            this.fields.behavior = document.data.behavior
          } else {
            this.$router.push({ name: 'not-found' })
          }
        })
    }
  },
  filters: {
    behaviorFavicon: function(value){
      switch(value) {
        case 'Yes':
          return 'far fa-check-circle'
          break;
        case 'No':
          return 'far fa-times-circle'
          break;
        default:
          return 'far fa-question-circle'
      }
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
  .cat__header{
    background-image: url("../assets/img/black-bg.jpg");
    background-size: cover;
    color:white;
    position: relative;
    top:-60px;
  }

  .cat__header-right{
    display: inline-block;
    position: absolute;
    bottom:20px;
    left:0px;
  }

  .cat__name{
    font-size: 65px;
  }

  .cat__status{
    @include courier;
    color: $yellow;
    text-transform: uppercase;
    letter-spacing: 3px;
  }

  .cat__profile-pic{
    margin-top: 40px;
    margin-bottom: -70px;
    width:300px;
    height:300px;
    display: inline-block;
    border-radius: 300px;
    border:10px solid white;
    background-size: cover;
    background-position: center;
    box-shadow: 0px 2px 4px 1px rgba(0,0,0,0.23);
  }

  .stat__header{
    @include courier;
    color: $darkyellow;
    text-transform: uppercase;
    letter-spacing: 3px;
    font-size: 17px;
  }

  .stat{
    @include source-bold;
    font-size: 19px;
    margin: 7px 0 10px;
    i{
      color: $gray;
      position: relative;
      top: 2px;
    }
  }

  .stat--large{
    @include source-heavy;
    font-size: 30px;
    position: relative;
    margin-top: 8px;
  }

  .stat__age{
    @include source-reg;
    font-size: 18px;
    span{
      @include source-heavy;
      font-size: 30px;
    }
  }

  .stat__icon{
    position: absolute;
    left: -40px;
    top:7px;
  }

  .stat__label{
    color: $gray;
    font-size: 14px;
    @include source-reg;
  }

  .stat__label--inline{
    font-size: 18px;
    margin-left: 10px;
    color: $black;
    @include source-bold;
  }

  .stat__section{
    margin-top: 40px;
  }
</style>
