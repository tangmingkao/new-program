// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App';
import router from './router';
import Store from './store/index';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import VueI18n from 'vue-i18n';
import VueWechatTitle from 'vue-wechat-title';
import VueAwesomeSwiper from 'vue-awesome-swiper';
// require styles
import 'swiper/dist/css/swiper.css';

Vue.use(ElementUI);
Vue.use(VueI18n);
Vue.use(VueWechatTitle);
const i18n = new VueI18n({
    locale:localStorage.getItem('localeLang')|| 'zh-CN',    // 语言标识
    messages: {
      'zh-CN': require('./common/lang/zh'),   // 中文语言包
      'en-US': require('./common/lang/en')    // 英文语言包
    }
});

Vue.use(VueAwesomeSwiper, /* { default global options } */);


Vue.prototype.$store = Store;

// 移动端适配
(function (doc, win) {
    var docEl = doc.documentElement,
        resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize',
        recalc = function () {
            var clientWidth = docEl.clientWidth
            // alert(clientWidth);
            if (!clientWidth) return
            if(clientWidth < 1920){
                docEl.style.fontSize = 100 * (clientWidth / 1920) + 'px';
            } else {
                docEl.style.fontSize = '100px';
            }

        };
    if (!doc.addEventListener) return;
    win.addEventListener(resizeEvt, recalc, false);
    doc.addEventListener('DOMContentLoaded', recalc, false);
})(document, window)


Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  i18n,
  components: { App },
  template: '<App/>'
})
