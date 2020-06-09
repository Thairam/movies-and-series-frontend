<template>
  <div class="user-dropdown">
    <div class="user-button">
      <span id="nome" class="d-none d-sm-block">Thairam Michel Santos Ataíde</span>
      <div class="user-dropdown-img">
        <Gravatar email="thayram" alt="User" />
      </div>
      <i class="fa fa-angle-down"></i>
    </div>
    <div class="user-dropdown-content">
      <router-link to="/admin">
        <i class="fa fa-cogs">Administração</i>
      </router-link>
      <a href @click.prevent="logout">
        <i class="fa fa-sign-out">Sair</i>
      </a>
    </div>
  </div>
</template>

<script>
import Gravatar from "vue-gravatar";

export default {
  name: "UserDropdown",
  components: { Gravatar }
};
</script>

<style>
.user-dropdown {
  position: relative;
  height: 100%;
}

.user-button {
  display: flex;
  align-items: center;
  color: #fff;
  height: 100%;
  padding: 0px 20px;
}

.user-dropdown:hover {
  background-color: rgba(0, 0, 0, 0.2);
}

.user-dropdown-img {
  margin: 0px 10px;
}

.user-dropdown-img > img {
  max-height: 37px;
  border-radius: 5px;
}

.user-dropdown-content {
  font-size: 1.3rem;
  position: absolute;
  right: 0px;
  background-color: #050505;
  color: #bbbbbb;
  min-width: 170px;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
  padding: 10px;
  z-index: 1;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  visibility: hidden;
  opacity: 1;
  transition: visibility 0s, opacity 0.5s linear;
}

.user-dropdown:hover .user-dropdown-content {
  visibility: visible;
  opacity: 1;
}

.user-dropdown-content a {
  text-decoration: none;
  color: #bbbbbb;
  padding: 10px;
}

.user-dropdown-content a:hover {
  box-sizing: border-box;
  border: 1px solid red;
  border-radius: 10px;
  text-decoration: none;
  color: #bbbbbb;
}
</style>