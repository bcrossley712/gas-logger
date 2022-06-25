<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col-12">
        <button class="btn btn-success" @click="addTrip">Add trip</button>
        <span>Trips = {{ trips.length }}</span>
      </div>
      <div class="col-12">
        <ul v-for="t in trips" :key="t">
          <li>{{ t }}</li>
        </ul>
      </div>
    </div>
  </div>
</template>


<script>
import { computed, ref } from "@vue/reactivity";
import Pop from "../utils/Pop";
import { logger } from "../utils/Logger";
import { AppState } from "../AppState";
export default {
  setup() {
    return {
      trips: computed(() => AppState.trips),
      addTrip() {
        AppState.trips.push(new Date());
      },
    };
  },
};
</script>


<style lang="scss" scoped>
</style>