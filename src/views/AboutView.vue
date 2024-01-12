<template lang="">

<div id="about" class="row" >
        <div class="clearfix">
            <img :src=$store.state.about.aboutPic class="col-md-4 float-md-end mb-3 ms-md-3" alt="...">
            <div class="container text-center">
  <div class="row">
    <div id="btns" class="col">
      <p id="ret">{{$store.state.about.paragraph}}</p>
      <button type="button" class="btn btn-danger"><router-link to="/contact">Contact</router-link></button>
    </div>
    <div class="social-icons">
        <a href="https://www.linkedin.com/in/asithandile-tyulu-a12006171/" data-location="LinkedIn" class="fa fa-linkedin"></a>
        <a href="https://github.com/AsithandileNyjah" data-location="GitHub" class="fa fa-github"></a>
        <a href="https://twitter.com/ThandileTyulu" data-location="Twitter" class="fa fa-twitter"></a>
    </div>
  </div>
        <a :href=$store.state.about.WhatsApp class="float" target="_blank">
            <i class="fa fa-whatsapp my-float"></i>
        </a>
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
    }
  },
  mounted(){
    this.fetchAbout()
  }
}

</script>
<style>

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
#ret{
    margin-left: 5px;
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
  margin-left: 5px;
}
</style>