<script lang="ts" setup>
defineProps({
  marker: {
    type: Object,
    required: true,
  },
  setHidden: {
    type: Function,
    required: false,
  },
  hidden: {
    type: Array,
    required: false,
  },
})
</script>
<template>
  <div class="flex flex-col md:flex-row justify-around p-4">
    <div>
      <h2 class="text-xl">{{ `${marker.id + 1}. ${marker.name}` }}</h2>
      <p class="font-bold">{{ marker.address }}, {{ marker.zip }}</p>
      <p>{{ marker.phone }}</p>
      <a :href="marker.url" class="text-blue-600 visited:text-purple-600">{{ marker.url }}</a>
      <label class="block print:hidden">
        <input
          type="checkbox"
          :value="hidden?.includes(marker.id)"
          @change="setHidden(marker.id)"
        />
        Hide from print
      </label>
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
</template>
