<template lang="">
<div id="cards" class="container-fluid">
  <div class="container">
    <div class="row">
      <div v-for="x of $store.state.projects" v-bind:key="x.projects" class="col-lg-4">
        
        <div class="cards" style="width: 18rem;">
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
  height: 200px;
  border-radius: 0%;
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

.cards {
  margin-bottom: 20px;
  padding: 0px;
}

.btn {
  font-size: x-small;
  text-align: center;
}

#cards{
  margin-top: 2rem;
}

.cards {
    width: 18rem;
    background-color: whitesmoke;
    border-radius: 15px;
    overflow: hidden;
    position: relative;
    box-shadow: 0px 0px 10px rgba(255, 255, 255, 0.5);
    transition: box-shadow 0.3s ease-in-out;
    margin-left: 3rem;
    margin-top: 1rem;
  }
.cards:hover {
    animation: heartbeat 1s infinite; 
    box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.5);
  }

@keyframes heartbeat {
    0% {
      transform: scale(1);
    }
  }
</style>