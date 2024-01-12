<template lang="">
<div id="content">
  <div id="btn">
    <a class="btn btn-primary" href="https://www.canva.com/design/DAFuJJnXVtQ/mmmN0OUAsrZgisX5xNi0NA/edit?utm_content=DAFuJJnXVtQ&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton" role="button">Download My Resume</a>
  </div>
  <div class="container-fluid">
    <h1 style="text-align: center">Work Experience</h1>
    <div class="row">
      <div v-for="x of $store.state.resume" :key="x.resume" class="col-lg-4">
        <div class="card" style="width: 18rem;">
          <div class="card-body custom-card-body">
            <h4 class="card-title custom-card-title">{{ x.company }}</h4>
            <p class="card-subtitle mb-2 text-muted custom-card-subtitle">{{ x.duties }}</p>
            <h6 class="card-text custom-card-text">{{ x.jobTitle }}</h6>
            <p class="custom-card-paragraph">{{ x.duration }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>

<div class="container-fluid">
    <h1 style="text-align: center">Education</h1>
    <div class="row">
        <div v-for="x of $store.state.education" :key="x.education" class="col-lg-4">
            <div class="card" style="width: 18rem;">
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
    <div class="row">
      <div v-for="x of $store.state.skills" :key="x.skills" id="skills" class="col-lg-3">
        <div class="card" style="width: 18rem;">
          <img :src=x.skillImage class="card-img-top" alt="...">
          <div class="card-body">
            <h5 class="card-title">{{x.skill}}</h5>
            <a href="#" class="btn btn-primary">{{x.level}}</a>
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

<style>
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
</style>