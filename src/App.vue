<template>
    <div class="App">
        <RouterView></RouterView>
    </div>
</template>

<script>
    import Component1 from './component/Component1'
    import Component2 from './component/Component2'

    export default {
        name: "App",
        components: {
            Component1,
            Component2
        }
    }
</script>

<style scoped>
    @import "./static/css/base.css";
</style>
