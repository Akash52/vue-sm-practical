<template>
  <div class="flex justify-center align-middle items-cente">
    <div class="mx-auto px-4">
      <h1
        class="xs:text-xl sm:text-xl md:text-2xl text-center lg:text-3xl text-gray-100 font-bold border-2 shadow-xl border-pink-300 p-2 -mb-3 bg-cyan-800 mt-5 rounded-t-2xl"
      >
        {{ name }}
      </h1>

      <div
        class="max-w-md py-2 my-2 bg-gradient-to-r from-cyan-700 border-x-2 border-b-2 border-pink-200 to-cyan-900 rounded-b-xl shadow-lg"
      >
        <img
          alt="..."
          :src="image_link"
          class="shadow-xl border-b-2 hover:opacity-80 transition duration-600 border-2 border-emerald-400 cursor-pointer -mt-2"
        />
        <div class="pt-2">
          <h5
            class="text-lg text-left font-bold text-gray-200 whitespace-nowrap border-b border-slate-700 py-4 px-2"
          >
            <span class="text-slate-800">Car Name 🏁 </span> {{ name }}
          </h5>
          <h5
            class="text-lg text-left font-bold text-gray-200 whitespace-nowrap border-b border-slate-700 py-2 px-2"
          >
            <span class="text-slate-800">Top Speed 🔥 </span> {{ top_speed }}
          </h5>
          <h5 class="text-lg text-center font-bold text-gray-200 py-2 px-2">
            <span class="text-slate-800">Info 📔 </span>
          </h5>
          <h5 class="text-sm text-center font-bold text-gray-200 py-2 px-2">
            {{ description }}
          </h5>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CarCard',
  // eslint-disable-next-line space-before-function-paren
  data() {
    return {
      id: this.$route.params.id,
      name: this.$route.params.name,
      top_speed: this.$route.params.top_speed,
      image_link: this.$route.params.image_link,
      description: this.$route.params.description
    }
  }
}
</script>
