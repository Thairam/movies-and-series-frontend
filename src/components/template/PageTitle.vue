<template>
  <div class="page-title">
    <h1>
      <i v-if="icon" :class="icon"></i>
      {{ main }}
    </h1>
    <h2>{{ sub }}</h2>
  </div>
</template>

<script>
export default {
  name: "PageTitle",
  props: ["icon", "main", "sub"]
};
</script>

<style>
.page-title h1 {
  margin: 0px;
  color: #fff;
  /* color: #c31432; */
}

.page-title h2 {
  color: #fff;
  margin-top: 5px;
  font-size: 1.3rem;
}
</style>