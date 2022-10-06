<template>
  <home-page />
</template>

<script>
import HomePage from "./HomePage.vue";
export default {
  components: { HomePage },

  created() {
    if (localStorage.getItem("token")) {
      this.$router.push({ name: "index" });
    } else {
      this.$router.push({ name: "userAuth" });
    }
  },
};
</script>

<style></style>
