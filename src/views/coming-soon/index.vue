<script setup>

	import Instagram from '../../components/icons/instagram.vue'
	import Telegram from '../../components/icons/telegram.vue'
	import Twitter from '../../components/icons/twitter.vue'
	import Home from "./home.vue"
	import BookList from "./list.vue"
	import { ArrowSmallRightIcon } from "@heroicons/vue/24/solid"

</script>

<template>
    
    <div class="flex flex-col min-h-screen">

		<header class="mt-16 mb-6 container max-w-6xl mx-auto flex justify-between items-center">

			<div class="hero flex flex-col">
				<h1 class="font-hero text-2xl uppercase">Ankeboot Books</h1>
				<h1 class="font-amh text-2xl">አንከቡት መጻህፍት</h1>
			</div>

			<button class="px-4 py-2.5 h-fit rounded-xl transition-colors duration-150 hover:bg-gray-200 flex items-center gap-2 group">
				<span>Browse our books</span>
				<ArrowSmallRightIcon class="w-4 h-4 group-hover:translate-x-0 -translate-x-full scale-x-0 group-hover:scale-x-100 transition-transform duration-150" />
			</button>

		</header>

        <div class="grow min-h-[32px]">

			<div class="flex h-full">

				<!-- gutter left -->
				<div class="grow"></div>


				<main class="mx-2 flex flex-col md:grid md:grid-cols-2 gap-6 max-w-6xl">

<!--					<Home />-->
					<BookList />

				</main>

				<!-- gutter right -->
				<div class="grow"></div>

			</div>

		</div>

        <footer class="mt-24 flex flex-col items-center justify-center">

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
