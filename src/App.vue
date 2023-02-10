<script setup>
    
    import { ref, computed, onMounted } from "vue"
    import Home from "./components/Home.vue"
    import Landing from "./components/Landing.vue"
    import ComingSoon from "./views/coming-soon.vue"
    import PrivacyPolicy from "./views/privacy-policy.vue"
    import TermsAndConditions from "./views/terms-and-conditions.vue"

    const routes = {
        '/': ComingSoon,
        '/privacypolicy': PrivacyPolicy,
        '/termsandconditions': TermsAndConditions
    }

    const currentPath = ref(window.location.hash)

    window.addEventListener('hashchange', () => {
        currentPath.value = window.location.hash
    })

    const currentView = computed(() => {
        return routes[currentPath.value.slice(1) || '/'] || ComingSoon
    })

</script>

<template>
    <component :is="currentView" />
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
