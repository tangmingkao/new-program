<template>
  <div id="home">
       <div class="home-container">
           <!-- header part -->
            <div class="home-header">
                <HomeHeader></HomeHeader>
            </div>
            <!-- main part -->
            <div class="home-main">
                <!-- first part -->
                <div class="home-first-container">
                    <div class="home-first-swiper">
                        <!-- swiper -->
                        <swiper :options="firstSwiperOption">
                            <swiper-slide v-for="(item,index) in firstSwiperList" :key="index">
                                <div class="item-img">
                                    <img :src="item.src" />
                                </div>
                            </swiper-slide>
                            <div class="swiper-pagination" style="" slot="pagination"></div>
                        </swiper>
                    </div> 
                    <div class="home-first-absolute">
                        <div id="particles-js">
                            <div class="absolute-title">{{$t("HomePage.absoluteTitle")}}</div>
                            <div class="absolute-sammary">{{$t("HomePage.absoluteSammary")}}</div>
                            <div class="absolute-intr-container">
                                <div class="absolute-intr-left">
                                    <div class="absolute-intr-title">{{$t("HomePage.absoluteIntrTitle1")}}</div>
                                    <div class="absolute-intr-item-container">
                                        <div class="intr-item">
                                            <div class="intr-item-icon"></div>
                                            <div class="intr-item-text">{{$t("HomePage.intrItemText1")}}</div>
                                        </div>
                                        <div class="intr-item">
                                            <div class="intr-item-icon"></div>
                                            <div class="intr-item-text">{{$t("HomePage.intrItemText2")}}</div>
                                        </div>
                                        <div class="intr-item">
                                            <div class="intr-item-icon"></div>
                                            <div class="intr-item-text">{{$t("HomePage.intrItemText3")}}</div>
                                        </div>
                                        <div class="intr-item">
                                            <div class="intr-item-icon"></div>
                                            <div class="intr-item-text">{{$t("HomePage.intrItemText4")}}</div>
                                        </div>
                                        <div class="intr-item">
                                            <div class="intr-item-icon"></div>
                                            <div class="intr-item-text">{{$t("HomePage.intrItemText5")}}</div>
                                        </div>
                                    </div>
                                </div>
                                <div class="absolute-intr-right">
                                    <div class="absolute-intr-title">{{$t("HomePage.absoluteIntrTitle2")}}</div>
                                    <div class="absolute-intr-item-container">
                                        <div class="intr-item">
                                            <div class="intr-item-icon"></div>
                                            <div class="intr-item-text">{{$t("HomePage.intrItemText6")}}</div>
                                        </div>
                                        <div class="intr-item">
                                            <div class="intr-item-icon"></div>
                                            <div class="intr-item-text">{{$t("HomePage.intrItemText7")}}</div>
                                        </div>
                                        <div class="intr-item">
                                            <div class="intr-item-icon"></div>
                                            <div class="intr-item-text">{{$t("HomePage.intrItemText8")}}</div>
                                        </div>
                                        <div class="intr-item">
                                            <div class="intr-item-icon"></div>
                                            <div class="intr-item-text">{{$t("HomePage.intrItemText9")}}</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                    </div>  
                </div>
                <!-- second part -->
                <div class="home-second-title">{{$t("HomePage.secondTitle")}}</div>  
                <div class="home-second-sammary">{{$t("HomePage.secondSammary")}}</div>
                <div class="home-financial-container">  
                    <div v-for="(item,index) in financialItemList" :key="index" :class="[item.active ? 'financial-item-active': 'financial-item']" @click="selectFinancial(index)">
                        <div class="financial-item-icon">
                            <img :src="item.iconSrc" />
                        </div>
                        <div class="financial-item-name">{{item.name}}</div>
                        <div class="financial-item-profit">{{item.profit}}</div>
                        <div class="financial-item-intrname">{{item.intrname}}</div>
                        <div class="financial-item-intrsammary">{{item.intrsammary}}</div>
                        <div class="financial-item-time">{{item.time}}</div>
                    </div>
                </div>
                <div class="home-financial-more" @click="getMoreFinancial">{{$t("HomePage.checkMoreFinancial")}}</div>
                <!-- third part -->
                <div class="home-third-title">{{$t("HomePage.thirdTitle")}}</div>  
                <div class="home-third-sammary">{{$t("HomePage.thirdSammary")}}</div>
                <div class="home-third-container">
                   <Periodictable></Periodictable>
                </div>
                <!-- four part -->
                <div class="home-four-title">{{$t("HomePage.fourTitle")}}</div>  
                <div class="home-four-sammary">{{$t("HomePage.fourSammary")}}</div>
                <div class="four-item-container">
                    <div class="four-item">
                        <div class="four-item-icon">
                            <img src="../../static/image/home/quarantine.png" />
                        </div>
                        <div class="four-item-title">{{$t("HomePage.fourItemTitle1")}}</div>
                        <div class="four-item-sammary">
                            <div class="sammary-point"></div>
                            <div class="sammary-text">{{$t("HomePage.fourItemSammary1")}}</div>
                        </div>
                        <div class="four-item-sammary">
                            <div class="sammary-point"></div>
                            <div class="sammary-text">{{$t("HomePage.fourItemSammary2")}}</div>
                        </div>
                    </div>
                    <div class="four-item">
                        <div class="four-item-icon">
                            <img src="../../static/image/home/supervise.png" />
                        </div>
                        <div class="four-item-title">{{$t("HomePage.fourItemTitle2")}}</div>
                        <div class="four-item-sammary">
                            <div class="sammary-point"></div>
                            <div class="sammary-text">{{$t("HomePage.fourItemSammary3")}}</div>
                        </div>
                        <div class="four-item-sammary">
                            <div class="sammary-point"></div>
                            <div class="sammary-text">{{$t("HomePage.fourItemSammary4")}}</div>
                        </div>
                    </div>
                </div>
                <!-- five part -->
                <div class="home-five-title">{{$t("HomePage.fiveTitle")}}</div>  
                <div class="home-five-sammary">{{$t("HomePage.fiveSammary")}}</div>
                <div class="five-item-container">
                    <div id="particles-js2">
                        <transition-group name="list-complete" tag="div">
                            <div class="five-icon-item" v-for="(item,index) in fiveIconList" :key="index" :class="['five-icon-size'+item.id,'five-icon-position'+(index+1)]" @mouseover="changeSequence" >
                                <img :src="item.iconSrc" />
                            </div>
                        </transition-group>
                    </div>
                </div>
                <!-- six part -->
                <div class="home-six-title">{{$t("HomePage.sixTitle")}}</div>  
                <div class="six-item-container">
                    <div class="six-item-information">
                        <div class="six-item-pic">
                            <img src="../../static/image/home/new1.png" />
                        </div>
                        <div class="six-item-sammary">{{$t("HomePage.sixSammary1")}}</div>
                    </div>
                    <div class="six-item-information">
                        <div class="six-item-pic">
                            <img src="../../static/image/home/new2.png" />
                        </div>
                        <div class="six-item-sammary">{{$t("HomePage.sixSammary2")}}</div>
                    </div>
                    <div class="six-item-hotspot">
                        <div class="hotspot-title">{{$t("HomePage.sixHotspotTitle")}}</div>
                        <div class="hotspot-container">
                            <p align="left" class="hotspot-containe-item">{{$t("HomePage.sixHotspotItem1")}}</p>
                            <p align="left" class="hotspot-containe-item">{{$t("HomePage.sixHotspotItem2")}}</p>
                            <p align="left" class="hotspot-containe-item">{{$t("HomePage.sixHotspotItem3")}}</p>
                            <div class="hotspot-more" @click="getMoreInfomation">{{$t("HomePage.sixGetMore")}}...</div>
                        </div>
                    </div>
                </div>
                <!-- seven part -->
                <div class="home-seven-title">{{$t("HomePage.sevenTitle")}}</div> 
                <div class="seven-item-container">    
                    <!-- swiper -->
                    <swiper :options="secondSwiperOption">
                        <swiper-slide>
                            <div class="seven-swiper-item">
                                <div class="seven-swiper-item-icon1"></div>
                                <!-- <div class="seven-swiper-item-text">HOO钱包</div> -->
                            </div>
                        </swiper-slide>
                         <swiper-slide>
                            <div class="seven-swiper-item">
                                <div class="seven-swiper-item-icon2"></div>
                                <!-- <div class="seven-swiper-item-text">HOO钱包</div> -->
                            </div>
                        </swiper-slide>
                         <swiper-slide>
                            <div class="seven-swiper-item">
                                <div class="seven-swiper-item-icon3"></div>
                                <!-- <div class="seven-swiper-item-text">HOO钱包</div> -->
                            </div>
                        </swiper-slide>
                        <swiper-slide>
                            <div class="seven-swiper-item">
                                <div class="seven-swiper-item-icon4"></div>
                                <!-- <div class="seven-swiper-item-text">HOO钱包</div> -->
                            </div>
                        </swiper-slide>
                         <swiper-slide>
                            <div class="seven-swiper-item">
                                <div class="seven-swiper-item-icon5"></div>
                                <!-- <div class="seven-swiper-item-text">HOO钱包</div> -->
                            </div>
                        </swiper-slide>
                        <swiper-slide>
                            <div class="seven-swiper-item">
                                <div class="seven-swiper-item-icon6"></div>
                                <!-- <div class="seven-swiper-item-text">HOO钱包</div> -->
                            </div>
                        </swiper-slide>
                        <!-- Optional controls -->
                        <div class="swiper-button-prev" style="margin-top: -.21rem;left: 0;height: .42rem;width: .24rem;background: url('../../static/image/home/switch.png');backgroundSize:100% 100%;" slot="button-prev"></div>
                        <div class="swiper-button-next" style="margin-top: -.21rem;right: 0;height: .42rem;width: .24rem;background: url('../../static/image/home/switch2.png');backgroundSize:100% 100%;" slot="button-next"></div>
                    </swiper>
                </div>
                <!-- back to top -->
                <div style="position: fixed;bottom: 2rem;right: .4rem;" @click="backToTop(1500)">
                    <svg id="icon-go_top" viewBox="0 0 1024 1024" width=".6rem" height=".6rem">
                        <path d="M512 512m-512 0a512 512 0 1 0 1024 0 512 512 0 1 0-1024 0Z" fill="#2B3152"></path>
                        <path d="M501.76 414.72c5.12-5.12 12.8-5.12 17.92 0l125.44 125.44c10.24 10.24 7.68 17.92-7.68 17.92h-76.8V691.2c0 15.36-10.24 25.6-25.6 25.6h-51.2c-15.36 0-25.6-10.24-25.6-25.6v-133.12h-76.8c-15.36 0-17.92-7.68-7.68-17.92l128-125.44zM665.6 358.4H358.4c-15.36 0-25.6-10.24-25.6-25.6s10.24-25.6 25.6-25.6h307.2c15.36 0 25.6 10.24 25.6 25.6s-10.24 25.6-25.6 25.6z" fill="#FFFFFF"></path>
                    </svg>
                </div>
                
            </div>
            <!-- footer -->
            <div class="home-footer">
                <Footer></Footer>
            </div>
       </div>
  </div>
