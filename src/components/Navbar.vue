<script setup lang="ts">
import Menu from './Menu.vue';
</script>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  data() {
    return {
      menu: false
    }
  }
})
</script>

<template>
  <nav class="w-screen flex justify-center items-center my-6 md:my-12">
    <header class="flex justify-between items-center container mx-6">
      <router-link to="/" class="flex items-center gap-3">
        <img src="../assets/recon.svg" alt="recon-logo">
        <span class="uppercase font-bold">recon</span>
      </router-link>

      <section class="md:hidden" @click="menu = true">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M3 6H21V8H3V6ZM3 11H21V13H3V11ZM3 16H21V18H3V16Z" fill="white" />
        </svg>
      </section>

      <Menu class="hidden md:flex" />
    </header>
  </nav>

  <div class="fixed z-50 top-0 w-screen h-screen flex md:hidden items-center justify-center" v-if="menu">
    <section class="bg-black/60 w-full h-full backdrop-blur-md" @click="menu = false"></section>
    <Menu class="fixed flex flex-col items-center" />
  </div>
</template>

<style scoped>
</style>
