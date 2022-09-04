<script setup>
import Menu from './Menu.vue';
import Social from './Social.vue';
</script>

<template>
  <footer class="flex items-center justify-center px-6 py-6 bg-sec">
    <section class="flex flex-col-reverse gap-12 md:flex-row justify-between container my-16">
      <div class="flex flex-wrap items-center md:items-start flex-col gap-6">
        <img src="../assets/badge.svg" alt="Recon">
        <a href="https://mu-enigma.org">Copyright © 2022 <span class="font-bold">ENIGMA</span></a>
        <Social />
      </div>
      <section class="flex flex-col items-center md:items-start gap-8 justify-between">
        <h2 class="font-bold"><span class="text-accent">R.E.C.O.N.</span> by ENIGMA</h2>
        <Menu class="flex flex-row gap-4" />
        <div class="flex justify-center gap-6">
          <img src="../assets/sponsors/raspi.svg" alt="Raspi" class="w-36" />
          <img src="../assets/sponsors/netgear.svg" alt="Netgear" class="w-36" />
        </div>
      </section>
    </section>
  </footer>
</template>
