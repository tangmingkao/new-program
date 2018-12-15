<template>
    <div id="header">
        <div class="header-container">
            <div class="header-logo"></div>
            <div class="nav-container">
                <div class="nav-item-container" v-for="(item,index) in navList" :key="index" @click="selectNav(index)">
                    <div class="nav-item" :class="item.selected ? 'nav-item-active': '' ">{{item.name}}</div>
                </div> 
            </div>
            <div class="my-account"></div>
            <div class="header-login"></div>
            <div class="language-component">
                <language></language>
            </div>
        </div>
    </div>
</template>

<script>
import language from './language.vue';
export default {
    name: 'Header',
    data() {
        return {
            navList: [
                {id: 0,name: this.$t("Header.navItem0"),selected: true},
                {id: 1,name: this.$t("Header.navItem1"),selected: false},
                {id: 2,name: this.$t("Header.navItem2"),selected: false},
                {id: 3,name: this.$t("Header.navItem3"),selected: false},
                {id: 4,name: this.$t("Header.navItem4"),selected: false},
                {id: 5,name: this.$t("Header.navItem5"),selected: false},
                {id: 6,name: this.$t("Header.navItem6"),selected: false},
            ],
        }
    },
    components: { 
        language,
    },
    created() {
        let navSelected = sessionStorage.getItem('walletNavSelected') || 0;
        this.navList.forEach((item) => {
            if(item.id == navSelected){
                item.selected = true;
            } else {
                item.selected = false;
            }
        });
       
    },
    computed: {
        // navList() {
        //     return [
        //         {id: 0,name: this.$t("Header.navItem0"),selected: true},
        //         {id: 1,name: this.$t("Header.navItem1"),selected: false},
        //         {id: 2,name: this.$t("Header.navItem2"),selected: false},
        //         {id: 3,name: this.$t("Header.navItem3"),selected: false},
        //         {id: 4,name: this.$t("Header.navItem4"),selected: false},
        //         {id: 5,name: this.$t("Header.navItem5"),selected: false},
        //         {id: 6,name: this.$t("Header.navItem6"),selected: false},
        //     ]
        // },
    },
    mounted() {
        // console.log(this.$t("Header.navItem0"));
    },
    methods: {
        selectNav(index) {
            let tempIndex = index;
            this.navList.forEach((item) => {
                if(tempIndex == item.id){
                    item.selected = true;
                    sessionStorage.setItem('walletNavSelected',tempIndex);
                } else {
                    item.selected = false;
                }
            });
            index = parseInt(index);
            switch(index){
                case 0: 
                    this.$router.push({ name: "homePage"});
                    break;
                case 1: 
                    this.$router.push({ name: "financialPage"});
                    break;
                case 2: 
                    this.$router.push({ name: "loanPage"});
                    break;
                case 3: 
                    this.$router.push({ name: "otcTransactionPage"});
                    break;
                case 4: 
                    this.$router.push({ name: "timelyExchangePage"});
                    break;
                case 5: 
                    this.$router.push({ name: "coldWalletPage"});
                    break;
                case 6: 
                    // this.$router.push({ name: "eosAreaPage"});
                    // window.location.assign('https://eos.hoo.com');
                    window.open('https://eos.hoo.com','_blank');
                    break;
                default:
                    this.$router.push({ name: "homePage"});
                    break;
            }
        },
    },
}
</script>

<style lang="css" scoped>
.header-container{
    height: 1rem;
    width: 100%;
    /* background: #FFFFFF; */
    background: transparent;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    box-shadow: 0 .1rem .3rem 0 rgba(86,98,115,0.1);
    /* position: fixed; */
}
.header-logo{
    height: 40px;
    width: 148px;
    background: url("../assets/image/home/header-logo.png") no-repeat;
    background-size: 100% 100%;
    margin-left: 1.4rem;
}
.nav-container{
    height: 1rem;
    /* width: 6.8rem; */
    display: flex;
    justify-content: flex-start;
    align-items: center;
    margin-left: 1.6rem;
}
.nav-item-container{
    height: 100%;
    line-height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
}
.nav-item{
    height: .36rem;
    line-height: .36rem;
    margin-right: .48rem;
    font-size: .16rem;
    font-family:MicrosoftYaHei;
    font-weight: 400;
    color:#211E38;
}
.nav-item-active{
    font-size: .16rem;
    font-family:MicrosoftYaHei-Bold;
    font-weight: bold;
    color:#211E38;
    border-bottom: .04rem solid rgba(82,195,174,1);
}
@media (max-width: 1500px) {
   .header-logo{
        height: 40px;
        width: 148px;
        background: url("../assets/image/home/header-logo.png") no-repeat;
        background-size: 100% 100%;
        margin-left: .6rem;
    } 
    .nav-container{
        height: 1rem;
        /* width: 6.8rem; */
        display: flex;
        justify-content: flex-start;
        align-items: center;
        margin-left: .6rem;
    }
    .nav-item{
        height: .36rem;
        line-height: .36rem;
        margin-right: .2rem;
        font-size: .16rem;
        font-family:MicrosoftYaHei;
        font-weight: 400;
        color:#211E38;
    }
}
@media (max-width: 800px) {
   .header-logo{
        display: none;
    } 
    .nav-container{
        height: 1rem;
        display: flex;
        justify-content: flex-start;
        align-items: center;
        margin-left: .2rem;
    }
}
</style>
