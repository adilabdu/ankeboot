<script setup>
    import Home from "./components/Home.vue"
    import Landing from "./components/Landing.vue"
    import ComingSoon from "./views/coming-soon.vue"
    import First from "./components/First.vue"
</script>

<script>

export default {
  // ...
  methods: {
    setViewHeight: function() {
      let vh = window.innerHeight * 0.01
      document.documentElement.style.setProperty('--vh', `${vh}px`)
    },
  },
  mounted: function() {
    this.setViewHeight()
    window.addEventListener('resize', () => {
      this.setViewHeight()
    })
  },
  // ...
}

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
