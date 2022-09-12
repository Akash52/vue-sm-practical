export default function ({ store, redirect }) {
  if (!store.getters["auth/isAuthenticated"]) {
    console.log("Not Authenticated");
    return redirect("/userAuth");
  } else {
    console.log("Authenticated");
    return redirect("/HomePage");
  }
}
