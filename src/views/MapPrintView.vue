<script setup lang="ts">
import { GoogleMap, AdvancedMarker, MarkerCluster } from 'vue3-google-map'
import { WarmingCenters } from '../assets/warming-centers-2025.json'
import CenterInfo from '@/components/CenterInfo.vue'
import { transformCenters } from '@/utils'
import { ref } from 'vue'
const center = { lat: 39.7684, lng: -86.1581 }

const markers = transformCenters(WarmingCenters)
const hidden = ref([] as number[])
const print = () => {
  window.print()
}
const setHidden = (id: number) => {
  if (hidden.value.includes(id)) {
    hidden.value = hidden.value.filter((markerId) => markerId !== id)
  } else {
    hidden.value = [...hidden.value, id]
  }
}
</script>

<template>
  <div class="my-4">
    <h2 class="text-2xl">Indy Warming Centers Map</h2>
    <button
      @click="print"
      class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded print:hidden"
    >
      Print
    </button>
  </div>
  <div id="map">
    <GoogleMap
      apiKey="AIzaSyC42BpSolRPRuRQFx3513Q1D-J50Q1wS9c"
      style="width: 100%; height: 800px"
      :center="center"
      :zoom="13"
      mapId="warming-centers"
    >
      <MarkerCluster>
        <div v-for="marker in markers" :key="marker.id">
          <AdvancedMarker
            v-if="!hidden.includes(marker.id)"
            :options="marker.options"
            :pin-options="marker.pinOptions"
          >
          </AdvancedMarker>
        </div>
      </MarkerCluster>
    </GoogleMap>
  </div>
  <div>
    <div v-for="marker in markers" :key="marker.id">
      <div :class="{ 'print:hidden': hidden.includes(marker.id), 'py-4': true }">
        <CenterInfo :marker="marker" :setHidden="setHidden" :hidden="hidden" />
      </div>
    </div>
  </div>
</template>
