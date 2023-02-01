<template>
  <router-view></router-view>
</template>

<script>
import { registerAPI } from './api'
export default {
  name: 'App',
  async created() {
    const res = await registerAPI()
    console.log(`output-> res`, res)
  }
}
</script>

<style scoped lang="less"></style>
