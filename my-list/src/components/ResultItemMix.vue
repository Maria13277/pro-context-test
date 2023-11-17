<template>
  <div class="result-item-mix">
    <ResultItemSquare 
      v-for="(item, index) of getMixedList" 
      :key="`mix-square-${index + (Math.random() - 0.5)}`" 
      :item="item" 
      :parentId="item.parentId"
    />
  </div>
</template>

<script>
import { defineComponent, computed, ref } from 'vue';
import { useListStore } from '../stores/listStore.js'

export default defineComponent({
  name: 'ResultItemMix',
  props: {
    listId: {
      type: Number,
      default: NaN
    }
  },
  setup(props) {
    const listStore = useListStore()
    const countItems = ref(0)
    
    const getMixedList = computed(() => {
      const resultArr = []
      const currentList = listStore.getListById(props.listId)
      const changedItems = currentList.items.reduce((prev, current) => {
        prev = [...prev, {
          parentId: currentList.id,
          ...current
        }]

        return prev
      }, []).filter(item => item.check)

      for (let item of changedItems) {
        for (let i = 0; i < item.count; i++) {
          resultArr.push(item)
        }
      }

      return resultArr.sort(() => Math.random() - 0.5)
    }) 

    return {
      countItems,
      getMixedList
    }
  }
})
</script>

<style lang="scss">
  .result-item-mix {
    display: flex;
    flex-wrap: wrap;
    margin-bottom: 5px;
  }
</style>