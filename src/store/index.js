import { createStore } from 'vuex'
import axios from 'axios'

export default createStore({
  state: {
    home:[],
    testimonials:[],
    about:[],
    projects:[],
    resume: [],
    education: [],
    skills: []
  },
  getters: {
  },
  mutations: {
      homeData (state, info){
        state.home = info
      },
      testimonialData (state, info){
        state.testimonials = info
      },
      aboutData (state, info){
        state.about = info
      },
      projectData(state, info){
        state.projects = info
      },
      resumeData(state, info){
        state.resume = info
      },
      educationData(state, info){
        state.education = info
      },
      skillsData(state, info){
        state.skills = info
      }
  },
  actions: {
    fetchHomeData(context) {
      try {
        axios.get("https://asithandilenyjah.github.io/jsonFileData/")
          .then(x => {
            console.log(x);
            context.commit('homeData', x.data.home[0])
            console.log(x.data.home[0])
          })
      } catch (error) {
        console.error("Unexpected error occurred:", error);
      }
    },
    
    fetchTestimonials(context) {
      try {
        axios.get("https://asithandilenyjah.github.io/jsonFileData/")
          .then(x => {
            context.commit('testimonialData', x.data.testimonials)
            console.log(x.data.testimonials)
          })
      } catch (error) {
        console.error("Unexpected error occurred:", error);
      }
    },
    
    fetchAbout(context) {
      try {
        axios.get("https://asithandilenyjah.github.io/jsonFileData/")
          .then(x => {
            console.log(x.data.about[0]);
            context.commit('aboutData', x.data.about[0])
          })
      } catch (error) {
        console.error("Unexpected error occurred:", error);
      }
    },
    
    fetchProjects(context) {
      try {
        axios.get("https://asithandilenyjah.github.io/jsonFileData/")
          .then(x => {
            console.log(x.data.projects);
            context.commit('projectData', x.data.projects)
          })
      } catch (error) {
        console.error("Unexpected error occurred:", error);
      }
    },
    
    fetchResume(context) {
      try {
        axios.get("https://asithandilenyjah.github.io/jsonFileData/")
          .then(x => {
            console.log(x.data.resume);
            context.commit('resumeData', x.data.resume)
          })
      } catch (error) {
        console.error("Unexpected error occurred:", error);
      }
    },
    
    fetchEducation(context) {
      try {
        axios.get("https://asithandilenyjah.github.io/jsonFileData/")
          .then(x => {
            console.log(x.data.education);
            context.commit('educationData', x.data.education)
          })
      } catch (error) {
        console.error("Unexpected error occurred:", error);
      }
    },
    
    fetchSkills(context) {
      try {
        axios.get("https://asithandilenyjah.github.io/jsonFileData/")
          .then(x => {
            console.log(x.data.skills);
            context.commit('skillsData', x.data.skills)
          })
      } catch (error) {
        console.error("Unexpected error occurred:", error);
      }
    }    
  },
  modules: {
  }
})
