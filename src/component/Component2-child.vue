<template>
    <div class="Component2-child">
        <i>Component2-child</i>
        <br>
        <button @click="handelEmit">准备向父组件传值</button>
        <br>
        {{this.$store.state.count}}
        <br>
        <hr>
        <button @click="changeState">Add</button>
        <hr>
        {{this.$store.state.a.list.map(value=>value.text)}}
        <hr>
        {{this.$store.getters.get}}
        <hr>
        <button @click="handelReduce">Reduce</button>
        <hr>
    </div>
</template>

<script>
    export default {
        name: "Component2-child",
        data() {
            return {
                msg: '子组件的值'
            }
        },
        methods: {
            handelEmit() {
                this.$emit('childMsg', this.msg)
                console.log('xx')
            },
            changeState() {
                this.$store.commit('addCount')
                this.$store.commit('fitterList')
            },
            handelReduce(){
                this.$store.dispatch('actionsMethods1')
            }
        }
    }
</script>

<style scoped>

</style>