</template>

<script>
import HomeHeader from "../components/Header.vue";
import Footer from "../components/Footer.vue";
import Periodictable from "../components/Periodictable.vue";
import particlesJson from "../../static/js/homeParticlesJson.js";

export default {
    name: 'homePage',
    data() {
        return {
            firstSwiperList: [
                {id: 0,src: '../../static/image/home/banner.png'},
                {id: 1,src: '../../static/image/home/banner.png'},
                {id: 2,src: '../../static/image/home/banner.png'},
            ],
            financialItemList: [
                {id: 0,active: false,iconSrc: '../../static/image/home/BTC.png',name: 'BTC',profit: '30%年化收益',intrname: 'BTC定期理财',intrsammary: '抵押借贷收益 限购0.01-20000',time: '开抢时间：2018-11-09 21:00'},
                {id: 1,active: false,iconSrc: '../../static/image/home/ETH.png',name: 'ETH',profit: '30%年化收益',intrname: 'ETH定期理财',intrsammary: 'Pos挖矿收益 限购0.01-20000',time: '开抢时间：2018-11-09 21:00'},
                {id: 2,active: false,iconSrc: '../../static/image/home/EOS.png',name: 'EOS',profit: '30%年化收益',intrname: 'EOS定期理财',intrsammary: 'CPU租赁收益 限购1-20000',time: '开抢时间：2018-11-09 21:00'},
                {id: 3,active: false,iconSrc: '../../static/image/home/HC.png',name: 'HC',profit: '30%年化收益',intrname: 'HC定期理财',intrsammary: '保本量化收益 限购0.01-20000',time: '开抢时间：2018-11-09 21:00'},
            ],
            thirdIconList: [
                {id: 0,iconSrc: '../../static/image/home/zec0.png',name: 'zec'},
                {id: 1,iconSrc: '../../static/image/home/qtum1.png',name: 'qtum'},
                {id: 2,iconSrc: '../../static/image/home/btc2.png',name: 'btc'},
                {id: 3,iconSrc: '../../static/image/home/usdt3.png',name: 'usdt'},
                {id: 4,iconSrc: '../../static/image/home/eos4.png',name: 'eos'},
                {id: 5,iconSrc: '../../static/image/home/vet5.png',name: 'vet'},
                {id: 6,iconSrc: '../../static/image/home/etc6.png',name: 'etc'},
                {id: 7,iconSrc: '../../static/image/home/xmr7.png',name: 'xmr'},
                {id: 8,iconSrc: '../../static/image/home/eth8.png',name: 'eth'},
                {id: 9,iconSrc: '../../static/image/home/xrp9.png',name: 'xrp'},
                {id: 10,iconSrc: '../../static/image/home/bch10.png',name: 'bch'},
                {id: 11,iconSrc: '../../static/image/home/hsr11.png',name: 'hsr'},
                {id: 12,iconSrc: '../../static/image/home/dash12.png',name: 'dash'},
                {id: 13,iconSrc: '../../static/image/home/dcr13.png',name: 'dcr'},
                {id: 14,iconSrc: '../../static/image/home/ltc14.png',name: 'ltc'},
                {id: 15,iconSrc: '../../static/image/home/neo15.png',name: 'neo'},
                {id: 16,iconSrc: '../../static/image/home/bsv16.png',name: 'bsv'},
                {id: 17,iconSrc: '../../static/image/home/dog17.png',name: 'dog'},
            ],
            fiveIconList: [
                {id: 1,iconSrc: '../../static/image/home/icon1.png'},
                {id: 2,iconSrc: '../../static/image/home/icon2.png'},
                {id: 3,iconSrc: '../../static/image/home/icon3.png'},
                {id: 4,iconSrc: '../../static/image/home/icon4.png'},
                {id: 5,iconSrc: '../../static/image/home/icon5.png'},
                {id: 6,iconSrc: '../../static/image/home/icon6.png'},
                {id: 7,iconSrc: '../../static/image/home/icon7.png'},
                {id: 8,iconSrc: '../../static/image/home/icon8.png'},
                {id: 9,iconSrc: '../../static/image/home/icon9.png'},
                {id: 10,iconSrc: '../../static/image/home/icon10.png'},
            ],
            firstSwiperOption: {
                speed: 300,
                loop : true,
                autoplay: {
                    delay: 3000,
                },
                // effect : 'flip',
                mousewheel: true,
                pagination: {
                    el: '.swiper-pagination',
                    clickable: true,
                    bulletClass: 'my-first-bullet',
                    bulletActiveClass: 'my-first-bullet-active',
                }
            },
            secondSwiperOption: {
                slidesPerView: 5,
                autoHeight: true,
                speed: 300,
                loop : true,
                autoplay: {
                    delay: 3000,
                },
                effect : 'coverflow',
                mousewheel: true,
                navigation: {
                    nextEl: '.swiper-button-next',
                    prevEl: '.swiper-button-prev',
                    hideOnClick: true,
                },
            },
        } 
    },
    components: {
        HomeHeader,
        Footer,
        Periodictable,
    },
    created() {
        console.log('home');
    },
    mounted() {     
        //加载背景炫酷图
        particlesJS('particles-js',particlesJson.particlesJson);
        //加载另一个背景炫酷图
        // particlesJS('particles-js1',particlesJson.particlesJson);
        particlesJS('particles-js2',particlesJson.particlesJson);
    },
    methods: {
        //点击选择理财产品
        selectFinancial(index){
            // let that = this;
            // let tempIndex = index;
            // this.financialItemList.forEach((item) => {
            //     if(item.id == tempIndex){
            //         item.active = true;
            //     } else {
            //         item.active = false;
            //     }
            // });
        },

        //鼠标移入图标更改理财产品顺序
        changeSequence() {
            this.fiveIconList = this.shuffle(this.fiveIconList);
        },
       
        //数组洗牌
        shuffle(array) {
            var _array = array.concat();
            for (var i = _array.length; i--; ) {
                var j = Math.floor(Math.random() * (i + 1));
                var temp = _array[i];
                _array[i] = _array[j];
                _array[j] = temp;
            }
            return _array;
        },
        //查看更多理财产品
        getMoreFinancial() {
            sessionStorage.setItem('walletNavSelected',1);
            this.$router.push({ name: "financialPage"});
        },
        //查看更多资讯
        getMoreInfomation() {
            //下面代码暂时先用这个代替
            sessionStorage.setItem('walletNavSelected',1);
            this.$router.push({ name: "financialPage"});
        },
        //回到顶部
        backToTop(duration) {
            //简单处理下
            // document.body.scrollTop = document.documentElement.scrollTop = 0;   
            //增加动画的处理
            let scrollDuration = duration || 2000;
            const scrollHeight = window.scrollY,
            scrollStep = Math.PI / ( scrollDuration / 15 ),
            cosParameter = scrollHeight / 2;
            let scrollCount = 0,
            scrollMargin,
            scrollInterval = setInterval( () => {
                if ( window.scrollY != 0 ) {
                    scrollCount = scrollCount + 1;  
                    scrollMargin = cosParameter - cosParameter * Math.cos( scrollCount * scrollStep );
                    window.scrollTo( 0, ( scrollHeight - scrollMargin ) );
                } else {
                    clearInterval(scrollInterval); 
                } 
            },15);
        },


    },
}
</script>


