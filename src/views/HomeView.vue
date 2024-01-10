<template>

<div id="intro" class="d-flex flex-column justify-content-center w-100 h-100">
<div class="d-flex flex-column justify-content-center align-items-center">
  <img id="img" :src=$store.state.home.profilePicture >
  <div class="btn-group my-5">
    <p class="btn btn-outline-light" aria-current="page">{{$store.state.home.name}}</p>
    <p class="btn btn-outline-light">{{$store.state.home.greeting}}</p>
  </div>
</div>
</div>

</template>

<style >
body {
	background: linear-gradient(-45deg, #ee7752, #e73c7e, #23a6d5, #23d5ab);
	background-size: 400% 400%;
	animation: gradient 15s ease infinite;
	height: 100vh;
}

@keyframes gradient {
	0% {
		background-position: 0% 50%;
	}
	50% {
		background-position: 100% 50%;
	}
	100% {
		background-position: 0% 50%;
	}
}
#intro{
  margin-top: 3rem;
}
#img{
  background-origin: padding-box;
  border-radius: 50%;
  height: 400px;
  width: 400px;
  border-bottom: solid blueviolet;
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