import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    personalData:{
      name: "",
      age: "",
    },
    children: [{
      id: Date.now(),
      name:"",
      age:""
    }],
  },
})
