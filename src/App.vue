<template>
  <div id="app">
    <el-container>
      <el-aside width="200px">
        <ul>
          <li><router-link to="/">home</router-link></li>
          <li><router-link to="/listbook">listbook</router-link></li>
        </ul>
      </el-aside>
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
