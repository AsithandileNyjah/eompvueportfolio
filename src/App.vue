<template>
  <div>
      <div id="navBar">
        <NavBar/>
      </div>
      <div>
      </div>
      <router-view/>
        <Footer/>
  </div>
</template>

<script>
  import NavBar from './components/NavBar.vue';
  import Footer from './components/Footer.vue';
  import Spinner from './components/Spinner.vue';

export default {
  components: {
    NavBar, Footer, Spinner
  },
  data() {
    return {
      showSpinner: true
    };
  },
  created() {
    // Hide the spinner after 1.5 seconds
    setTimeout(() => {
      this.showSpinner = false;
    }, 1500);
  }
}
</script>

<style>

</style>
