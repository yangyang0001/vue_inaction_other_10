import Vue from 'vue'
import App from './App.vue'


Vue.config.productionTip = false

/**
 *  全局注册指令
 */
// Vue.directive('color', {
//     bind(el, binding, vnode) { },

//     inserted(el, binding, vnode) {
//         el.style.color = binding.value;
//     },

//     update(el, binding, vnode, oldVnode) {
//         el.style.color = binding.value;
//     },

//     componentUpdated(el, binding, vnode) { },

//     unbind(el, binding, vnode) { },
// });

/** 上面可以简写为下面的方式, 因为 bind/inserted 和 update 方法中有相同的业务逻辑! */
Vue.directive('color', function (el, binding) {
    console.log('el is:', el);
    el.style.color = binding.value;
});

const app = new Vue({
    render: h => h(App),
}).$mount('#app');
