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
                    "name": name.value,
                    "email": email.value
                }, {
                    headers: {
                        "Accept": "application/json"
                    }
                })
                .then((response) => {
                    console.log(response)
                    clearFormInputs()
                    submission.value = "success"
                })
                .catch((error) => {
                    if(error.response.status === 422) {
                        if(error.response.data.status === "warn") {
                            clearFormInputs()
                            submission.value = "warning"
                        } else {
                            submission.value = "error"
                        }
                    }
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

        <!-- <div class="h-32"></div> -->

        <main class="flex h-full">

            <div class="grow"></div>
            
            <div class="mx-2 flex flex-col lg:grid lg:grid-cols-2 gap-6 max-w-6xl">

                <div class="flex flex-col items-center justify-start lg:col-span-1">
                    <p class="font-sans font-medium p-8 bg-gradient-to-r from-publishing-50 to-maps-50 rounded-lg drop-shadow-md">
                        <span class="uppercase font-hero text-lg">Ankeboot</span> is an Arabic word meaning
                        <i>Spider</i>. We are a women-led company inspired by the 
                        creativity and perseverance of a spider.  
                        A weaver’s tenacity & innovation permeates our pluriversal 
                        practice, transforming the simple act of providing books for 
                        readers, into moments of community building and social change.
                    </p>
                </div>

                <form v-on:submit.prevent="joinMailingList" class="relative lg:col-span-1 overflow-hidden border-2 border-dotted border-black rounded-lg bg-white drop-shadow-sm">

                    <Transition name="slide-fade">
                        <section v-if="notify" class="absolute w-full flex items-center justify-center drop-shadow-md">

                            <p v-if="submission === 'success' || submission === 'warning'" class="flex items-center justify-center w-full text-white p-8 py-4 h-20 bg-gradient-to-r from-[#FF9999] to-[#D583CD]">
                                Thank you for signing up!
                            </p>

                            <p v-else class="flex items-center justify-center w-full text-white p-8 py-4 bg-[#FFCCCC] h-20">
                                Something went wrong. Please try again later.
                            </p>

                        </section>
                    </Transition>

                    <div class="p-8">

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

                    </div>

                </form>

                <article class="flex items-center justify-center gap-8 lg:hidden">
                    <a href="https://instagram.com/ankeboot_publishing" target="_blank">
                        <instagram styles="fill-white stroke-black hover:fill-black hover:stroke-inherit" :size="24"/>
                    </a>
                    <a href="https://t.me/ankeboot" target="_blank">
                        <telegram styles="fill-white stroke-black hover:fill-black hover:stroke-none" :size="24"/>
                    </a>
                    <a href="https://twitter.com/ankeboot_books" target="_blank">
                        <twitter styles="fill-white stroke-black hover:fill-black hover:stroke-none" :size="24"/>
                    </a>
                </article>

            </div>

            <div class="grow"></div>

        </main>

        <div class="grow min-h-[32px]"></div>

        <footer class="flex flex-col items-center justify-center">
            <article class="items-center justify-center flex flex-col sm:flex-row py-2">
                <p class="text-sm opacity-75">&copy; 2022</p>
                <p class="text-sm opacity-75 mx-1">&bull;</p>
                <p class="text-sm opacity-75">Ankeboot Books</p>
                <p class="sm:inline hidden mx-1 opacity-75">&bull;</p>
                <p class="text-sm opacity-75">Online Book Market Coming Soon.</p>
            </article>
        </footer>

    </div>

</template>

<style scoped lang="postcss">

    .slide-fade-enter-active {
        transition: all 0.3s ease-out;
    }

    .slide-fade-leave-active {
        transition: all 0.3s cubic-bezier(1, 0.5, 0.8, 1);
    }

    .slide-fade-enter-from {
        transform: translateY(-20px);
        opacity: 0;
    }

    .slide-fade-leave-to {
        opacity: 0;
    }

</style>
