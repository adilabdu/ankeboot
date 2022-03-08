<script>

import axios from "axios"
import { ref } from "vue"

import Instagram from '../components/icons/instagram.vue'
import Telegram from '../components/icons/telegram.vue'
import Twitter from '../components/icons/twitter.vue'
import Mail from '../components/icons/mail.vue'
import Phone from '../components/icons/phone.vue'
import Loading from '../components/icons/loading.vue'
import TextCard from '../components/TextCard.vue'

    export default {

        name: "ComingSoon",
        components: {
                Instagram,
                Telegram,
                Twitter,
                Mail,
                Phone,
                Loading,
                TextCard
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
            <h1 class="font-hero uppercase text-2xl border-2 border-black px-2 py-1">Ankeboot Books</h1>
            <h1 class="text-2xl font-bold hidden sm:inline">:</h1>
            <h1 class="font-amh text-2xl border-2 border-black px-2 py-1">አንከቡት መጻህፍት</h1>
        </header>

        <div class="flex h-full">

            <!-- gutter left -->
            <div class="grow"></div>
            

            <main class="mx-2 flex flex-col md:grid md:grid-cols-2 gap-6 max-w-6xl">

                <section class="flex flex-col gap-4 items-center justify-start lg:col-span-1">

                    <TextCard class="max-w-full bg-gradient-to-t  hover:bg-about-50 from-about-50 to-programs-50 text-white relative">
                        <span class="uppercase font-hero text-lg">Ankeboot</span> is an Arabic word meaning
                        <i>Spider</i>. We are a women-led company inspired by the 
                        creativity and perseverance of a spider.  
                        A weaver’s tenacity & innovation permeates our pluriversal 
                        practice, transforming the simple act of providing books for 
                        readers, into moments of community building and social change.
                    </TextCard>

                    <div class="group lg:hover:scale-105 transition duration-300 max-w-full">
                        
                        <div class="relative">
                            <!-- <div class="w-full rounded-t-lg h-full bg-black blur-b absolute bottom-0 z-0"></div> -->
                            <div class="z-10 relative bg-gradient-to-t to-maps-50 from-publishing-50 rounded-t-lg p-8 font-medium flex flex-col gap-4 items-start justify-start w-full">  
                                <p>
                                    We supply of a wide range of educational, referential, and supplementary books meeting
                                    the needs of individual and institutions.
                                </p>
                                <p>
                                    We make available a careful selection of scholastic materials from academic publishers 
                                    in Global South. 
                                </p>
                            </div>
                        </div>

                        <div class="flex flex-col items-center justify-center xl:items-start xl:justify-start gap-2 w-full rounded-b-lg p-4 xs:p-8 pt-4 border-x-2 border-b-2 border-dotted border-black">
                            <h1 class="text-xl font-bold uppercase font-hero text-transparent bg-clip-text bg-gradient-to-r from-maps-100 to-publishing-100"> Get in Touch </h1>
                            <address class="flex flex-col xl:flex-row justify-start gap-8">
                                
                                <a href="mailto:ankebootpublishing@gmail.com" class="flex items-center justify-center xl:items-start xl:justify-start gap-2">
                                    <mail :size="20"/>
                                    <p>ankebootpublishing@gmail.com</p>
                                </a>

                                <div class="flex flex-col items-center xl:items-end">
                                    <a href="tel:+251-924-35-64-74" class="flex items-start justify-start gap-2">
                                        <phone :size="20" class=""/>
                                        <p>+251 924 35 64 74</p>
                                    </a>
                                    <a href="tel:+251-966-21-53-42" class="flex items-start justify-start gap-2">
                                        <phone :size="20" class=""/>
                                        <p>+251 966 21 53 42</p>
                                    </a>
                                </div>

                            </address>
                        </div>

                    </div>

                </section>

                <section class="flex flex-col gap-4">

                    <form v-on:submit.prevent="joinMailingList" class="max-w-full relative w-full lg:col-span-1 overflow-hidden border-2 border-dotted border-black rounded-lg bg-white drop-shadow-sm">

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

                    <div class="overflow-hidden rounded-lg max-w-full bg-white p-2 border-2 border-black border-dotted">
                        <p class="text-xl font-bold uppercase font-hero text-transparent bg-clip-text bg-gradient-to-r from-maps-100 to-publishing-100 p-2 bg-white">Visit our shop</p>
                        <div class="bg-white">
                            <iframe class="w-full rounded-b-lg" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3940.3230772720103!2d38.76034431523562!3d9.034264291392896!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x164b8f7933906a51%3A0x1fef98757fbf9fc9!2sAnkeboot%20Book%20Store!5e0!3m2!1sen!2skr!4v1645016197417!5m2!1sen!2skr" width="600" height="300" style="border:0;" allowfullscreen="" loading="lazy"></iframe>
                        </div>
                    </div>

                </section>

            </main>

            <!-- gutter right -->
            <div class="grow"></div>

        </div>

        <div class="grow min-h-[32px]"></div>

        <footer class="flex flex-col items-center justify-center">

            <article class="flex items-center justify-center gap-8">
                <a href="https://instagram.com/ankeboot_publishing" target="_blank">
                    <instagram styles="fill-white stroke-black hover:fill-black hover:stroke-inherit hover:scale-125 transition duration-100 ease-in" :size="24"/>
                </a>
                <a href="https://t.me/ankeboot" target="_blank">
                    <telegram styles="fill-white stroke-black hover:fill-black hover:stroke-none hover:scale-125 transition duration-100 ease-in" :size="24"/>
                </a>
                <a href="https://twitter.com/ankeboot_books" target="_blank">
                    <twitter styles="fill-white stroke-black hover:fill-black hover:stroke-none hover:scale-125 transition duration-100 ease-in" :size="24"/>
                </a>
            </article>

            <article class="items-center justify-center flex flex-col sm:flex-row py-2">
                <div class="flex">
                    <p class="text-sm opacity-75">&copy; 2022</p>
                    <p class="text-sm opacity-75 mx-1">&bull;</p>
                    <p class="text-sm opacity-75">Ankeboot Books</p>
                </div>
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
