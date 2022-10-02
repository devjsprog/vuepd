<template>
  <ul class="list" v-if="posts.length > 0">
    <PostItem
      v-for="post in posts"
      :key="post.id"
      :post="post"
      @remove="$emit('remove', post.id)"
      @more="$emit('more', post)"
    ></PostItem>
  </ul>
  <h2 v-else>Задач нет</h2>
</template>

<script>
import PostItem from "./PostItem.vue";
export default {
  name: "PostList",
  props: {
    posts: {
      type: Array,
      required: true,
    },
  },
  components: { PostItem },
};
</script>

<style lang="scss" scoped>
.list {
  width: 90%;
  display: grid;
  gap: 10px;
  margin: 20px auto 0 auto;
  padding: 0;
}
</style>
