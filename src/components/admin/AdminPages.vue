<template>
  <div class="admin-pages">
    <PageTitle icon="fa fa-cogs" main="Administração do Sistema" sub="Cadastros & Cia" />
    <div class="admin-pages-tabs">
      <b-card no-body>
        <b-tabs pills card>
          <b-tab title="Usuários">
            <h1>Usuários</h1>
          </b-tab>
        </b-tabs>
      </b-card>
    </div>
  </div>
</template>

<script>
import PageTitle from "../template/PageTitle";

export default {
  name: "AdminPages",
  components: { PageTitle }
};
</script>

<style>
</style>