export default function ({ store, redirect }) {
  if (store.getters["auth/isAuthenticated"]) {
    console.log("Authenticated");
    return redirect("/");
  }
}
