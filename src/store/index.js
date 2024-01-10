import { createStore } from 'vuex'
import axios from 'axios'

export default createStore({
  state: {
    home:[],
    testimonials:[],
    about:[],
    projects:[]
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
      }
  },
  actions: {
    fetchHomeData(context){
      axios.get("https://asithandilenyjah.github.io/jsonFileData/")
      .then(x => {
        console.log(x);
        context.commit('homeData', x.data.home[0])
        console.log(x.data.home[0])
      })
    },
    fetchTestimonials(context){
      axios.get("https://asithandilenyjah.github.io/jsonFileData/")
      .then(x => {
        context.commit('testimonialData', x.data.testimonials)
        console.log(x.data.testimonials)
      })
    },
    fetchAbout(context){
      axios.get("https://asithandilenyjah.github.io/jsonFileData/")
      .then(x => {
        console.log(x.data.about[0]);
        context.commit('aboutData', x.data.about[0])
      })
    },
    fetchProjects(context){
      axios.get("https://asithandilenyjah.github.io/jsonFileData/")
      .then(x =>{
        console.log(x.data.projects);
        context.commit('projectData', x.data.projects)
      })
    }
  },
  modules: {
  }
})
