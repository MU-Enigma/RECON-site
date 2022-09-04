<script lang="ts">
import { defineComponent } from 'vue'
export default defineComponent({
  created() {
    document.title = "RECON"
  },
  methods: {
    goto(refName: string) {
      window.scrollTo({
        top: document.getElementById(refName).offsetTop,
        behavior: 'smooth'
      })
    }
  }
})
</script>

<template>
  <div class="flex flex-col gap-20 items-center justify-center">
    <section id="home" class="flex flex-col gap-12 p-6 sm:p-14 container h-home lg:h-home-xl rounded-2xl bg">
      <section class="flex flex-col gap-4">
        <h1 class="xl:text-4xl mt-16 md:mt-0">Clustered up for performance</h1>
        <h2 class="xl:text-3xl"><span class="text-accent uppercase">recon</span> the OctaPi</h2>
      </section>
      <button
        @click="goto('about-container')"
        class="uppercase bg-accent rounded-lg p-4 text-slate-900 font-bold w-32 cursor-pointer hover:scale-95 duration-150">
        know more
      </button>
    </section>

    <section id="about-container" class="flex flex-col min-h-screen items-center mb-12 py-16 lg:py-0 gap-20 lg:gap-0 lg:justify-around">
      <section id="about"
      class="flex flex-col-reverse gap-8 lg:gap-0 lg:flex-row lg:items-center lg:justify-between container px-6 md:px-0 lg:mx-6">
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
      <img src="../assets/raspi.jpg" class="rounded-xl w-96">
    </section>

    <section id="schema"
      class="flex flex-col gap-8 lg:gap-0 lg:flex-row lg:items-center lg:justify-between container px-6 md:px-0 lg:mx-6">
      <img src="../assets/raspi.svg" class="w-96" />
      <section class="flex flex-col gap-4 lg:w-3/5">
        <p class="flex flex-col gap-3">
        <h1>What is a Raspberry Pi?</h1>
        <span>
         The Raspberry Pi is a low cost, credit-card sized computer that plugs into a computer monitor or TV, and uses a standard keyboard and mouse. It is a capable little device that enables people of all ages to explore computing, and to learn how to program in languages like Scratch and Python.<br /><br />
         It’s capable of doing everything you’d expect a desktop computer to do, from browsing the internet and playing high-definition video, to making spreadsheets, word-processing, and playing games
        </span>
        </p>
      </section>
    </section>
    </section>
  </div>
</template>

<style scoped>
.bg {
  background: url(../assets/recon-hero.png) center no-repeat;
}
</style>
