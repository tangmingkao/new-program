import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'

Vue.use(Router)

export default new Router({
    mode: 'history',
    routes: [
        {
            path: '/',
            name: 'HelloWorld',
            component: HelloWorld
        },
        {
            path: '/home',
            name: 'homePage',
            component(resolve) {
                require.ensure(['../views/homePage.vue'], () => {
                    resolve(require('../views/homePage.vue'))
                })
            },
            meta: {
                title: '主页',
                requireAuth: true
            }
        },
        {
            path: '/wallet',
            name: 'walletPage',
            component(resolve) {
                require.ensure(['../views/walletPage.vue'], () => {
                    resolve(require('../views/walletPage.vue'))
                })
            },
            meta: {
                title: '钱包',
                requireAuth: true
            }
        },
        {
            path: '/financial',
            name: 'financialPage',
            component(resolve) {
                require.ensure(['../views/financialPage.vue'], () => {
                    resolve(require('../views/financialPage.vue'))
                })
            },
            meta: {
                title: '理财',
                requireAuth: true
            }
        },
        {
            path: '/loan',
            name: 'loanPage',
            component(resolve) {
                require.ensure(['../views/loanPage.vue'], () => {
                    resolve(require('../views/loanPage.vue'))
                })
            },
            meta: {
                title: '借贷',
                requireAuth: true
            }
        },
        {
            path: '/otc',
            name: 'otcTransactionPage',
            component(resolve) {
                require.ensure(['../views/otcTransactionPage.vue'], () => {
                    resolve(require('../views/otcTransactionPage.vue'))
                })
            },
            meta: {
                title: '场外交易',
                requireAuth: true
            }
        },
        {
            path: '/timelyexchange',
            name: 'timelyExchangePage',
            component(resolve) {
                require.ensure(['../views/timelyExchangePage.vue'], () => {
                    resolve(require('../views/timelyExchangePage.vue'))
                })
            },
            meta: {
                title: '即时兑换',
                requireAuth: true
            }
        },
        {
            path: '/coldwallet',
            name: 'coldWalletPage',
            component(resolve) {
                require.ensure(['../views/coldWalletPage.vue'], () => {
                    resolve(require('../views/coldWalletPage.vue'))
                })
            },
            meta: {
                title: '企业级冷钱包',
                requireAuth: true
            }
        },
        {
            path: '/eosarea',
            name: 'eosAreaPage',
            component(resolve) {
                require.ensure(['../views/eosAreaPage.vue'], () => {
                    resolve(require('../views/eosAreaPage.vue'))
                })
            },
            meta: {
                title: 'EOS专区',
                requireAuth: true
            }
        },
        {
            path: '/about',
            name: 'aboutUs',
            component(resolve) {
                require.ensure(['../views/aboutUsPage.vue'], () => {
                    resolve(require('../views/aboutUsPage.vue'))
                })
            },
            meta: {
                title: '关于我们',
                requireAuth: true
            }
        },
        {
            path: '/contact',
            name: 'connectUs',
            component(resolve) {
                require.ensure(['../views/connectUsPage.vue'], () => {
                    resolve(require('../views/connectUsPage.vue'))
                })
            },
            meta: {
                title: '联系我们',
                requireAuth: true
            }
        },
        {
            path: '/feedback',
            name: 'feedBack',
            component(resolve) {
                require.ensure(['../views/feedBackPage.vue'], () => {
                    resolve(require('../views/feedBackPage.vue'))
                })
            },
            meta: {
                title: '意见反馈',
                requireAuth: true
            }
        },
        {
            path: '/legal',
            name: 'legalDeclaration',
            component(resolve) {
                require.ensure(['../views/legalDeclarationPage.vue'], () => {
                    resolve(require('../views/legalDeclarationPage.vue'))
                })
            },
            meta: {
                title: '法律申明',
                requireAuth: true
            }
        },
        {
            path: '/problem',
            name: 'commonProblem',
            component(resolve) {
                require.ensure(['../views/commonProblemPage.vue'], () => {
                    resolve(require('../views/commonProblemPage.vue'))
                })
            },
            meta: {
                title: '常见问题',
                requireAuth: true
            }
        },
    ]
})
