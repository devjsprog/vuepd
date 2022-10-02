<template>
  <button class="btn">
    <slot></slot>
  </button>
</template>

<script>
  export default {
    name: 'MyButton',
  }
</script>

<style lang="scss" scoped>
  .btn {
    border: none;
    padding: 10px 30px;
    cursor: pointer;
  }
</style>