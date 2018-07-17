<template>
    <div id="app">
        <el-container>
            <el-header>
                <i class="el-icon-edit"></i><router-link to="/">KIMWOOSUK</router-link>
            </el-header>
            <el-container>
                <el-aside width="300px" class="el-menu"><sub-menu></sub-menu></el-aside>
                <el-main>
                    <router-view></router-view>
                </el-main>
            </el-container>
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
