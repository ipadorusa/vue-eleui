<template>
    <nav class="el-scrollbar">
        <ul class="el-submenu">
            <li class="list-item"><router-link to="/">home</router-link></li>
            <li class="list-item"><router-link to="/page1">page1</router-link></li>
            <li class="list-item"><router-link to="/ListBook">ListBook</router-link></li>
        </ul>
    </nav>
</template>
<script>
    export default {
        name: 'SubMenu'
    }
</script>