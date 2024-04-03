<template lang="">
  <div id="about" class="container overflow-hidden">
  <div class="row gx-5">
    <div class="col">
     <div id="ret" class="p-3 border bg-transparent d-flex flex-column align-items-center">    <h6>Profile</h6>
    <img id="smallPic" :src="$store.state.about.aboutPic" class="mb-3" alt="...">
    <p>
        D.O.B: 10 March 1998 <br>
        Gender: Male <br>
        Languages: isiXhosa (Home Language) <br>
        English (Fluent) <br>
        seTswana (Conversational) <br>
        Zulu (Conversational) <br>
        Location: Khayelitsha, Cape Town
    </p>
     </div>
    </div>
    <div class="col">
      <div id="ret" class="p-3 border bg-transparent">
        {{$store.state.about.paragraph}}
        <br>
      <h5>Connect With Me</h5>
      <a :href=$store.state.about.WhatsApp class="float" target="_blank">
            <i class="fa fa-whatsapp my-float"></i>
        </a>
        <button id="seeMore" @click="goToProjects">See My Work</button>
</div>
    </div>
  </div>
</div>
</template>
<script>
export default{
  components : {

  },
  methods : {
    fetchAbout : function(){
      this.$store.dispatch('fetchAbout')
    },
    goToProjects() {
      this.$router.push('/projects');
    }
  },
  mounted(){
    this.fetchAbout()
  }
}

</script>
<style scoped>

#smallPic{
  border-radius: 50%;
  height: 100px;
  width: 100px;
}
.float{
	width:60px;
	height:60px;
	bottom:40px;
	right:40px;
	background-color:#25d366;
	color:#FFF;
	border-radius:50px;
	text-align:center;
  font-size:30px;
	box-shadow: 2px 2px 3px #999
}
.my-float{
	margin-top:16px;
}
img {
    height: 400px;
    width: 400px;
    border-radius: 50%;
}
#about{
    margin-top: 5rem;
}

h{
  font-family: "Audiowide", sans-serif !important;
}
#ret{
    margin-left: 5px;
}

#ret:hover{
  color: aqua ;
}
.social-icons {
            list-style: none;
            padding: 0;
            margin: 0;
}

.social-icons li {
            display: inline-block;
            margin: 0 10px;
}

.social-icons a {
            color: #fff;
            text-decoration: none;
            position: relative;
            display: inline-block;
            font-size: 24px;
}

.social-icons a:hover::before {
            content: attr(data-location);
            position: absolute;
            top: -30px;
            left: 50%;
            transform: translateX(-50%);
            background-color: #333;
            color: #fff;
            padding: 5px;
            border-radius: 5px;
            font-size: 12px;
            display: none;
}

.social-icons a:hover::before {
            display: block;
}

.fa-linkedin:before {
            content: "\f08c";
}

.fa-github:before {
    content: "\f09b";
}

.fa-twitter:before {
    content: "\f099";
}
a{
  padding: 5px;
  margin-top: 10px;
}
#btns{
  padding: 10px;
}
button {
  margin: 5px;
  margin-left: 0px;
  text-align: center;
}
</style>