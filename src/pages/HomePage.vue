<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col-12 p-3">
        <button class="btn btn-success me-3" @click="addTrip">Add trip</button>
        <span class="me-3">Trips = {{ trips?.length }}</span>
        <span>Peyton owes = ${{ trips?.length * 2 }}</span>
      </div>
      <div class="col-12">
        <div v-for="t in trips" :key="t">
          <div class="form-check">
            <input class="form-check-input" type="checkbox" value="" id="" />
            <label class="form-check-label" for="">
              {{ t }}
            </label>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
import { computed, ref } from "@vue/reactivity";
import Pop from "../utils/Pop";
import { logger } from "../utils/Logger";
import { AppState } from "../AppState";
import { tripsService } from "../services/TripsService";
import { onMounted } from "@vue/runtime-core";
export default {
  setup() {
    onMounted(() => {
      try {
        tripsService.loadLocal();
      } catch (error) {
        logger.error(error);
        Pop.toast(error.message, "error");
      }
    });
    return {
      trips: computed(() => AppState.trips),
      addTrip() {
        tripsService.addTrip();
      },
    };
  },
};
</script>


<style lang="scss" scoped>
</style>