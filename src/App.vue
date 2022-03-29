<script setup>
    import First from "./components/First.vue"
    import SplashScreen from "./components/Splash.vue"
</script>

<template>

    <SplashScreen class="animate-fadeout"/>
    <First/>

</template>

<style>

::-webkit-scrollbar {
    width: 7px;
}

::-webkit-scrollbar-track {
    background: rgba(255, 255, 255, 0);
}

::-webkit-scrollbar-thumb {
    /* background: rgba(0,0,0,0.5); */
    background: rgb(255, 255, 255);
    border-radius: 30px;
}

::-webkit-scrollbar-thumb:hover {
    background: #555;
}

::-webkit-scrollbar:hover {
    width: 6px;
}

</style>
