<script lang="ts">
import Navbar from "./components/Navbar.vue"
export default {
    created() {
        document.title = "RECON";
    },
    components: { Navbar }
}
</script>

<template>
  <Navbar />
  <router-view></router-view>
</template>

<style scoped>
</style>
