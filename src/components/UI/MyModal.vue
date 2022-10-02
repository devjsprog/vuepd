<template>
  <div class="modal" v-if="show" @click="$emit('close')">
    <div class="modal__content" @click.stop>
      <slot></slot>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'MyModal',
    props: {
      show: {
        type: Boolean,
        default: false,
      }
    }
  }
</script>

<style lang="scss" scoped>
.modal {
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  background: rgba(0,0,0,0.5);
  position: fixed;
  display: flex;
  &__content {
    position: relative;
    z-index: 1;
    margin: auto;
    background: white;
    border-radius: 20px;
    padding: 40px 100px
  }
}
</style>