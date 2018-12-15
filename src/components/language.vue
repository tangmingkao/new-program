<template>
    <div class="language-box">
        <img class="current-img" :src="selectedLanguage" alt="Chinese" @click="languageListEvent">
        <ul class="language-list" v-show="languageListShow">
            <li v-for="item in languageList" :key="item.index" @click="changeLanguage(item.value)"><img :src="item.imgPath" :alt="item.value"></li>
        </ul>
    </div>
</template>
<script>
import { mapActions, mapGetters } from "vuex";
export default {
    data() {
        return {
            selectedLanguage: "../../static/image/language/zh-CN.png",
            languageValue: "",
            languageList: [
                {
                value: "zh-CN",
                imgPath: "../../static/image/language/zh-CN.png"
                },
                {
                value: "en-US",
                imgPath: "../../static/image/language/en-US.png"
                },
                // {
                //   value:'Korean',
                //   imgPath:'../../static/image/language/Korean.png',
                // }
            ],
            languageListShow: false
        };
    },
    created() {},
    mounted() {
        this.languageListShow = false;

        //废弃这种处理，没有必要调用选择item处理函数.
        // this.changeLanguage(this.$store.getters.localeLang);

        //初步处理，查看缓存中以前选择了什么语言.
        let localLanguage = this.$store.getters.localeLang;
        this.selectedLanguage = "../../static/image/language/" + localLanguage + ".png";
        this.$i18n.locale = localLanguage;
    },
    methods: {
        ...mapActions({
            changeLocaleLang: "changeLocaleLang"
        }),
        changeLanguage(value) {
            this.languageListShow = false;
            this.selectedLanguage = "../../static/image/language/" + value + ".png";
            this.changeLocaleLang(value);
            this.$i18n.locale = value;
            console.log(111111111);
            window.location.reload();
        },
        languageListEvent() {
            this.languageListShow = !this.languageListShow;
        }
    },
    computed: {
        ...mapGetters({
            localeLang: "localeLang"
        }),
        localeLangShow() {
            return this.$store.getters.localeLang;
        }
    }
};
</script>

<style type="text/css" scoped>
.language-box {
    width: 0.46rem;
    position: absolute;
    right: .2rem;
    top: .3rem;
    z-index: 999;
}
.language-box img {
    width: 100%;
    height: 100%;
}
.language-list {
    width: 0.46rem;
    position: absolute;
    top: 0.42rem;
    left: 0;
    list-style: none;
    padding: 0;
    margin: 0;
}
.language-list li {
    padding: 0.05rem 0;
}
ul,li{
    margin: 0;
    padding: 0;
    list-style: none;
}
</style>

