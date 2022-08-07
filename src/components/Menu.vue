<template>
  <ul class="justify-center gap-10">
    <li class="font-bold hover:text-accent duration-300" :class="{'text-accent': $router.currentRoute.value.name == 'contributors'}">
      <router-link to="/contributors">Contributors</router-link>
    </li>
    <li class="font-bold hover:text-accent duration-300" :class="{'text-accent': $router.currentRoute.value.name == 'gallery'}">
      <router-link to="/gallery">Gallery</router-link>
    </li>
    <li class="font-bold hover:text-accent duration-300" :class="{'text-accent': $router.currentRoute.value.name == 'stats'}">
      <router-link to="/stats">Stats</router-link>
    </li>
  </ul>
</template>