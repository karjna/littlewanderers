<template>
  <footer class="footer">
    <div class = 'container'>
      <div class = "footer__links">
        <router-link :to="{ name: 'about'}" class="footer__link">About</router-link>
        <router-link :to="{ name: 'cats'}" class="footer__link">Adopt</router-link>
        <router-link :to="{ name: 'foster'}"class="footer__link">Foster</router-link>
        <router-link :to="{ name: 'tails'}"class="footer__link">Happy Tails</router-link>
        <router-link :to="{ name: 'volunteer'}" class="footer__link">Volunteer</router-link>
        <router-link :to="{ name: 'resources'}" class="footer__link">Rescue Resources</router-link>
        <router-link :to="{ name: 'donate'}" class="footer__link">Donate</router-link>
        <router-link :to="{ name: 'events'}" class="footer__link">Adoption Events</router-link>
        <router-link :to="{ name: 'shop'}" class="footer__link">Shop</router-link>
        <router-link :to="{ name: 'contact'}" class="footer__link">Contact</router-link>
      </div>
      <div class = "float-right social-footer">
        <span class = "social-link__text">Follow us on social media: </span>
        <a href = "" target = "_blank" class = "social-link"><i class="fab fa-facebook-f"></i></a>
        <a href = "https://www.instagram.com/littlewanderersnyc/?hl=en" target = "_blank" class = "social-link"><i class = "fab fa-instagram"></i></a>
      </div>
    </div>

  <div class = "subfooter text-right">
      <div class = 'container'>
        &copy; Little Wanderers NYC  &nbsp;&bull;&nbsp;

          Made with love by <a href = "http://karjna.co" target="_blank">karjna</a>

      </div>
    </div>
    <div class="modal fade" id="navModal" tabindex="-1" role="dialog" aria-labelledby="navModalLabel" aria-hidden="true">
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class = "row">
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">

            <router-link to="about" class="nav__link">About</router-link>
            <router-link :to="{ name: 'cats'}" class="nav__link">Adopt</router-link>
            <router-link :to="{ name: 'foster'}" class="nav__link">Foster</router-link>
            <router-link :to="{ name: 'tails'}" class="nav__link">Happy Tails</router-link>
            <router-link :to="{ name: 'volunteer'}" class="nav__link">Volunteer</router-link>
            <router-link :to="{ name: 'resources'}" class="nav__link">Rescue Resources</router-link>
            <router-link :to="{ name: 'donate'}" class="nav__link">Donate</router-link>
            <router-link :to="{ name: 'events'}" class="nav__link">Adoption Events</router-link>
            <router-link :to="{ name: 'shop'}" class="nav__link">Shop</router-link>
            <router-link :to="{ name: 'contact'}" class="nav__link">Contact</router-link>
          </div>

        </div>
      </div>
    </div>
  </footer>
</template>

<script>
import JQuery from 'jquery'
let $ = JQuery

  export default {
    name: 'Footer',
    watch: {
      '$route' () {
        $('#navModal').modal('hide');
      }
    }
  }
</script>

<style style lang="scss">
.footer {
  padding: 40px 0 70px;
  margin: 0 -20px;
  text-align: left;
  background-image: url("../assets/img/black-bg.jpg");
  background-size: cover;
  border-top: 4px solid $yellow;
  position: relative;
  top:20px;
  color: white;
}

.footer__links{
  column-count: 3;
  width:50%;
  display: inline-block;
  margin: 20px 0px;
}

.footer__link{
  color:white;
  display: block;
  @include source-demi;
  font-size: 16px;
  margin-bottom: 10px;
}

.social-link{
  color:white;
  margin: 20px 0 20px 28px;
  font-size: 30px;
  display: inline-block;
}

.social-link__text{
  color:white;
  font-size: 13px;
}

.social-footer{
  position: relative;
  top: 83px;
}
.subfooter{
  background: rgba(0, 0, 0, 0.55);
  position: absolute;
  width: 100%;
  padding: 11px;
  bottom: 0;
  font-size: 12px;
}


.modal-content{
  background: transparent;
  border:0px;
  .close{
    color: $yellow;
    opacity: 1;
    font-size: 80px;
    margin: 15px 10px 0;
  }
}

.modal-header{
  border:0px;
}

.modal-dialog{
  max-width: 90%;
}

.modal-body{
  column-count: 2;
  max-width: 900px;
  margin: 0 auto;
}

.nav__link{
  display: block;
  font-size: 35px;
  margin: 14px;
  color: white;
  font-weight: 900;
}
.modal-backdrop.show {
    opacity: .95;
    background-image: url("../assets/img/black-bg.jpg");
        border: 14px solid $yellow;
}
</style>