<style lang="css" scoped>
@import "../assets/css/public";
@import "../assets/css/waterWave";

/* 图标上下浮动的效果 */
.icon-wave-effect{
    animation: waterWave 2s infinite;
}
@keyframes waterWave{
    0% {
        transform: translate(0px, 0px);
    }
    50% {
        transform: translate(0px, -0.2rem);
    }
    100% {
        transform: translate(0px, 0px);
    }
}
.icon-wave-effect1{
    animation: waterWave1 2s infinite;
}
@keyframes waterWave1{
    0% {
        transform: translate(0px, 0px);
    }
    50% {
        transform: translate(0px, 0.2rem);
    }
    100% {
        transform: translate(0px, 0px);
    }
}

/* 顶部banner图切换按钮样式 */
/* .my-first-bullet{
    height: .1rem;
    width: .3rem;
    background:rgba(236,239,244,1);
    border-radius: .05rem;
    display: inline-block;
    cursor: pointer;
    margin-right: .2rem;
}
.my-first-bullet-active{
    height: .1rem;
    width: .6rem;
    background:rgba(82,195,174,1);
    border-radius: .05rem;
    display: inline-block;
    cursor: pointer;
} */
.home-container {
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content:  space-between;
    background: url("../assets/image/home/background.png") no-repeat;
    background-size: 100% 100%;
}
.home-main {
    color: #333;
    text-align: center;
    height: 60rem;
} 
.home-first-container{
    /* height: 12.2rem; */
    width: 100%;
    /* background: url("../assets/image/home/background.png") no-repeat;
    background-size: 100% 100%; */
    position: relative;
}
.home-first-swiper{
    height: 6.78rem;
    width: 16.09rem;
    margin: 0 auto;
}
.item-img{
    height: 6.78rem;
    width: 16.09rem;
}
.item-img>img{
    height: 100%;
    width: 100%;
}
.home-first-absolute{
    height: 6.32rem;
    width: 15rem;
    position: absolute;
    top: 7.46rem;
    left: 50%;
    margin-left: -7.5rem;
    background:rgba(255,255,255,0.63);
    box-shadow: .12rem .36rem .84rem .36rem rgba(13,6,70,0.1);
    border-radius: .2rem;
}
.absolute-title{
    height: .38rem;
    width: 100%;
    font-size: .36rem;
    font-family:MicrosoftYaHei-Bold;
    font-weight: bold;
    color: rgba(33,30,56,1);
    margin-top: 1.2rem;
    text-align: center;
}
.absolute-sammary{
    height: .2rem;
    width: 100%;
    font-size: .18rem;
    font-family:MicrosoftYaHei;
    font-weight: 400;
    color:rgba(163,168,183,1);
    margin-top: .35rem;
    text-algin: center;
}
.absolute-intr-container{
    height: 3.42rem;
    width: 100%;
    display: flex;
    justify-content:  center;
    align-items: flex-start;
    margin-top: .54rem;
}
.absolute-intr-left{
    height: 100%;
    width: 5rem;
}
.absolute-intr-right{
    height: 100%;
    width: 5rem;
    margin-left: 2rem;
}
.absolute-intr-title{
    height: .25rem;
    font-size: .24rem;
    font-family:MicrosoftYaHei-Bold;
    font-weight: bold;
    color:rgba(82,195,174,1);
    text-align: left;
}
.absolute-intr-item-container{
    font-size: .18rem;
    margin-top: .42rem;
}
.intr-item{
    /* height: .24rem; */
    display: flex;
    justify-content:  flex-start;
    align-items: center;
    margin-top: .2rem;
}
.intr-item-icon{
    height: .24rem;
    width: .24rem;
    background: url("../assets/image/home/round.png") no-repeat;
    background-size: 100% 100%;
}
.intr-item-text{
    margin-left: .2rem;
    line-height: .24rem;
    text-align: left;
    width: 4.4rem;
}
.home-second-title{
    height: .38rem;
    line-height: .38rem;
    width: 100%;
    text-align: center;
    font-size: .36rem;
    font-family:MicrosoftYaHei-Bold;
    font-weight: bold;
    color:rgba(33,30,56,1);
    margin-top: 8rem;
}
.home-second-sammary{
    height: .2rem;
    line-height: .2rem;
    width: 100%;
    text-align: center;
    font-size: .18rem;
    font-family:MicrosoftYaHei;
    font-weight:400;
    color:rgba(163,168,183,1);
    margin-top: .36rem;
}
.home-financial-container{
    height: 4.3rem;
    width: 100%;
    margin-top: 1rem;
    display: flex;
    justify-content:  center;
    align-items: center;
}
.financial-item{
    height: 4.29rem;
    width: 3.21rem;
    margin-right: .7rem;
    background:rgba(255,255,255,1);
    border-radius: .2rem;
}

