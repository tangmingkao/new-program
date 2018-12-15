<template>
    <div id="footer">
        <div class="footer-container">
            <div class="footer-up">
                <div class="up-item1">
                    <div class="item-log"></div>
                    <div class="item-link-container margin-link1">
                        <div class="item-qq"></div>
                        <div class="item-wechat"></div>
                        <div class="item-weibo"></div>
                        <div class="item-twitter"></div>
                    </div>
                    <div class="item-link-container margin-link2">
                        <div class="item-facebook"></div>
                        <div class="item-github"></div>
                        <div class="item-t"></div>
                        <div class="item-ins"></div>
                    </div>
                </div>
                <div class="up-item2">
                    <div class="item-title">{{$t("Footer.product")}}</div>
                    <div class="item-summary summary-margin">{{$t("Footer.wallet")}}</div>
                    <div class="item-summary">{{$t("Footer.coldWallet")}}</div>
                </div>
                <div class="up-item3">
                    <div class="item-title">{{$t("Footer.information")}}</div>
                    <div class="item-summary summary-margin">{{$t("Footer.news")}}</div>
                    <div class="item-summary">{{$t("Footer.eos")}}</div>
                    <div class="item-summary">{{$t("Footer.technology")}}</div>
                    <div class="item-summary">{{$t("Footer.hooTips")}}</div>
                </div>
                <div class="up-item4">
                    <div class="item-title">{{$t("Footer.company")}}</div>
                    <div class="item-summary summary-margin" @click="aboutUs">{{$t("Footer.aboutUs")}}</div>
                    <!-- <div class="item-summary" @click="connectUs">{{$t("Footer.connectUs")}}</div> -->
                </div>
                <div class="up-item5">
                    <div class="item-title">{{$t("Footer.help")}}</div>
                    <div class="item-summary summary-margin" @click="commonProblem">{{$t("Footer.commonProblem")}}</div>
                    <!-- <div class="item-summary" @click="feedBack">{{$t("Footer.feedBack")}}</div> -->
                    <div class="item-summary" @click="legalDeclaration">{{$t("Footer.legalDeclaration")}}</div>
                </div>
            </div>
            <div class="footer-down-container">
                <div class="footer-down">
                    <ul class="footer-down-ul">
                        <li><a href="https://www.8btc.com" target="_blank">{{$t("Footer.babite")}}</a></li>
                        <li><a href="https://www.chainfor.com" target="_blank">{{$t("Footer.lianxiangcaijin")}}</a></li>
                        <li><a href="https://www.feixiaohao.com" target="_blank">{{$t("Footer.feixiaohao")}}</a></li>
                        <li><a href="http://www.bitcoin86.com" target="_blank">{{$t("Footer.bitcoin")}}</a></li>
                        <li><a href="https://www.62.com" target="_blank">{{$t("Footer.youminwang")}}</a></li>
                    </ul>
                </div>
                <!-- <div class="footer-down">
                    <ul class="footer-down-ul">
                        <li>VVPool</li>
                        <li>iner.Tools</li>
                        <li>蜜蜂财经</li>
                        <li>OKKOTC</li>
                        <li>比特之窗</li>
                        <li>彩云比特币</li>
                        <li>巴比特</li>
                        <li>币通</li>
                        <li>非常矿工</li>
                        <li>币印</li>
                        <li>链财经</li>
                    </ul>
                </div> -->
            </div>   
            <div class="website-filing filing-margin">{{$t("Footer.hongkongHoo")}}</div>
            <div class="website-filing">© 2018 hoo.com All rights reserved. {{$t("Footer.netMap")}}</div>
            <div class="website-filing">support@hoo.com</div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Footer',
    data() {
        return {

        }
    },
    components: {

    },
    created() {

    },
    methods: {
        //关于我们
        aboutUs() { 
            sessionStorage.setItem('walletNavSelected',-1);  //这些页面不选中导航栏
            this.$router.push({ name: "aboutUs"});
        },
        //联系我们
        connectUs() {
            sessionStorage.setItem('walletNavSelected',-1);
            this.$router.push({ name: "connectUs"});
        },
        //常见问题
        commonProblem() {
            sessionStorage.setItem('walletNavSelected',-1);
            this.$router.push({ name: "commonProblem"});
        },
        //意见反馈
        feedBack() {    
            sessionStorage.setItem('walletNavSelected',-1);
            this.$router.push({ name: "feedBack"});
        },
        //法律申明
        legalDeclaration() {
            sessionStorage.setItem('walletNavSelected',-1);
            this.$router.push({ name: "legalDeclaration"});
        },
    },
}
</script>

