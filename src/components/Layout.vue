<script setup></script>

<template>
    <div class="h-screen w-full grid grid-cols-6 py-16 px-12 xl:px-28 2xl:px-48">

        <!-- left grid -->
        <div class="col-span-5 lg:col-span-4 flex flex-col">

            <!-- hero title -->
            <div class="grow flex flex-col items-start justify-end my-16">
                <p class="uppercase font-hero text-[56px] xl:text-[64px] leading-none">Ankeboot Books</p>
                <p class="uppercase font-amh text-[64px] xl:text-[72px] leading-none">አንከቡት መጻህፍት</p>
                <p class="uppercase font-hero text-[64px] xl:text-[72px] leading-tight">العنكبوت</p>
            </div>

            <!-- hero intro -->
            <div class="flex flex-col justify-end text-base xl:text-[20px]">
                <p class="w-full lg:w-4/5">
                    <a class="hover:bg-[#FF3333] hover:bg-opacity-[25%] hover:px-2 
                    hover:py-1 hover:no-underline cursor-pointer underline decoration-4
                    decoration-[#FF3333]">Ankeboot</a> is an Arabic word meaning <i>Spider</i>.
                    We are a woman-founded and woman-led company inspired by the creativity 
                    and perseverance of a spider. The tenacity and innovation of a weaver permeates 
                    our practice, transforming the simple act of providing books for readers, 
                    into moments of community building and social change. 
                </p>
                <p class="w-4/5 my-8">
                    Our organization operates in two streams focusing on 
                    <a class="hover:bg-[#9E7CFF] hover:bg-opacity-[25%] hover:px-2 
                    hover:py-1 hover:no-underline cursor-pointer underline decoration-4
                     decoration-[#9E7CFF]">access to education materials</a> and exploring books as an 
                    <a class="hover:bg-[#7BDFFF] hover:bg-opacity-[25%] hover:px-2 
                    hover:py-1 hover:no-underline cursor-pointer underline decoration-4 
                    decoration-[#7BDFFF]">ever-changing site of knowledge and production and documentation</a> 
                </p>
            </div>

            <!-- hero links -->
            <div class="flex items-center justify-start text-[24px] xl:text-[24px]">
                <div class="cursor-pointer bg-[#9E7CFF] bg-opacity-[25%] font-hero px-4 mr-1 flex items-center">
                    <a>browse our books</a>
                    <svg class="ml-1" xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24" style="fill: rgba(0, 0, 0, 1);transform: ;msFilter:;"><path d="m11.293 17.293 1.414 1.414L19.414 12l-6.707-6.707-1.414 1.414L15.586 11H6v2h9.586z"></path></svg>
                </div>
                <div class="cursor-pointer bg-[#7BDFFF] bg-opacity-[25%] font-hero px-4 ml-1 flex items-center">
                    <a>view our publications</a>
                    <svg class="ml-1" xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24" style="fill: rgba(0, 0, 0, 1);transform: ;msFilter:;"><path d="m11.293 17.293 1.414 1.414L19.414 12l-6.707-6.707-1.414 1.414L15.586 11H6v2h9.586z"></path></svg>

                </div>
            </div>

        </div>
        
        <!-- right grid -->
        <div class="lg:flex flex-col justify-between hidden lg:col-span-2">
            
            <!-- navigation -->
            <nav class="flex justify-end">
                <ul class="grid gap-2 text-[24px] xl:text-[24px]">
                    <li class="flex justify-end">
                        <a class="group flex justify-center items-center hover:w-full hover:text-center cursor-pointer px-2 bg-[#FF3333] bg-opacity-[25%] uppercase font-hero border-dashed border-2 border-[#FF3333]">
                            Home
                            <svg class="group-hover:w-auto w-0" xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24" style="fill: rgba(0, 0, 0, 1);transform: ;msFilter:;"><path d="m11.293 17.293 1.414 1.414L19.414 12l-6.707-6.707-1.414 1.414L15.586 11H6v2h9.586z"></path></svg>
                        </a>
                    </li>
                    <li class="flex justify-end">
                        <a class="group flex justify-center items-center hover:w-full hover:text-center cursor-pointer px-2 bg-[#9BD102] bg-opacity-[25%] uppercase font-hero">
                            About
                            <svg class="group-hover:inline hidden" xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24" style="fill: rgba(0, 0, 0, 1);transform: ;msFilter:;"><path d="m11.293 17.293 1.414 1.414L19.414 12l-6.707-6.707-1.414 1.414L15.586 11H6v2h9.586z"></path></svg>
                        </a>
                    </li>
                    <li class="flex justify-end">
                        <a class="group flex justify-center items-center hover:w-full hover:text-center cursor-pointer px-2 bg-[#9E7CFF] bg-opacity-[25%] uppercase font-hero">
                            Books
                            <svg class="group-hover:inline hidden" xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24" style="fill: rgba(0, 0, 0, 1);transform: ;msFilter:;"><path d="m11.293 17.293 1.414 1.414L19.414 12l-6.707-6.707-1.414 1.414L15.586 11H6v2h9.586z"></path></svg>
                        </a>
                    </li>
                    <li class="flex justify-end">
                        <a class="group flex justify-center items-center hover:w-full hover:text-center cursor-pointer px-2 bg-[#7BDFFF] bg-opacity-[25%] uppercase font-hero">
                            Publishing
                            <svg class="group-hover:inline hidden" xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24" style="fill: rgba(0, 0, 0, 1);transform: ;msFilter:;"><path d="m11.293 17.293 1.414 1.414L19.414 12l-6.707-6.707-1.414 1.414L15.586 11H6v2h9.586z"></path></svg>
                        </a>
                    </li>
                    <li class="flex justify-end">
                        <a class="group flex justify-center items-center hover:w-full hover:text-center cursor-pointer px-2 bg-[#A0BBFF] bg-opacity-[25%] uppercase font-hero">
                            Maps
                            <svg class="group-hover:inline hidden" xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24" style="fill: rgba(0, 0, 0, 1);transform: ;msFilter:;"><path d="m11.293 17.293 1.414 1.414L19.414 12l-6.707-6.707-1.414 1.414L15.586 11H6v2h9.586z"></path></svg>
                        </a>
                    </li>
                    <li class="flex justify-end">
                        <a class="group flex justify-center items-center hover:w-full hover:text-center cursor-pointer px-2 bg-[#0D9F00] bg-opacity-[25%] uppercase font-hero">
                            Programs
                            <svg class="group-hover:inline hidden" xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24" style="fill: rgba(0, 0, 0, 1);transform: ;msFilter:;"><path d="m11.293 17.293 1.414 1.414L19.414 12l-6.707-6.707-1.414 1.414L15.586 11H6v2h9.586z"></path></svg>
                        </a>
                    </li>
                    <li class="flex justify-end">
                        <a class="group flex justify-center items-center hover:w-full hover:text-center cursor-pointer px-2 bg-[#CAAA01] bg-opacity-[25%] uppercase font-hero">
                            Services
                            <svg class="group-hover:inline hidden" xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24" style="fill: rgba(0, 0, 0, 1);transform: ;msFilter:;"><path d="m11.293 17.293 1.414 1.414L19.414 12l-6.707-6.707-1.414 1.414L15.586 11H6v2h9.586z"></path></svg>
                        </a>
                    </li>
                    <li class="flex justify-end">
                        <a class="group flex justify-center items-center hover:w-full hover:text-center cursor-pointer px-2 bg-[#497ECD] bg-opacity-[25%] uppercase font-hero">
                            Resources
                            <svg class="group-hover:inline hidden" xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24" style="fill: rgba(0, 0, 0, 1);transform: ;msFilter:;"><path d="m11.293 17.293 1.414 1.414L19.414 12l-6.707-6.707-1.414 1.414L15.586 11H6v2h9.586z"></path></svg>
                        </a>
                    </li>
                    <li class="flex justify-end">
                        <a class="group flex justify-center items-center hover:w-full hover:text-center cursor-pointer px-2 bg-[#AB089B] bg-opacity-[25%] uppercase font-hero">
                            Contact Us
                            <svg class="group-hover:inline hidden" xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24" style="fill: rgba(0, 0, 0, 1);transform: ;msFilter:;"><path d="m11.293 17.293 1.414 1.414L19.414 12l-6.707-6.707-1.414 1.414L15.586 11H6v2h9.586z"></path></svg>
                        </a>
                    </li>
                    
                </ul>
            </nav>

            <!-- socials -->
            <div class="text-right grid gap-2 font-light text-base xl:text-[20px]">
                <div class="flex justify-end items-center opacity-[50%]">
                    <a class="mr-2">@ankebootbooks</a>
                    <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24" style="fill: rgba(0, 0, 0, 1);transform: ;msFilter:;"><path d="M20.947 8.305a6.53 6.53 0 0 0-.419-2.216 4.61 4.61 0 0 0-2.633-2.633 6.606 6.606 0 0 0-2.186-.42c-.962-.043-1.267-.055-3.709-.055s-2.755 0-3.71.055a6.606 6.606 0 0 0-2.185.42 4.607 4.607 0 0 0-2.633 2.633 6.554 6.554 0 0 0-.419 2.185c-.043.963-.056 1.268-.056 3.71s0 2.754.056 3.71c.015.748.156 1.486.419 2.187a4.61 4.61 0 0 0 2.634 2.632 6.584 6.584 0 0 0 2.185.45c.963.043 1.268.056 3.71.056s2.755 0 3.71-.056a6.59 6.59 0 0 0 2.186-.419 4.615 4.615 0 0 0 2.633-2.633c.263-.7.404-1.438.419-2.187.043-.962.056-1.267.056-3.71-.002-2.442-.002-2.752-.058-3.709zm-8.953 8.297c-2.554 0-4.623-2.069-4.623-4.623s2.069-4.623 4.623-4.623a4.623 4.623 0 0 1 0 9.246zm4.807-8.339a1.077 1.077 0 0 1-1.078-1.078 1.077 1.077 0 1 1 2.155 0c0 .596-.482 1.078-1.077 1.078z"></path><circle cx="11.994" cy="11.979" r="3.003"></circle></svg>
                </div>
                <div class="flex justify-end items-center opacity-[50%]">
                    <a class="mr-2">@ankebootbooks</a>
                    <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24" style="fill: rgba(0, 0, 0, 1);transform: ;msFilter:;"><path d="m20.665 3.717-17.73 6.837c-1.21.486-1.203 1.161-.222 1.462l4.552 1.42 10.532-6.645c.498-.303.953-.14.579.192l-8.533 7.701h-.002l.002.001-.314 4.692c.46 0 .663-.211.921-.46l2.211-2.15 4.599 3.397c.848.467 1.457.227 1.668-.785l3.019-14.228c.309-1.239-.473-1.8-1.282-1.434z"></path></svg>                </div>
                <div class="flex justify-end items-center opacity-[50%]">
                    <a class="mr-2">contact@ankebootbooks.com</a>
                    <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24" style="fill: rgba(0, 0, 0, 1);transform: ;msFilter:;"><path d="M18.73,5.41l-1.28,1L12,10.46,6.55,6.37l-1.28-1A2,2,0,0,0,2,7.05V18.64A1.36,1.36,0,0,0,3.36,20H6.55V12.28L12,16.37l5.45-4.09V20h3.19A1.36,1.36,0,0,0,22,18.64V7.05A2,2,0,0,0,18.73,5.41Z"></path></svg>
                </div>
                <div class="flex justify-end items-center opacity-[50%]">
                    <a class="mr-2">/ankebootbooks</a>
                    <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24" style="fill: rgba(0, 0, 0, 1);transform: ;msFilter:;"><path d="M13.397 20.997v-8.196h2.765l.411-3.209h-3.176V7.548c0-.926.258-1.56 1.587-1.56h1.684V3.127A22.336 22.336 0 0 0 14.201 3c-2.444 0-4.122 1.492-4.122 4.231v2.355H7.332v3.209h2.753v8.202h3.312z"></path></svg>
                </div>
                <div class="flex justify-end items-center opacity-[50%]">
                    <a class="mr-2">@ankebootbooks</a>
                    <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24" style="fill: rgba(0, 0, 0, 1);transform: ;msFilter:;"><path d="M19.633 7.997c.013.175.013.349.013.523 0 5.325-4.053 11.461-11.46 11.461-2.282 0-4.402-.661-6.186-1.809.324.037.636.05.973.05a8.07 8.07 0 0 0 5.001-1.721 4.036 4.036 0 0 1-3.767-2.793c.249.037.499.062.761.062.361 0 .724-.05 1.061-.137a4.027 4.027 0 0 1-3.23-3.953v-.05c.537.299 1.16.486 1.82.511a4.022 4.022 0 0 1-1.796-3.354c0-.748.199-1.434.548-2.032a11.457 11.457 0 0 0 8.306 4.215c-.062-.3-.1-.611-.1-.923a4.026 4.026 0 0 1 4.028-4.028c1.16 0 2.207.486 2.943 1.272a7.957 7.957 0 0 0 2.556-.973 4.02 4.02 0 0 1-1.771 2.22 8.073 8.073 0 0 0 2.319-.624 8.645 8.645 0 0 1-2.019 2.083z"></path></svg>
                </div>
            </div>

        </div>

    </div>
</template>

<style scoped></style>
