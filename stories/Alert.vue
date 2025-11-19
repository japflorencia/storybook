<template>
  <div :class="alertClasses">
    <div class="alert-icon">
      <span v-if="type === 'success'">✓</span>
      <span v-else-if="type === 'danger'">✕</span>
      <span v-else-if="type === 'warning'">!</span>
      <span v-else>ℹ</span>
    </div>
    <div class="alert-content">
      <h5 v-if="title" class="alert-title">{{ title }}</h5>
      <p class="alert-message">{{ message }}</p>
      <slot></slot>
    </div>
    <button v-if="dismissible" class="alert-close" @click="$emit('close')">×</button>
  </div>
</template>

<script>
import { computed } from 'vue';
import './alert.css';

export default {
  name: 'Alert',
  emits: ['close'],
  props: {
    type: {
      type: String,
      default: 'info',
      validator: (value) => ['success', 'danger', 'warning', 'info'].includes(value),
    },
    title: {
      type: String,
      default: '',
    },
    message: {
      type: String,
      required: true,
    },
    dismissible: {
      type: Boolean,
      default: true,
    },
  },
  setup(props) {
    const alertClasses = computed(() => [
      'alert',
      `alert-${props.type}`,
    ]);

    return {
      alertClasses,
    };
  },
};
</script>
