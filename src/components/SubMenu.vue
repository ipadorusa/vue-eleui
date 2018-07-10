<template>
    <div>
        <el-row class="tac">
            <el-col :span="24">
                <el-menu default-active="2"  class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose">
                    <el-submenu index="1">
                        <template slot="title">
                            <i class="el-icon-document"></i>
                            <span>Vue-self-study</span>
                        </template>
                        <el-menu-item-group title="Vuejs 시작하기">
                            <el-menu-item index="1-1"><router-link to="/studystate01">선언적 렌더링(V-BIND)</router-link></el-menu-item>
                            <el-menu-item index="1-2"><router-link to="/studystate02">조건문과 반복문</router-link></el-menu-item>
                        </el-menu-item-group>
                    </el-submenu>
                </el-menu>
            </el-col>
        </el-row>
        <!-- <nav>
            <ul class="el-submenu">
                <li class="list-item"><router-link to="/">home</router-link></li>
                <li class="list-item"><router-link to="/studystate01">study01</router-link></li>
                <li class="list-item"><router-link to="/bookmarklist">BookMarkList</router-link></li>
                <li class="list-item"><router-link to="/listbook">ListBook</router-link></li>
                <li class="list-item"><router-link to="/vuestudylist">VuestudyList</router-link></li>
            </ul>
        </nav> -->
    </div>
</template>
<script>
export default {
    name: "SubMenu",
    methods: {
        handleOpen(key, keyPath) {},
        handleClose(key, keyPath) {}
    }
};
</script>
