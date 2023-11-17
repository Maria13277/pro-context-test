import { defineStore } from 'pinia'

export const useListStore = defineStore({
  id: 'listStore',

  state: () => {
    return {
      list: [
        {
          id: 1,
          name: 'List 1',
          check: false,
          isMixed: false,
          isOpen: false,
          items: [
            {
              id: 1,
              name: 'item 1',
              color: '#ff0000',
              count: 10,
              check: false
            },
            {
              id: 2,
              name: 'item 2',
              color: '#f2ff00',
              count: 16,
              check: false
            },
            {
              id: 3,
              name: 'item 3',
              color: '#0db537',
              count: 40,
              check: false
            },
            {
              id: 4,
              name: 'item 4',
              color: '#0d26b5',
              count: 0,
              check: false
            },
          ]
        },
        {
          id: 2,
          name: 'List 2',
          check: false,
          isMixed: false,
          isOpen: false,
          items: [
            {
              id: 1,
              name: 'item 1',
              color: '#ff0000',
              count: 10,
              check: false
            },
            {
              id: 2,
              name: 'item 2',
              color: '#f2ff00',
              count: 16,
              check: false
            },
            {
              id: 3,
              name: 'item 3',
              color: '#0db537',
              count: 40,
              check: false
            },
            {
              id: 4,
              name: 'item 4',
              color: '#0d26b5',
              count: 0,
              check: false
            }
          ]
        },
        {
          id: 3,
          name: 'List 3',
          check: false,
          isMixed: false,
          isOpen: false,
          items: [
            {
              id: 1,
              name: 'item 1',
              color: '#ff0000',
              count: 10,
              check: false
            },
            {
              id: 2,
              name: 'item 2',
              color: '#f2ff00',
              count: 16,
              check: false
            },
            {
              id: 3,
              name: 'item 3',
              color: '#0db537',
              count: 40,
              check: false
            },
            {
              id: 4,
              name: 'item 4',
              color: '#0d26b5',
              count: 0,
              check: false
            }
          ]
        },
        {
          id: 4,
          name: 'List 4',
          check: false,
          isMixed: false,
          isOpen: false,
          items: [
            {
              id: 1,
              name: 'item 1',
              color: '#ff0000',
              count: 10,
              check: false
            },
            {
              id: 2,
              name: 'item 2',
              color: '#f2ff00',
              count: 16,
              check: false
            },
            {
              id: 3,
              name: 'item 3',
              color: '#0db537',
              count: 40,
              check: false
            },
            {
              id: 4,
              name: 'item 4',
              color: '#0d26b5',
              count: 0,
              check: false
            }
          ]
        },
      ]
    }
  },
  getters: {
    getListStore: (state) => state.list,
    getListById: (state) => {
      return (listId) => {
        return state.list.find(list => list.id == listId)
      }
    },
    getCheckListStatus: (state) => {
      return (listId) => {
        const currentList = state.getListById(listId)

        return currentList.items.every(item => item.check == true)
      }
    },
  },
  actions: {
    selectAll(id, check) {
      let resultList = this.list.find(item => item.id == id)
      resultList.check = check

      for (let item of resultList.items) {
        item.check = check
      }
    },
    selectItem(parentId, itemId, check) {
      const currentList = this.list.find(list => list.id == parentId)

      const curentListItem = currentList.items.find(item => item.id == itemId)
      curentListItem.check = check

      const parentList = this.getListById(parentId)
      this.getCheckListStatus(parentId) ? parentList.check = true : parentList.check = false
    },
    updateItemInfo(parentId, itemId, info) {
      const currentList = this.list.find(list => list.id == parentId)
      const curentListItemIndex = currentList.items.findIndex(item => item.id == itemId)

      currentList.items[curentListItemIndex] = {
        ...currentList.items[curentListItemIndex],
        ...info
      }
    },
    deleteItemSquare(parentId, itemId) {
      const currentList = this.list.find(list => list.id == parentId)
      let curentListItem = currentList.items.find(item => item.id == itemId)

      curentListItem.count = curentListItem.count - 1
    },
    changeItemsOrder(parentId, isMixed) {
      const currentList = this.getListById(parentId)
      currentList.isMixed = isMixed
    },
    changeListOpenState(parentId, isOpen) {
      const currentList = this.getListById(parentId)
      currentList.isOpen = isOpen
    }
  }
})