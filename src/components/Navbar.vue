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
      <div class="mobilemenu" v-show="showMenu">
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
    let showMenu = ref(false);

    onMounted(() => {
      window.addEventListener("resize", checkScreen);
      checkScreen();
    });

    const checkScreen = () => {
      windowWidth.value = window.innerWidth;

      if (windowWidth.value <= 750) {
        isMobile.value = true;
        return;
      }
      isMobile.value = false;
      showMenu.value = false;
      return;
    };

    const toggleMenu = () => {
      showMenu.value = !showMenu.value;
      console.log("click");
    };

    return { isMobile, toggleMenu, checkScreen, showMenu };
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
  width: 100%;
  position: relative;
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

.nav-menu {
  margin-left: auto;
}

.mobilemenu {
  height: 350px;
  width: 70%;
  max-width: 360px;
  border-radius: 8px;
  background: var(--dark-primary);
  position: absolute;
  right: 65px;
  top: 70%;
  display: flex;
  flex-direction: column;
}

.mobilemenu ul,
.mobilemenu .links {
  flex-direction: column;
  align-items: center;
  width: 90%;
  height: 100%;
  justify-content: space-around;
}

.mobilemenu .links::before {
  content: "";
  border: 0.5px solid #dddddd2b;
  width: 90%;
  position: absolute;
  top: 50%;
}
.mobilemenu .guide {
  width: 100%;
}

.mobilemenu .links {
  height: 100%;
  margin-top: 30px;
  justify-content: space-evenly;
}

.mobilemenu a {
  color: #fff;
  font-weight: bold;
}

.mobilemenu .signup {
  width: 80%;
}
</style>