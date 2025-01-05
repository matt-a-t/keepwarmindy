<script setup lang="ts">
import { GoogleMap, AdvancedMarker, MarkerCluster, InfoWindow } from 'vue3-google-map'
import { WarmingCenters } from '../assets/warming-centers-2025.json'
import CenterInfo from '@/components/CenterInfo.vue'
import { transformCenters } from '@/utils'
const center = { lat: 39.7684, lng: -86.1581 }

const markers = transformCenters(WarmingCenters)
</script>

<template>
  <h2 class="text-2xl my-10">Indy Warming Centers Map</h2>
  <p class="text-lg my-4">
    This map shows the warming centers in Indianapolis for the year 2025. Please click on the
    markers to open details about each center. The map is centered on downtown Indianapolis. Please
    note that the information is subject to change and while we strive to keep it up to date, we
    cannot guarantee the accuracy of the information. Please contact the warming center directly for
    the most up-to-date information.
  </p>
  <p>
    Please click
    <a class="text-blue-600 visited:text-purple-600" href="/map/print">here to print this info</a>
  </p>
  <div id="map">
    <GoogleMap
      apiKey="AIzaSyC42BpSolRPRuRQFx3513Q1D-J50Q1wS9c"
      style="width: 100%; height: 800px"
      :center="center"
      :zoom="13"
      mapId="warming-centers"
    >
      <MarkerCluster>
        <AdvancedMarker v-for="marker in markers" :key="marker.id" :options="marker.options">
          <InfoWindow>
            <CenterInfo :marker="marker" />
          </InfoWindow>
        </AdvancedMarker>
      </MarkerCluster>
    </GoogleMap>
  </div>
</template>
