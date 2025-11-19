<template>
  <div class="icon-wrapper" :style="wrapperStyle">
    <i :class="iconClasses" :style="iconStyle"></i>
  </div>
</template>

<script>
import { computed } from 'vue';
import './icon.css';

export default {
  name: 'Icon',
  props: {
    name: {
      type: String,
      required: true,
      description: 'RPG Awesome icon name (without ra- prefix)',
    },
    size: {
      type: String,
      default: 'medium',
      validator: (value) => ['small', 'medium', 'large', 'xlarge'].includes(value),
    },
    color: {
      type: String,
      default: '#333333',
    },
    spin: {
      type: Boolean,
      default: false,
    },
    flip: {
      type: Boolean,
      default: false,
    },
  },
  setup(props) {
    const sizeMap = {
      small: '1rem',
      medium: '1.5rem',
      large: '2rem',
      xlarge: '3rem',
    };

    const iconClasses = computed(() => [
      'ra',
      `ra-${props.name}`,
      {
        'icon-spin': props.spin,
        'icon-flip': props.flip,
      },
    ]);

    const iconStyle = computed(() => ({
      color: props.color,
      fontSize: sizeMap[props.size],
    }));

    const wrapperStyle = computed(() => ({
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
    }));

    return {
      iconClasses,
      iconStyle,
      wrapperStyle,
    };
  },
};
</script>
