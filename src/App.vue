<template>
  <MyModal :show="modalShow" @close="closePostModal">
    <strong>{{ modalContent.title }}</strong>
    <div>{{ modalContent.descr }}</div>
  </MyModal>
  <NewPostForm @create="createPost"></NewPostForm>
  <PostList
    :posts="posts"
    @remove="removePost"
    @more="showPostModal"
  ></PostList>
</template>

<script>
import PostList from "./components/PostList.vue";
import NewPostForm from "./components/NewPostForm.vue";
import MyModal from "./components/UI/MyModal.vue";
export default {
  name: "App",
  data() {
    return {
      modalShow: false,
      modalContent: {
        title: "",
        descr: "",
      },
      posts: [],
    };
  },
  methods: {
    getPosts() {
      fetch("https://jsonplaceholder.typicode.com/posts?_limit=10")
        .then((response) => response.json())
        .then((json) => {
          this.posts = json.map((item) => ({
            id: item.id,
            title: item.title,
            descr: item.body,
          }));
        });
    },
    showPostModal({ title, descr }) {
      this.modalShow = true;
      this.modalContent.title = title;
      this.modalContent.descr = descr;
    },
    closePostModal() {
      this.modalShow = false;
      this.modalContent.title = "";
      this.modalContent.descr = "";
    },
    createPost(post) {
      this.posts = [post, ...this.posts];
    },
    removePost(id) {
      this.posts = this.posts.filter((item) => item.id != id);
    },
  },
  components: { PostList, NewPostForm, MyModal },
  mounted() {
    this.getPosts();
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 20px;
}
</style>
