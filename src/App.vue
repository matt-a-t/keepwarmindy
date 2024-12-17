<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <header>
    <div class="w-full max-w-screen-lg mx-auto px-4 justify-between items-center flex">
      <h1 class="text-2xl">Keep Warm Indy</h1>

      <nav class="space-x-4">
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink>
        <RouterLink to="map">Map</RouterLink>
      </nav>
    </div>
  </header>

  <RouterView />
</template>
