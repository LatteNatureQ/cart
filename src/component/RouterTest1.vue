<template>
    <div class="RouterText1">
        {{this.$route.params.id}}
    </div>
</template>

<script>
    export default {
        name: "RouterTest1.vue"
    }
</script>

<style scoped>
.RouterText1 {
    padding: 50px;
}
</style>
