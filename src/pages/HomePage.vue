<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col-12 p-3">
        <button class="btn btn-success me-3" @click="addTrip">Add trip</button>
        <span class="me-3">Trips = {{ trips?.length }}</span>
        <span>Peyton owes = ${{ unpaidTrips?.length * 2 }}</span>
      </div>
      <!-- <div class="col-12">
        <div v-for="t in trips" :key="t">
          <div class="form-check">
            <input class="form-check-input" type="checkbox" value="" id="" />
            <label class="form-check-label" for="">
              {{ t }}
            </label>
          </div>
        </div>
      </div> -->
      <div class="col-12">
        <div class="d-flex align-items-center p-2" v-for="t in trips" :key="t">
          <div class="form-check form-check-inline">
            <input
              type="checkbox"
              class="form-check-input"
              name=""
              :id="t.id"
              value="checkedValue"
              v-if="t.complete"
              checked
              @click="checkTrip(t.id)"
            />
            <input
              type="checkbox"
              class="form-check-input"
              name=""
              :id="t.id"
              value="checkedValue"
              v-else
              @click="checkTrip(t.id)"
            />
            <label class="form-check-label" :for="t.id">
              {{ t.dateTime }}
            </label>
          </div>
          <i
            class="mdi mdi-delete-forever text-danger selectable"
            title="Delete trip"
            @click="deleteTrip(t.id)"
          ></i>
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
      unpaidTrips: computed(() =>
        AppState.trips.filter((t) => t.complete == false)
      ),
      addTrip() {
        tripsService.addTrip();
      },
      checkTrip(id) {
        tripsService.checkTrip(id);
      },
      async deleteTrip(id) {
        if (await Pop.confirm()) {
          tripsService.deleteTrip(id);
        }
      },
    };
  },
};
</script>


<style lang="scss" scoped>
</style>