<script setup lang="ts">
import { GoogleMap, AdvancedMarker, MarkerCluster, InfoWindow } from 'vue3-google-map'
import { WarmingCenters } from '../assets/warming-centers-2026.json'
import CenterInfo from '@/components/CenterInfo.vue'
import { transformCenters } from '@/utils'
const center = { lat: 39.7684, lng: -86.1581 }

const markers = transformCenters(WarmingCenters)
</script>

<template>
  <h1 class="text-4xl leading-[1.2] text-center my-10">Indy Warming Centers Map</h1>
  <p class="text-xl my-4">
    This map shows the warming centers in Indianapolis for the winter of 2025-2026. Please click on
    the markers to open details about each center. The map is centered on downtown Indianapolis.
    Please note that the information is subject to change and while I try to keep it up to date,
    sometimes things get changed without me knowing. Please contact the warming center directly for
    the most up-to-date information, you can find the phone number in the details popup.
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
  <p class="text-xl my-4">
    If you'd like to save this info for later or distribute it, you can click
    <a class="text-blue-600 visited:text-purple-600" href="/map/print">here to print this info</a>
  </p>
</template>
