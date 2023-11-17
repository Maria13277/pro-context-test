<template>
  <div class="button">
    <h4 class="button__title">{{ name }}</h4>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed, ref } from 'vue';

export default defineComponent({
  name: 'Button',
  props: {
    name: {
      type: String,
      default: ''
    }
  }
})
</script>

<style lang="scss">
    .button {
      border-radius: 10px;
      background: #4485f5;
      padding: 5px 13px;
      cursor: pointer;

      &__title {
        color: white;
        font-weight: 400;
      }
    }
</style>