<style lang="css" scoped>
.footer-container{
    height: 3.94rem;
    width: 100%;
    /* background: burlywood; */
}
.footer-up{
    height: 2.3rem;
    width: 12rem;
    margin: 0 auto;
    display: flex;
    justify-content: center;
    align-items: flex-start;
}
.up-item1{
    width: 2.6rem;
    height: 2.3rem;
}
.up-item2{
    width: 2.2rem;
    height: 2.3rem;
}
.item-title{
    font-size: .24rem;
    width: 1.6rem;
    font-family:MicrosoftYaHei;
    font-weight: 400;
    color:rgba(255,255,255,1);
    line-height: .24rem;
    text-align: left;
    cursor: default;
}
.item-summary{
    width: 1.6rem;
    font-size: .16rem;
    font-family:MicrosoftYaHei;
    font-weight: 400;
    color:rgba(255,255,255,1);
    line-height: .2rem;
    text-align: left;
    margin-top: .12rem;
    cursor: pointer;
}
.item-summary:hover{ 
    color:blue;
    cursor: pointer;
}
.summary-margin{
    margin-top: .48rem;
}
.up-item3{
    width: 2rem;
    height: 2.3rem;
}
.up-item4{
    width: 1.84rem;
    height: 2.3rem;
}
.up-item5{
    width: 1.84rem;
    height: 2.3rem;
}
.item-log{
    height: .4rem;
    width: 1.48rem;
    background: url("../assets/image/home/logo2.png") no-repeat;
    background-size: 100% 100%;
}
.item-link-container{
    height: .24rem;
    width: 1.48rem;
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
}
.item-qq{
    height: .24rem;
    width: .24rem;
    background: url("../assets/image/home/qq.png") no-repeat;
    background-size: 100% 100%;
    cursor: pointer;
}
.item-wechat{
    height: .24rem;
    width: .24rem;
    background: url("../assets/image/home/wechat.png") no-repeat;
    background-size: 100% 100%;
    cursor: pointer;
}
.item-weibo{
    height: .24rem;
    width: .24rem;
    background: url("../assets/image/home/weibo.png") no-repeat;
    background-size: 100% 100%;
    cursor: pointer;
}
.item-twitter{
    height: .24rem;
    width: .24rem;
    background: url("../assets/image/home/twitter.png") no-repeat;
    background-size: 100% 100%;
    cursor: pointer;
}
.item-facebook{
    height: .24rem;
    width: .24rem;
    background: url("../assets/image/home/facebook.png") no-repeat;
    background-size: 100% 100%;
    cursor: pointer;
}
.item-github{
    height: .24rem;
    width: .24rem;
    background: url("../assets/image/home/github.png") no-repeat;
    background-size: 100% 100%;
    cursor: pointer;
}
.item-t{
    height: .24rem;
    width: .24rem;
    background: url("../assets/image/home/t.png") no-repeat;
    background-size: 100% 100%;
    cursor: pointer;
}
.item-ins{
    height: .24rem;
    width: .24rem;
    background: url("../assets/image/home/ins.png") no-repeat;
    background-size: 100% 100%;
    cursor: pointer;
}
.margin-link1{
    margin-top: .24rem;
}
.margin-link2{
    margin-top: .1rem;
}
.footer-down-container{
    height: .6rem;
    width: 8.8rem;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}
.footer-down{
    height: .3rem;
    width: 8.8rem;
    margin: 0 auto;
    line-height: .3rem;
}
.footer-down-ul{
    width: 8.8rem;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: .14rem;
    font-family:MicrosoftYaHei;
    font-weight: 400;
    color:rgba(230,230,230,1);
}
.footer-down-ul>li{
    margin-right: .12rem;
}
.footer-down-ul>li>a{
    font-size: .14rem;
    font-family:MicrosoftYaHei;
    font-weight: 400;
    color:rgba(230,230,230,1);
    text-decoration: none;
    cursor: pointer;
}
.footer-down-ul>li>a:hover{
    text-decoration: none;
    cursor: pointer;
    color: blue;
}
.website-filing{
    width: 100%;
    font-size: .14rem;
    font-family:MicrosoftYaHei;
    font-weight: 400;
    color:rgba(230,230,230,1);
    text-align: center;
}
.filing-margin{
    margin-top: .24rem;
}

@media (max-width: 1600px) {
    .up-item2{
        width: 2.3rem;
        height: 2.3rem;
    }
    .up-item3{
        width: 2.1rem;
        height: 2.3rem;
    }
    .up-item4{
        width: 1.94rem;
        height: 2.3rem;
    }
    .up-item5{
        width: 1.94rem;
        height: 2.3rem;
    }
}
@media (max-width: 1400px) {
    .up-item2{
        width: 2.4rem;
        height: 2.3rem;
    }
    .up-item3{
        width: 2.2rem;
        height: 2.3rem;
    }
    .up-item4{
        width: 2.04rem;
        height: 2.3rem;
    }
    .up-item5{
        width: 2.04rem;
        height: 2.3rem;
    }
}
@media (max-width: 1200px) {
    .up-item5{
        width: 1rem;
        height: 2.3rem;
    }
    .filing-margin{
        margin-top: 0rem;
    }
    .up-item2{
        width: 2.44rem;
        height: 2.3rem;
    }
    .up-item3{
        width: 2.24rem;
        height: 2.3rem;
    }
    .up-item4{
        width: 2.18rem;
        height: 2.3rem;
    }
    .up-item5{
        width: 2.18rem;
        height: 2.3rem;
    }
}
@media (max-width: 800px) {
    .up-item2{
        width: 2.54rem;
        height: 2.3rem;
    }
    .up-item3{
        width: 2.34rem;
        height: 2.3rem;
    }
    .up-item4{
        width: 2.28rem;
        height: 2.3rem;
    }
    .up-item5{
        width: 2.28rem;
        height: 2.3rem;
    }   
}
</style>

