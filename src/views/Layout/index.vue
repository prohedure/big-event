<template>
  <el-container>
    <!-- 头部 -->
    <el-header>
      <div class="title">GIS职位管理系统</div>
      <div class="nav">
        <img src="@/assets/images/cloudHead.jpg" alt="" />
        <el-menu
          :default-active="activeIndex"
          class="el-menu-demo"
          mode="horizontal"
        >
          <el-submenu index="1">
            <template slot="title"> 个人中心</template>
            <el-menu-item index="2-1">选项1</el-menu-item>
            <el-menu-item index="2-2">选项2</el-menu-item>
            <el-menu-item index="2-3">选项3</el-menu-item>
          </el-submenu></el-menu
        >
        <el-link :underline="false">退出</el-link>
      </div>
    </el-header>

    <!-- 身体 -->
    <el-container>
      <!-- 侧边导航 -->
      <el-aside class="aside-nav" width="250px">
        <div class="welcome">
          <img src="@/assets/images/cloudHead.jpg" alt="" />
          <span>欢迎 xxx</span>
        </div>
        <!-- 侧边导航 -->

        <el-menu
          default-active="2"
          class="el-menu-vertical-demo"
          background-color="rgba(0,0,0,0)"
        >
          <el-submenu index="1">
            <template slot="title">
              <i class="el-icon-location"></i>
              <span>导航一</span>
            </template>
            <el-menu-item-group>
              <template slot="title">分组一</template>
              <el-menu-item index="1-1">选项1</el-menu-item>
              <el-menu-item index="1-2">选项2</el-menu-item>
            </el-menu-item-group>
            <el-menu-item-group title="分组2">
              <el-menu-item index="1-3">选项3</el-menu-item>
            </el-menu-item-group>
            <el-submenu index="1-4">
              <template slot="title">选项4</template>
              <el-menu-item index="1-4-1">选项1</el-menu-item>
            </el-submenu>
          </el-submenu>
          <el-menu-item index="2">
            <i class="el-icon-menu"></i>
            <span slot="title">导航二</span>
          </el-menu-item>
          <el-menu-item index="3" disabled>
            <i class="el-icon-document"></i>
            <span slot="title">导航三</span>
          </el-menu-item>
          <el-menu-item index="4">
            <i class="el-icon-setting"></i>
            <span slot="title">导航四</span>
          </el-menu-item>
        </el-menu>
      </el-aside>
      <!-- 主体 -->
      <el-container>
        <el-main>Main</el-main>
        <el-footer>Footer</el-footer>
      </el-container>
    </el-container>
  </el-container>
</template>

<script>
export default {
  name: 'Layout',
  data() {
    return {
      activeIndex: '1'
    }
  }
}
</script>

<style lang="less" scoped>
.el-header,
.el-footer {
  background-color: #b3c0d1;
  color: #333;
  text-align: center;
  line-height: 60px;
}

.el-aside {
  overflow: hidden;
  background-color: #d3dce6;
  color: #333;
}

.el-main {
  background-color: #e9eef3;
  color: #333;
  text-align: center;
}

body > .el-container {
  height: 100%;
  margin-bottom: 40px;
}

.title {
  float: left;
}
.el-header {
  .nav {
    float: right;
    display: flex;
    flex-direction: row;
    align-items: center;

    img {
      width: 30px;
      height: 30px;
      border-radius: 200px;
    }
    .el-menu {
      background-color: rgba(0, 0, 0, 0);
    }
    .el-menu--horizontal > .el-submenu .el-submenu__title {
      color: black;
    }
  }
}

.aside-nav {
  .welcome {
    padding: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    img {
      width: 44px;
      height: 44px;
      border-radius: 200px;
      margin-right: 10px;
    }
  }
}
</style>
