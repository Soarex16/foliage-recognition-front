<template>
  <div class="absolute left-0 top-0 p-4 space-y-4 z-40">
    <notification variant="info"/>
    <notification variant="warning"/>
    <notification variant="danger"/>
    <notification variant="success"/>
  </div>
</template>

<script>
import Notification from "./Notification.vue"

export default {
  name: 'NotificationBar',
  components: {Notification}
}
</script>
