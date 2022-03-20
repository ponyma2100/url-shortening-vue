<template>
  <header>
    <div class="container-left">
      <div class="title">
        <h1>More than just shorter links</h1>
      </div>
      <div class="subtitle">
        <h4>
          Build your brand's recognition and get detailed insights on how your
          links are performing.
        </h4>
      </div>
      <div class="start">
        <button>Get Start</button>
      </div>
    </div>
    <div class="container-right">
      <img src="../assets/working.svg" alt="" />
    </div>
  </header>
</template>

<script>
export default {};
</script>

<style scoped>
header {
  display: flex;
  height: 600px;
}
.title {
  font-size: 36px;
  font-weight: bold;
  padding: 0;
  line-height: 5rem;
}
.subtitle {
  padding: 0;
  color: hsl(0, 0%, 75%);
}
.container-left {
  width: 60%;
  display: flex;
  flex-direction: column;
  text-align: start;
}

.start button {
  width: 130px;
  height: 40px;
}

.container-right {
  width: 40%;
  overflow: hidden;
}

.container-right img {
  width: 40vw;
  min-width: 20vw;
  right: 60px;
}
</style>