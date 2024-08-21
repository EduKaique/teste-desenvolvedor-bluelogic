<template>
  <div id="app">
    <ItemForm :itemToEdit="selectedItem" @formSubmitted="fetchItems" />
    <ItemList @edit-item="editItem" ref="itemList" />
  </div>
</template>

<script>
import ItemList from './components/ItemList.vue';
import ItemForm from './components/ItemForm.vue';

export default {
  components: {
    ItemList,
    ItemForm,
  },
  data() {
    return {
      selectedItem: null, // Armazena o item a ser editado
    };
  },
  methods: {
    fetchItems() {
      this.$refs.itemList.fetchItems();
    },
    editItem(item) {
      this.selectedItem = item; // Define o item selecionado para edição
    },
  },
};
</script>

<style>
#app {
  font-family: Arial, Helvetica, sans-serif;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
