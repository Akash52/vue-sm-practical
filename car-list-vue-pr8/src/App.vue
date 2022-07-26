<template>
  <div class="containerClass">
    <router-view />
  </div>
</template>

<script>
export default {
  name: 'App',
  // eslint-disable-next-line space-before-function-paren
  created() {
    this.$store.dispatch('tryLogin')
  },
  computed: {
    // eslint-disable-next-line space-before-function-paren
    didAutoLogout() {
      return this.$store.getters.didAutoLogout
    }
  },
  watch: {
    // eslint-disable-next-line space-before-function-paren
    didAutoLogout(curValue, oldValue) {
      if (curValue && curValue !== oldValue) {
        this.$router.replace('/')
      }
    }
  }
}
</script>

<style>
.containerClass {
  max-width: 1200px;
  margin: 0 auto;
}
</style>
