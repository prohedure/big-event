<template>
  <div>
    <el-card class="box-card">
      <div slot="header" class="clearfix">
        <span>基本资料</span>
      </div>

      <!-- 表单 -->
      <el-form ref="formLabelAlign" :model="formLabelAlign" label-width="80px">
        <el-form-item label="登录名称">
          <el-input v-model="formLabelAlign.username" disabled></el-input>
        </el-form-item>
        <el-form-item
          prop="nickname"
          label="用户昵称"
          :rules="[
            {
              required: true,
              message: '请输入昵称',
              trigger: 'blur'
            }
          ]"
        >
          <el-input v-model="formLabelAlign.nickname"></el-input>
        </el-form-item>
        <!-- 邮箱 -->
        <el-form-item
          prop="email"
          label="用户邮箱"
          :rules="[
            { required: true, message: '请输入邮箱地址', trigger: 'blur' },
            {
              type: 'email',
              message: '请输入正确的邮箱地址',
              trigger: ['blur', 'change']
            }
          ]"
        >
          <el-input v-model="formLabelAlign.email"></el-input>
        </el-form-item>

        <el-form-item>
          <el-button type="primary" @click="submitForm">提交修改</el-button>
          <el-button @click="reset">重置</el-button>
        </el-form-item>
      </el-form>
    </el-card>
  </div>
</template>

<script>
import { updateUserInfoAPI } from '@/api/index.js'
export default {
  name: 'UserInfo',
  data() {
    return {
      formLabelAlign: {
        username: this.$store.state.userinfo.username,
        nickname: '',
        email: ''
      }
    }
  },
  methods: {
    reset() {
      this.$refs.formLabelAlign.resetFields()
    },
    submitForm() {
      this.$refs.formLabelAlign.validate(async (valid) => {
        if (valid) {
          // 兜底验证成功

          // 发起请求
          this.formLabelAlign.id = this.$store.state.userinfo.id
          const { data: res } = await updateUserInfoAPI(this.formLabelAlign)

          if (res.code !== 0) this.$message.error(res.message)

          this.$message.success(res.message)

          this.$store.dispatch('getUserinfoActions')

          this.reset()
        } else {
          return false
        }
      })
    }
  }
}
</script>

<style lang="less" scoped>
.text {
  font-size: 14px;
}

.item {
  margin-bottom: 18px;
}

.clearfix > span {
  font-size: 14px;
}
.clearfix:before,
.clearfix:after {
  display: table;
  content: '';
}
.clearfix:after {
  clear: both;
}

.box-card {
  width: 100%;
}
</style>
