<template>
  <!-- 登录页面盒子 -->
  <div class="login-container">
    <!-- 小盒子 -->
    <div class="login-box">
      <div class="title-box">登 陆</div>
      <!-- 表单区域 -->
      <el-form
        :rules="rules"
        class="form"
        ref="form"
        :model="form"
        size="medium"
      >
        <el-form-item prop="username">
          <el-input
            placeholder="请输入用户名"
            v-model="form.username"
          ></el-input>
        </el-form-item>
        <el-form-item prop="password">
          <el-input
            type="password"
            placeholder="请输入密码"
            v-model="form.password"
          ></el-input>
        </el-form-item>

        <el-form-item>
          <el-button type="primary" @click="loginFn">登 陆</el-button>
          &nbsp;<el-link type="info" @click="$router.push('/reg')"
            >没有账号？去注册</el-link
          >
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
import { loginAPI } from '@/api'
// 把mutation 映射过来
import { mapMutations } from 'vuex'
export default {
  name: 'Login',
  data() {
    return {
      // 表单数据
      form: {
        username: '',
        password: ''
      },
      // 校验规则
      rules: {
        username: [
          { required: true, message: '请输入用户名', trigger: 'blur' },
          { min: 3, max: 10, message: '长度在 3 到 10 个字符', trigger: 'blur' }
        ],
        password: [
          { required: true, message: '请输入密码', trigger: 'blur' },
          {
            pattern: /^\S{6,15}$/,
            message: '密码应为 6-15 个非空字符',
            trigger: 'blur'
          }
        ]
      }
    }
  },
  methods: {
    ...mapMutations(['updateToken']),
    loginFn() {
      // js 兜底验证
      this.$refs.form.validate(async (valid) => {
        if (valid) {
          const { data: res } = await loginAPI(this.form)

          // 判断登陆失败
          if (res.code !== 0) return this.$message.error(res.message)

          // 成功登陆
          this.$message.success(res.message)

          // 存token
          this.updateToken(res.token)

          // 跳转主页
          this.$router.push('/')
        } else {
          return false
        }
      })
    }
  }
}
</script>

<style scope lang="less">
.login-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  background: url('@/assets/images/cloud.jpg') no-repeat;
  background-size: cover;

  background-position: 0 0;

  .login-box {
    width: 400px;
    height: 312px;
    background: rgba(244, 244, 244, 0.245);
    overflow: hidden;

    .title-box {
      text-align: center;
      height: 60px;
      line-height: 60px;
      font-size: larger;

      background-color: rgba(196, 199, 232, 0.689);
      color: rgb(46, 58, 68);

      border-radius: 3px;
    }
    .el-form {
      margin-top: 10px;
      padding: 15px 25px;

      .el-button {
        height: 40px;
        width: 100%;
      }
      .el-link.el-link--info {
        color: rgb(46, 58, 68);
        transition: 0.5s;
      }
    }
  }
}
</style>
