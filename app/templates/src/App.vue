<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
export default {
  name: 'App'
};
</script>

<style lang="scss">
@import '@/assets/css/common.scss';

#app {
  height: 100%;
}
.el-container {
  height: 100%;
  .el-footer,
  .el-main {
    padding: 0;
  }
  .el-main {
    margin-top: 50px;
  }
}

@media (min-width: 768px) {
  .container {
    width: 880px;
  }
}

@media (min-width: 992px) {
  .container {
    width: 970px;
  }
}

@media (min-width: 1200px) {
  .container {
    width: 1150px;
  }
}
</style>
