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
@import url('https://fonts.googleapis.com/css?family=Orbitron');
p{
  font-family: Orbitron
}

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

@media screen and (max-width: 600px) {
  .collapse {
    width: 120%;
  }
  .collapse{
    margin-left: -2rem;
  }
}

@media screen and (max-width: 300px) {
  .collapse {
    width: 120%;
  }
}

@media screen and (max-width: 600px) {
  nav {
    width: 120%;
  }
}

@media screen and (max-width: 300px) {
  nav {
    width: 120%;
  }
}
</style>