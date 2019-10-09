<template>
    <div class="Cart-computed">
        <button @click="reduce">-</button>
        <input disabled type="text" :value="computeNum">
        <button @click="add">+</button>
        &nbsp;&nbsp;
        <i>单个商品总价:{{this.$store.getters[this.price]}}</i>
    </div>

</template>

<script>
    export default {
        name: "Cart",
        props: ['msg', 'num', 'reduces','price'],
        data() {
            return {
                val: 0,
                totalPrice:0
            }
        },
        computed: {
            computeNum() {
                if (this.val <= 0) {
                    return 0
                } else {
                    return this.val
                }
            },
        },
        methods: {
            add() {
                this.$store.commit(this.msg)
                this.val = this.$store.state.b[this.num]
            },
            reduce() {
                if (this.$store.state.b[this.num] <= 0) {
                    alert('不能在减了')
                    return
                }
                this.$store.commit(this.reduces)
                this.val = this.$store.state.b[this.num]
            }
        }
    }
</script>

<style scoped lang="less">
    .Cart-computed {
        margin: 10px;
        input {
            height: 30px;
            width: 30px;
            border: 1px solid skyblue;
            margin: 0 10px;
            text-align: center;
        }

        button {
            background-color: #fff;
            outline: 0;
            border: 1px solid skyblue;
            width: 30px;
            height: 30px;
            font-size: 16px;
            color: hotpink;
        }
    }

</style>
