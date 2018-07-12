<template>
    <div>
        <el-row class="tac">
            <el-col :span="24">
                <el-menu default-active="1"  class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose">
                    <el-submenu index="1">
                        <template slot="title">
                            <i class="el-icon-document"></i>
                            <span>Vue-self-study</span>
                        </template>
                        <el-menu-item-group title="Vuejs 시작하기">
                            <el-menu-item index="1-1" class="sub-list"><router-link to="/studystate01">선언적 렌더링(V-BIND)</router-link></el-menu-item>
                            <el-menu-item index="1-2" class="sub-list"><router-link to="/studystate02">조건문과 반복문</router-link></el-menu-item>
                            <el-menu-item index="1-3" class="sub-list"><router-link to="/studystate03">반복문1</router-link></el-menu-item>
                            <el-menu-item index="1-4" class="sub-list"><router-link to="/studystate04">사용자입력 핸들링</router-link></el-menu-item>
                        </el-menu-item-group>
                    </el-submenu>
                    <el-submenu index="2">
                        <template slot="title">
                            <i class="el-icon-document"></i>
                            <span>템플릿문법</span>
                        </template>
                        <el-menu-item-group title="보간법(Interpolation),디렉티브">
                            <el-menu-item index="2-1" class="sub-list"><router-link to="/studystate05">원시 HTML</router-link></el-menu-item>
                        </el-menu-item-group>
                    </el-submenu>
                    <el-submenu index="3">
                        <template slot="title">
                            <i class="el-icon-document"></i>
                            <span>계산된 속성과 감시자</span>
                        </template>
                        <el-menu-item-group title="">
                            <el-menu-item index="2-1" class="sub-list"><router-link to="/studystate06">계산된 속성</router-link></el-menu-item>
                            <el-menu-item index="2-2" class="sub-list"><router-link to="/studystate06">감시자</router-link></el-menu-item>
                            <el-menu-item index="2-3" class="sub-list"><router-link to="/studystate07">감시자2</router-link></el-menu-item>
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
