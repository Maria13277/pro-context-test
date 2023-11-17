<template>
  <div class="result-item" v-if="item.check">
    <ResultItemSquare v-for="count of item.count" :key="`info-square-${count + (Math.random() - 0.5)}`" :item="item" :parentId="parentId" />
  </div>
</template>

<script lang="ts">
import { defineComponent, computed, ref, watch } from 'vue';

export default defineComponent({
  name: 'ResultItem',
  props: {
    item: {
      type: Object,
      default: () => {}
    },
    parentId: {
      type: Number,
      default: NaN
    }
  }
})
</script>

<style lang="scss">
  .result-item {
    display: flex;
    flex-wrap: wrap;
    margin-bottom: 5px;
  }
</style>