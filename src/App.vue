<script setup>
    import Home from "./components/Home.vue"
    import Landing from "./components/Landing.vue"
    import ComingSoon from "./views/coming-soon.vue"
    import First from "./components/First.vue"
</script>

<template>
<!--    <Landing/>-->
    <First/>
    <!-- <coming-soon/> -->
</template>

<style>

::-webkit-scrollbar {
    width: 7px;
    display: hidden; 
}

::-webkit-scrollbar-track {
    background: #fff; 
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
    width: 100px;
}

</style>
