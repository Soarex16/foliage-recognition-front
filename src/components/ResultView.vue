<template>
  <card class="h-full w-full">
    <div class="flex justify-center items-center relative h-full w-full rounded-md border-2 border-gray-300 border-dashed">
      <img v-if="value" class="absolute object-contain w-full h-full " src="https://via.placeholder.com/1900x1200" alt="recognition result"/>
      <span v-else class="text-xl text-gray-400">Select images & press "Upload & recognize"</span>
    </div>
  </card>
</template>

<script>
import Card from "./Card.vue";

export default {
  name: 'ResultView',
  components: {Card},
  props: {
    value: File
  }
}
</script>
