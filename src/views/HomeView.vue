<template>
  <div class="intro" v-for="x of $store.state.homeSec" v-bind:key="x.home">
    <div class="container text-center">
  <div class="row">
    <div class="col">
      <img :src= x.profilePicture alt="">
    </div>
    <div class="col">
      <p>{{x.name}}</p>
    </div>
    <div class="col">
      <p>{{x.greeting}}</p>
    </div>
  </div>
</div>
  </div>
</template>

<style scoped>
.intro{
  margin-top: 15rem;
}
p{
  font-family:Verdana, Geneva, Tahoma, sans-serif;
  font-size: larger;
}
</style>

<script>
export default{
  components : {

  },
  methods : {
    fetchHomeData : function(){
      this.$store.dispatch('fetchHomeData')
    }
  },
  mounted(){
    this.fetchHomeData()
  }
}
</script>
