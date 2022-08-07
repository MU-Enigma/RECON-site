<script lang="ts">
import { defineComponent } from 'vue'
import axios from 'axios'
export default defineComponent({
  data() {
    return {
      core: []
    }
  },
  created() {
    this.getCore()
  },
  methods: {
    async getCore() {
      const res = await axios.get("https://raw.githubusercontent.com/MU-Enigma/store/master/recon/contributors.json")
      this.core = res.data
    }
  }
})
</script>

<template>
  <div class="flex items-center justify-center px-6 py-6">
    <section class="flex flex-col gap-8 container">
      <section>
        <h1 class="capitalize">{{ $router.currentRoute.value.name }}</h1>
        <h2 class="my-2">The people behind all this awesomeness</h2>
      </section>
      <section class="flex flex-wrap items-center justify-center gap-6 lg:gap-8">
        <a :href="p.profile" v-for="p in core.slice(0,2)" :key="p.name"
          class="flex grow sm:grow-0 items-center gap-4 lg:gap-6 p-3 lg:p-6 rounded-2xl bg-sec hover:scale-95 duration-200">
          <img :src="p.img" class="w-8 md:w-12 xl:w-14 h-8 md:h-12 xl:h-14 rounded-full">
          <section>
            <h3 class="font-bold">{{ p.name }}</h3>
            <h3>{{ p.role }}</h3>
          </section>
        </a>
        <section class="h-0 basis-full"></section>
        <a :href="p.profile" v-for="p in core.slice(2)" :key="p.name"
          class="flex grow sm:grow-0 items-center gap-4 lg:gap-6 p-3 lg:p-6 rounded-2xl bg-sec hover:scale-95 duration-200">
          <img :src="p.img" class="w-8 md:w-12 xl:w-14 h-8 md:h-12 xl:h-14 rounded-full">
          <section>
            <h3 class="font-bold">{{ p.name }}</h3>
            <h3>{{ p.role }}</h3>
          </section>
        </a>
      </section>
    </section>
  </div>
</template>