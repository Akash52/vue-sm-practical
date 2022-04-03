<template>
  <button
    @click="isOpen = true"
    class="px-6 py-2 mt-4 ml-8 mb-4 text-white bg-blue-600 rounded shadow text-right"
    type="button"
  >
    Add New Car
  </button>
  <form v-show="isOpen" @submit.prevent="handleSubmit">
    <div
      class="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
    >
      <div class="relative my-6 mx-auto w-full max-w-md">
        <div
          class="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none"
        >
          <div class="relative p-6 flex-auto">
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
            class="flex items-center justify-end p-6 border-t border-solid border-blueGray-200 rounded-b"
          >
            <button
              class="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
              type="button"
              @click="isOpen = false"
            >
              Close
            </button>
            <button
              class="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
              type="submit"
              @click="isOpen = false"
            >
              Add
            </button>
          </div>
        </div>
      </div>
    </div>
    <div class="opacity-25 fixed inset-0 z-40 bg-black"></div>
  </form>
</template>

<script>
import { ref } from 'vue'
export default {
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
      console.log(newCar)
    }
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
