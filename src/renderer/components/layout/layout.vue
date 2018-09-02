<template>
  <div class="layout">
    <div class="layout-main clear">
      <div class="layout-aside">
        <layout-side></layout-side>
      </div>
      <div class="layout-header">
        <layout-header></layout-header>
      </div>
      <div class="content">
        <div class="content-main">
          <router-view/>
        </div>
      </div>
    </div>
    <div class="layout-footer">
      <layout-footer></layout-footer>
    </div>
  </div>
</template>
<script>
// 侧边栏导航
import layoutSide from './layoutSide'
// 顶部菜单
import layoutHeader from './layoutHeader'
// 底部信息
import layoutFooter from './layoutFooter'
export default {
  components: {
    layoutSide,
    layoutHeader,
    layoutFooter
  },
  created () {
  }
}
</script>

<style lang="scss" scoped>
.layout {
  position: relative;
  width: 100%;
  height: 100%;
  &-aside {
    position: fixed;
    left: 0;
    top: 0;
    bottom: 0;
    width: 200px;
  }
  &-header {
    position: fixed;
    left: 200px;
    top: 0;
    right: 0;
    height: 64px;
    background: #fff;
    z-index: 100;
  }
  &-main {
    padding-bottom: 58px;
    height: auto;
    min-height: 100%;
    background-color: rgb(240, 242, 245);
    .content {
      padding-top: 64px;
      padding-left: 200px;
      &-main {
        height: auto;
        min-height: calc(100vh - 182px);
      }
    }
  }
  &-footer {
    margin: -58px 0 0 200px;
    height: 58px;
    clear: both;
  }
}
</style>
