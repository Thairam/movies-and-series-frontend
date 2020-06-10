<template>
  <div class="content">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "Content"
};
</script>

<style>
.content {
  grid-area: content;
  background-image: url("../../assets/wallpaper.png");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  padding: 20px;
}
</style>