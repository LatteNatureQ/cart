<template>
    <div class="Component1">
        <hr>
        <h1>Component1</h1>
        <Component1Child :parentMsg="msg"></Component1Child>
        <hr>
    </div>
</template>

<script>
    import Component1Child from './Component1-child'
    export default {
        name: "Component1",
        data(){
            return {
                msg:'父组件的值'
            }
        },
        components:{
            Component1Child
        }
    }
</script>

<style scoped>

</style>