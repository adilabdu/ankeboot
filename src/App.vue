<script setup>
    import ComingSoon from "./views/coming-soon/index.vue"
</script>

<template>
    <!-- <Landing/> -->
    <coming-soon/>
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
