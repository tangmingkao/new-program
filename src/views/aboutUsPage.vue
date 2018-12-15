<template>
  <div id="about-us">
       <div class="about-us-container">
            <div class="about-us-header">
                <OtherHeader></OtherHeader>
            </div>
            <div class="about-us-main">
                <div class="first-banner">
                    <div class="first-saying">{{$t("AboutUs.saying")}}</div>
                    <div class="first-author">-- {{$t("AboutUs.author")}}</div>
                </div>
                <div class="about-us-title">{{$t("AboutUs.usTitle")}}</div>
                <div class="about-us-content">
                    <p>{{$t("AboutUs.usContent1")}}</p>
                    <p>{{$t("AboutUs.usContent2")}}</p>
                </div>
                <div class="core-merber-list">
                    <ul>
                        <li>
                            <div class="list-number">01</div>
                            <div class="list-intr">{{$t("AboutUs.listIntr1")}}</div>
                            <div class="list-content">
                                <div class="list-name">{{$t("AboutUs.listName1")}}</div>
                                <div class="list-line"></div>
                                <div class="list-img-content">
                                    <div class="list-img">
                                        <img src="../assets/image/us/wangruixi.png" />
                                    </div>
                                </div>
                                <div class="list-biography">
                                    <p>{{$t("AboutUs.listBiography1")}}</p>
                                </div>
                            </div>       
                        </li>
                        <li>
                            <div class="list-number">02</div>
                            <div class="list-intr">{{$t("AboutUs.listIntr2")}}</div>
                            <div class="list-content">
                                <div class="list-name">{{$t("AboutUs.listName2")}}</div>
                                <div class="list-line"></div>
                                <div class="list-img-content">
                                    <div class="list-img">
                                        <img src="../assets/image/us/sweety.png" />
                                    </div>
                                </div>
                                <div class="list-biography">
                                    <p>{{$t("AboutUs.listBiography2")}}</p>                                  
                                </div>
                            </div>       
                        </li>
                        <!-- <li>
                            <div class="list-number">03</div>
                            <div class="list-intr">技术团队</div>
                            <div class="list-content">
                                <div class="list-name">香港虎符科技</div>
                                <div class="list-line"></div>
                                <div class="list-img-content">
                                    <div class="list-img">
                                        <img src="" />
                                    </div>
                                </div>
                                <div class="list-biography">
                                    <p>Hoo虎符的核心团队集比特币早期爱好者、区块链底层开发人员、技术人员组成。团队成员曾研发运营产品算力吧和BATPOOL等，有着十分丰富的区块链底层技术开发运维经验。</p>
                                </div>
                            </div>       
                        </li> -->
                    </ul>
                </div>
            </div>
            <div class="about-us-footer">
                <Footer2></Footer2>
            </div>
       </div>
  </div>
</template>

<script>
import OtherHeader from "../components/OtherHeader.vue";
import Footer2 from "../components/Footer2.vue";
export default {
    name: 'aboutUs',
    data() {
        return {
        } 
    },
    components: {
        OtherHeader,
        Footer2,
    },
    created() {
        console.log('about us');

    },
}
</script>

<style  lang="css" scoped>
@import "../assets/css/public";

.about-us-container {
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    /* align-items: center; */
}
.about-us-main {
    background-color: rgba(247,247,247,1);;
    color: #333;
    text-align: center;
    width: 100%; 
} 
.first-banner{
    height: 7rem;
    width: 100%;
    background: url("../assets/image/us/banner.png") no-repeat;
    background-size: 100% 100%;
    padding-top: 1px;  
}
.first-saying{
    height: 1.2rem;
    width: 5.6rem;
    margin-top: 3.46rem;
    margin-left: 3.6rem;
    font-size: .4rem;
    font-family:MicrosoftYaHei;
    font-weight: 400;
    color: rgba(255,255,255,1);
    line-height: .6rem;
    text-shadow:0 .09rem .09rem rgba(13,6,70,0.1);
    text-align: left;
}
.first-author{
    height: .4rem;
    width: 5.6rem;
    margin-left: 3.6rem;
    margin-top: .3rem;
    font-size: .4rem;
    font-family:MicrosoftYaHei;
    font-weight: 400;
    color:rgba(255,255,255,1);
    line-height: .4rem;
    text-shadow:0 .09rem .09rem rgba(13,6,70,0.1);
    text-align: right;
}
.about-us-title{
    height: .26rem;
    line-height: .26rem;
    margin-top: .48rem;
    text-align: center;
    font-size: .24rem;
    font-family:MicrosoftYaHei-Bold;
    font-weight: bold;
    color:rgba(33,30,56,1);
    text-shadow: 0 .3rem .84rem rgba(13,6,70,0.1);
}
.about-us-content{
    /* height: 1rem; */
    width: 11.98rem;
    font-size: .14rem;
    font-family:MicrosoftYaHei;
    font-weight: 400;
    color:rgba(33,30,56,1);
    margin: .28rem auto 0 auto;
    text-align: left;
}
.about-us-content>p{
    line-height: .4rem;
    margin-top: .3rem;
    text-indent: 2em;
}
.core-merber-list{
    width: 11.98rem;
    margin: .5rem auto;
    text-align: left;
}
.list-number{
    height: .4rem;
    line-height: .4rem;
    font-size: .5rem;
    font-family:MicrosoftYaHei-Bold;
    font-weight: bold;
    color:rgba(33,30,56,1);
}
.list-intr{
    height: .2rem;
    line-height: .2rem;
    margin-top: .28rem;
    font-size: .16rem;
    font-family:MicrosoftYaHei;
    font-weight: 400;
    color:rgba(102,102,102,1);
}
.list-content{
    height: 5.04rem;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    margin-top: .12rem;
}
.list-name{
    height: 5.04rem;
    width: .9rem;
    font-size: .24rem;
    font-family:MicrosoftYaHei-Bold;
    font-weight: bold;
    color:rgba(33,30,56,1);
}
.list-line{
    height: 4.8rem;
    width: .42rem;
    background: url("../assets/image/us/line.png") no-repeat;
    background-size: 100% 100%;
}
.list-img-content{
    width: 3rem;
    height: 4rem;
    background:rgba(255,255,255,1);
    display: flex;
    justify-content: center;
    align-items: center;
    margin-left: .2rem;
}
.list-img{
    height: 3.6rem;
    width: 2.6rem;
    background-color:#BDBDBD;
}
.list-img>img{
    height: 100%;
    width: 100%;
}
.list-biography{
    width: 6.54rem;
    font-size: .14rem;
    font-family:MicrosoftYaHei;
    font-weight: 400;
    color:rgba(33,30,56,1);
    margin-left: .5rem;
    /* margin-bottom: 1.12rem; */
    min-height: 4rem;
}
.list-biography>p{
    margin-top: .28rem;
    line-height: .34rem;
    text-indent: 2em;
}

.about-us-footer{
    height: 4rem;
    width: 100%;
    padding-top: .6rem;
    background:rgba(247,247,247,1);
}
</style>
