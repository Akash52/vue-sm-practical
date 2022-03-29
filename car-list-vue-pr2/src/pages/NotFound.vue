<template>
  <div class="text-center items-center">
    <h1>Oops page not found 🙂</h1>
    <p>
      <router-link :to="{ name: 'Home' }">
        <button
          class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Go to Home
        </button>
      </router-link>
    </p>
  </div>
</template>

<script>
export default {}
</script>
