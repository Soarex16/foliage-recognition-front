<template>
  <div class="absolute left-0 bottom-0 overflow-y-hidden max-h-screen max-w-xl p-4 space-y-2 z-40">
    <transition-group
      leave-active-class="absolute hidden"
      enter-from-class="opacity-0"
      leave-to-class="opacity-0"
    >
      <notification
        class="transition-all inline-block duration-800 ease-in-out"
        v-for="(n, idx) in notifications"
        :key="idx"
        :variant="n.level"
        :dismissible="n.dismissible"
        @close="removeNotification(n.id)"
      >
        <template v-slot:header>
          <component :is="n.headerComp || defaultHeaderComp" :notification="n"/>
        </template>

        <template v-slot:body>
          <component :is="n.bodyComp || defaultBodyComp" :notification="n"/>
        </template>
      </notification>
    </transition-group>
  </div>
</template>

<script>
import {inject} from "vue";

import Notification from "./Notification.vue";
import DefaultNotificationBodyComponent from "./default-components/DefaultNotificationBodyComponent.vue";
import DefaultNotificationHeaderComponent from "./default-components/DefaultNotificationHeaderComponent.vue";
import {NOTIFICATIONS_INTERNAL_DATA_CONTEXT_KEY} from "./NotificationManager";
import nop from "../../utils/nop";

const defaultAlertContext = {
  notifications: [],
  removeNotification: nop,
  clearAll: nop
};

export default {
  name: 'NotificationBar',
  components: {Notification},
  setup() {
    const {notifications, removeNotification, clearAll} = inject(NOTIFICATIONS_INTERNAL_DATA_CONTEXT_KEY, defaultAlertContext);

    return {
      notifications,
      removeNotification,
      clearAll,
      defaultHeaderComp: DefaultNotificationHeaderComponent,
      defaultBodyComp: DefaultNotificationBodyComponent
    }
  }
}
</script>
