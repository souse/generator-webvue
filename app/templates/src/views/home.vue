<template>
  <div class="home-container">
    home page
    <h3>
      <hello-world />
    </h3>
  </div>
</template>

<script>
import HelloWorld from '@/components/hello-world';

export default {
  name: 'Home',
  components: {
    HelloWorld
  }
};
</script>

<style lang="scss">
.home-container {
  text-align: center;
}
</style>
