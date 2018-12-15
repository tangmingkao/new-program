<template>
  <div id="coldwallet">
       <div class="coldwallet-container">
            <div class="coldwallet-header">
                <OtherHeader></OtherHeader>
            </div>
            <div class="coldwallet-main">
                <div class="coldwallet-banner">
                    <div class="first-title">虎符企业级冷钱包</div>
                    <div class="first-sammary">——中心化钱包放心的资金托管系统</div>
                </div>
                <div class="coldwallet-container">
                    <div class="coldwallet-item-odd">
                        <div class="item-odd-left">
                            <div class="odd-left-title">先进的冷钱包离线隔离技术，</div>
                            <div class="odd-left-title">彻底隔绝黑客攻击的风险</div>
                            <div class="odd-left-sammary">
                                <p>• 资金存储采用先进的冷钱包离线存储技术，彻底隔绝网络环境，百分百确保资金安全；</p>
                                <p>• 严谨安全的冷钱包出账方案，既能杜绝出账联网时网络环境的种种隐患，又能满足财务出账的便捷性需求；</p>
                                <p>• 资金及时归集，有效减少资金存储地址的曝光频次，真正确保资金安全。</p>
                            </div>
                        </div>
                        <div class="item-odd-right">
                            <div class="odd-right-icon">
                                <img src="../assets/image/coldwallet/wallet1.png" />
                            </div>
                        </div>
                    </div>
                    <div class="coldwallet-item-even">
                        <div class="item-even-left">
                            <div class="even-left-icon">
                                <img src="../assets/image/coldwallet/wallet2.png" />
                            </div>
                        </div>
                        <div class="item-even-right">
                            <div class="even-right-title">高效的地址分发系统，免除</div>
                            <div class="even-right-title">平台地址管理之忧</div>
                            <div class="even-right-sammary">
                                <p>• 用户的平台只需接入范耐思资金托管系统，即可随时请求调用相关币种的地址，无需再单独生成地址，单独管理地址，安全，高效，便捷！</p>
                            </div>
                        </div>
                    </div>
                    <div class="coldwallet-item-odd">
                        <div class="item-odd-left">
                            <div class="odd-left-title">严谨的出账监控体系，为资金</div>
                            <div class="odd-left-title">安全层层加持</div>
                            <div class="odd-left-sammary">
                                <p>• 各币种设置临界预警机制，出账金额只要大于预警值，则会立即向平台负责人发出警报并控制出账流程，待负责人审核确认后才能出账；</p>
                                <p>• 进行出账审核等敏感操作时，系统将二次验证用户身份，有效杜绝他人非法操作；</p>
                                <p>• 系统时刻监控平台的API请求情况，发现请求接口异常时实时报警。</p>
                            </div>
                        </div>
                        <div class="item-odd-right">
                            <div class="odd-right-icon">
                                <img src="../assets/image/coldwallet/wallet3.png" />
                            </div>
                        </div>
                    </div>
                    <div class="coldwallet-item-even">
                        <div class="item-even-left">
                            <div class="even-left-icon">
                                <img src="../assets/image/coldwallet/wallet4.png" />
                            </div>
                        </div>
                        <div class="item-even-right">
                            <div class="even-right-title">严格的身份验证体系，全天候</div>
                            <div class="even-right-title">安全防控机制</div>
                            <div class="even-right-sammary">
                                <p>• 严格的身份验证体系，为系统的进出口把好关</p>
                                <p>• 全天候安全防控机制，任意安全隐患都不放过</p>
                            </div>
                        </div>
                    </div>
                    <div class="coldwallet-item-odd">
                        <div class="item-odd-left">
                            <div class="odd-left-title">友好便捷的用户体验，细致健</div>
                            <div class="odd-left-title">全的售后服务——为平台的快</div>
                            <div class="odd-left-title">速发展保驾护航</div>
                            <div class="odd-left-sammary">
                                <p>• 友好便捷的用户体验设计，快速上手，有效节省学习成本</p>
                                <p>• 细致健全的售后服务体系贴心伴随，随时随地为您排忧解难</p>
                            </div>
                        </div>
                        <div class="item-odd-right">
                            <div class="odd-right-icon">
                                <img src="../assets/image/coldwallet/wallet5.png" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="coldwallet-footer">
                <Footer2></Footer2>
            </div>
       </div>
  </div>
