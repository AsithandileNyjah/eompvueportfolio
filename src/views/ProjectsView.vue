<template lang="">
<div id="cards" class="container-fluid">
  <div class="container">
    <div class="row">
      <div v-for="x of $store.state.projects" v-bind:key="x.projects" class="col-lg-4">
        
        <div class="card" style="width: 18rem;">
            <img id="pic" :src=x.proImg class="card-img-top">
            <div class="card-body">
                <h5 class="card-title">{{x.projectsName}}</h5>
                <p class="card-text">{{x.description}}</p>
                <a :href=x.link1 class="btn btn-primary">{{x.BTN1}}</a> 
                <a :href=x.link2 class="btn btn-primary">{{x.BTN2}}</a>
            </div>
        </div>
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
  fetchProjects : function(){
    this.$store.dispatch('fetchProjects')
  }
},
mounted(){
  this.fetchProjects()
}
}
</script>


<style>
#pic {
  height: 100px;
}
.card-text{
  font-size: smaller;
}
.card-title{
  font-size: medium;
}

.card-body {
  height: 11rem;
}

/* Add margin to the bottom of each card */
.card {
  margin-bottom: 20px;
  padding: 0px;
}

/* Add margin to the top of each button */
.btn {
  font-size: x-small;
}
</style>