<template lang="">
      <div v-for="x of $store.state.testimonials" v-bind:key="x.testimonials" class = container>
    <div class = card>
      <div class = image>
        <img href = "#" :src = x.picture>
      </div>
      <div class = content>
        <h3>{{x.fullName}}</h3>
        <p id="test">{{x.testimony}}</p>
        <h6>{{x.relationship}}</h6>
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
.container {
  position : relative;
  width : 1100px;
  display : flex;
  align-items : center;
  justify-content : center;
  padding : 30px; 
  margin-top: 10px;
}

.container .card {
  position: relative;
  max-width : 300px;
  height : 215px;  
  background-color : #fff;
  margin : 30px 10px;
  padding : 20px 15px;
  
  display : flex;
  flex-direction : column;
  box-shadow : 0 5px 20px rgba(0,0,0,0.5);
  transition : 0.3s ease-in-out;
  border-radius : 15px;
}
.container .card:hover {
  height : 320px;    
}


.container .card .image{
  position : relative;
  width : 260px;
  height : 260px;
  
  top : -40%;
  left: 8px;
  box-shadow : 0 5px 20px rgba(0,0,0,0.2);
  z-index : 1;
}

.container .card .image img {
  max-width : 100%;
  border-radius : 15px;
}

.container .card .content {
  position : relative;
  top : -140px;
  padding : 10px 15px;
  color : #111;
  text-align : center;
  
  visibility : hidden;
  opacity : 0;
  transition : 0.3s ease-in-out;
  font-size: smaller;
    
}

.container .card:hover .content {
   margin-top : 30px;
   visibility : visible;
   opacity : 1;
   transition-delay: 0.2s;
  
}
#test{
  font-size: x-small;
}
img {
  height: 200px;
  width: 400px;
}
</style>