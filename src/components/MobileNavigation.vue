<template>

  <div @click="closeNavigation" class="min-h-screen w-full fixed flex items-center justify-end z-100 transition duration-300"
       :class="[opened ? 'translate-x-0' : 'translate-x-full']">
    <div class="absolute h-full w-3/4 bg-white flex items-end justify-end">

      <nav class="flex items-center justify-center w-full h-full">
        <ul class="relative font-hero font-bold uppercase flex flex-col gap-4 justify-center h-full mt-16">
          <li class="group relative flex items-center justify-center px-4 py-3 w-32 opacity-0"
                :class="[opened ? 'animate-[slideIn_300ms_100ms_forwards]' : '']">
            <div class="z-0 absolute h-full w-full bg-home-25 group-hover:bg-home-50 -skew-x-12"></div>
            <a href="/home" class="h-full w-full flex justify-center items-center z-10 group-hover:scale-125 transition duration-300">home</a>
          </li>
          <li class="group relative flex items-center justify-center px-4 py-3 w-32 opacity-0"
                :class="[opened ? 'animate-[slideIn_300ms_200ms_forwards]' : '']">
            <div class="z-0 absolute h-full w-full bg-about-25 group-hover:bg-about-50 -skew-x-12"></div>
            <a href="/about" class="h-full w-full flex justify-center items-center z-10 group-hover:scale-125 transition duration-300">about</a>
          </li>
          <li class="group relative flex items-center justify-center px-4 py-3 w-32 opacity-0"
                :class="[opened ? 'animate-[slideIn_300ms_300ms_forwards]' : '']">
            <div class="z-0 absolute h-full w-full bg-books-25 group-hover:bg-books-50 -skew-x-12"></div>
            <a href="/books" class="h-full w-full flex justify-center items-center z-10 group-hover:scale-125 transition duration-300">books</a>
          </li> 
          <li class="group relative flex items-center justify-center px-4 py-3 w-32 opacity-0"
                :class="[opened ? 'animate-[slideIn_300ms_400ms_forwards]' : '']">
            <div class="z-0 absolute h-full w-full bg-publishing-25 group-hover:bg-publishing-50 -skew-x-12"></div>
            <a href="#partners" class="h-full w-full flex justify-center items-center z-10 group-hover:scale-125 transition duration-300">publishing</a>
          </li>
          <li class="group relative flex items-center justify-center px-4 py-3 w-32 opacity-0"
                :class="[opened ? 'animate-[slideIn_300ms_500ms_forwards]' : '']">
            <div class="z-0 absolute h-full w-full bg-maps-25 group-hover:bg-maps-50 -skew-x-12"></div>
            <a href="/maps" class="h-full w-full flex justify-center items-center z-10 group-hover:scale-125 transition duration-300">maps</a>
          </li>
          <li class="group relative flex items-center justify-center px-4 py-3 w-32 opacity-0"
                :class="[opened ? 'animate-[slideIn_300ms_600ms_forwards]' : '']">
            <div class="z-0 absolute h-full w-full bg-programs-25 group-hover:bg-programs-50 -skew-x-12"></div>
            <a href="/programs" class="h-full w-full flex justify-center items-center z-10 group-hover:scale-125 transition duration-300">programs</a>
          </li>
          <li class="group relative flex items-center justify-center px-4 py-3 w-32 opacity-0"
                :class="[opened ? 'animate-[slideIn_300ms_700ms_forwards]' : '']">
            <div class="z-0 absolute h-full w-full bg-contact-25 group-hover:bg-contact-50 -skew-x-12"></div>
            <a href="/contact" class="h-full w-full flex justify-center items-center z-10 group-hover:scale-125 transition duration-300">contact</a>
          </li>
          <li class="group relative flex items-center justify-between px-4 py-3 w-full">

            <dark class="" :size="24"/>

            <div class="group relative flex items-center justify-center transition duration-300"
                 @click="changeLanguageClicked">
              <p class="text-xs">
                <span class="font-hero">en</span>
                /
                <span class="font-amh">አማ</span>
              </p>
            </div>
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
  setup(props, { emit }) {

    function closeNavigation() {
      emit('closeNavigation')
    }

    function changeLanguageClicked() {
      emit('changeLanguage')
    }

    return {
      closeNavigation, changeLanguageClicked
    }
  }
}

</script>

<style scoped>

</style>