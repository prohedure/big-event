<template>
  <!-- 注册页面盒子 -->
  <div class="reg-container">
    <!-- 小盒子 -->
    <div class="reg-box">
      <div class="title-box">注 册</div>
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
        <el-form-item prop="repassword">
          <el-input
            type="password"
            placeholder="请重新输入密码"
            v-model="form.repassword"
          ></el-input>
        </el-form-item>

        <el-form-item>
          <el-button type="primary" @click="registerFn">注 册</el-button>
          &nbsp;<el-link type="info" @click="$router.push('/login')"
            >已有账号？去登录</el-link
          >
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
import { registerAPI } from '@/api'
export default {
  name: 'Register',
  data() {
    const sameOrNot = (rule, value, callback) => {
      if (value !== this.form.password) {
        callback(new Error('两次密码不一致'))
      }
      callback()
    }
    return {
      // 表单数据
      form: {
        username: '',
        password: '',
        repassword: ''
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
        ],
        repassword: [
          { required: true, message: '请再次输入密码', trigger: 'blur' },
          { validator: sameOrNot, trigger: 'blur' }
        ]
      }
    }
  },
  methods: {
    registerFn() {
      // js兜底校验，校验表单规则是否通过
      this.$refs.form.validate(async (valid) => {
        if (valid) {
          const { data: res } = await registerAPI(this.form)
          console.log(`output->res`, res)
          if (res.code !== 0) return this.$message.error(res.message)

          this.$message.success(res.message)
          // 跳转到登录页面
          this.$router.push('/login')
        } else {
          return false
        }
      })
    }
  }
}
</script>

<style scope lang="less">
.reg-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  background: url('@/assets/images/cloud.jpg') no-repeat;
  background-size: cover;

  background-position: 0 0;

  .reg-box {
    width: 400px;
    height: 350px;
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
