import { reactive } from '../node_modules/vue/dist/vue'

// NOTE AppState is a reactive object to contain app level data
export const AppState = reactive({
  user: {},
  account: {},
  trips: []
})
