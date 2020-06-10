<template>
  <div class="user-admin">
    <b-form>
      <input id="user-id" type="hidden" v-model="user.id" />
      <b-row>
        <b-col md="4" sm="12">
          <b-form-group label="Nome:" label-for="user-name">
            <b-form-input
              id="user-name"
              type="text"
              v-model="user.name"
              required
              :readonly="mode === 'remove'"
              class="fundoNegro"
              placeholder="Informe o Nome do Usuário..."
            />
          </b-form-group>
        </b-col>
        <b-col md="4" sm="12">
          <b-form-group label="E-mail:" label-for="user-email">
            <b-form-input
              id="user-email"
              type="text"
              v-model="user.email"
              required
              :readonly="mode === 'remove'"
              placeholder="Informe o E-mail do Usuário..."
            />
          </b-form-group>
        </b-col>
        <b-col md="4" sm="12">
          <b-form-group label="Senha:" label-for="user-password">
            <b-form-input
              id="user-password"
              type="password"
              v-model="user.password"
              required
              :readonly="mode === 'remove'"
              placeholder="Informe a Senha do Usuário..."
            />
          </b-form-group>
        </b-col>
      </b-row>
      <b-form-checkbox
        id="user-admin2"
        v-show="mode === 'save'"
        v-model="user.admin"
        class="mt-3 mb-3"
      >Administrador?</b-form-checkbox>
      <b-row>
        <b-col xs="12">
          <b-button variant="danger" v-if="mode === 'save'" @click="save">Salvar</b-button>
          <b-button variant="danger" v-else-if="mode === 'update'" @click="update">Atualizar</b-button>
          <b-button variant="danger" v-if="mode === 'remove'" @click="remove">Excluir</b-button>
          <b-button class="ml-2" @click="reset">Cancelar</b-button>
        </b-col>
      </b-row>
    </b-form>
    <hr />

    <b-table hover striped :items="users" :fields="fields">
      <template v-slot:cell(actions)="data">
        <b-button variant="warning" @click="loadUser(data.item, 'update')" class="mr-2">
          <i class="fa fa-pencil"></i>
        </b-button>
        <b-button variant="danger" @click="loadUser(data.item, 'remove')">
          <i class="fa fa-trash"></i>
        </b-button>
      </template>
    </b-table>

    <b-pagination size="md" v-model="page" :total-rows="count" :per-page="5" />
  </div>
</template>

<script>
import { baseApiUrl, showError } from "@/global";
import axios from "axios";

export default {
  name: "UserAdmin",
  data: function() {
    return {
      mode: "save",
      user: {},
      users: [],
      page: 1,
      limit: 0,
      count: 0,
      fields: [
        { key: "id", label: "Código", sortable: true },
        { key: "name", label: "Nome", sortable: true },
        { key: "email", label: "E-mail", sortable: true },
        {
          key: "admin",
          label: "Administrador",
          sortable: true,
          formatter: value => (value ? "Sim" : "Não")
        },
        { key: "actions", label: "Ações" }
      ]
    };
  },
  methods: {
    loadUsers() {
      const url = `${baseApiUrl}/users?page=${this.page}`;
      axios.get(url).then(res => {
        this.users = res.data.users;
        this.count = res.data.count;
        console.log(this.users);
      });
    },
    reset() {
      this.mode = "save";
      this.user = {};
      this.loadUsers();
    },
    save() {
      axios
        .post(`${baseApiUrl}/users`, this.user)
        .then(() => {
          this.$toasted.global.defaultSuccess();
          this.reset();
        })
        .catch(showError);
    },
    update() {
      axios
        .patch(`${baseApiUrl}/users/${this.user.id}`, this.user)
        .then(() => {
          this.$toasted.global.defaultSuccess();
          this.reset();
        })
        .catch(showError);
    },
    remove() {
      axios
        .delete(`${baseApiUrl}/users/${this.user.id}`)
        .then(() => {
          this.$toasted.global.defaultSuccess();
          this.reset();
        })
        .catch(showError);
    },
    loadUser(user, mode = "save") {
      this.mode = mode;
      this.user = { ...user };
    }
  },
  watch: {
    page() {
      this.loadUsers();
    }
  },
  mounted() {
    this.loadUsers();
  }
};
</script>

<style>
.form-control {
  display: block;
  width: 100%;
  height: calc(1.5em + 0.75rem + 2px);
  padding: 0.375rem 0.75rem;
  font-size: 1.2rem;
  font-weight: 400;
  line-height: 1.5;
  color: red;
  background-color: #000;
  background-clip: padding-box;
  border: 1px solid red;
  border-radius: 0.25rem;
  transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
}

.form-control:disabled,
.form-control[readonly] {
  background-color: #000;
  opacity: 0.9;
}

input[type="text"]:focus,
input[type="password"]:focus {
  color: red;
  font-size: 1.3rem;
  background-color: #000;
  outline: none;
}

table {
  font-size: 1.3rem;
  border-style: hidden;
  border-color: #c31432;
}

.table.b-table > thead > tr,
.table.b-table > tfoot > tr {
  color: #fff;
  cursor: pointer;
  background-color: #af102a;
}

.table th,
.table td {
  padding: 0.75rem;
  vertical-align: top;
  border-top: 1px hidden;
}

th:focus {
  border: 1px solid #c31432;
  border-radius: 10px;
}

table td {
  color: red;
}

.page-link {
  position: relative;
  display: block;
  padding: 0.5rem 0.75rem;
  margin-left: -1px;
  line-height: 1.25;
  color: #fff;
  background-color: #c31432;
  border: 1px solid #c31432;
}

.page-item.disabled .page-link {
  color: #fff;
  background-color: #c31432;
  border: 1px solid #c31432;
}

.page-link:hover {
  z-index: 2;
  color: #fff;
  text-decoration: none;
  background-color: #c31432;
  border-color: #c31432;
}

.page-item.active .page-link {
  z-index: 3;
  color: #fff;
  background-color: #c31432;
  border-color: #c31432;
}
</style>