<template>
  <div id="financial">
       <div class="financial-container">
            <div class="financial-header">
                <OtherHeader></OtherHeader>
            </div>
            <div class="financial-main">Main</div>
            <div class="financial-footer">
                <Footer2></Footer2>
            </div>
       </div>
  </div>
</template>

<script>
import OtherHeader from "../components/OtherHeader.vue";
import Footer2 from "../components/Footer2.vue";
export default {
    name: 'financialPage',
    data() {
        return {
        } 
    },
    components: {
        OtherHeader,
        Footer2,
    },
    created() {
        console.log(3333333);
    },
}
</script>

<style  lang="css" scoped>
@import "../assets/css/public";

.financial-main {
    background-color: #E9EEF3;
    color: #333;
    text-align: center;
    line-height: 1.6rem;
    min-height: 8rem;
}  
.financial-container {
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    /* align-items: center; */
}
.financial-footer{
    height: 4rem;
    width: 100%;
    padding-top: .6rem;
    background:rgba(247,247,247,1);
}
</style>
