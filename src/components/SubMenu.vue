<template>
    <div class="el-scrollbar">
        <el-radio-group v-model="radio2">
            <el-radio :label="2018">2018</el-radio>
            <el-radio :label="2017">2017</el-radio>
            <el-radio :label="2016">2016</el-radio>
        </el-radio-group>
        <nav>
            <ul class="el-submenu">
                <li class="list-item"><router-link to="/">home</router-link></li>
                <li class="list-item"><router-link to="/bookmarklist">BookMarkList</router-link></li>
                <li class="list-item"><router-link to="/listbook">ListBook</router-link></li>
                <li class="list-item"><router-link to="/vuestudylist">VuestudyList</router-link></li>
            </ul>
        </nav>
    </div>
</template>
<script>
    export default {
        name: 'SubMenu',
        data() {
            return {
                radio2: 2018
            };
        }

    }
</script>
