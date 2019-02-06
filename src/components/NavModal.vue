<template>
  <div class = "d-inline-block">
    <a class = "hamburger" data-toggle="modal" data-target="#navModal">
      <i class="fas fa-bars"></i>
    </a>
  </div>
</template>

<script>
export default {
  name: 'NavModal'
}
</script>

<style scoped lang="scss">
  a.hamburger{
    color: $darkyellow;
    cursor: pointer;
    font-size: 36px;
    transition: 0.1s all ease-in;
    position: relative;
    top:0;
    left: 0;
    &:hover{
      color: $yellow;
      top:-5px;
    }
  }
</style>
