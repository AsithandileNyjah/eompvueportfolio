<template lang="">
<div id="content">
  <div class="container-fluid">
    <h1 style="text-align: center">Work Experience</h1>
    <div id="btn">
  <a class="btn btn-primary" href="https://www.canva.com/design/DAFuJJnXVtQ/mmmN0OUAsrZgisX5xNi0NA/edit?utm_content=DAFuJJnXVtQ&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton" role="button">
    <i class="fas fa-download"></i> See My Resume
  </a>
</div>
    <div class="row justify-content-center">
  <div v-for="x of $store.state.resume" :key="x.resume" class="col-lg-4">
    <div class="card" style="width: 18rem;">
      <div class="card-inner">
        <!-- Front of the card -->
        <div class="card-front">
          <div class="card-content">
            <h4 class="card-title custom-card-title">{{ x.company }}</h4>
            <p class="custom-card-details">Hover over me</p>
          </div>
        </div>
        <!-- Back of the card -->
        <div class="card-back">
          <div class="card-content">
            <h4 class="card-title custom-card-title">{{ x.company }}</h4>
            <h6 class="card-text custom-card-text">{{ x.jobTitle }}</h6>
            <p class="card-subtitle mb-2 text-muted custom-card-subtitle">{{ x.duties }}</p>
            <p class="custom-card-paragraph">{{ x.duration }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
  </div>

<div class="container-fluid">
    <h1 style="text-align: center">Education</h1>
    <div class="row justify-content-center">
        <div v-for="x of $store.state.education" :key="x.education" class="col-lg-4">
            <div class="cards" style="width: 18rem;">
                <ul class="list-group list-group-flush">
                    <li class="list-group-item"><h4>{{x.course}}</h4></li>
                    <li class="list-group-item">{{x.school}}</li>
                    <li class="list-group-item">{{x.year}}</li>
                </ul>
            </div>
        </div>
    </div>
</div>
</div>

<div>
  <div class="container-fluid">
    <h1 style="text-align: center">Skills</h1>
    <div class="row justify-content-center">
      <div v-for="x of $store.state.skills" :key="x.skills" id="skills" class="col-lg-4">
        <div class="cards" style="width: 18rem;">
          <img :src=x.skillImage class="card-img-top" alt="...">
          <div class="card-body">
            <h5 style="text-align: center" class="card-title">{{x.skill}}</h5>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

</template>
<script>
export default {
  components: {},
  methods: {
    fetchResume: function() {
      this.$store.dispatch('fetchResume');
    },
    fetchEducation: function() {
      this.$store.dispatch('fetchEducation')
        .then((educationData) => {
          console.log('Fetched education data:', educationData);
        })
        .catch((error) => {
          console.error('Unexpected error', error);
        });
    },
    fetchSkills: function(){
      this.$store.dispatch('fetchSkills')
      .then((skillsData) => {
        console.log('skills', skillsData);
      })
      .catch((error) => {
        console.error('Unexpected error', error)
      })
    }
  },
  mounted() {
    this.fetchResume();
    this.fetchEducation();
    this.fetchSkills()
  }
}
</script>

<style scoped>
.custom-card-body {
  height: 25rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.custom-card-title,
.custom-card-subtitle,
.custom-card-text,
.custom-card-paragraph {
  margin-bottom: 10px; 
}
img {
  height: 200px;
}
#skills {
  margin-top: 5px;
}
#btn{
  text-align: center;
}

.cards {
    width: 18rem;
    background-color: whitesmoke;
    border-radius: 15px;
    overflow: hidden;
    position: relative;
    box-shadow: 0px 0px 10px rgba(255, 255, 255, 0.5);
    transition: box-shadow 0.3s ease-in-out;
    margin-left: 3rem;
    margin-top: 1rem;
  }
.cards:hover {
    animation: heartbeat 1s infinite; 
    box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.5);
  }

.card:hover {
    animation: heartbeat 1s infinite; 
    box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.5);
  }

@keyframes heartbeat {
    0% {
      transform: scale(1);
    }
  }

.card {
    perspective: 1000px;
    position: relative;
    height: 350px;
    margin-left: 3rem;
    margin-top: 2rem
  }

  .card-inner {
    transition: transform 0.6s;
    transform-style: preserve-3d;
    height: 100%;
  }

  .card-front,
  .card-back {
    backface-visibility: hidden;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
  }

  .card-front {
    z-index: 2;
    transform: rotateY(0deg);
  }

  .card-back {
    transform: rotateY(180deg);
  }

  .card:hover .card-inner {
    transform: rotateY(180deg);
  }

  .card-content {
    position: absolute;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  .custom-card-title {
    font-size: 1.5rem;
    margin-bottom: 10px;
  }
  .custom-card-details {
    font-size: 1rem;
    text-align: center;
  }

@media screen and (max-width: 600px) {
  body {
      font-size: 14px;
  }
  .cards {
    margin-left: 3rem;
    margin-top: 2rem
  }
  .card {
    margin-left: 3rem;
    margin-top: 1rem
  }
}
</style>