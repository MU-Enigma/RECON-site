<script setup lang="ts">
import Navbar from '../components/Navbar.vue'
</script>

<script lang="ts">
export default {
  created() {
    document.title = "RECON"
  }
}
</script>

<template>
  <Navbar />
  <div class="flex flex-col gap-20 items-center justify-center">
    <section id="home" class="flex flex-col gap-12 p-6 sm:p-14 container h-home lg:h-home-xl rounded-2xl bg">
      <section class="flex flex-col gap-4">
        <h1 class="xl:text-4xl">Clustered up for performance</h1>
        <h2 class="xl:text-3xl"><span class="text-accent uppercase">recon</span> the OctaPi</h2>
      </section>
      <button
        class="uppercase bg-accent rounded-lg p-4 text-slate-900 font-bold w-32 cursor-pointer hover:scale-95 duration-150">
        know more
      </button>
    </section>

    <section id="about"
      class="flex flex-col gap-4 lg:gap-0 lg:flex-row items-center lg:justify-between container px-6 lg:px-0 lg:mx-6 mb-20">
      <section class="flex flex-col gap-4 lg:w-3/5">
        <p class="flex flex-col gap-3">
        <h1>About the cluster</h1>
        <span>
          Raspberry-Pi Engineered Cluster over Network or RECON as we call it, is the only ARM cluster at Mahindra
          University.
        </span>
        <span>
          Developed by the students of Enigma: The CS club, in an effort to spread the idea of parallel computing and
          multi-threaded processing amongst students and faculty alike.
        </span>
        <span>
          Being modular in design allows for an opportunity to be scaled up and have more Pis, depending on the
          required
          computing potential.
        </span>
        </p>
      </section>
      <img src="../assets/raspi.jpg" class="rounded-xl w-full lg:w-1/3 self-center">
    </section>
  </div>
</template>

<style scoped>
.bg {
  background: url(../assets/recon-hero.png) center no-repeat;
}
</style>
