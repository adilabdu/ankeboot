<template>

  <div class="h-screen w-full fixed flex items-center justify-center bg-green-100 z-100 transition duration-300"
       :class="[opened ? 'translate-x-0' : 'translate-x-full']">
    <div class="h-full w-3/4 bg-white shadow-md flex items-end justify-end">

      <nav class="flex items-center justify-center w-full h-full">
        <ul class="relative font-hero font-bold uppercase flex flex-col gap-4 justify-center h-full">
          <li class="group relative flex items-center justify-center px-4 py-1 w-32 opacity-0 animate-[slideIn_300ms_2100ms_forwards]">
            <div class="z-0 absolute h-full w-full bg-home-25 group-hover:bg-home-50 -skew-x-12"></div>
            <a href="/home" class="h-full w-full flex justify-center items-center z-10 group-hover:scale-125 transition duration-300">home</a>
          </li>
          <li class="group relative flex items-center justify-center px-4 py-1 w-32 opacity-0 animate-[slideIn_300ms_2200ms_forwards]">
            <div class="z-0 absolute h-full w-full bg-about-25 group-hover:bg-about-50 -skew-x-12"></div>
            <a href="/about" class="h-full w-full flex justify-center items-center z-10 group-hover:scale-125 transition duration-300">about</a>
          </li>
          <li class="group relative flex items-center justify-center px-4 py-1 w-32 opacity-0 animate-[slideIn_300ms_2300ms_forwards]">
            <div class="z-0 absolute h-full w-full bg-books-25 group-hover:bg-books-50 -skew-x-12"></div>
            <a href="/books" class="h-full w-full flex justify-center items-center z-10 group-hover:scale-125 transition duration-300">books</a>
          </li>
          <li class="group relative flex items-center justify-center px-4 py-1 w-32 opacity-0 animate-[slideIn_300ms_2400ms_forwards]">
            <div class="z-0 absolute h-full w-full bg-publishing-25 group-hover:bg-publishing-50 -skew-x-12"></div>
            <a href="/publishing" class="h-full w-full flex justify-center items-center z-10 group-hover:scale-125 transition duration-300">publishing</a>
          </li>
          <li class="group relative flex items-center justify-center px-4 py-1 w-32 opacity-0 animate-[slideIn_300ms_2500ms_forwards]">
            <div class="z-0 absolute h-full w-full bg-maps-25 group-hover:bg-maps-50 -skew-x-12"></div>
            <a href="/maps" class="h-full w-full flex justify-center items-center z-10 group-hover:scale-125 transition duration-300">maps</a>
          </li>
          <li class="group relative flex items-center justify-center px-4 py-1 w-32 opacity-0 animate-[slideIn_300ms_2600ms_forwards]">
            <div class="z-0 absolute h-full w-full bg-programs-25 group-hover:bg-programs-50 -skew-x-12"></div>
            <a href="/programs" class="h-full w-full flex justify-center items-center z-10 group-hover:scale-125 transition duration-300">programs</a>
          </li>
          <li class="group relative flex items-center justify-center px-4 py-1 w-32 opacity-0 animate-[slideIn_300ms_2700ms_forwards]">
            <div class="z-0 absolute h-full w-full bg-contact-25 group-hover:bg-contact-50 -skew-x-12"></div>
            <a href="/contact" class="h-full w-full flex justify-center items-center z-10 group-hover:scale-125 transition duration-300">contact</a>
          </li>
          <li class="group flex flex-col items-center justify-center px-4 absolute w-full my-4 bottom-0">
            <dark class="" :size="24"/>
          </li>
        </ul>
      </nav>

    </div>
  </div>

</template>

<script>

import light from "./icons/light.vue";
import dark from "./icons/dark.vue";

export default {
  name: "MobileNavigation",
  components: {
    light,
    dark
  },
  props: {
    opened: {
      type: Boolean,
      default: false
    }
  },
  setup() {

  }
}

</script>

<style scoped>

</style>