<template>
    <div id="app">
        <el-container>
            <el-header>
                <div class="logo"><a href="index.html">SRI UI PATTERNS</a></div>
            </el-header>
            <el-aside width="200px">
                <sub-menu></sub-menu>
            </el-aside>
            <el-main>
                <router-view></router-view>
            </el-main>
        </el-container>
    </div>
</template>

<script>
    import SubMenu from '@/components/SubMenu'

    export default {
        name: 'App',
        components: {
            SubMenu
        }
    }
</script>

<style>
    *{margin:0;padding:0}
</style>
