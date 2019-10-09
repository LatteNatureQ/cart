<template>
    <div class="Component1-child">
        <i>Component1-child</i>
        <br>
        <i>{{parentMsg}}</i>
        <br>
        <i>{{this.$store.state.a.count}}</i>
        <hr>
        <button @click="handelClick">Add</button>
        <hr>
        <i>{{this.$store.getters.get}}</i>
        <hr>
        <button @click="handelReduce">Reduce</button>
        <hr>
        <h2>以下是ModuleB的数据</h2>
        <hr>
        <i>{{this.$store.state.b.count}}</i>
        <hr>
        <button @click="handelMbAdd">ModuleB--Add</button>
    </div>
</template>

<script>
    export default {
        props: ['parentMsg'],
        name: "Component1-child",
        created() {
            console.log(this.parentMsg)
        },
        methods: {
            handelClick() {
                this.$store.commit('addCount')
            },
            handelReduce() {
                this.$store.dispatch('actionsMethods1')
            },
            handelMbAdd() {
                this.$store.commit('addCount')
            }
        }
    }
</script>

<style scoped>

</style>
