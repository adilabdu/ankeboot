<script>

    import { ref, onMounted, watch } from "vue"
    import go from "./icons/go.vue"
    import instagram from "./icons/instagram.vue"
    import telegram from "./icons/telegram.vue"
    import mail from "./icons/mail.vue"
    import facebook from "./icons/facebook.vue"
    import twitter from "./icons/twitter.vue"

    import Drawer from "./Drawer.vue"
    import NavLinks from "./NavLinks.vue"

    export default {
        
        name: "Landing",
        components: {
            go,
            instagram,
            telegram,
            mail,
            facebook,
            twitter,
            Drawer,
            NavLinks
        },
        setup() {

            const drawer = ref('closed')
            
            const heroTitleSection = ref(null)
            const heroTitleSectionWidth = ref(0)
            const width = ref(window.innerWidth)
            
            function updateWidth() {
                width.value = window.innerWidth
            }

            const hoverState = ref(false)
            function changeHoverState(state) {
                hoverState.value = state
            }

            function toggleDrawer() {
                drawer.value === 'closed' ? drawer.value = 'opened' : drawer.value = 'closed'
            }

            watch(width, () => {
                heroTitleSectionWidth.value = heroTitleSection.value.clientWidth
            })

            onMounted(() => {
                window.addEventListener('resize', updateWidth)
                heroTitleSectionWidth.value = heroTitleSection.value.clientWidth
                nav.value.addEventListener('mouseover', () => { changeHoverState(true) })
                nav.value.addEventListener('mouseout', () => { changeHoverState(false) })
            })

            const nav = ref(null);

            return {
                width, heroTitleSection, heroTitleSectionWidth,
                toggleDrawer, drawer, nav, hoverState
            }
        }
    }

</script>

