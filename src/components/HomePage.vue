<template>
    <div class="homepage">
        <div style="margin-top: 3%;">
            <div style="display:inline; width: 5%;">
                <img style="width: 7%;" src="/src/assets/imgs/star.gif">
                <img style="width: 7%;" src="/src/assets/imgs/star.gif">
            </div>
            <div style="display: inline;">
                <img style="width: 45%" src="/src/assets/imgs/top.png">
            </div>
            <div style="display:inline; width: 5%;">
                <img style="width: 7%;" src="/src/assets/imgs/star.gif">
                <img style="width: 7%;" src="/src/assets/imgs/star.gif">
            </div>
        </div>

        <span class="description">あの<span class="underline">おひきさん</span>を倒した</span>
        <span class="self-description">２１世紀の新生・霊能力者</span>

        <div style="display: flex; justify-content: center; margin-top: 1%; margin-left: 2%;">
            <img class="middleImage" src="/src/assets/imgs/nameband.png">
            <p style="align-self: flex-end; font-size: 3vw; font-weight: bold; font-family: 'zpix', sans-serif;">の</p>
        </div>

        <span class="description">ホームページへ</span>
        <span class="description">ようこそ！！</span>

        <div style="display: flex; justify-content: center; margin-top: 1%;">
            <RouterLink to="/mainPage" class="enter"><img class="footImage" src="/src/assets/imgs/enter.png">
            </RouterLink>
        </div>
        <span class="foot-description">あなたは<div class="visit-number">{{ visitor }}</div>人目の訪問者です</span>
    </div>
</template>

<script setup>
import { onMounted, ref } from 'vue';
import { useRoute, RouterLink, useRouter } from 'vue-router'
const route = useRoute();
const router = useRouter();


const visitor = ref(100000000000000)

onMounted(() => {

})
</script>

<style scoped>
.homepage {
    text-align: center;
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    background-image: url('/src/assets/imgs/bg.jpg');
    background-size: auto;
    overflow: scroll;
}

.visit-number {
    border: 5px solid rgba(156, 144, 144, 0.308);
    margin-left: 1%;
    margin-right: 1%;
    padding: 5px;
    display: inline;
    background-color: black;
    font-size: 120%;
    color: rgb(40, 213, 40);
    font-weight: 500;
    font-family: 'SevenSegment', sans-serif;
    box-shadow: -3px 3px 6px 0px #6B7C73,
        3px -3px 6px 0px #6B7C73;
}

.enter:hover {
    cursor: pointer;
}

.foot-description {
    margin-left: 9%;
    display: block;
    font-size: 2vw;
    text-align: center;
    letter-spacing: 2px;
}

.footImage {
    width: 30vw;
    height: 10vh;
}

.middleImage {
    width: 26vw;
    height: 14vh;
}

.description {
    display: block;
    font-size: 2.5vw;
    font-weight: bold;
    text-align: center;
    font-family: 'zpix', sans-serif;
}

.underline {
    color: rgb(198, 13, 13);
    font-size: 2em;
    font-weight: bold;
}

.self-description {
    margin-right: 20px;
    display: block;
    font-size: 2vw;
    font-weight: bold;
    text-align: center;
    font-family: 'zpix', sans-serif;
}
</style>