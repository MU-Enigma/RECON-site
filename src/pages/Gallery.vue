<script lang="ts">
import { defineComponent } from 'vue'
import axios from 'axios'
export default defineComponent({
  data() {
    return {
      imgs: []
    }
  },
  created() {
    this.getImgs()
  },
  methods: {
    getImgs() {
      axios.get("https://api.github.com/repos/MU-Enigma/store/contents/recon/images")
        .then((res) => {
          const gal = res.data
          gal.forEach((el: { download_url: any }) => {
            this.imgs.push(el.download_url)
          })
          console.log(this.imgs)
        })
    }
  }
})
</script>

<template>
  <div class="flex items-center justify-center px-6 py-6">
    <section class="flex flex-col gap-8 container">
      <section>
        <h1 class="capitalize">{{ $router.currentRoute.value.name }}</h1>
        <h2 class="my-2">A peek behind the scenes</h2>
      </section>
      <section class="grid gap-2 min-h-screen lg:gap-4 aspect-square gallery mb-12">
        <img v-for="im in imgs" :key="im" :src="im"
          class="w-0 h-0 min-w-full min-h-full grayscale rounded-sm duration-300 ease-in-out object-cover hover:w-80 hover:h-80 hover:grayscale-0 hover:rounded-xl">
      </section>
    </section>
  </div>
</template>

<style scoped>
.gallery {
  grid-template-columns: repeat(2, auto);
}

@media (min-width: 768px) {
  .gallery {
    grid-template-columns: repeat(3, auto);
  }
}
</style>