<template lang="pug">
  <!--<div id="app">-->
    <!--<img src="./assets/logo.png">-->
    <!--<router-view/>-->
  <!--</div>-->
  #app
    img(src="./assets/logo.png")
    router-view
</template>

<script>
export default {
  name: 'App'
}
</script>

<style lang="scss" rel="stylesheet/scss">
  @import "./style/css/index.scss";
</style>
