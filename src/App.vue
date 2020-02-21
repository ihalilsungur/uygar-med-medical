<template>
  <div id="app">
    <appHeader></appHeader>
    <router-view></router-view>
    <appFooter></appFooter>


  </div>
</template>

<script>
  import appHeader from "./components/homepage/Header"
  import appFooter from "./components/homepage/Footer"

  export default {
    components: {
      appHeader,
      appFooter
    }
  }
</script>

<style>

</style>
