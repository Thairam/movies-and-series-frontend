<template>
  <div class="admin-pages">
    <PageTitle icon="fa fa-cogs" main="Administração do Sistema" sub="Cadastros & Cia" />
    <div class="admin-pages-tabs">
      <b-card class="card" no-body>
        <b-tabs pills card>
          <b-tab title="Usuários">
            <UserAdmin />
          </b-tab>
          <b-tab title="Filmes & Séries">
          </b-tab>
        </b-tabs>
      </b-card>
    </div>
  </div>
</template>

<script>
import PageTitle from "../template/PageTitle";
import UserAdmin from "./UserAdmin";

export default {
  name: "AdminPages",
  components: { PageTitle, UserAdmin }
};
</script>

<style>
.admin-pages-tabs {
  color: #fff;
}

.nav-pills .nav-link.active,
.nav-pills .show > .nav-link {
  color: #fff;
  background-color: #c31432;
}

.card a {
  font-size: 1.5rem;
  color: #c31432;
  text-decoration: none;
  background-color: transparent;
}

a:hover {
  color: #c31432;
  text-decoration: none;
}

.card {
  background-color: rgba(245, 245, 245, 0);
}
</style>