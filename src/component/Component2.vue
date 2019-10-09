<template>
    <div class="Component2">
        <hr>
        <h1> Component2</h1>
        <Component2Child @childMsg="accept"></Component2Child>
        <br>
        <i>{{msg}}</i>
        <hr>
    </div>
</template>

<script>
    import Component2Child from './Component2-child'

    export default {
        name: "Component2",
        components: {
            Component2Child
        },
        data(){
            return {
                msg:''
            }
        },
        methods: {
            accept(val) {
                this.msg = val
                console.log(val)
            }
        }

    }
</script>

<style scoped>

</style>