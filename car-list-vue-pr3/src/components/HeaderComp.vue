<template>
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 sticky top-0 z-50">
    <nav
      class="z-50 text-center mx-auto max-w-4xl font-medium text-gray-800 p-2 shadow-md shadow-pink-500 border-b-2 rounded-lg bg-pink-50 whitespace-nowrap"
    >
      <div class="flex justify-between">
        <ul class="flex justify-center items-center">
           <li>
          <router-link to="/" title="Home">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-6 w-6 ml-2 hover:text-slate-900 rounded-lg transition duration-300 hover:scale-125"
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
          class="flex justify-center items-center text-center bg-slate-200 shadow-md shadow-pink-200 hover:bg-slate-50 rounded-xl p-4"
        >
          <li>
            <router-link to="/" title="Add New Car">
             <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
              <path stroke-linecap="round" stroke-linejoin="round" d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
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
