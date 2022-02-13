<script>

import axios from "axios"
import { ref } from "vue"

import Instagram from '../components/icons/instagram.vue'
import Telegram from '../components/icons/telegram.vue'
import Twitter from '../components/icons/twitter.vue'
import Loading from "../components/icons/loading.vue"

    export default {

        name: "ComingSoon",
        components: {
                Instagram,
                Telegram,
                Twitter,
                Loading
        },

        setup() {

            const name = ref(null);
            const email = ref(null);
            const loading = ref(false);
            const submission = ref(null);
            const notify = ref(false);

            function clearFormInputs() {
                name.value = null
                email.value = null
            }

            function showNotification() {
                setTimeout(() => { notify.value = false }, 5000);
            }

            function joinMailingList() {

                loading.value = true
                console.log("loading", loading.value)

                axios.post(import.meta.env.VITE_API_BASE_URL + "join-mailing-list", {
                    name: name.value,
                    email: email.value
                })
                .then((response) => {
                    console.log(response)
                    clearFormInputs()
                    submission.value = "success"
                })
                .catch((error) => {
                    console.log(error)
                    submission.value = "error"
                })
                .finally(() => {
                    loading.value = false
                    notify.value = true
                    showNotification();
                })

            }            

            return {
                name, email, joinMailingList, loading, notify, submission
            }
        }

    }

</script>

<template>
    
    <div class="flex flex-col min-h-screen">
        <header class="flex flex-col divide-black sm:flex-row justify-center items-center gap-2 py-4 shadow-sm mb-4">
            <h1 class="font-hero uppercase text-2xl">Ankeboot Books</h1>
            <h1 class="text-2xl font-bold hidden sm:inline">|</h1>
            <h1 class="font-amh leading-3 text-2xl">አንከቡት መጻህፍት</h1>
        </header>

        <main class="flex h-full">

            <div class="grow"></div>
            
            <div class="mx-2 flex flex-col gap-6">

                <div class="p-8 bg-gradient-to-r from-publishing-50 to-maps-50 rounded-lg drop-shadow-md">
                    <p class="font-sans font-medium max-w-xl">
                        <span class="uppercase font-hero text-lg">Ankeboot</span> is an Arabic word meaning
                        <i>Spider</i>. We are a women-led company inspired by the 
                        creativity and perseverance of a spider.  
                        A weaver’s tenacity & innovation permeates our pluriversal 
                        practice, transforming the simple act of providing books for 
                        readers, into moments of community building and social change.
                    </p>
                </div>

                <section v-if="notify" class="flex items-center justify-center">

                    <p v-if="submission === 'success'" class="text-center w-full rounded-lg text-white p-8 py-4 bg-gradient-to-r from-home-50 to-contact-50">
                        Thank you for signing up!
                    </p>

                    <p v-else class="text-center w-full rounded-lg text-white p-8 py-4 bg-home-25">
                        Something went wrong. Please try again later.
                    </p>

                </section>

                <form v-on:submit.prevent="joinMailingList" class="p-8 border-2 border-dotted border-black rounded-lg bg-white drop-shadow-sm">

                    <h1 class="text-xl font-bold uppercase font-hero text-transparent bg-clip-text bg-gradient-to-r from-maps-100 to-publishing-100"> Join our mailing list </h1>
                    <h1 class="text-sm"> Get our Catalogues + News on programs. </h1>

                    <p class="flex flex-col mt-4">
                        <label class="text-sm ml-1 font-medium">name</label>
                        <input  required v-model="name" type="input" placeholder="John Doe" class="border p-2 rounded-lg text-sm h-12"/>
                    </p>

                    <p class="flex flex-col mt-4">
                        <label class="text-sm ml-1 font-medium ">email</label>
                        <input required v-model="email" type="email" placeholder="your@email.com" class="border p-2 rounded-lg text-sm h-12"/>
                    </p>

                    <p class="flex mt-4">
                        <button type="submit" :disabled="!(!!name && !!email)" :class="!(!!name && !!email) ? 'opacity-50' : ''" class="flex items-center justify-center w-full border p-2 rounded-lg font-bold text-sm h-12 bg-black text-white">
                            <loading :size="20" :styles="['fill-white mx-2 animate-spin', loading ? '' : 'hidden']"/>
                            Submit
                        </button>
                    </p>

                </form>

                <article class="flex items-center justify-center gap-8">
                    <a href="https://instagram.com/ankeboot" target="_blank">
                        <instagram styles="fill-white stroke-black hover:fill-black hover:stroke-inherit" :size="24"/>
                    </a>
                    <a href="https://t.me/ankeboot" target="_blank">
                        <telegram styles="fill-white stroke-black hover:fill-black hover:stroke-none" :size="24"/>
                    </a>
                    <a href="https://twitter.com/ankebootpublish" target="_blank">
                        <twitter styles="fill-white stroke-black hover:fill-black hover:stroke-none" :size="24"/>
                    </a>
                </article>

            </div>

            <div class="grow"></div>

        </main>

        <div class="grow min-h-[16px]"></div>

        <footer class="flex flex-col items-center justify-center">
            <article class="items-center justify-center flex flex-col sm:flex-row py-2">
                <p class="text-sm opacity-75">Online Book Market Coming Soon.</p>
                <p class="sm:inline hidden mx-1 opacity-75">|</p>
                <p class="text-sm opacity-75">Ankeboot Books &copy; 2022</p>
            </article>
        </footer>

    </div>

</template>

<style scoped lang="postcss">


</style>
