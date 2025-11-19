<template>
  <div class="card" :class="{ 'card-flat': flat }">
    <div v-if="$slots.header" class="card-header">
      <slot name="header"></slot>
    </div>
    <div class="card-body">
      <slot></slot>
    </div>
    <div v-if="$slots.footer" class="card-footer">
      <slot name="footer"></slot>
    </div>
  </div>
</template>

<script>
import './card.css';

export default {
  name: 'Card',
  props: {
    flat: {
      type: Boolean,
      default: false,
    },
  },
};
</script>
