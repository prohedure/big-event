<template>
  <div>
    <el-card class="box-card">
      <div slot="header" class="clearfix">
        <span>更换头像</span>
      </div>
      <span v-if="!avatar" class="img el-icon-user-solid"></span>
      <img v-else :src="avatar" alt="" />
      <el-form>
        <el-form-item>
          <el-button @click="choose">
            <span class="el-icon-picture"></span>&nbsp;&nbsp;
            选择文件</el-button
          >
          <input
            ref="file"
            type="file"
            style="display: none"
            @change="getFile"
          />&nbsp;&nbsp;

          <el-button type="primary" @click="uploadFn"
            ><span class="el-icon-check"></span>&nbsp;&nbsp;提交</el-button
          >
        </el-form-item>
      </el-form>
    </el-card>
  </div>
</template>

<script>
import { uploadAvatarAPI } from '@/api'
export default {
  name: 'UserAvatar',
  data() {
    return {
      avatar: ''
    }
  },
  methods: {
    choose() {
      this.$refs.file.click()
    },
    // getFile(e) {
    //   // 这种方式得到的图片临时地址，不能发给后端
    //   const file = e.target.files
    //   if (file.length === 0) {
    //     this.avatar = ''
    //     this.$message.error('请选择图片')
    //   } else {
    //     this.avatar = URL.createObjectURL(file[0])
    //   }
    // }
    getFile(e) {
      const files = e.target.files
      if (files.length === 0) {
        this.avatar = ''
        this.$message.error('请选择图片')
      } else {
        const fr = new FileReader()
        fr.readAsDataURL(files[0])
        fr.onload = (e) => {
          this.avatar = e.target.result
        }
      }
    },
    // 上传头像，更新后台
    async uploadFn() {
      const { data: res } = await uploadAvatarAPI(this.avatar)
      if (res.code !== 0) return this.$message.error(res.message)

      this.$message.success(res.message)

      // 更新vuex信息
      this.$store.dispatch('getUserinfoActions')
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
  width: 100%;
  .img {
    line-height: 300px;
    height: 300px;
    width: 200px;
    margin-bottom: 20px;
    background-color: rgb(229, 223, 224);
    font-size: 200px;
    color: aliceblue;
  }
  img {
    height: 300px;
    width: 200px;
    margin-bottom: 20px;
  }
}

/deep/ .el-card__body {
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
