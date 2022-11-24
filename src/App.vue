<template>
    <div class="root">
        <h1 v-color="color">App根组件</h1>
        <button @click="color='red'">改变color='red'</button>       &nbsp;&nbsp;
        <button @click="color='green'">改变color='green'</button>   &nbsp;&nbsp;
        <button @click="color='blue'">改变color='blue'</button>     &nbsp;&nbsp;
    </div>
</template>

<script>

import Left from "@/components/Left.vue";
import Right from "@/components/Right.vue";

export default {

    components: {
        Left,
        Right
    },

    data() {
        return {
            color: '#c88400'
        };
    },

    mounted() {

    },

    methods: {

    },

    /** 局部注册指令 */
    directives: {
        // color: {
        //     bind(el, binding, vnode) { 
        //         console.log('bind method invoke', binding);
        //     },

        //     inserted(el, binding, vnode) {
        //         console.log('inserted method invoke', binding);
        //         el.style.color = binding.value;
        //     },

        //     update(el, binding, vnode, oldVnode) {
        //         console.log('update method invoke', binding);
        //         el.style.color = binding.value;
        //      },

        //     componentUpdated(el, binding, vnode) { 
        //         console.log('componentUpdated method invoke', binding);
        //     },

        //     unbind(el, binding, vnode) { 
        //         console.log('unbind method invoke', binding);
        //     },
        // },

        /** TODO: 如果 bind/inserted 和 update 有相同的业务逻辑, 这时候自定义指令可以简写为 方法的方式! */
        // color(el, binding) {
        //     el.style.color = binding.value;
        // }

    },


};

</script>

<style lang="less" scoped>
.root {
    padding: 5px 20px 260px 20px;
    background-color: #b9bdb0;
}
</style>