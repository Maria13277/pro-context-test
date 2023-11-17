<template>
  <div class="wrapper">
    <div class="list-header">
      <h3 class="list-header__title">{{ list.name }}</h3>
      <div class="list-header-btn">
        <Button 
          v-if="list.isOpen"
          @click="onBtnClick" 
          :name="list.isMixed ? 'Сортировать' : 'Перемешать'"
        />
      </div>
    </div>
    <div v-if="!list.isMixed" class="list-info">
      <template v-if="list.isOpen">
        <ResultItem 
          v-for="(item, index) in list.items" 
          :key="`info-${index + (Math.random() - 0.5)}`"
          :item="item" 
          :parentId="list.id" 
        />
      </template>
    </div>
    <div v-else>
      <template v-if="list.isOpen">
        <ResultItemMix :list-id="list.id" />
      </template>
      
    </div>
  </div>
</template>

<script>
import { defineComponent, computed, ref, watch } from 'vue';
import { useListStore } from '../stores/listStore.js'

export default defineComponent({
  name: 'ResultList',
  props: {
    list: {
      type: Object,
      default: () => ({})
    }
  },
  setup(props) {
    const listStore = useListStore()

    const onBtnClick = () => {
      listStore.changeItemsOrder(props.list.id, !props.list.isMixed)
    }

    return {
      onBtnClick
    }
  }
})
</script>

<style scoped lang="scss">
  .wrapper {
    display: block;
    width: 100%;
    padding: 10px;
    margin-bottom: 20px;
    border: 1px solid black;

    .list-header {
      width: 100%;
      height: 50px;
      display: flex;
      justify-content: space-between;
    }

    .list-info {
      width: 100%;
    }
  }

  .wrapper-info {
    margin-bottom: 20px;
  }
</style>