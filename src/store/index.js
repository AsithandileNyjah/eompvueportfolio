import { createStore } from 'vuex'
import axios from 'axios'

export default createStore({
  state: {
    homeSec:[],
    testimonials:[]
  },
  getters: {
  },
  mutations: {
      homeData (state, info){
        state.homeSec = info
      },
      testimonialData (state, info){
        state.testimonials = info
      },
  },
  actions: {
    fetchHomeData(context){
      axios.get("https://asithandilenyjah.github.io/jsonFileData/")
      .then(x => {
        context.commit('homeData', x.data.home)
        console.log(x.data.home)
      })
    },
    fetchTestimonials(context){
      axios.get("https://asithandilenyjah.github.io/jsonFileData/")
      .then(x => {
        context.commit('testimonialData', x.data.testimonials)
        console.log(x.data.testimonials)
      })
    }
  },
  modules: {
  }
})
