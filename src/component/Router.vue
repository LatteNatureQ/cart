<template>
    <div class="Router">
        <fieldset>
            <legend>动态路径匹配测试</legend>
            <router-link to="/routertest1/0">声明式导航</router-link>
            <hr>
            <i @click="handelNav">编程式导航</i>
        </fieldset>

        <fieldset>
            <legend>嵌套路由测试</legend>
            <RouterView></RouterView>
        </fieldset>
    </div>
</template>

<script>
    export default {
        name: "Router",
        methods: {
            handelNav() {
                this.$router.push('/routertest1/1')
            }
        }
    }
</script>

<style scoped>
    .Router {
        padding: 50px;
    }

    fieldset {
        margin: 30px;
    }
</style>
