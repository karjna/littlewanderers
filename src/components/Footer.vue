<template>
  <footer class="footer">
    <div class = 'container'>
      <div class = "footer__links">
        <router-link to="about" class="footer__link">About</router-link>
        <router-link to="cats" class="footer__link">Adopt</router-link>
        <router-link to="foster" class="footer__link">Foster</router-link>
        <router-link to="tails" class="footer__link">Happy Tails</router-link>
        <router-link to="volunteer" class="footer__link">Volunteer</router-link>
        <router-link to="resources" class="footer__link">Rescue Resources</router-link>
        <router-link to="donate" class="footer__link">Donate</router-link>
        <router-link to="events" class="footer__link">Adoption Events</router-link>
        <router-link to="shop" class="footer__link">Shop</router-link>
        <router-link to="contact" class="footer__link">Contact</router-link>
      </div>
      <div class = "float-right social-footer">
        <span class = "social-link__text">Follow us on social media: </span>
        <a href = "" target = "_blank" class = "social-link"><i class="fab fa-facebook-f"></i></a>
        <a href = "" target = "_blank" class = "social-link"><i class = "fab fa-instagram"></i></a>
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
          <div class="modal-header">
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            <router-link to="about" class="nav__link">About</router-link>
            <router-link to="cats" class="nav__link">Adopt</router-link>
            <router-link to="foster" class="nav__link">Foster</router-link>
            <router-link to="tails" class="nav__link">Happy Tails</router-link>
            <router-link to="volunteer" class="nav__link">Volunteer</router-link>
            <router-link to="resources" class="nav__link">Rescue Resources</router-link>
            <router-link to="donate" class="nav__link">Donate</router-link>
            <router-link to="events" class="nav__link">Adoption Events</router-link>
            <router-link to="shop" class="nav__link">Shop</router-link>
            <router-link to="contact" class="nav__link">Contact</router-link>
          </div>

        </div>
      </div>
    </div>
  </footer>
</template>

<script>
  export default {
    name: 'Footer'
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
    color: white;
    opacity: 1;
    font-size: 58px;
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
}

.nav__link{
  display: block;
  @include courier-bold;
  font-size: 48px;
    margin: 14px;
}
.modal-backdrop.show {
    opacity: .95;
}
</style>
