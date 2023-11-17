<template>
  <div class="wrapper">
    <div class="wrapper-list">
      <div class="wrapper-parent">
        <div @click="onClickOpenList" class="arrow-close" v-text="!isVisible ? '&#8744;' : '&#62;'"></div>
        <div @click="onSelectAll" class="parent-element">
          <div class="parent-element-square" :class="`${getCheckStatus ? '' : 'square-open'}`"></div>
        </div>
        <h4 class="parent-name">{{ list.name }}</h4>
      </div>
      <div class="wrapper-child" :class="`${isVisible ? '' : 'open'}`">
        <Item v-for="item in list.items" :key="item" :item="item" :parentId="list.id"/>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed, ref } from 'vue';
import { useListStore } from '../stores/listStore.js'

export default defineComponent({
  name: 'List',

  props: {
    list: {
      type: Object,
      default: () => ([])
    }
  },
  setup(props) {
    const listStore = useListStore()
    let isVisible = ref(true)

    const getCheckStatus = computed(() => {
      return listStore.getCheckListStatus(props.list.id)
    })
    
    const onSelectAll = () => {
      let listId = props.list.id
      listStore.selectAll(listId, !props.list.check)
    }

    const onClickOpenList = () => {
      isVisible.value = !isVisible.value
      listStore.changeListOpenState(props.list.id, !isVisible.value)
    }

    return {
      listStore,
      isVisible,
      onSelectAll,
      onClickOpenList,
      getCheckStatus
    }
  }
})
</script>

<style scoped lang="scss">
.wrapper {
  &-list {
    margin-bottom: 10px;
    width: 100%;

    .wrapper-parent {
      display: flex;
      align-items: center;
      margin-bottom: 20px;

      .arrow-close {
        display: flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;

        width: 25px;
        height: 25px;
      }

      .parent-element {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 25px;
        height: 25px;
        margin-right: 15px;
        cursor: pointer;
        border: 1px solid black;

        .parent-element-square {
          visibility: hidden;
          width: 7px;
          height: 7px;
          background: black;
        }
        .square-open {
            visibility: visible;
        }
      }
    }
  }

  .wrapper-child {
    display: none;
  }

  .open {
    display: block;
  }
}
</style>