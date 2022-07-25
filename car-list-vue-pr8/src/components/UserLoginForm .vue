<template>
  <div
    class="flex flex-col px-2 py-4 justify-center items-center sm:mx-4 sm:px-6 lg:px-8"
  >
    <div class="w-full max-w-md mx-auto">
      <h2
        class="text-xl font-extrabold text-center bg-gray-800 px-2 py-4 mt-4 shadow-lg rounded-t-lg shadow-green-400 text-white lg:text-3xl md:text-xl"
      >
        {{ submitButtonCaption }} to your account
      </h2>
    </div>
    <div
      class="mt-4 shadow-md sm:mx-auto sm:w-full hover:shadow-sm sm:max-w-md"
    >
      <div
        class="px-4 relative py-8 shadow-lg -mt-4 shadow-orange-400 transition duration-500 bg-gray-800 hover:opacity-95 sm:px-10"
      >
        <VeeForm @submit="onSubmit">
          <VeeErrorMessage name="email" class="text-red-500 text-xs italic" />
          <VeeField
            type="email"
            name="email"
            placeholder="Email"
            class="bg-gray-50 border focus:outline-none border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5 mb-2"
            v-model="formData.email"
            :rules="{ required: true, email: true }"
          />
          <VeeErrorMessage
            name="password"
            class="text-red-500 text-xs italic"
          />
          <VeeField
            type="password"
            name="password"
            placeholder="Password"
            class="bg-gray-50 border focus:outline-none border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5 mb-2"
            v-model="formData.password"
            :rules="{ required: true, password: true, min: 8, max: 12 }"
          />

          <button
            class="w-full px-6 py-3 text-sm font-bold text-white uppercase transition-all duration-150 ease-linear rounded shadow outline-none bg-emerald-500 active:bg-emerald-600 hover:shadow-lg focus:outline-none"
            type="submit"
            :style="{
              backgroundColor: loading ? '#f3f3f3' : '#3498db'
            }"
          >
            {{ submitButtonCaption }}
          </button>

          <p class="mt-4 text-base text-gray-300 italic">
            <span class="text-orange-300">
              <button type="button" mode="flat" @click="switchMode">
                {{ switchModeCaption }}
              </button>
            </span>
          </p>
        </VeeForm>
        <span
          class="absolute top-0 left-0 z-50 ml-8 p-2 m-2 -mt-1 font-extrabold transition -translate-y-3 bg-pink-400 rounded-full shadow-2xl cursor-pointer text-neutral-100 -translate-x-7 duration-600 shadow-orange-500 hover:ring-4 ring-gray-100"
          @click="goToHome()"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="w-6 h-6 text-slate-900"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            stroke-width="2"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
            />
          </svg>
        </span>
        <span
          class="text-red-600 absolute bottom-0 right-0 m-2 p-2 rounded-md bg-slate-900"
          v-if="error"
          >{{ error }}</span
        >
        <span
          class="text-white text absolute animate-bounce bottom-0 right-0 m-2 p-2 rounded-md"
          v-if="isLoading"
        >
          <span class="spinner">Loading</span>
        </span>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  // eslint-disable-next-line space-before-function-paren
  data() {
    return {
      error: null,
      mode: 'login',
      formIsValid: true,
      isLoading: false,
      formData: {
        email: '',
        password: ''
      }
    }
  },

  computed: {
    // eslint-disable-next-line space-before-function-paren
    submitButtonCaption() {
      if (this.mode === 'login') {
        return 'Login'
      } else {
        return 'Register'
      }
    },
    // eslint-disable-next-line space-before-function-paren
    switchModeCaption() {
      if (this.mode === 'login') {
        return 'Signup instead'
      } else {
        return 'Login instead'
      }
    }
  },
  methods: {
    // eslint-disable-next-line space-before-function-paren
    goToHome() {
      this.$router.push('/')
    },
    // eslint-disable-next-line space-before-function-paren
    async onSubmit() {
      this.isLoading = true
      this.formIsValid = true
      const actionPayload = {
        email: this.formData.email,
        password: this.formData.password
      }
      try {
        if (this.mode === 'login') {
          await this.$store.dispatch('signin', actionPayload)
          this.$router.push('/')
        } else {
          await this.$store.dispatch('signup', actionPayload)
          this.$router.push('/')
        }
      } catch (err) {
        this.error = 'Something went wrong'
      }
      this.isLoading = false
    },
    // eslint-disable-next-line space-before-function-paren
    switchMode() {
      if (this.mode === 'login') {
        this.mode = 'register'
      } else {
        this.mode = 'login'
      }
    }
  }
}
</script>

<style>
.login-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
}
.spinner {
  animation: spin 1s linear infinite;
}
</style>
