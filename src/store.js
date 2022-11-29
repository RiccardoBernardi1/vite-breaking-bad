import { reactive } from "vue";

export const store = reactive({
  selectValue: "",
  characters: [],
  loading: true,
});
