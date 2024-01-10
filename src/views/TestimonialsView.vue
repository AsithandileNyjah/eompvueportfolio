<template lang="">
  <div id="cards" class=container-fluid>
    <div v-for="x of $store.state.testimonials" v-bind:key="x.testimonials">
      <div class="card" style="width: 18rem;">
        <img :src=x.picture class="card-img-top" >
        <div class="card-body">
          <h4>{{x.fullName}}</h4>
          <p class="card-text">{{x.testimony}}</p>
          <h6>{{x.relationship}}</h6>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
    components : {

    },
    methods : {
      fetchTestimonials : function(){
      // this.$store.dispatch('fetchTestimonials')
      this.$store.dispatch('fetchTestimonials')
    }
  },
  mounted(){
    this.fetchTestimonials()
  }
}
</script>

<style scoped>
#cards{
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 10px
}
img{
  height: 200px;
}
.card-text{
  height: 5rem;
  font-size: x-small;
}
h6{
  margin-top: 3rem;
}
@media (max-width: 1080px) {
    #cards {
      grid-template-columns: repeat(1, 1fr);
      margin-left: 50px;
    }
  }
</style>