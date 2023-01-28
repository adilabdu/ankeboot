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
	background: #55555550;
    border-radius: 2px;
	transition: all;
	transition-duration: 150s;
}

::-webkit-scrollbar-thumb:hover {
    background: #55555550;
}

::-webkit-scrollbar:hover {
    width: 6px;
}

</style>
