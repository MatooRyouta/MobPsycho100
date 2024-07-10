<template>
    <div class="introduction">
        <img style="display:inline-block; margin-top: 100px; width: 65%;" src="/src/assets/imgs/title.gif"></img>
        
        <div style="display: block; margin-top: 100px;">
            <img style="width: 42%;" src="/src/assets/imgs/霊能界の新星.gif"></img>
            <img style="width: 25%; margin-left: 30px;" src="/src/assets/imgs/profile.jpg"></img>
        </div>

        <div style="display: block; margin-top: 10px;">
            <div style="display: flex; align-items: flex-start; justify-content: center;">
                <img style="width: 33%;" src="/src/assets/imgs/「霊障」でお悩みの方.png"></img>
                <img style="width: 30%; margin-left: 10px" src="/src/assets/imgs/あのひとの.gif"></img>
            </div>
        </div>

        <div style="display: block; margin-top: 10px;">
            <div style="display: flex; align-items: flex-start; justify-content: center;">
                <img style="width: 29%; margin-left: 100px" src="/src/assets/imgs/心霊写真鑑定.png"></img>
                <img style="width: 35%; margin-left: 10px" src="/src/assets/imgs/事故物件.png"></img>
            </div>
        </div>

        <div style="display: block; margin-top: 10px;">
            <div style="display: flex; align-items: flex-start; justify-content: center;">
                <img style="width: 34%;" src="/src/assets/imgs/后背灵.gif"></img>
                <img style="width: 31%; margin-left: 10px" src="/src/assets/imgs/都市传说.gif"></img>
            </div>
        </div>

        <div style="display: block; margin-top: 30px;">
            <img style="width: 12%; margin-left: 100px;" src="/src/assets/imgs/箭头.gif"></img>
        </div>

        <div style="display: block; margin-top: 5 px;">
            <img style="width: 80%; margin-left: 100px;" src="/src/assets/imgs/除灵的实感.gif"></img>
        </div>

        <div style="display: block; margin-top: 5 px;">
            <img style="width: 60%; margin-left: 10px;" src="/src/assets/imgs/万能的盐.png"></img>
        </div>

        <img style="position: absolute; top: 90%; left: 5%; width: 13%; transform: scaleX(-1);" src="/src/assets/imgs/ghost.gif"></img>
        <img style="position: absolute; top: 144%; right: 3%; width: 13%;" src="/src/assets/imgs/ghost.gif"></img>
    </div>
    
</template>

<script setup>
    import { ref } from 'vue';

    const visitor = ref(100000000000000)
</script>

<style scoped>

.introduction {
    text-align: center;
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    background-image: url('/src/assets/imgs/back.png');
    background-size: auto;
    overflow: scroll;
}

</style>