<template>
  <div class="navbar">
    <div class="logo">
      <img src="../assets/logo.svg" alt="" />
    </div>
    <nav>
      <div class="nav-content" v-show="!isMobile">
        <div class="guide">
          <ul>
            <li><a href="#">Features</a></li>
            <li><a href="#">Pricing</a></li>
            <li><a href="#">Resouces</a></li>
          </ul>
        </div>
        <div class="links">
          <div class="login"><a href="#">Login</a></div>
          <button class="signup">Sign Up</button>
        </div>
      </div>

      <div class="nav-menu" v-show="isMobile" @click="toggleMenu">
        <i class="fas fa-bars"></i>
      </div>
    </nav>
  </div>
</template>

<script>
import { ref } from "@vue/reactivity";
import { onMounted } from "@vue/runtime-core";
export default {
  setup() {
    let isMobile = ref(false);
    let windowWidth = ref(null);

    onMounted(() => {
      window.addEventListener("resize", checkScreen);
      checkScreen();
    });

    const checkScreen = () => {
      windowWidth.value = window.innerWidth;

      if (windowWidth.value <= 480) {
        isMobile.value = true;
        return;
      }
      isMobile.value = false;
      return;
    };

    const toggleMenu = () => {
      // isMobile.value = !isMobile.value;
    };

    return { isMobile, toggleMenu, checkScreen };
  },
};
</script>

<style scoped>
.navbar {
  padding: 16px 10px;
  background: white;
  padding: 0 40px;
  height: 150px;
  display: flex;
  align-items: center;
}

nav,
.nav-content {
  display: flex;
  align-items: center;
  width: 100%;
}

.nav-content {
  margin: 0 auto;
}

nav ul {
  display: flex;
  list-style-type: none;
  font-size: 15px;
  font-weight: bold;
}
nav .links {
  display: flex;
  margin-left: auto;
  font-size: 15px;
}
</style>