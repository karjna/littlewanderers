<template>

  <div class="container">
    <h1>About</h1>
    <p class = "intro">Little Wanderers NYC is a 501c3 non-profit organization rescuing sick and injured cats from the five New York City boroughs. We run solely with the help of volunteers. We do not have a physical shelter location and rely on foster families to care for our cats.</p>

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

    <p class = "text-center display-4 my-4">In 2018, we rescued more than 650 cats!</p>
    <p class = "text-center intro mt-1 mb-5">We are excited to rescue more cats and up our adoption numbers for 2019!</p>

    <div class = "donate-section">
      <div class = 'container'>
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
  </div>

</template>

<script>

export default {
  name: 'About',
  data () {
    return {
      cats: null
    }
  }
}
</script>


<style lang="scss">
  .intro{
    font-size: 24px;
    margin: 40px 0;
  }

</style>
