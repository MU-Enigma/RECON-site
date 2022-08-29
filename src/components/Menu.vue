<template>
  <ul class="justify-center gap-10">
    <li class="font-bold hover:text-accent duration-300">
      <router-link to="/contributors">Contributors</router-link>
    </li>
    <li class="font-bold hover:text-accent duration-300">
      <router-link to="/gallery">Gallery</router-link>
    </li>
    <li class="font-bold hover:text-accent duration-300 hidden">
      <router-link to="/stats">Stats</router-link>
    </li>
  </ul>
</template>

<style>
li a.router-link-exact-active {
  color: #EA25F9;
}
</style>