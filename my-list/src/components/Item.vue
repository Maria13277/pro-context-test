<template>
  <div class="wrapper-item">
    <div class="item">
      <div class="item-element" @click="onCheckItem">
        <div class="item-element-check" v-text="isItemCheck ? '&#10004' : '' "></div>
      </div>
      <h4 class="item-name">{{ item.name }}</h4>
    </div>
    <div class="info-item">
      <div class="info-item-count">
        <input class="info-item-count-input" min="0" @change="changeItemInfo" v-model="itemCount" type="number">
      </div>
      <div class="info-item-color">
        <input class="info-item-color-input" type="color" @change="changeItemInfo" v-model="itemColor">
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, computed, watch } from 'vue';
import { useListStore } from '../stores/listStore'

export default defineComponent({
  name: 'Item',
  props: {
    item: {
      type: Object,
      default: () => ({})
    },
    parentId: {
      type: Number,
      default: NaN
    }
  },
  setup(props) {
    const listStore = useListStore();

    let itemCount = ref(props.item.count)
    let itemColor = ref(props.item.color)
    let itemCheck = ref(props.item.check)

    const isItemCheck = computed(() => {
      return props.item.check
    })

    watch(() => props.item, (curent) => {
      itemCount.value = curent.count
      itemColor.value = curent.color
    }, {
      deep: true
    })

    const onCheckItem = () => {
      itemCheck.value = !itemCheck.value
      listStore.selectItem(props.parentId, props.item.id, itemCheck.value)
    }

    const changeItemInfo = () => {
      listStore.updateItemInfo(props.parentId, props.item.id, {
        color: itemColor.value,
        count: itemCount.value
      })
    }

    return {
      itemCount,
      itemColor,
      itemCheck,
      isItemCheck,
      changeItemInfo,
      onCheckItem
    }
  }
})
</script>

<style scoped lang="scss">
.wrapper-item {
  display: flex;
  padding-left: 68px;

  .item {
    display: flex;
    align-items: center;
    width: 100px;
    margin-right: 50px;

    &-element {
      display: flex;
      justify-content: center;
      align-items: center;
      margin-right: 15px;

      width: 25px;
      height: 25px;
      cursor: pointer;
      border: 1px solid black;
    }
  }

  .info-item {
    display: flex;
    align-items: center;

    &-count {
      &-input {
        width: 50px;
        height: 28px;
        font-size: 20px;

        border: none;
      }
    }

    &-color {
      &-input {
        width: 40px;
        height: 40px;

        background: none;
        border: none;
      }
    }
  }
}
</style>