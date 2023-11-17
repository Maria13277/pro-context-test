<template>
  <div class="result-square">
    <div class="result-square__square" @click="deleteSquare" :style="`background: ${item.color}`"></div>
  </div>
</template>

<script>
import { defineComponent, computed, ref } from 'vue';
import { useListStore } from '../stores/listStore.js'

export default defineComponent({
  name: 'ResultItemSquare',
  props: {
    item: {
      type: Object,
      default: () => ({})
    },
    parentId: {
      type: Number,
      default: NaN
    },
    allowDelete: {
      type: Boolean,
      default: true
    }
  },
  setup(props) {
    const listStore = useListStore()

    let deleteSquare = () => {
      listStore.deleteItemSquare(props.parentId, props.item.id)
    }

    return {
      deleteSquare,
    }
  }
})
</script>

<style scoped lang="scss">
.result-square {
  display: flex;
  flex-wrap: wrap;
  cursor: pointer;

  &:last-child {
    margin-bottom: 0;
  }

  &__square {
    margin-left: 5px;
    height: 15px;
    width: 15px;
    margin-bottom: 10px;
    transition: .2s all;

    &:hover {
      transform: scale(1.25);
    }
  }
}
</style>