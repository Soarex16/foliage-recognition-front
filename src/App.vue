<template>
  <notification-bar/>
  <split-panel>
    <template v-slot:left>
      <result-view/>
    </template>

    <template v-slot:right>
      <input-form
          @request-start="loading = true"
          @request-finish="showResult"
      />
    </template>
  </split-panel>
  <busy-overlay v-show="loading"/>
</template>

<script>
import ResultView from "./components/ResultView.vue";
import InputForm from "./components/InputForm.vue";
import SplitPanel from "./components/SplitPanel.vue";
import BusyOverlay from "./components/BusyOverlay.vue";
import NotificationBar from "./components/notification/NotificationBar.vue";

export default {
  name: "App",
  components: {
    NotificationBar,
    BusyOverlay,
    SplitPanel,
    InputForm,
    ResultView
  },
  data() {
    return {
      loading: false,
      result: undefined
    }
  },
  methods: {
    showResult(value, err) {
      this.loading = false;

      if (err) {
        //TODO: show error popup
        return;
      }
    }
  }
}
</script>
