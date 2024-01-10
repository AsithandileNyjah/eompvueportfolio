<template lang="">
<div id="cards" class="container-fluid">
    <div v-for="x of $store.state.projects" v-bind:key="x.projects">
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
#cards{
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 10px
}
#pic{
    height: 200px;
}
</style>