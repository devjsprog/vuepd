<template>
  <form class="form" @submit.prevent>
    <div class="form__item">
      <label for="title" class="form__item-label">Название</label>
      <input
        type="text"
        id="title"
        placeholder="Продукты"
        class="form__item-input"
        v-model="post.title"
      />
    </div>

    <div class="form__item">
      <label for="descr" class="form__item-label">Описание</label>
      <input
        type="text"
        id="descr"
        placeholder="Купить продукты"
        class="form__item-input"
        v-model="post.descr"
      />
    </div>
    <MyButton @click="createPost">Добавить</MyButton>
  </form>
</template>

<script>
export default {
    name: "NewPostForm",
    data() {
        return {
            post: { title: "", descr: "" },
        };
    },
    methods: {
        createPost() {
            if (this.post.title && this.post.descr) {
                this.post.id = Date.now();
                this.$emit("create", this.post);
                this.post = {
                    title: "",
                    descr: "",
                    id: null,
                };
            } else {
              alert("Заполните поля!");
            }
        }
    },
};
</script>

<style lang="scss" scoped>
.form {
  display: grid;
  gap: 10px;
  width: 90%;
  margin: 0 auto;
  &__item {
    display: flex;
    flex-direction: column;
    &-label {
      justify-self: flex-start;
      align-self: flex-start;
      font-size: 18px;
    }
    &-input {
      padding: 10px;
    }
  }
}
</style>
