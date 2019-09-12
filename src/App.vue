<template>
    <div id="app">
        <router-view/>
        <!-- <keep-alive include="index,activity,center">
            <router-view/>
        </keep-alive>
        <van-tabbar route v-model="active" v-show="is_show_tab" active-color="#67C23A">
            <van-tabbar-item v-for="(item, index) in tabbar_list" :key="index" replace :to="item.path" :icon="item.icon">
                {{item.name}}
            </van-tabbar-item>
        </van-tabbar> -->
    </div>
</template>

<script>
    export default {
        name: 'App'
    }
</script>

<style>
    * {
        margin: 0;
        padding: 0;
    }
    img {
        content: normal !important;
    }
</style>
