<template>
  <div class="navbar">
    <nav>
      <div class="logo">
        <img src="../assets/logo.svg" alt="" />
      </div>
      <div class="guide">
        <ul>
          <li><a href="#">Features</a></li>
          <li><a href="#">Pricing</a></li>
          <li><a href="#">Resouces</a></li>
        </ul>
      </div>
      <div class="links">
        <div class="login"><a href="#">Login</a></div>
        <!-- <button class="login">Login</button> -->
        <button class="signup">Sign Up</button>
      </div>
    </nav>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.navbar {
  padding: 16px 10px;
  background: white;
  padding: 0 20px;
}
nav {
  display: flex;
  align-items: center;
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