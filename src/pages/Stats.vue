<script>
import { defineComponent } from 'vue'
import axios from 'axios'
export default defineComponent({
  data() {
    return {
      status: [],
      eth: "",
      wlan: ""
    }
  },
  created() {
    this.getstatus()
    window.scrollTo(0, 0)
  },
  methods: {
    async getstatus() {
      try {
        const res = await axios.get("https://recon.hpc.mu-enigma.org/get-ips")
        this.status = res.data
        this.eth = this.status.IPs.eth0
        this.wlan = this.status.IPs.wlan0
        console.log(this.status)
      } catch (error) {
        console.log(error)
      }
    }
  }
})
</script>

<template>
  <div class="flex items-center justify-center px-6 py-6">
    <section class="flex flex-col min-h-screen gap-8 container">
      <section>
        <h1 class="capitalize">{{ $router.currentRoute.value.name }}</h1>
        <h2 class="my-2">
          RECON cluster is
          <span class="text-accent" v-if="eth">Online</span>
          <span v-else>Offline</span>
        </h2>
      </section>
      <section class="flex flex-col gap-2" v-if="eth">
        <span>eth0: {{ eth }} (Recommended)</span>
        <span>wlan0: {{ wlan }}</span>
      </section>
    </section>
  </div>
</template>