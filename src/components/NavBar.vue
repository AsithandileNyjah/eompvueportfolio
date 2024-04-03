<template>
  <div class="collapse" id="navbarToggleExternalContent">
  <div class="bg-dark p-4">
    <ul class="nav justify-content-center">
  <li class="nav-item">
    <router-link class="nav-link" to="/" aria-current="page"><p>Home</p></router-link>
  </li>
  <li class="nav-item">
    <router-link class="nav-link" to="/about"><p>About</p></router-link>
  </li>
  <li class="nav-item">
    <router-link class="nav-link" to="/resume"><p>Education & Work Experience</p></router-link>
  </li>
  <li class="nav-item">
    <router-link class="nav-link" to="/projects"><p>Projects</p></router-link>
  </li>
  <li class="nav-item">
    <router-link class="nav-link" to="testimonials"><p>Reviews</p></router-link>
  </li>
  <li class="nav-item">
    <router-link class="nav-link" to="/contact"><p>Contact</p></router-link>
  </li>
</ul>
  </div>
</div>
<nav class="navbar navbar-dark bg-dark">
  <div class="container-fluid">
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarToggleExternalContent" aria-controls="navbarToggleExternalContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
  </div>
</nav>
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
  color: whitesmoke;
  font-size: large;
}  
p:hover{
  color: aqua;
}
#bar{
  font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
}
</style>