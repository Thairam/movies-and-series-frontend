<template>
  <aside class="menu">
    <form id="menuform">
      <ul class="layout-menu">
        <li v-for="genre in genres" :key="genre">
          <router-link to="/">
            <i id="folder" class="fa fa-folder"></i>
            <span id="genre">{{ genre }}</span>
          </router-link>
        </li>
      </ul>
    </form>
  </aside>
</template>

<script>
export default {
  name: "Menu",
  components: {},
  data: function() {
    return {
      genres: [
        "Ação",
        "Animação",
        "Aventura",
        "Comédia",
        "Drama",
        "Fantasia",
        "Ficção",
        "Guerra",
        "Música",
        "Nacional",
        "Policial",
        "Romance",
        "Suspense",
        "Terror"
      ]
    };
  }
};
</script>

<style>
.menu {
  grid-area: menu;
  background-color: #050505;

  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  color: white;
}

.layout-menu {
  display: block;
  padding: 8px 12px;
  position: relative;
  height: 100%;
  font-size: 1.8rem;
}

#folder {
  margin: 10px;
  color: #c31432;
}

#genre {
  color: #c31432;
}

li:hover {
  border: 1px solid red;
  border-radius: 10px;
}

aside {
  overflow: auto;
}

a {
  text-decoration: none;
}
</style>