<template>
  <div>
    <h1>Lista de Itens</h1>
    <table>
      <thead>
        <tr>
          <th>ID</th>
          <th>Nome</th>
          <th>Descrição</th>
          <th>Ações</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in items" :key="item.id">
          <td>{{ item.id }}</td>
          <td>{{ item.name }}</td>
          <td>{{ item.description }}</td>
          <td>
            <button class="editar" @click="editItem(item)">Editar</button>
            <button class="deletar" @click="deleteItem(item.id)">
              Deletar
            </button>
          </td>
        </tr>
      </tbody>
    </table>
    <button @click="fetchItems">Atualizar Lista</button>
  </div>
</template>
<script>
import axios from "axios";

export default {
  data() {
    return {
      items: [], // Isso deve ser definido corretamente no data()
    };
  },
  methods: {
    async fetchItems() {
      try {
        const response = await axios.get("http://localhost:3000/items");
        this.items = response.data;
      } catch (error) {
        console.error(error);
      }
    },
    async deleteItem(id) {
      try {
        await axios.delete(`http://localhost:3000/items/${id}`);
        this.fetchItems();
      } catch (error) {
        console.error(error);
      }
    },
    editItem(item) {
      this.$emit("edit-item", item); // Emite o evento para o componente pai
    },
  },
  mounted() {
    this.fetchItems();
  },
};
</script>
<style scoped>
table {
  width: 100%;
  border-collapse: collapse;
  margin: 20px 0;
}

th, td {
  padding: 8px 12px;
  border: 1px solid #ccc;
  text-align: left;
}

th {
  background-color: #f4f4f4;
}

button {
  margin-right: 10px;
  font-size: 15px;
}

button.editar {
  background-color: rgb(10, 94, 250);
  color: white;
  font-weight: bold;
  cursor: pointer;
}

button.deletar {
  background-color: red;
  color: white;
  font-weight: bold;
  cursor: pointer;
}
</style>
