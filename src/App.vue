<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <header>
    <div
      class="w-full mx-auto px-4 justify-between items-center flex bg-gradient-to-r from-red-500 to-orange-500 text-white"
    >
      <div class="flex items-center space-x-4">
        <img src="/icon.svg" alt="Keep Warm Indy Icon" class="w-12 h-12" />
        <h1 class="text-2xl hidden md:block">Keep Warm Indy</h1>
      </div>

      <nav class="space-x-4">
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="map">Map</RouterLink>
        <RouterLink to="heater-bloc">Heater Bloc</RouterLink>
        <RouterLink to="/about">About</RouterLink>
      </nav>
    </div>
  </header>

  <main class="max-w-screen-lg mx-auto px-4">
    <RouterView />
  </main>
</template>
