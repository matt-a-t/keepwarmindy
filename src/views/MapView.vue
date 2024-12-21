<script setup lang="ts">
import { GoogleMap, AdvancedMarker, MarkerCluster, InfoWindow } from 'vue3-google-map'
import { WarmingCenters } from '../assets/warming-centers-2024.json'
const center = { lat: 39.7684, lng: -86.1581 }

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const markers = WarmingCenters.map((center: any, i: number) => ({
  id: i,
  name: center.Name,
  options: {
    position: {
      lat: center.lat,
      lng: center.lng,
    },
    title: center.Name,
  },
  notes: center.Notes,
  address: center.Address,
  zip: center.Zip,
  hours: center.Hours,
}))
</script>

<template>
  <h2 class="text-2xl my-10">Indy Warming Centers Map</h2>
  <p class="text-lg my-4">
    This map shows the warming centers in Indianapolis for the year 2024. Please click on the
    markers to open details about each center. The map is centered on downtown Indianapolis. Please
    note that the information is subject to change and while we strive to keep it up to date, we
    cannot guarantee the accuracy of the information. Please contact the warming center directly for
    the most up-to-date information.
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
            <div class="flex flex-col md:flex-row">
              <div>
                <h2 class="text-lg">{{ marker.name }}</h2>
                <p class="font-bold">{{ marker.address }}, {{ marker.zip }}</p>
              </div>
              <table class="table-auto ml-4">
                <thead>
                  <tr>
                    <th>Day</th>
                    <th>Hours</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Monday</td>
                    <td>{{ marker.hours.Monday }}</td>
                  </tr>
                  <tr>
                    <td>Tuesday</td>
                    <td>{{ marker.hours.Tuesday }}</td>
                  </tr>
                  <tr>
                    <td>Wednesday</td>
                    <td>{{ marker.hours.Wednesday }}</td>
                  </tr>
                  <tr>
                    <td>Thursday</td>
                    <td>{{ marker.hours.Thursday }}</td>
                  </tr>
                  <tr>
                    <td>Friday</td>
                    <td>{{ marker.hours.Friday }}</td>
                  </tr>
                  <tr>
                    <td>Saturday</td>
                    <td>{{ marker.hours.Saturday }}</td>
                  </tr>
                  <tr>
                    <td>Sunday</td>
                    <td>{{ marker.hours.Sunday }}</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p>{{ marker.notes }}</p>
          </InfoWindow>
        </AdvancedMarker>
      </MarkerCluster>
    </GoogleMap>
  </div>
</template>
