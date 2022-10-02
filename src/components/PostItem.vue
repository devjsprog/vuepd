<template>
  <li class="list__item">
    <div>
      <strong>{{ post.title }}</strong>
    </div>
    <p class="list__descr">{{ post.descr }}</p>
    <MyButton @click="$emit('more');" class="list__btn">Подробней</MyButton> <br>
    <MyButton @click="$emit('remove');" class="list__btn">Сделано</MyButton>
  </li>
</template>

<script>
import MyButton from './UI/MyButton.vue';
export default {
    name: "PostItem",
    props: {
        post: {
            type: Object,
            required: true,
        },
    },
    components: { MyButton },
};
</script>

<style lang="scss" scoped>
.list {
  &__item {
    padding: 10px;
    list-style: none;
    border: 1px solid #333;
    border-radius: 10px;
  }
  &__descr {
    margin: 5px;
  }
  &__btn {
    padding: 10px 30px;
    background: rgb(94, 94, 94);
    color: white;
    border-radius: 20px;
    margin-top: 10px;
  }
}
</style>
