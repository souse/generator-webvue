<template>
  <div class="error-404">
    <div class="error-404-body">
      <p class="error-404-body-message">404 页面找不到了！</p>
      <div class="error-404-btns">
        <a href="javascript:;" @click="onGoHomeClick"> 返回首页 </a>
        <a href="javascript:;" @click="onBackPageClick">返回上一页</a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'NotFound',
  methods: {
    onGoHomeClick() {
      this.$router.go(-1);
    },
    onBackPageClick() {
      this.$router.go(-1);
    }
  }
};
</script>

<style scoped lang="scss">
.error-404 {
  position: relative;
  width: 200px;
  margin: 100px auto 0;
  .error-404-body {
    font-size: 14px;
  }
  p {
    margin-bottom: 20px;
  }
}
</style>