.financial-item:hover{
    height: 4.29rem;
    width: 3.21rem;
    margin-right: .7rem;
    background:rgba(255,255,255,1);
    box-shadow:0 .25rem .84rem .06rem rgba(13,6,70,0.1);
    border-radius: .2rem;
}
.financial-item-active{
    height: 4.29rem;
    width: 3.21rem;
    margin-right: .7rem;
    background:rgba(255,255,255,1);
    box-shadow:0 .25rem .84rem .06rem rgba(13,6,70,0.1);
    border-radius: .2rem;
}
.financial-item-icon{
    height: .8rem;
    width: .8rem;
    margin: .6rem auto 0 auto;
}
.financial-item-icon>img{
    height: 100%;
    width: 100%;
}
.financial-item-name{
    height: .36rem;
    line-height: .36rem;
    width: 100%;
    text-align: center;
    margin-top: .2rem;
    font-size: .24rem;
    font-family:MicrosoftYaHei-Bold;
    font-weight: bold;
    color:rgba(33,30,56,1);
}
.financial-item-profit{
    height: .5rem;
    line-height: .5rem;
    width: 1.7rem;
    border: 1px solid rgba(163,168,183,1);
    border-radius: .25rem;
    text-align: center;
    margin: .2rem auto 0 auto;
    font-size: .18rem;
    font-family:MicrosoftYaHei;
    font-weight: 400;
    color:rgba(82,195,174,1);
}
.financial-item-intrname{
    height: .18rem;
    width: 100%;
    text-align: center;
    margin-top: .28rem;
    font-size: .18rem;
    font-family:MicrosoftYaHei-Bold;
    font-weight: bold;
    color:rgba(33,30,56,1);
}
.financial-item-intrsammary{
    height: .18rem;
    width: 100%;
    text-align: center;
    margin-top: .2rem;
    font-size: .18rem;
    font-family:MicrosoftYaHei;
    font-weight: 400;
    color:rgba(37,41,56,1);
}
.financial-item-time{
    height: .18rem;
    width: 100%;
    text-align: center;
    margin-top: .2rem;
    font-size: .18rem;
    font-family:MicrosoftYaHei;
    font-weight: 400;
    color:rgba(163,168,183,1);
}
.home-financial-more{
    height: .68rem;
    width: 2.28rem;
    line-height: .68rem;
    margin: 1rem auto 0 auto;
    background:rgba(82,195,174,1);
    border-radius: .34rem;
    text-align: center;
    font-size: .18rem;
    font-family:MicrosoftYaHei;
    font-weight: 400;
    color:rgba(255,255,255,1);
    cursor: pointer;
}
.home-third-title{
    height: .38rem;
    line-height: .38rem;
    width: 100%;
    text-align: center;
    font-size: .36rem;
    font-family:MicrosoftYaHei-Bold;
    font-weight: bold;
    color:rgba(33,30,56,1);
    margin-top: 1rem;
}
.home-third-sammary{
    height: .2rem;
    line-height: .2rem;
    width: 100%;
    text-align: center;
    font-size: .18rem;
    font-family:MicrosoftYaHei;
    font-weight:400;
    color:rgba(163,168,183,1);
    margin-top: .36rem;
}
.home-third-container{
    height: 6.4rem;
    width: 100%;
    margin-top: .2rem;
    margin-bottom: .2rem;
    position: relative;
}
.third-icon-item{
    position: absolute;
}
.third-icon-item>img{
    height: 100%;
    width: 100%;
}
.home-four-title{
    height: .38rem;
    line-height: .38rem;
    width: 100%;
    text-align: center;
    font-size: .36rem;
    font-family:MicrosoftYaHei-Bold;
    font-weight: bold;
    color:rgba(33,30,56,1);
}
.home-four-sammary{
    height: .2rem;
    line-height: .2rem;
    width: 100%;
    text-align: center;
    font-size: .18rem;
    font-family:MicrosoftYaHei;
    font-weight:400;
    color:rgba(163,168,183,1);
    margin-top: .36rem;
}
.four-item-container{
    height: 6.1rem;
    width: 100%;
    margin-top: .5rem;
    display: flex;
    justify-content: center;
    align-items: center;
}
.four-item{
    height: 6rem;
    width: 6rem;
    margin-right: .6rem;
    background:rgba(255,255,255,0.63);
    box-shadow: .12rem  .36rem .84rem .36rem rgba(13,6,70,0.1);
    border-radius: .2rem;
}
.four-item:hover{
    
}
.four-item-icon{
    height: 1.64rem;
    width: 2.36rem;
    margin: 1.1rem auto .63rem auto;
}
.four-item-icon>img{
    height: 100%;
    width: 100%;
}
.four-item-title{
    height: .6rem;
    line-height: .3rem;
    width: 86%;
    margin: 0 auto;
    text-align: center;
    margin-bottom: .54rem;
    font-size: .24rem;
    font-family:MicrosoftYaHei;
    font-weight: 400;
    color:rgba(37,41,56,1);
}
.four-item-sammary{
    /* height: .2rem; */
    line-height: .3rem;
    width: 100%;
    text-align: left;
    margin-bottom: .1rem;
    display: flex;
    justify-content: flex-start;
    align-items: center;
}
.four-item-sammary>.sammary-point{
    height: .12rem;
    width: .12rem;
    background:rgba(82,195,174,1);
    border-radius: 50%;
    margin-right: .2rem;
    margin-left: 1rem;
}
.four-item-sammary>.sammary-text{
    width: 3.8rem;
    font-size: .18rem;
    font-family:MicrosoftYaHei;
    font-weight: 400;
    color:rgba(37,41,56,1);
}
.home-five-title{
    height: .38rem;
    line-height: .38rem;
    width: 100%;
    text-align: center;
    margin-top: 1.7rem;
    font-size: .36rem;
    font-family:MicrosoftYaHei-Bold;
    font-weight: bold;
    color:rgba(33,30,56,1);
}
.home-five-sammary{
    height: .2rem;
    line-height: .2rem;
    width: 100%;
    text-align: center;
    font-size: .18rem;
    font-family:MicrosoftYaHei;
    font-weight:400;
    color:rgba(163,168,183,1);
    margin-top: .36rem;
}
.five-item-container{
    height: 6.2rem;
    width: 100%;
    margin-top: .4rem;
    position: relative;
}
.five-icon-item{
    position: absolute;
    transition: all 3s;
    z-index: 999;
}
.five-icon-item>img{
    height: 100%;
    width: 100%;
}
.list-complete-enter, .list-complete-leave-to {
  transform: translateY(45x);
}

