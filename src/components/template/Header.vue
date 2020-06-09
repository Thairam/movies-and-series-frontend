<template>
  <header class="header">
    <h1 class="title">
      <router-link to="/">{{ title }}</router-link>
    </h1>
    <UserDropdown />
  </header>
</template>

<script>
import UserDropdown from "./UserDropdown";

export default {
  name: "Header",
  components: { UserDropdown },
  props: {
    title: String
  }
};
</script>

<style>
.header {
  grid-area: header;
  background: linear-gradient(to right, #240b36, #c31432);

  display: flex;
  justify-content: center;
  align-items: center;
}

.title {
  font-size: 1.6rem;
  color: #fff;
  font-weight: 300;
  flex-grow: 1;
  text-align: center;
}

.title a {
  color: #fff;
  text-decoration: none;
}
</style>