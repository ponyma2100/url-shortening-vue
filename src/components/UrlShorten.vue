<template>
  <form @submit.prevent>
    <div class="info">
      <input
        type="text"
        :class="{ frame: isFrame }"
        placeholder="Shorten a link here..."
        v-model="url"
      />
      <span class="warning" v-show="isFrame">Please add a link</span>
      <button @click="handleUrl">Shorten it!</button>
    </div>
  </form>

  <div class="output" v-show="shortUrl">
    <p>{{ showUrl }}</p>
    <div class="output-link">
      <a :href="'http://' + shortUrl" target="_blank">{{ shortUrl }}</a>
    </div>
    <button class="copy">Copy</button>
  </div>
</template>

<script>
import { ref } from "@vue/reactivity";
import getLink from "../composables/getLink";

export default {
  setup() {
    let url = ref("");
    let showUrl = ref("");
    let isFrame = ref(false);
    const { shortenUrl, shortUrl } = getLink();

    const handleUrl = (e) => {
      console.log("click");
      if (!url.value) {
        isFrame.value = true;
      } else {
        isFrame.value = false;
        shortenUrl(url.value);
        showUrl.value = url.value;
        url.value = "";
      }
    };

    return { url, handleUrl, shortUrl, showUrl, isFrame };
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
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 80vw;
  position: relative;
  top: -12%;
  left: 5%;
}

form input {
  width: 60vw;
  height: 38px;
  border-radius: 8px;
  border: 1px;
  margin-right: 20px;
}

form button {
  width: 7rem;
  height: 3rem;
}

.info {
  position: relative;
}

.output {
  height: 50px;
  width: 80vw;
  background-color: #fff;
  border-radius: 8px;
  display: flex;
  position: relative;
  top: -10%;
  left: 5%;
}
.output-link {
  margin-left: auto;
}

.frame {
  border: 2px solid #e8676b;
}

.warning {
  color: #e8676b;
  font-size: 16px;
  font-style: italic;
  padding: 0;
  position: absolute;
  bottom: -25%;
  left: 10px;
}
.copy {
  height: 2.5rem;
  width: 6rem;
}
</style>