import Vuex from "vuex";
import cars from "./modules/cars";
import auth from "./modules/auth/index.js";

const createStore = () => {
  return new Vuex.Store({
    modules: {
      cars,
      auth,
    },
  });
};

export default createStore;
