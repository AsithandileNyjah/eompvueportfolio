<template>
    <div id="bar">
<ul class="nav justify-content-center">
  <li class="nav-item">
    <router-link class="nav-link" to="/" aria-current="page"><p>Home</p></router-link>
  </li>
  <li class="nav-item">
    <router-link class="nav-link" to="/about"><p>About</p></router-link>
  </li>
  <li class="nav-item">
    <router-link class="nav-link" to="/resume"><p>Resume</p></router-link>
  </li>
  <li class="nav-item">
    <router-link class="nav-link" to="/projects"><p>Projects</p></router-link>
  </li>
  <li class="nav-item">
    <router-link class="nav-link" to="testimonials"><p>Testimonials</p></router-link>
  </li>
  <li class="nav-item">
    <router-link class="nav-link" to="/contact"><p>Contact</p></router-link>
  </li>
</ul>
    </div>
</template>
<script>
export default {
    
}
</script>
<style scoped>
.nav-link{
    color: black;
}
p{
  color: black;
  font-size: large;
}  
p:hover{
  color: aqua;
}
#bar{
  font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
}
</style>