<template>
  <button
    @click="isOpen = true"
    class="px-6 py-2 mt-4 mb-4 ml-8 text-right text-white bg-blue-600 rounded shadow"
    type="button"
  >
    Add New Car
  </button>
  <form v-show="isOpen" @submit.prevent="handleSubmit">
    <div
      class="fixed inset-0 z-50 flex items-center justify-center overflow-x-hidden overflow-y-auto outline-none focus:outline-none"
    >
      <div class="relative w-full max-w-md mx-auto my-6">
        <div
          class="relative flex flex-col w-full bg-white border-0 rounded-lg shadow-lg outline-none focus:outline-none"
        >
          <div class="relative flex-auto p-6">
            <div>
              <label
                htmlFor="todo"
                class="block mb-2 text-lg font-medium text-gray-900"
              >
                Add new Car
              </label>
              <input
                type="text"
                placeholder="CAR NAME"
                class="bg-gray-50 border focus:outline-none border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5 mb-2"
                v-model="name"
              />
              <input
                type="text"
                placeholder="TOP SPEED"
                class="bg-gray-50 border focus:outline-none border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5 mb-2"
                v-model="top_speed"
              />
              <textarea
                placeholder="DESCRIPTION"
                class="bg-gray-50 border focus:outline-none border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5 mb-2"
                v-model="description"
              ></textarea>
              <input
                type="text"
                placeholder="IMAGE URL"
                class="bg-gray-50 border focus:outline-none border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5 mb-2"
                v-model="image_link"
              />
              <input
                type="text"
                placeholder="PRICE"
                class="bg-gray-50 border focus:outline-none border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5 mb-2"
                v-model="price"
              />
            </div>
          </div>
          <div
            class="flex items-center justify-end p-6 border-t border-solid rounded-b border-blueGray-200"
          >
            <button
              class="px-6 py-2 mb-1 mr-1 text-sm font-bold text-red-500 uppercase transition-all duration-150 ease-linear outline-none background-transparent focus:outline-none"
              type="button"
              @click="isOpen = false"
            >
              Close
            </button>
            <button
              class="px-6 py-3 mb-1 mr-1 text-sm font-bold text-white uppercase transition-all duration-150 ease-linear rounded shadow outline-none bg-emerald-500 active:bg-emerald-600 hover:shadow-lg focus:outline-none"
              type="submit"
              @click="isOpen = false"
            >
              Add
            </button>
          </div>
        </div>
      </div>
    </div>
    <div class="fixed inset-0 z-40 bg-black opacity-25"></div>
  </form>
</template>

<script>
import { ref } from 'vue'
export default {
  name: 'AddCarFrom',
  // eslint-disable-next-line space-before-function-paren
  data() {
    return {
      name: '',
      top_speed: '',
      description: '',
      image_link: '',
      price: ''
    }
  },
  methods: {
    // eslint-disable-next-line space-before-function-paren
    handleSubmit() {
      const newCar = {
        name: this.name,
        top_speed: this.top_speed,
        description: this.description,
        image_link: this.image_link,
        price: this.price
      }
      fetch('http://localhost:5000/cardata', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(newCar)
      }).then(() => {
        this.name = ''
        this.top_speed = ''
        this.description = ''
        this.image_link = ''
        this.price = ''
      })
    }
    // eslint-disable-next-line space-before-function-paren
  },

  // eslint-disable-next-line space-before-function-paren
  setup() {
    const isOpen = ref(false)
    document.addEventListener('keydown', (e) => {
      if (e.keyCode === 27) {
        isOpen.value = false
      }
    })
    document.addEventListener('keydown', (e) => {
      if (e.keyCode === 13) {
        isOpen.value = true
      }
    })
    return { isOpen }
  }
}
</script>