.home-six-title{
    height: .38rem;
    line-height: .38rem;
    width: 100%;
    text-align: center;
    margin-top: 1.4rem;
    margin-bottom: .8rem;
    font-size: .36rem;
    font-family:MicrosoftYaHei-Bold;
    font-weight: bold;
    color:rgba(33,30,56,1);
}
.six-item-container{
    height: 4.4rem;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
}
.six-item-information{
    height: 4.25rem;
    width: 4.9rem;
    padding-left: .2rem;
    padding-right: .2rem;
    background:rgba(255,255,255,1);
    box-shadow: .1rem .1rem .3rem .1rem rgba(86,98,115,0.1);
    border-radius: .2rem;
    margin-right: .5rem;
}
.six-item-pic{
    height: 3.26rem;
    width: 4.9rem;
    margin: .3rem auto .2rem auto;
}
.six-item-pic>img{
    height: 100%;
    width: 100%;
}
.six-item-sammary{
    height: .2rem;
    line-height: .2rem;
    font-size: .18rem;
    font-family:MicrosoftYaHei;
    font-weight: 400;
    color:rgba(33,30,56,1);
    text-align: left;
}
.six-item-hotspot{
    height: 4.25rem;
    width: 3.4rem;
    background:rgba(255,255,255,1);
}
.hotspot-title{
    height: .24rem;
    line-height: .24rem;
    font-size: .24rem;
    font-family:MicrosoftYaHei;
    font-weight: 400;
    color:rgba(33,30,56,1);
    margin-left: .2rem;
    text-align: left;
}
.hotspot-container{
    height: 3.22rem;
    width: 2.92rem;
    padding: .3rem .2rem .3rem .28rem;
    margin-top: .2rem;
    background:rgba(255,255,255,1);
    box-shadow: .1rem .16rem .26rem .16rem rgba(86,98,115,0.1);
    border-radius: .2rem;
}
.hotspot-containe-item{
    font-size: .18rem;
    font-family:MicrosoftYaHei;
    font-weight: 400;
    color:rgba(33,30,56,1);
    line-height: .3rem;
    /* text-align: left; */
    margin-bottom: .16rem;
}
.hotspot-more{
    height: .2rem;
    line-height: .2rem;
    text-align: right;
    font-size: .18rem;
    font-family:MicrosoftYaHei;
    font-weight: 400;
    color:rgba(82,195,174,1);
}
.home-seven-title{
    height: .38rem;
    line-height: .38rem;
    width: 100%;
    text-align: center;
    margin-top: 1.3rem;
    margin-bottom: .7rem;
    font-size: .36rem;
    font-family:MicrosoftYaHei-Bold;
    font-weight: bold;
    color:rgba(33,30,56,1);
}
.seven-item-container{
    height: 2.4rem;
    width: 16rem;
    margin: 0 auto;
    /* background: #ccc; */
}
.seven-swiper-item{
    height: 2rem;
    /* width: 1.6rem; */
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}
.seven-swiper-item-icon1{
    height: 1.5rem;
    width: 1.5rem;
    background: url("../assets/image/home/bidai.png") no-repeat;
    background-size: 100% 100%;
}
.seven-swiper-item-icon2{
    height: 1.5rem;
    width: 1.5rem;
    background: url("../assets/image/home/binyin.png") no-repeat;
    background-size: 100% 100%;
}
.seven-swiper-item-icon3{
    height: 1.5rem;
    width: 1.5rem;
    background: url("../assets/image/home/byton.png") no-repeat;
    background-size: 100% 100%;
}
.seven-swiper-item-icon4{
    height: 1.5rem;
    width: 1.5rem;
    background: url("../assets/image/home/eospark.png") no-repeat;
    background-size: 100% 100%;
}
.seven-swiper-item-icon5{
    height: 1.5rem;
    width: 1.5rem;
    background: url("../assets/image/home/manwu.png") no-repeat;
    background-size: 100% 100%;
}
.seven-swiper-item-icon6{
    height: 1.5rem;
    width: 1.5rem;
    background: url("../assets/image/home/imeos.png") no-repeat;
    background-size: 100% 100%;
}
.seven-swiper-item-text{
    height: .2rem;
    line-height: .2rem;
    font-size: .18rem;
    font-family:MicrosoftYaHei;
    font-weight: 400;
    color:rgba(33,30,56,1);
    text-align: center;
    margin-top: .08rem;
}
.home-footer{
    width: 100%;
    padding-top: 2rem;
    /* background: url("../assets/image/home/foot.png") no-repeat;
    background-size: 100% 100%; */
}
@media (max-width: 1600px) {
   .four-item-icon{
        height: 1.64rem;
        width: 2.36rem;
        margin: 1rem auto .63rem auto;
    }
    .four-item-title{
        height: .6rem;
        line-height: .3rem;
        width: 86%;
        margin: 0 auto;
        text-align: center;
        margin-bottom: .5rem;
        font-size: .24rem;
        font-family:MicrosoftYaHei;
        font-weight: 400;
        color:rgba(37,41,56,1);
    }
    .absolute-title{
        height: .38rem;
        width: 100%;
        font-size: .36rem;
        font-family:MicrosoftYaHei-Bold;
        font-weight: bold;
        color: rgba(33,30,56,1);
        margin-top: 1.1rem;
        text-align: center;
    }
}
@media (max-width: 1400px) {
   .four-item-icon{
        height: 1.64rem;
        width: 2.36rem;
        margin: .8rem auto .63rem auto;
    }
    .four-item-title{
        height: .6rem;
        line-height: .3rem;
        width: 86%;
        margin: 0 auto;
        text-align: center;
        margin-bottom: .46rem;
        font-size: .24rem;
        font-family:MicrosoftYaHei;
        font-weight: 400;
        color:rgba(37,41,56,1);
    }
    .absolute-title{
        height: .38rem;
        width: 100%;
        font-size: .36rem;
        font-family:MicrosoftYaHei-Bold;
        font-weight: bold;
        color: rgba(33,30,56,1);
        margin-top: 1rem;
        text-align: center;
    }
}
@media (max-width: 1200px) {
   .four-item-icon{
        height: 1.64rem;
        width: 2.36rem;
        margin: .6rem auto .63rem auto;
    }
    .four-item-title{
        height: .6rem;
        line-height: .3rem;
        width: 86%;
        margin: 0 auto;
        text-align: center;
        margin-bottom: .4rem;
        font-size: .24rem;
        font-family:MicrosoftYaHei;
        font-weight: 400;
        color:rgba(37,41,56,1);
    }
    .absolute-title{
        height: .38rem;
        width: 100%;
        font-size: .36rem;
        font-family:MicrosoftYaHei-Bold;
        font-weight: bold;
        color: rgba(33,30,56,1);
        margin-top: .8rem;
        text-align: center;
    }
}
@media (max-width: 800px) {
   .four-item-icon{
        height: 1.64rem;
        width: 2.36rem;
        margin: .4rem auto .63rem auto;
    }
    .four-item-title{
        height: .6rem;
        line-height: .3rem;
        width: 86%;
        margin: 0 auto;
        text-align: center;
        margin-bottom: .3rem;
        font-size: .24rem;
        font-family:MicrosoftYaHei;
        font-weight: 400;
        color:rgba(37,41,56,1);
    }
    .absolute-title{
        height: .38rem;
        width: 100%;
        font-size: .36rem;
        font-family:MicrosoftYaHei-Bold;
        font-weight: bold;
        color: rgba(33,30,56,1);
        margin-top: .6rem;
        text-align: center;
    }
}
</style>
