import Vue from 'vue'
import Vuex from 'vuex'

import constants from './constants';

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    images: [],
    annotations: [], // indexed by the image index
  },
  mutations: {
    [constants.SAVE_IMAGE_URLS]: (state, urls) => {
      state.images = urls;
    },
    [constants.ADD_ANNOTATION]: (state, data) => {
      const { imageIndex, annotation } = data;
      state.annotations = [
        ...state.annotations,
        [imageIndex, annotation]
      ];
    }
  },
  actions: {
    [constants.SAVE_IMAGE_URLS]: ({ commit }, { urls }) => commit(constants.SAVE_IMAGE_URLS, urls),
    [constants.ADD_ANNOTATION]: ({ commit }, { data }) => commit(constants.ADD_ANNOTATION, data),
  }
})
