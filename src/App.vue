<script setup>
    import First from "./components/First.vue"
    import SplashScreen from "./components/Splash.vue"
</script>

<template>

    <SplashScreen class="animate-fadeout"/>
    <First/>

</template>

<style>

/* width */
::-webkit-scrollbar {
  width: 8px;
  height: 8px;
}

/* Track */
::-webkit-scrollbar-track {
  background: rgba(255, 255, 255, 0);
}

/* Handle */
::-webkit-scrollbar-thumb {
  background: #a0aec0;
  border: 3px solid white;
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
  background: #a0aec0;
}

</style>
