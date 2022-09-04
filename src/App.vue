<script lang="ts">
import Navbar from "./components/Navbar.vue"
import Footer from "./components/Footer.vue";
export default {
    created() {
        document.title = "RECON";
    },
    components: { Navbar, Footer }
}
</script>

<template>
  <Navbar />
  <router-view></router-view>
  <Footer />
</template>

<style scoped>
</style>
