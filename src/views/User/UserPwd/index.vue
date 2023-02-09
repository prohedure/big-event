<template>
  <div>
    <el-card class="box-card">
      <div slot="header" class="clearfix">
        <span>重置密码</span>
      </div>

      <!-- 表单 -->
      <el-form
        :model="ruleForm"
        status-icon
        :rules="rules"
        ref="ruleForm"
        label-width="100px"
        class="demo-ruleForm"
      >
        <el-form-item label="原密码" prop="oldpass">
          <el-input
            type="password"
            v-model="ruleForm.oldpass"
            autocomplete="off"
          ></el-input>
        </el-form-item>
        <el-form-item label="新密码" prop="pass">
          <el-input
            type="password"
            v-model="ruleForm.pass"
            autocomplete="off"
          ></el-input>
        </el-form-item>
        <el-form-item label="确认密码" prop="checkPass">
          <el-input
            type="password"
            v-model="ruleForm.checkPass"
            autocomplete="off"
          ></el-input>
        </el-form-item>

        <el-form-item>
          <el-button type="primary" @click="submitForm('ruleForm')"
            >提交</el-button
          >
          <el-button @click="resetForm('ruleForm')">重置</el-button>
        </el-form-item>
      </el-form>
    </el-card>
  </div>
</template>

<script>
import { updatePwdAPI } from '@/api'
export default {
  name: 'UserPwd',
  data() {
    var validateOldPass = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请输入原密码'))
      } else {
        if (!/^\S{6,15}$/.test(this.ruleForm.oldpass)) {
          callback(new Error('请输入6-15位非空字符'))
        }
        callback()
      }
    }
    var validatePass = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请输入密码'))
      } else if (!/^\S{6,15}$/.test(this.ruleForm.pass)) {
        callback(new Error('请输入6-15位非空字符'))
      } else if (value === this.ruleForm.oldpass) {
        callback(new Error('新密码不能与原密码一致'))
      } else {
        callback()
      }
    }

    var validatePass2 = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请再次输入密码'))
      } else if (value !== this.ruleForm.pass) {
        callback(new Error('两次输入密码不一致!'))
      } else if (!/^\S{6,15}$/.test(this.ruleForm.checkPass)) {
        callback(new Error('请输入6-15位非空字符'))
      } else {
        callback()
      }
    }

    return {
      ruleForm: {
        oldpass: '',
        pass: '',
        checkPass: ''
      },
      rules: {
        oldpass: [
          { validator: validateOldPass, trigger: 'blur', required: true }
        ],
        pass: [{ validator: validatePass, trigger: 'blur', required: true }],
        checkPass: [
          { validator: validatePass2, trigger: 'blur', required: true }
        ]
      }
    }
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate(async (valid) => {
        if (valid) {
          const { data: res } = await updatePwdAPI(
            this.ruleForm.oldpass,
            this.ruleForm.pass,
            this.ruleForm.checkPass
          )
          console.log(`output->res`, res)
          if (res.code !== 0) return this.$message.error('请输入正确密码！')

          this.$message.success(res.message)

          // 清除vuex信息
          this.$store.commit('updateToken', '')
          this.$store.commit('updateUserinfo', {})
          this.$router.push('/login')
        } else {
          // console.log('error submit!!')
          return false
        }
      })
    },
    resetForm(formName) {
      this.$refs[formName].resetFields()
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
.clearfix {
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
}
</style>
