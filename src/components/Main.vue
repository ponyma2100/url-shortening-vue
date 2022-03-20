<template>
  <article>
    <UrlShorten />

    <div class="title">
      <h1>Advanced Statistics</h1>
      <span
        >Track how your links are performing across the web with our advanced
        statistics dashboard</span
      >
    </div>
    <div class="box-container">
      <div class="box-container-left box">
        <div class="image">
          <img src="../assets/icon-brand-recognition.svg" alt="" />
        </div>
        <div class="content">
          <h2>Brand Recognition</h2>
          <h5>
            Boost your brand recognition with each click. Generic links don’t
            mean a thing. Branded links help instil confidence in your content.
          </h5>
        </div>
      </div>
      <div class="sticker"></div>
      <div class="box-container-center box">
        <div class="image">
          <img src="../assets/icon-detailed-records.svg" alt="" />
        </div>
        <div class="content">
          <h2>Detailed Records</h2>
          <h5>
            Gain insights into who is clicking your links. Knowing when and
            where people engage with your content helps inform better decisions.
          </h5>
        </div>
      </div>
      <div class="box-container-right box">
        <div class="image">
          <img src="../assets/icon-fully-customizable.svg" alt="" />
        </div>
        <div class="content">
          <h2>Fully Customizable</h2>
          <h5>
            Improve brand awareness and content discoverability through
            customizable links, supercharging audience engagement.
          </h5>
        </div>
      </div>
    </div>
  </article>
</template>

<script>
import UrlShorten from "./UrlShorten.vue";

export default {
  components: { UrlShorten },
  setup() {},
};
</script>

<style scoped>
article {
  width: 100%;
  height: 800px;
  background: #f0f1f6;
}

.box-container {
  width: 100%;
  display: flex;
  justify-content: center;
}

.box {
  display: flex;
  flex-direction: column;
  width: 350px;
  height: 270px;
  background: #fff;
  border-radius: 8px;
  margin: 20px 20px;
  position: relative;
}
.image {
  background: hsl(255, 11%, 22%);
  border-radius: 50%;
  height: 64px;
  width: 64px;
  display: inline-block;
  position: relative;
  top: -45px;
}

.box-container .content {
  text-align: start;
}

h5 {
  color: hsl(0, 0%, 75%);
}
.sticker {
  width: 30px;
  height: 2px;
  background: hsl(180, 66%, 49%);
}
</style>