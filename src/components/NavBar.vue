<template>
    <div id="bar">
<ul class="nav justify-content-center">
  <li class="nav-item">
    <router-link class="nav-link" to="/" aria-current="page">Home</router-link>
  </li>
  <li class="nav-item">
    <router-link class="nav-link" to="/about">About</router-link>
  </li>
  <li class="nav-item">
    <router-link class="nav-link" to="/resume">Resume</router-link>
  </li>
  <li class="nav-item">
    <router-link class="nav-link" to="/projects">Projects</router-link>
  </li>
  <li class="nav-item">
    <router-link class="nav-link" to="testimonials">Testimonials</router-link>
  </li>
  <li class="nav-item">
    <router-link class="nav-link" to="/contact">Contact</router-link>
  </li>
</ul>
    </div>
</template>
<script>
export default {
    
}
</script>
<style>
.nav-link{
    color: blue;
}  
#bar{
  font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
}
</style>