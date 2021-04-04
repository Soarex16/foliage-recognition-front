<template>
  <form @submit.prevent="sendData" class="relative flex flex-col shadow bg-white rounded-md p-2 h-full overflow-x-auto max-h-full max-w-full" action="" method="get">
    <div class="flex-1 flex flex-row xl:flex-col px-2 xl:py-4 bg-white space-x-4 xl:space-x-0 xl:space-y-4">
      <image-input
          v-for="waveLen in Object.keys(images)"
          :title="waveLen + ' nm'"
          :id="waveLen.toString()"
          :key="waveLen"
          v-model="images[waveLen]"
      >
      </image-input>
    </div>

    <div class="fixed left-0 px-2 pb-2 flex sticky bottom-0 z-10">
      <button type="submit" class="flex-1 transition-shadow shadow-xl hover:shadow-xl py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
        Upload & Recognize
      </button>
    </div>
  </form>
</template>

<script>
import ImageInput from "./ImageInput.vue";
import Card from "./Card.vue";
import Spinner from "./Spinner.vue";

export default {
  name: 'InputForm',
  components: {Spinner, Card, ImageInput},
  data() {
    return {
      images: {
        470: undefined,
        540: undefined,
        635: undefined,
        735: undefined,
        880: undefined
      }
    }
  },
  methods: {
    updateFiles(field, file) {
      this.images[field] = file;
    },
    async sendData() {
      this.$emit('request-start');

      const formData = new FormData();
      for (const [field, image] of Object.entries(this.images)) {
        formData.append(field, image);
      }

      let result, error;
      try {
        const response = await fetch({
          url: this.$appConfig.API_ENDPOINT,
          method: "POST",
          body: formData
        });
        result = await response.json();
      } catch (e) {
        error = e;
      } finally {
        this.$emit('request-finish', result, error);
      }
    }
  }
}
</script>
