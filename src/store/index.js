import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import { formRoterTree } from "../utils/index";
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    uuid: 1,
    hashAuth: false,
    userRoutes: []
  },
  mutations: {
    //  生成的树
    setUserRoutes(state,tree){
      state.userRoutes = tree;
    },
    //  权限
    setHashAuth(state,auth){
      state.hashAuth = auth;
    }
  },
  actions: {
    async setUserRoutes({ commit, state }) {
      const {data} = await axios({
        url:"http://localhost:3000/auth",
        method:'POST',
        data:{
          uuid:state.uuid
        }
      })
      //  转为路由树结构
      const paload = formRoterTree(data);
      commit('setUserRoutes',paload);
      commit('setHashAuth',true);
    }
  },
})
