<template>
  <footer class="footer">
    <span>
      Copyright
      <strong>Thairam Michel</strong>
      2020
    </span>
  </footer>
</template>

<script>
export default {
  name: "Footer"
};
</script>

<style>
.footer {
  grid-area: footer;
  background: linear-gradient(to left, #1f4037, #141517);
  color: #fff;

  display: flex;
  align-items: center;
  justify-content: flex-end;
  padding-right: 10px;
}
</style>