<template>

    <Drawer class="lg:hidden" @close="toggleDrawer" :class="[drawer === 'opened' ? '' : 'hidden']"/>

    <div class="min-h-screen w-full flex lg:blur-none scrollbar scroll-thumb-rounded"
        :class="[drawer === 'opened' ? 'blur-xl' : '']">

        <!-- left padding -->
        <div class="grow"></div>
        
        <!-- main content -->
        <main class="flex flex-col lg:py-24 xl:py-48">

            <!-- content -->
            <div class="flex flex-col-reverse lg:grid lg:grid-cols-12 h-full px-8">
                
                <!-- socials-(<=md) -->
                <div class="py-4 text-right flex items-center justify-center gap-6 font-normal text-lg lg:hidden">
                    <div class="flex justify-end items-center opacity-[60%]">
                        <instagram :size="28"/>
                    </div>
                    <div class="flex justify-end items-center opacity-[60%]">
                        <telegram :size="28"/>
                    </div>
                    <div class="flex justify-end items-center opacity-[60%]">
                        <mail :size="28"/>
                    </div>
                    <div class="flex justify-end items-center opacity-[60%]">
                        <facebook :size="28"/>
                    </div>
                    <div class="flex justify-end items-center opacity-[60%]">
                        <twitter :size="28"/> 
                    </div>
                </div>

                <div class="grow lg:hidden"></div>
                
                <!-- left content -->
                <section class="flex flex-col justify-end lg:col-span-8 max-w-3xl">
                    
                    <div class="grow"></div>

                    <!-- hero title -->
                    <div ref="heroTitleSection" class="hidden md:flex md:flex-col md:justify-start mb-12 mt-12 lg:mt-0">
                        <h1 class="text-6xl font-hero uppercase">Ankeboot Books</h1>
                        <h1 class="text-6xl font-amh">አንከቡት መጻህፍት</h1>
                        <h1 class="text-6xl font-hero">العنكبوت</h1>
                    </div>

                    <!-- hero text -->
                    <div class="text-xl font-normal flex flex-col lg:w-full xl:w-5/6">

                        <p>
                            <a class="hover:bg-home-25 hover:px-2 
                            p-0 transition duration-300 hover:no-underline cursor-pointer underline decoration-4
                            decoration-home-100">Ankeboot</a> is an Arabic word meaning <i>Spider</i>.
                            We are a woman-founded and woman-led company inspired by the creativity 
                            and perseverance of a spider. The tenacity and innovation of a weaver permeates 
                            our practice, transforming the simple act of providing books for readers, 
                            into moments of community building and social change. 
                        </p>
                        <p class="my-3"></p>
                        <p>
                            Our organization operates in two streams focusing on 
                            <a class="inline-block hover:bg-books-25 hover:px-2 p-0 transition duration-300
                            hover:no-underline cursor-pointer underline decoration-4
                            decoration-books-100">access to education materials</a> and exploring books as an 
                            <a class="inline-block hover:bg-publishing-25 hover:px-2 
                            p-0 transition duration-300 hover:no-underline cursor-pointer underline decoration-4
                            decoration-publishing-100">ever-changing site of knowledge and production and documentation</a> 
                        </p>

                    </div>

                    <!-- hero links -->
                    <div class="flex flex-col md:flex-row justify-start gap-4 mt-8">
                        <a class="group capitalize text-xl font-sans font-semibold flex items-center max-w-fit bg-books-25 px-2">
                            browse our books 
                            <go :size="28" styles="group-hover:mx-2 inline-block mx-0 transition duration-300"/>
                        </a>
                        <a class="group capitalize text-xl font-sans font-semibold flex items-center max-w-fit bg-publishing-25 px-2">
                            view our publications 
                            <go :size="28" styles="my-1 mx-1 group-hover:mx-2"/>
                        </a>
                    </div>

                    <div class="grow lg:hidden"></div>

                </section>

                <!-- right content -->
                <section class="my-8 md:my-12 lg:my-0 lg:flex lg:col-span-4 lg:flex-col">
                    
                    <!-- navigation -->
                    <nav class="hidden md:flex md:justify-around lg:justify-end">
                        <ul ref="nav" class="w-full flex justify-around lg:justify-end items-center lg:grid lg:gap-2 text-2xl"
                            :class="hoverState ? '' : 'grayscale-custom'">
                            <NavLinks title="home" active/>
                            <NavLinks title="about"/>
                            <NavLinks title="books"/>
                            <NavLinks title="publishing"/>
                            <NavLinks title="maps" class="hidden lg:flex"/>
                            <NavLinks title="programs" class="hidden lg:flex"/>
                            <NavLinks title="services" class="hidden lg:flex"/>
                            <NavLinks title="resources" class="hidden lg:flex"/>
                            <NavLinks title="contact us" colorClass="contact" class="hidden lg:flex"/>
                            <li :onclick="toggleDrawer" class="lg:hidden items-center justify-end drawer-button">
                                <div class="flex items-end justify-center flex-col gap-1 w-9 h-9">
                                    <div class="h-1 bg-programs-100 w-full"></div>
                                    <div class="h-1 bg-resources-100 w-4/5"></div>
                                    <div class="h-1 bg-maps-100 w-4/5"></div>
                                </div>
                            </li>
                            
                        </ul>
                    </nav>
                    
                    <!-- hero-title-(<=sm) -->
                    <div class="flex justify-between items-start md:hidden">
                        <div class="flex flex-col justify-start md:hidden text-3xl">
                            <h1 class="font-hero uppercase leading-tight">Ankeboot Books</h1>
                            <h1 class="font-amh leading-tight">አንከቡት መጻህፍት</h1>
                        </div>
                        <div :onclick="toggleDrawer" class="lg:hidden items-center justify-end drawer-button">
                            <div class="flex items-end justify-center flex-col gap-1 w-9 h-9">
                                <div class="h-1 bg-programs-100 w-full"></div>
                                <div class="h-1 bg-resources-100 w-4/5"></div>
                                <div class="h-1 bg-maps-100 w-4/5"></div>
                            </div>
                        </div>
                    </div>

                    <div class="lg:grow lg:min-h-[64px]"></div>
                    
                    <!-- socials -->
<!--                    <div class="text-right hidden lg:grid lg:gap-2 font-normal text-lg">-->
<!--                        <div class="flex justify-end items-center opacity-[60%]">-->
<!--                            <a class="mr-2">@ankebootbooks</a>-->
<!--                            <instagram :size="32"/>-->
<!--                        </div>-->
<!--                        <div class="flex justify-end items-center opacity-[60%]">-->
<!--                            <a class="mr-2">@ankebootbooks</a>-->
<!--                            <telegram :size="32"/>-->
<!--                        </div>-->
<!--                        <div class="flex justify-end items-center opacity-[60%]">-->
<!--                            <a class="mr-2">contact@ankebootbooks.com</a>-->
<!--                            <mail :size="32"/>-->
<!--                        </div>-->
<!--                        <div class="flex justify-end items-center opacity-[60%]">-->
<!--                            <a class="mr-2">/ankebootbooks</a>-->
<!--                            <facebook :size="32"/>-->
<!--                        </div>-->
<!--                        <div class="flex justify-end items-center opacity-[60%]">-->
<!--                            <a class="mr-2">@ankebootbooks</a>-->
<!--                            <twitter :size="32"/> -->
<!--                        </div>-->
<!--                    </div>-->


                </section>

            </div>

        </main>
        
        <!-- right padding -->
        <div class="grow"></div>

    </div>

</template>

<style scoped lang="postcss">

    .grayscale-custom > li {
        @apply transition duration-300 lg:grayscale;
    }

</style>
