<template lang="">

<div id="about" class="row" >
        <div class="clearfix">
            <img :src=$store.state.about.aboutPic class="col-md-4 float-md-end mb-3 ms-md-3" alt="...">
            <div class="container text-center">
  <div class="row">
    <div class="col">
      <p id="ret">{{$store.state.about.paragraph}}</p>
    </div>
  </div>
  </div>
        </div>
        <a :href=$store.state.about.WhatsApp class="float" target="_blank">
            <i class="fa fa-whatsapp my-float"></i>
        </a>
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
<style scoped>

.float{
	position:fixed;
	width:60px;
	height:60px;
	bottom:40px;
	right:40px;
	background-color:#25d366;
	color:#FFF;
	border-radius:50px;
	text-align:center;
  font-size:30px;
	box-shadow: 2px 2px 3px #999;
  z-index:100;
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
</style>