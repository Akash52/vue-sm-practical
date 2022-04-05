<template>
  <div class="sticky top-0 z-50 px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
    <nav
      class="z-50 max-w-4xl p-2 mx-auto font-medium text-center text-gray-800 border-b-2 rounded-lg shadow-md shadow-pink-500 bg-pink-50 whitespace-nowrap"
    >
      <div class="flex justify-between">
        <ul class="flex items-center justify-center">
          <li>
            <router-link to="/" title="Home">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="w-6 h-6 ml-2 transition duration-300 rounded-lg hover:text-slate-900 hover:scale-125"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                stroke-width="2"
                title="Home"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                />
              </svg>
            </router-link>
          </li>
        </ul>
        <ul
          class="flex items-center justify-center p-4 text-center shadow-md bg-slate-200 shadow-pink-200 hover:bg-slate-50 rounded-xl"
        >
          <li>
            <router-link :to="{ name: 'AddCar' }">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="w-6 h-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                stroke-width="2"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </router-link>
          </li>
        </ul>
      </div>
    </nav>
  </div>
</template>
<script>
export default {}
</script>
