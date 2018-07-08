<template>
  <div id="app">
    <el-container>
      <el-aside width="200px">Aside</el-aside>
      <el-main>
        <router-view></router-view>
      </el-main>
    </el-container>
  </div>
</template>

<script>
export default {
  name: "App"
};
</script>

<style>
  * {margin:0;padding:0}
</style>
