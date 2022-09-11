import Vuex from "vuex";
import cars from "./modules/cars";
import auth from "./modules/auth/index.js";

const createStore = () => {
  return new Vuex.Store({
    // nuxtServerInit({ commit }) {
    //   if (this.getters["auth/isAuthenticated"]) {
    //     console.log("Authenticated.....");
    //     this.$router.push("/");
    //   } else {
    //     console.log("Not Authenticated....");
    //     this.$router.push("/userAuth");
    //   }
    // },

    modules: {
      cars,
      auth,
    },
  });
};

export default createStore;
