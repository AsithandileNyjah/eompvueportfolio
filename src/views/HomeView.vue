<template>
<div class="d-flex flex-column justify-content-center w-100 h-100">
  <div class="row">
    <div id="greetingAni" class="col">
      {{$store.state.home.name}}
    </div>
    <div id="greetingAni" class="col order-5">
      {{$store.state.home.greeting}}
    </div>
    <div id="hIMG" class="col order-1">
      <img id="img" src="https://iili.io/JNE9thN.th.png">
      <button id="seeMore" @click="goToAbout">See More About Me</button>
    </div>
  </div>
</div>
</template>

<style >
@import url('https://fonts.googleapis.com/css?family=Audiowide');

@keyframes fallIn {
    0% {
      transform: translateY(-100%);
      opacity: 0;
    }
    100% {
      transform: translateY(0);
      opacity: 1;
    }
  }

  .col {
    animation: fallIn 1s ease forwards;
  }

  .col:nth-child(2) {
    animation-delay: 0.3s; 
  }

  .col:nth-child(3) {
    animation-delay: 0.3s; 
  }

  #hIMG {
    animation-delay: 0.3s 
  }

body {
	background: linear-gradient(-45deg, #ee7752, #e73c7e, #23a6d5, #23d5ab);
	background-size: 400% 400%;
	animation: gradient 15s ease infinite;
	height: 100vh;
}

#seeMore{
  background: linear-gradient(-45deg, #ee7752, #e73c7e, #23a6d5, #23d5ab);
	background-size: 400% 400%;
	animation: gradient 15s ease infinite;
  margin-left: 8rem;
  margin-top: 5px
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

p, h1, h2, h3, h4, h5, h6, a, button {
  font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
}
#greetingAni{
  font-family: "Audiowide", sans-serif !important;
  font-size: xx-large;
  margin-top: 10rem;
  margin-left: 2rem;
}
#greetingAni:hover{
  color: aqua;
}

#hIMG {
  margin-top: 5rem;
}
@media screen and (max-width: 600px) {
  #seeMore {
    margin-left: 7.5rem;
  }
}
</style>

<script>
export default {
  methods: {
    fetchHomeData() {
      this.$store.dispatch('fetchHomeData');
    },
    goToAbout() {
      this.$router.push('/about');
    }
  },
  mounted() {
    this.fetchHomeData();
  }
}
</script>