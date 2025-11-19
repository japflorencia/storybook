<template>
  <span :class="badgeClasses" :style="badgeStyle">
    {{ label }}
  </span>
</template>

<script>
import { computed } from 'vue';
import './badge.css';

export default {
  name: 'Badge',
  props: {
    label: {
      type: String,
      required: true,
    },
    variant: {
      type: String,
      default: 'primary',
      validator: (value) => ['primary', 'success', 'warning', 'danger', 'info'].includes(value),
    },
    size: {
      type: String,
      default: 'medium',
      validator: (value) => ['small', 'medium', 'large'].includes(value),
    },
  },
  setup(props) {
    const badgeClasses = computed(() => [
      'badge',
      `badge-${props.variant}`,
      `badge-${props.size}`,
    ]);

    const badgeStyle = computed(() => ({}));

    return {
      badgeClasses,
      badgeStyle,
    };
  },
};
</script>
