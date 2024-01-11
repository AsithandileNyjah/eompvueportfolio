<template lang="">
<div id="content">
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
          // Handle errors
          console.error('Error fetching education data:', error);
        });
    }
  },
  mounted() {
    this.fetchResume();
    this.fetchEducation();
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
</style>