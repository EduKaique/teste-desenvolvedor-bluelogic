<template>
  <div>
    <h1>{{ isEditing ? "Editar Item" : "Adicionar Item" }}</h1>
    <form @submit.prevent="handleSubmit">
      <div>
        <label for="name">Nome:</label>
        <input v-model="item.name" type="text" id="name" />
      </div>
      <div>
        <label for="description">Descrição:</label>
        <input v-model="item.description" type="text" id="description" />
      </div>
      <button type="submit">{{ isEditing ? "Atualizar" : "Adicionar" }}</button>
    </form>
  </div>
</template>
<script>
import axios from "axios";

export default {
  props: ["itemToEdit"],
  data() {
    return {
      item: { name: "", description: "" },
      isEditing: false,
    };
  },
  watch: {
    itemToEdit: {
      immediate: true,
      handler(newValue) {
        if (newValue) {
          this.item = { ...newValue };
          this.isEditing = true;
        }
      },
    },
  },
  methods: {
    async handleSubmit() {
      try {
        if (this.isEditing) {
          await axios.put(
            `http://localhost:3000/items/${this.item.id}`,
            this.item
          );
        } else {
          await axios.post("http://localhost:3000/items", this.item);
        }
        this.$emit("formSubmitted"); // Emite um evento para atualizar a lista de itens
        this.item = { name: "", description: "" }; // Reseta o formulário
        this.isEditing = false; // Reseta o estado de edição
      } catch (error) {
        console.error(error);
      }
    },
  },
};
</script>
<style scoped>
label {
  margin-right: 10px;
  text-align: left;
}

input {
  width: 100px;
  text-align: left; 
  margin-bottom: 20px;
}
</style>
