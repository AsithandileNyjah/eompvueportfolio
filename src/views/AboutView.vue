<template lang="">
  <div id="about" class="container overflow-hidden">
    <div class="row gx-5">
      <div class="col-md">
        <div id="ret" class="p-3 border bg-transparent d-flex flex-column align-items-center">    
          <h6 style="text-align: center; margin-bottom: 20px;">Profile</h6>
          <img id="smallPic" :src="$store.state.about.aboutPic" class="mb-3" alt="..." style="margin: 0 auto;">
          <p style="text-align: center;">
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
      <div class="col-md">
        <div id="ret" class="p-3 border bg-transparent">
          {{$store.state.about.paragraph}}
          <br>
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

#seeMore{
  margin-left: 0px;
  margin-top: 1rem
}
</style>