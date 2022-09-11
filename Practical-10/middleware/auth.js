import VueRouter from "vue-router";
import Vue from "vue";

Vue.use(VueRouter);

export default function ({ store, redirect }) {
  if (!store.getters["auth/isAuthenticated"]) {
    console.log("Not Authenticated");
    return redirect("/userAuth");
  }
}
