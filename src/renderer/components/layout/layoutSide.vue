<template>
  <div class="layoutSide">
    <el-row>
      <div class="title">ag-game</div>
    </el-row>
    <el-row>
      <el-menu :default-active="activeIndex" 
        class="el-menu-demo" mode="horizontal" @select="handleSelect">
        <el-menu-item index="1">左菜单</el-menu-item>
      </el-menu>
    </el-row>
  </div>
</template>
<script>
export default {
  data () {
    return {
      activeIndex: 1,
      menu1: [
        {

        }
      ],
      menu2: [
        {
        },
        {

        }
      ]
    }
  }
}
</script>
<style lang="scss" scoped>
  .layoutSide{
    height: 100%;
    background: #f1f1f1;
    .el-row{
      .title{
        height:46px;
      }
    }
  }
</style>
