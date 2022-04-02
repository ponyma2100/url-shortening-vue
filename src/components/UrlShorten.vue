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
    <a class="output-link" :href="'http://' + shortUrl" target="_blank">{{
      shortUrl
    }}</a>
    <button class="copy" :class="{ copied: isCopied }" @click="handleCopied">
      Copy
    </button>
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
    let isCopied = ref(false);
    const { shortenUrl, shortUrl } = getLink();

    const handleUrl = (e) => {
      if (!url.value) {
        isFrame.value = true;
      } else {
        isFrame.value = false;
        shortenUrl(url.value);
        showUrl.value = url.value;
        url.value = "";
      }
    };

    const handleCopied = async () => {
      try {
        isCopied.value = true;
        await navigator.clipboard.writeText(shortUrl.value);

        setTimeout(() => {
          isCopied.value = false;
        }, 2000);
      } catch (error) {
        console.log(error);
      }
    };

    return {
      url,
      handleUrl,
      shortUrl,
      showUrl,
      isFrame,
      handleCopied,
      isCopied,
    };
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
  min-width: 360px;
  min-height: 150px;
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
  border-radius: 8px;
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
  color: hsl(180, 66%, 49%);
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
  position: relative;
  border-radius: 8px;
}

.copied::before {
  display: flex;
  align-items: center;
  justify-content: center;
  content: "Copied!";
  z-index: 2;
  background: hsl(257, 27%, 26%);
  height: 100%;
  width: 100%;
  border-radius: 8px;
  border: 0;
  position: absolute;
  top: 0;
  left: 0;
}

@media screen and (max-width: 750px) {
  form {
    left: 0;
    min-width: auto;
  }
  .info {
    width: 100%;
    display: flex;
    flex-direction: column;
    height: 100%;
    justify-content: space-around;
  }
  .info input {
    width: 95%;
    margin-right: 0;
  }
  .info button {
    width: 100%;
  }

  .output {
    flex-direction: column;
    height: 100%;
    justify-content: space-evenly;
    align-items: flex-start;
    padding: 10px 10px;
    margin-top: 20px;
    min-width: auto;
    left: 0;
  }
  .output-link {
    width: 97%;
    border-top: 1px solid var(--neutral-gray1);
  }
  .copy {
    width: 100%;
  }

  .warning {
    bottom: 40%;
  }
}
</style>