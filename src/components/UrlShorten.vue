<template>
  <form @submit.prevent>
    <input type="text" placeholder="Shorten a link here..." v-model="url" />
    <button @click="handleUrl">Shorten it!</button>
  </form>
  <p>shortUrl:{{ shortUrl }}</p>
</template>

<script>
import { ref } from "@vue/reactivity";
import getLink from "../composables/getLink";

export default {
  setup() {
    let url = ref("");
    const { shortenUrl, shortUrl } = getLink();

    const handleUrl = (e) => {
      shortenUrl(url.value);
    };

    return { url, handleUrl, shortUrl };
  },
};
</script>

<style scoped>
form {
  height: 150px;
  background-color: hsl(257, 27%, 26%);
  border-radius: 8px;
  background-image: url("../assets/bg-shorten-desktop.svg");
  background-repeat: round;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 80vw;
  position: relative;
  top: -12%;
  left: 5%;
}

form input {
  width: 60vw;
  border-radius: 8px;
}
</style>