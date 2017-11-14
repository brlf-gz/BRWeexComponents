/**
 * Created by Aijun on 2017/11/14.
 */

import DateUtil from './utils/DateUtil'

const components = {
    //将需要注入的组件在此处导入
    "v-base-button":require('./components/v-base-button.vue')
};

const utils = {
    //将公共库类统一放在此处管理
    DateUtil:DateUtil,
};

const install = function (Vue, opts = {}) {

    //自动注入所有导入components的组件
    Object.keys(components).forEach(key => {
        Vue.component(key, components[key]);
    });

    //将公共库类统一放入到Vue实例的$utils中，项目中可以通过this.$utils.DateUtil来进行调用
    Vue.prototype.$utils = utils;

    //也可以通过此方法来赋予全局变量，项目中可以通过使用Vue.brutils.DateUtil来进行调用
    Vue.brutils = utils;

};

//auto install
if (typeof window !== 'undefined' && window.Vue) {
    install(window.Vue);
}

let API = {
    version: '0.0.15',
    install,
    components:components,
    utils:utils
};

export default API;