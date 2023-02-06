<template>
  <el-container>
    <!-- 头部 -->
    <el-header>
      <div class="title">后台管理系统</div>
      <div class="nav">
        <img v-if="user_pic" :src="user_pic" alt="" />
        <img v-else src="@/assets/images/cloudHead.jpg" alt="" />
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
          </el-submenu>
        </el-menu>
        <el-link :underline="false" @click="quitFn">退出</el-link>
      </div>
    </el-header>

    <!-- 身体 -->
    <el-container>
      <!-- 侧边导航 -->
      <el-aside class="aside-nav" width="250px">
        <div class="welcome">
          <img v-if="user_pic" :src="user_pic" alt="" />
          <img v-else src="@/assets/images/cloudHead.jpg" alt="" />
          <span>欢迎 {{ nickname || username }}</span>
        </div>
        <!-- 侧边导航 -->

        <el-menu
          default-active="2"
          class="el-menu-vertical-demo"
          background-color="rgba(0,0,0,0)"
        >
          <el-menu-item index="/home">
            <i class="el-icon-location"></i>
            <span slot="title">首页</span>
          </el-menu-item>
          <el-submenu index="/topic">
            <template slot="title">
              <i class="el-icon-menu"></i>
              <span>文章管理</span>
            </template>

            <el-menu-item index="/topic1">
              <i class="el-icon-document-remove"></i>
              <span>文章分类</span>
            </el-menu-item>
            <el-menu-item index="/topic2">
              <i class="el-icon-document-remove"></i>
              <span>文章列表</span></el-menu-item
            >
          </el-submenu>

          <el-submenu index="/my">
            <template slot="title">
              <i class="el-icon-user-solid"></i>
              <span>用户管理</span>
            </template>

            <el-menu-item index="/my1">
              <i class="el-icon-user"></i><span>基本资料</span></el-menu-item
            >
            <el-menu-item index="/my2">
              <i class="el-icon-user"></i><span>更换头像</span></el-menu-item
            >
            <el-menu-item index="/my3">
              <i class="el-icon-user"></i><span>重置密码</span></el-menu-item
            >
          </el-submenu>
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
import { mapGetters } from 'vuex'
export default {
  name: 'Layout',
  data() {
    return {
      activeIndex: '1'
    }
  },
  methods: {
    // 退出登录
    quitFn() {
      this.$confirm('此操作将退出登陆,确认退出?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      })
        .then(() => {
          // 删除 vuex
          this.$store.commit('updateToken', '')
          this.$store.commit('updateUserinfo', {})
          // 跳转路由
          this.$router.push('/login')

          this.$message({
            type: 'success',
            message: '退出成功!'
          })
        })
        .catch(() => {
          this.$message({
            type: 'info',
            message: '已取消退出'
          })
        })
    }
  },
  computed: {
    ...mapGetters(['nickname', 'username', 'user_pic'])
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
    margin-right: 10px;

    img {
      width: 30px;
      height: 30px;
      border-radius: 200px;
    }

    .el-menu {
      background: transparent;
    }
  }
}
/deep/ .el-menu--horizontal > .el-menu-item:not(.is-disabled):focus,
/deep/ .el-menu--horizontal > .el-menu-item:not(.is-disabled):hover,
/deep/ .el-menu--horizontal > .el-submenu .el-submenu__title:hover {
  background-color: rgba(255, 255, 255, 0);
}
.aside-nav {
  .welcome {
    padding: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    img {
      width: 40px;
      height: 40px;
      border-radius: 200px;
      margin-right: 20px;
    }
  }
}
</style>
