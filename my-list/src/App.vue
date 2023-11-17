<template>
  <div class="wrapper">
    <div class="wrapper-list">
      <List v-for="list in getList" :key="list.id" :list="list" />
    </div>
    <div class="wrapper-info">
      <ResultList v-for="list in getList" :key="`info-${list.id}`" :list="list" />
    </div>
  </div>
</template>

<script>
import { defineComponent, computed } from 'vue'
import { useListStore } from './../src/stores/listStore'

export default defineComponent({
  name: 'App',
  setup() {
    const listStore = useListStore()

    let getList = computed(() => {
      return listStore.getListStore
    })

    return {
      listStore,
      getList
    }
  }
})
</script>

<style lang="scss" scoped>
.wrapper {
  display: flex;
  justify-content: space-around;

  &-list,
  &-info {
    width: 40%;
  }
}
</style>