</template>

<script>
import OtherHeader from "../components/OtherHeader.vue";
import Footer2 from "../components/Footer2.vue";
export default {
    name: 'coldWalletPage',
    data() {
        return {
        } 
    },
    components: {
        OtherHeader,
        Footer2,
    },
    created() {
        console.log(1111111);
    },
}
</script>

<style  lang="css" scoped>
@import "../assets/css/public";

.coldwallet-main {
    background-color: #E9EEF3;
    color: #333;
    text-align: center;
    line-height: 1.6rem;
    min-height: 8rem;
}  
.coldwallet-container {
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    /* align-items: center; */
}
.coldwallet-banner{
    height: 7rem;
    width: 100%;
    background: url("../assets/image/coldwallet/cold-wallet-banner.png") no-repeat;
    background-size: 100% 100%;
    padding-top: 1px;
}
.first-title{
    width: 5.6rem;
    height: .5rem;
    line-height: .5rem;
    margin: 3.04rem 0 0 2.1rem;
    text-align: left;
    font-size: .5rem;
    font-family:MicrosoftYaHei-Bold;
    font-weight: bold;
    color:rgba(255,255,255,1);
}
.first-sammary{
    width: 5.6rem;
    height: .34rem;
    line-height: .34rem;
    margin: .48rem 0 0 2.1rem;
    text-align: left;
    font-size: .34rem;
    font-family:MicrosoftYaHei-Bold;
    font-weight:bold;
    color:rgba(82,195,174,1);
}
.coldwallet-item-odd{
    width: 100%;
    height: 6rem;
    background:rgba(255,255,255,1);
    display: flex;
    justify-content: center;
    align-items: center;
}
.coldwallet-item-even{
    width: 100%;
    height: 6rem;
    background:rgba(247,247,247,1);
    display: flex;
    justify-content: center;
    align-items: center;
}
.item-odd-left{
    width: 50%;
    height: 6rem;
    text-align: left;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
}
.odd-left-title{
    font-size: .34rem;
    font-family:MicrosoftYaHei-Bold;
    font-weight: bold;
    color:rgba(33,30,56,1);
    line-height: .5rem;
    margin-left: 3.6rem;
}
.odd-left-sammary{
    width: 4.5rem;
    margin-left: 3.6rem;
    margin-top: .3rem;
    font-size: .16rem;
    font-family:MicrosoftYaHei;
    font-weight: 400;
    color:rgba(163,168,183,1);
    line-height: .34rem;
}
.odd-left-sammary>p{
    margin-top: .18rem;
}
.item-odd-right{
    width: 50%;
    height: 6rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
}
.odd-right-icon{
    height: 4.22rem;
    width: 4.2rem;
    margin-left: 1.6rem;
}
.odd-right-icon>img{
    height: 100%;
    width: 100%;
}

.item-even-left{
    width: 50%;
    height: 6rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
}
.even-left-icon{
    height: 4.22rem;
    width: 4.2rem;
    margin-left: 3.6rem;
}
.even-left-icon>img{
    height: 100%;
    width: 100%;
}

.item-even-right{
    width: 50%;
    height: 6rem;
    text-align: left;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
}
.even-right-title{
    font-size: .34rem;
    font-family:MicrosoftYaHei-Bold;
    font-weight: bold;
    color:rgba(33,30,56,1);
    line-height: .5rem;
    margin-left: 1.6rem;
}
.even-right-sammary{
    width: 4.5rem;
    margin-left: 1.6rem;
    margin-top: .4rem;
    font-size: .16rem;
    font-family:MicrosoftYaHei;
    font-weight: 400;
    color:rgba(163,168,183,1);
    line-height: .34rem;
}
.even-right-sammary>p{
    margin-top: .18rem;
}


.coldwallet-footer{
    height: 4rem;
    width: 100%;
    padding-top: .6rem;
    background:rgba(247,247,247,1);
}
</style>
