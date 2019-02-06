<template>
  <div>
    <div class = "hero">
      <img src="../assets/img/logo.png" alt="Little Wanderers logo" class = "hero__logo">
    </div>
    <div class = "container">
      <div class = "row">
        <div class = "col-sm-4">
          <div class = "about-section text-center">
            <img src="../assets/img/home/grass.png" alt="Grass icon" class = "about-section__icon">
            <h4 class = "about-section__header">501c3 GRASSROOTS ORGANIZATION</h4>
            <p class = "about-section__subtitle">We are a non profit solely run with the help of volunteers</p>
          </div>
        </div>
        <div class = "col-sm-4">
          <div class = "about-section text-center">
            <img src="../assets/img/home/manhattan.png" alt="New York icon" class = "about-section__icon">
            <h4 class = "about-section__header">TOUGHEST NEW YORK NEIGHBORHOODS</h4>
            <p class = "about-section__subtitle">We rescue the neediest kittens and cats in New York City</p>
          </div>
        </div>
        <div class = "col-sm-4">
          <div class = "about-section text-center">
            <img src="../assets/img/home/heart.png" alt="Heart icon" class = "about-section__icon about-section__icon--heart ">
            <h4 class = "about-section__header">CARE FROM FOSTER FAMILIES</h4>
            <p class = "about-section__subtitle">We do not have a physical shelter &amp; rely on fosters to care for our cats!</p>
          </div>
        </div>
      </div>
      <div class = "row ">
        <router-link :to="{ name: 'cats'}" class = "btn mx-auto">Learn More</router-link>
      </div>
    </div>

    <div class = "adopt-section">
      <h2 class = "adopt-section__header">Find Your <span>Wanderer</span></h2>
      <div class = "crosswalk">
        <span class = "crosswalk__link crosswalk__link--blank"></span>
        <router-link class="crosswalk__link" :to="{ name: 'cats'}"><span>All Cats</span></router-link>
        <router-link class="crosswalk__link" :to="{ name: 'cats', query: { q: 'kitten' }}"><span>Kittens</span></router-link>
        <router-link class="crosswalk__link" :to="{ name: 'cats', query: { q: 'adult' }}"><span>Adult Cats</span></router-link>
        <router-link class="crosswalk__link" :to="{ name: 'cats', query: { q: 'senior' }}"><span>Senior Cats</span></router-link>
        <router-link class="crosswalk__link" :to="{ name: 'cats', query: { q: 'bonded' }}"><span>Bonded Pairs</span></router-link>
        <router-link class="crosswalk__link" :to="{ name: 'cats', query: { q: 'perfect' }}"><span>Perfectly Imperfect</span></router-link>
        <router-link class="crosswalk__link" :to="{ name: 'cats', query: { q: 'felv' }}"><span>FELV+ / FIV+</span></router-link>
        <router-link class="crosswalk__link" :to="{ name: 'cats', query: { q: 'special' }}"><span>Special Needs</span></router-link>
        <span class = "crosswalk__link crosswalk__link--blank"></span>
      </div>
      <div class = "adopt-section__subtitle">
        Please <router-link :to="{ name: 'contact'}">contact us</router-link> if you need help
        finding the right cat for you. If you are interested
        in <b>fostering</b>, please fill out an application <router-link :to="{ name: 'foster'}">here</router-link>.
      </div>
    </div>

    <div class = "donate-section">
      <div class = 'container'>
        <h2 class="courier donate-section__header">Donate</h2>
        <p class = "donate-section__subtitle">Please consider donating to Little Wanderers NYC. We rely on donations for
  the vetenary costs of our wonderful rescues. We also feed hundreds of feral cats across New York City.
  We appreciate all of the support!</p>
        <div class = "donate-section__buttons">
          <a href = "" target="_blank" class = "donate-btn">
            <img src="../assets/img/home/donate/venmo.png" alt="Venmo" class = "donate-btn--image">
          </a>
          <a href = "" target="_blank" class = "donate-btn">
            <img src="../assets/img/home/donate/patreon.png" alt="patreon" class = "donate-btn--image">
          </a>
          <a href = "" target="_blank" class = "donate-btn">
            <img src="../assets/img/home/donate/paypal.png" alt="PayPal" class = "donate-btn--image">
          </a>
          <a href = "" target="_blank" class = "donate-btn">
            <img src="../assets/img/home/donate/gofundme.png" alt="GoFundme" class = "donate-btn--image">
          </a>
        </div>
      </div>
    </div>
  </div>

</template>

<script>
export default {
  name: 'Home'
}
</script>

<style lang="scss">
  .hero{
    background-image: url("../assets/img/home/hero.jpg");
    background-size: cover;
    background-position: bottom;
    height: 530px;
    width: 100%;
    text-align: center;
    position: relative;
    top:0;
    z-index: 1;
  }

  .hero__logo{
    max-width: 500px;
    position: absolute;
    margin: auto;
    top:0;
    bottom: 0;
    right:0;
    left: 0;
  }

  .about-section{
    max-width: 250px;
    margin: 0 auto;
    margin: 70px auto 50px;
  }

  .about-section__icon{
    height:120px;
  }

  .about-section__icon--heart{
    height: 80px;
    margin: 20px;
  }

  .about-section__header{
    @include source-bold;
    line-height: 20px;
    font-size: 20px;
    margin: 30px 0 15px;
  }

  .about-section__subtitle{
    line-height: 23px;
    font-size: 17px;
  }

  .adopt-section{
    background-image: url("../assets/img/home/adopt.jpg");
    background-position: top left;
    background-size: cover;
    overflow: hidden;
    position: relative;
    margin-top: 70px;
  }

  .adopt-section__header{
    color: $yellow;
    @include courier;
    float: right;
    text-align:right;
    font-size: 65px;
    line-height: 55px;
    margin: 70px;
    span{
      @include courier-bold;
      display: block;
    }
  }

  .crosswalk{
      transform: skew(43deg) rotate(-15deg);
      margin: -80px 0;
  }

  .crosswalk__link{
    background-color: $black;
    color: white;
    display: block;
    margin: 15px auto;
    padding: 15px 20px;
    width:395px;;
    text-align: center;
    span{
      display: inline-block;
      transform: skew(-40deg) scaleX(1.3) scaleY(0.8);
      display: inline-block;
      font-size: 24px;
      font-weight: bold;
      letter-spacing: 1px;
    }
  }

  .crosswalk__link--blank{
    height:80px;
  }

  .adopt-section__subtitle{
    position: absolute;
    bottom: 40px;
    left: 50px;
    color: $yellow;
    max-width: 40%;
    a{
      text-decoration: underline;
    }
  }

  .donate-section{
    margin: 50px 0 70px;
  }

  .donate-section__buttons{
    text-align: center;
  }

  .donate-section__header{
    font-weight: bold;
    text-align: center;
    font-size: 44px;
  }

  .donate-section__subtitle{
    max-width: 800px;
    text-align: center;
    margin: 20px auto 50px;
    font-size: 18px;
  }

  .donate-btn{
    background-image: url("../assets/img/home/donate/gray-pattern.jpg");
    padding: 25px 20px;
    background-size: cover;
    width: 180px;
    display: inline-block;
    border-radius: 11px;
    text-align: center;
    box-shadow: -5px 4px 0px 1px #5a5e61;
  }

  .donate-btn + .donate-btn{
    margin-left: 25px;
  }

  .donate-btn--image{
    max-height:30px;
    max-width: 140px;
  }

</style>
