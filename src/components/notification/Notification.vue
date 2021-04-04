<template>
  <div class="shadow-xl rounded-md px-4 space-x-4 py-2 flex" :class="styles.bg">
    <div class="w-6 h-6">
      <component :is="styles.icon" class="w-auto h-full" :class="styles.iconColor"/>
    </div>

    <div class="flex flex-col">
      <span class="font-medium" :class="styles.header">
        <slot name="header">
          Attention needed
        </slot>
      </span>

      <span class="font-normal" :class="styles.body">
        <slot name="body">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        </slot>
      </span>
    </div>
  </div>
</template>

<script>
import WarningIcon from "../icons/WarningIcon.vue";
import InfoIcon from "../icons/InfoIcon.vue";
import ErrorIcon from "../icons/ErrorIcon.vue";
import CheckIcon from "../icons/CheckIcon.vue";

const variants = ['info', 'warning', 'danger', 'success'];

const variantMapping = {
  'info': {
    icon: InfoIcon,
    iconColor: 'text-blue-400',
    bg: 'bg-blue-50',
    header: 'text-blue-600',
    body: 'text-blue-600'
  },
  'warning': {
    icon: WarningIcon,
    iconColor: 'text-yellow-500',
    bg: 'bg-yellow-50',
    header: 'text-yellow-900',
    body: 'text-yellow-800'
  },
  'danger': {
    icon: ErrorIcon,
    iconColor: 'text-red-400',
    bg: 'bg-red-50',
    header: 'text-red-900',
    body: 'text-red-800'
  },
  'success': {
    icon: CheckIcon,
    iconColor: 'text-green-500',
    bg: 'bg-green-50',
    header: 'text-green-900',
    body: 'text-green-800'
  }
}

export default {
  name: "Notification",
  components: {WarningIcon},
  props: {
    variant: {
      type: String,
      default: 'info',
      validator(value) {
        return variants.indexOf(value) !== -1;
      }
    }
  },
  computed: {
    styles() {
      return variantMapping[this.variant];
    }
  }
}
</script>

