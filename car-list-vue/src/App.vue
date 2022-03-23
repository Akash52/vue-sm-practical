<template>
  <div class="containerClass">
    <h1
      class="fixed top-0 z-50 text-center xs:text-xl sm:text-2xl md:text-3xl lg:text-4xl text-teal-900 font-bold border-b-2 shadow-xl border-slate-400 m-8 p-4 bg-blue-50 rounded-b-2xl whitespace-nowrap"
    >
      Top 10 cars 🚗 in the World 🗺️
    </h1>
    <div class="flex flex-wrap">
      <div
        v-for="car in cars"
        :key="car.id"
        class="w-full backdrop-filter backdrop-blur-lg max-w-sm py-6 px-4 mb-4 mx-auto transition duration-500 transform md:w-6/12 xl:4/12 lg:w-4/12 lg:mb-0 hover:scale-110"
      >
        <div class="max-w-md py-2 my-2 bg-gray-800 rounded-xl shadow-lg">
          <img
            alt="..."
            :src="car.image_link"
            class="shadow-xl border-b-2 border-emerald-50 hover:opacity-80 transition duration-600 cursor-pointer -mt-2"
          />
          <div class="pt-6 text-center">
            <h5 class="text-xl font-bold text-gray-400 whitespace-nowrap">
              {{ car.name }}
            </h5>
            <div class="mt-6">
              <button
                className="px-8 py-3 mb-1 mr-1 text-base font-bold text-gray-300 uppercase transition-all duration-150 ease-in bg-blue-700 rounded-full shadow-md outline-none hover:shadow-lg focus:outline-none hover:bg-blue-600 "
                type="button"
              >
                More
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'App',
  // eslint-disable-next-line space-before-function-paren
  data() {
    return {
      cars: []
    }
  },
  // eslint-disable-next-line space-before-function-paren
  created() {
    this.cars = [
      {
        id: 1,
        name: 'Lamborghini Sian Roadster',
        top_speed: '350 kmh',
        description:
          'The first open-top hybrid Lamborghini super sports car to feature a supercapacitor, the Sián Roadster roars with electrified intensity,',
        image_link:
          'https://cdn.carbuzz.com/gallery-images/1600/730000/0/730006.jpg'
      },
      {
        id: 2,
        name: 'Pagani Huayra Roadster BC',
        top_speed: '350 kmh',
        description:
          'Introduced in July 2019, the Huayra BC Roadster or the Huarya Roadster BC is an open top variant of the Huarya BC',
        image_link:
          'https://cdn.carbuzz.com/gallery-images/2021-pagani-huayra-roadster-bc-front-angle-view-carbuzz-611762.jpg'
      },
      {
        id: 3,
        name: 'McLaren Speedtail',
        top_speed: '403 kmh',
        description:
          'The McLaren Speedtail is a sports car produced by McLaren Automotive. It was designed by the British automotive designer',
        image_link:
          'https://cdn.carbuzz.com/gallery-images/1600/708000/200/708280.jpg'
      },
      {
        id: 4,
        name: 'Aston Martin Valkyrie',
        top_speed: '350 kmh',
        description:
          'The Valkyrie is a sports car produced by Aston Martin. It was designed by the British automotive designer',
        image_link:
          'https://cdn.carbuzz.com/gallery-images/1600/463000/400/463456.jpg'
      },
      {
        id: 5,
        name: 'Hennessey Venom GT',
        top_speed: '435.31 kmh',
        description:
          'The Venom GT is a sports car produced by Hennessey. It was designed by the British automotive designer',
        image_link:
          'https://cdn.carbuzz.com/gallery-images/1600/594000/700/594783.jpg'
      },
      {
        id: 6,
        name: 'Koenigsegg Jesko Absolut',
        top_speed: '483 kmh',
        description:
          'The Jesko is a sports car produced by Koenigsegg Automotive. It was designed by the Swedish automotive designer',
        image_link:
          'https://cdn.carbuzz.com/gallery-images/2021-koenigsegg-jesko-absolut-front-view-carbuzz-684758.jpg'
      },
      {
        id: 7,
        name: 'SSC Tuatara',
        top_speed: '508 kmh',
        description:
          'The Tuatara is a sports car produced by SSC. It was designed by the German automotive designer',
        image_link:
          'https://cdn.carbuzz.com/gallery-images/840x560/875000/400/875417.jpg'
      },
      {
        id: 8,
        name: 'Bugatti Chiron Super Sport 300+',
        top_speed: '482 kmh',
        description:
          'The Chiron Super Sport 300+ is a sports car produced by Bugatti Automotive. It was designed by the French automotive designer',
        image_link:
          'https://cdn.carbuzz.com/gallery-images/2022-bugatti-chiron-super-sport-300-carbuzz-923835.jpg'
      },
      {
        id: 9,
        name: 'Bugatti Bolide',
        top_speed: '498 kmh',
        description:
          'The Bolide is a sports car produced by Bugatti Automotive. It was designed by the French automotive designer',
        image_link:
          'https://cdn.carbuzz.com/gallery-images/2024-bugatti-bolide-driving-front-angle-carbuzz-884142.jpg'
      },
      {
        id: 10,
        name: 'Koenigsegg CCR',
        top_speed: '388 kmh',
        description:
          'The CCR is a sports car produced by Koenigsegg Automotive. It was designed by the Swedish automotive designer',
        image_link:
          'https://cdn.carbuzz.com/gallery-images/2021-koenigsegg-jesko-frontal-aspect-carbuzz-708419.jpg'
      }
    ]
  }
}
</script>

<style scoped>
.containerClass {
  max-width: 1200px;
  margin: 0 auto;
}
</style>
