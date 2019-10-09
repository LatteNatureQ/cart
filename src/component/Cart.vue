<template>
    <div class="Cart">
        <CartTpl msg="addNum1" num="num1" reduces="reduceNum1" price="price1"></CartTpl>
        <CartTpl msg="addNum2" num="num2" reduces="reduceNum2" price="price2"></CartTpl>
        <hr>
        <i>商品总价:{{this.$store.getters.count}}</i>
    </div>
</template>

<script>
    import CartTpl from './CartTpl'

    export default {
        name: "Cart",
        components: {
            CartTpl
        },
        data() {
            return {
                msg: 'num1',
            }
        }

    }
</script>

<style scoped lang="less">
    .Cart {
        padding: 50px;
    }
</style>
