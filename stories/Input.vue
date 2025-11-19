<template>
  <div class="input-wrapper">
    <label v-if="label" :for="inputId" class="input-label">
      {{ label }}
      <span v-if="required" class="input-required">*</span>
    </label>
    <input
      :id="inputId"
      :type="type"
      :class="inputClasses"
      :placeholder="placeholder"
      :required="required"
      :disabled="disabled"
      :readonly="readonly"
      :value="modelValue"
      @input="$emit('update:modelValue', $event.target.value)"
      @blur="$emit('blur')"
      @focus="$emit('focus')"
    />
    <p v-if="error" class="input-error">{{ error }}</p>
    <p v-if="helperText && !error" class="input-helper">{{ helperText }}</p>
  </div>
</template>

<script>
import { computed } from 'vue';
import './input.css';

export default {
  name: 'Input',
  emits: ['update:modelValue', 'blur', 'focus'],
  props: {
    label: {
      type: String,
      default: '',
    },
    type: {
      type: String,
      default: 'text',
      validator: (value) =>
        ['text', 'email', 'password', 'number', 'tel', 'url', 'date', 'time'].includes(value),
    },
    modelValue: {
      type: [String, Number],
      default: '',
    },
    placeholder: {
      type: String,
      default: '',
    },
    required: {
      type: Boolean,
      default: false,
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    readonly: {
      type: Boolean,
      default: false,
    },
    error: {
      type: String,
      default: '',
    },
    helperText: {
      type: String,
      default: '',
    },
  },
  setup(props) {
    const inputId = `input-${Math.random().toString(36).substr(2, 9)}`;

    const inputClasses = computed(() => [
      'input',
      {
        'input-error': props.error,
        'input-disabled': props.disabled,
      },
    ]);

    return {
      inputId,
      inputClasses,
    };
  },
};
</script>
