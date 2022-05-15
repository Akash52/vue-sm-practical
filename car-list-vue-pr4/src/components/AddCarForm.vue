<template>
  <VeeForm @submit="handleSubmit">
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
              <VeeField
                type="text"
                name="name"
                placeholder="CAR NAME"
                class="bg-gray-50 border focus:outline-none border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5 mb-2"
                v-model="name"
                rules="required"
              />
              <VeeErrorMessage
                name="name"
                class="text-red-500 text-xs italic"
              />
              <VeeField
                type="number"
                name="top_speed"
                placeholder="TOP SPEED"
                class="bg-gray-50 border focus:outline-none border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5 mb-2"
                v-model="top_speed"
                rules="required"
              />
              <VeeErrorMessage
                name="top_speed"
                class="text-red-500 text-xs italic"
              />

              <VeeField
                placeholder="DESCRIPTION"
                name="description"
                class="bg-gray-50 border focus:outline-none border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5 mb-2"
                v-model="description"
                minlength="20"
                maxlength="120"
                type="text"
                rules="required"
              />
              <VeeErrorMessage
                name="description"
                class="text-red-500 text-xs italic"
              />

              <VeeField
                type="url"
                name="image_link"
                placeholder="IMAGE URL"
                class="bg-gray-50 border focus:outline-none border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5 mb-2"
                pattern="/([a-z\-_0-9\/\:\.]*\.(jpg|jpeg|png|gif))/i"
                v-model="image_link"
                accept="image/*"
                rules="required"
              />
              <VeeErrorMessage
                name="image_link"
                class="text-red-500 text-xs italic"
              />
              <VeeField
                type="number"
                name="price"
                placeholder="PRICE"
                class="bg-gray-50 border focus:outline-none border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5 mb-2"
                v-model="price"
                rules="required"
              />
              <VeeErrorMessage
                name="price"
                class="text-red-500 text-xs italic"
              />
            </div>
          </div>
          <div
            class="flex items-center justify-center p-2 border-t border-solid rounded-b border-blueGray-200"
          >
            <button
              class="w-full px-6 py-3 text-sm font-bold text-white uppercase transition-all duration-150 ease-linear rounded shadow outline-none bg-emerald-500 active:bg-emerald-600 hover:shadow-lg focus:outline-none"
              type="submit"
            >
              Add
            </button>
          </div>
        </div>
      </div>
    </div>
    <div class="fixed inset-0 z-40 bg-black opacity-25"></div>
  </VeeForm>
</template>

<script>
export default {
  name: 'AddCarForm',

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
    // required(value) {
    //   if (value && value.trim()) return true
    //   return 'This field is required'
    // },

    // eslint-disable-next-line space-before-function-paren
    handleSubmit() {
      const newCar = {
        name: this.name,
        top_speed: this.top_speed + 'km/h',
        description: this.description,
        image_link: this.image_link,
        price: this.price + '$'
      }
      fetch('https://vue-fake-server.herokuapp.com/cardata', {
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
        this.$router.push('/')
      })
    }
    // eslint-disable-next-line space-before-function-paren
  }
}
</script>
