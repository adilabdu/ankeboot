<template>

  <div ref="background" class="animate-scale-up-down -translate-y-1/20 w-full h-screen fixed items-center justify-center flex z-10">
    <div class="blur-3xl translate-x-1/2 translate-y-1/5 animate-pulse h-64 w-64 xs:h-96 xs:w-96 bg-publishing-50 rounded-full"></div>
    <div class="blur-3xl animate-rotate-slow h-64 w-64 xs:h-96 xs:w-96 bg-books-50"></div>
    <div class="blur-3xl -translate-x-1/2 translate-y-1/5 animate-pulse h-64 w-64 xs:h-96 xs:w-96 bg-resources-50 rounded-full"></div>
  </div>

  <div ref="homepage" class="flex flex-col items-center">

    <header class="fixed z-100 h-16 w-full flex justify-between items-center overflow-clip animate-appear shadow-md bg-white">

      <div class="hero-logo flex px-4 gap-2 min-w-fit">
        <svg @click="shareQR" class="hover:scale-110 hover:transition hover:duration-300 opacity-0 animate-grow" width="42" height="42" viewBox="0 0 63 63" fill="black" xmlns="http://www.w3.org/2000/svg">
          <path d="M3 0H0V3H3V0Z" fill="black"/>
          <path d="M6 0H3V3H6V0Z" fill="black"/>
          <path d="M9 0H6V3H9V0Z" fill="black"/>
          <path d="M12 0H9V3H12V0Z" fill="black"/>
          <path d="M15 0H12V3H15V0Z" fill="black"/>
          <path d="M18 0H15V3H18V0Z" fill="black"/>
          <path d="M21 0H18V3H21V0Z" fill="black"/>
          <path d="M30 0H27V3H30V0Z" fill="black"/>
          <path d="M39 0H36V3H39V0Z" fill="black"/>
          <path d="M45 0H42V3H45V0Z" fill="black"/>
          <path d="M48 0H45V3H48V0Z" fill="black"/>
          <path d="M51 0H48V3H51V0Z" fill="black"/>
          <path d="M54 0H51V3H54V0Z" fill="black"/>
          <path d="M57 0H54V3H57V0Z" fill="black"/>
          <path d="M60 0H57V3H60V0Z" fill="black"/>
          <path d="M63 0H60V3H63V0Z" fill="black"/>
          <path d="M3 3H0V6H3V3Z" fill="black"/>
          <path d="M21 3H18V6H21V3Z" fill="black"/>
          <path d="M27 3H24V6H27V3Z" fill="black"/>
          <path d="M36 3H33V6H36V3Z" fill="black"/>
          <path d="M45 3H42V6H45V3Z" fill="black"/>
          <path d="M63 3H60V6H63V3Z" fill="black"/>
          <path d="M3 6H0V9H3V6Z" fill="black"/>
          <path d="M9 6H6V9H9V6Z" fill="black"/>
          <path d="M12 6H9V9H12V6Z" fill="black"/>
          <path d="M15 6H12V9H15V6Z" fill="black"/>
          <path d="M21 6H18V9H21V6Z" fill="black"/>
          <path d="M30 6H27V9H30V6Z" fill="black"/>
          <path d="M45 6H42V9H45V6Z" fill="black"/>
          <path d="M51 6H48V9H51V6Z" fill="black"/>
          <path d="M54 6H51V9H54V6Z" fill="black"/>
          <path d="M57 6H54V9H57V6Z" fill="black"/>
          <path d="M63 6H60V9H63V6Z" fill="black"/>
          <path d="M3 9H0V12H3V9Z" fill="black"/>
          <path d="M9 9H6V12H9V9Z" fill="black"/>
          <path d="M12 9H9V12H12V9Z" fill="black"/>
          <path d="M15 9H12V12H15V9Z" fill="black"/>
          <path d="M21 9H18V12H21V9Z" fill="black"/>
          <path d="M27 9H24V12H27V9Z" fill="black"/>
          <path d="M36 9H33V12H36V9Z" fill="black"/>
          <path d="M45 9H42V12H45V9Z" fill="black"/>
          <path d="M51 9H48V12H51V9Z" fill="black"/>
          <path d="M54 9H51V12H54V9Z" fill="black"/>
          <path d="M57 9H54V12H57V9Z" fill="black"/>
          <path d="M63 9H60V12H63V9Z" fill="black"/>
          <path d="M3 12H0V15H3V12Z" fill="black"/>
          <path d="M9 12H6V15H9V12Z" fill="black"/>
          <path d="M12 12H9V15H12V12Z" fill="black"/>
          <path d="M15 12H12V15H15V12Z" fill="black"/>
          <path d="M21 12H18V15H21V12Z" fill="black"/>
          <path d="M33 12H30V15H33V12Z" fill="black"/>
          <path d="M36 12H33V15H36V12Z" fill="black"/>
          <path d="M39 12H36V15H39V12Z" fill="black"/>
          <path d="M45 12H42V15H45V12Z" fill="black"/>
          <path d="M51 12H48V15H51V12Z" fill="black"/>
          <path d="M54 12H51V15H54V12Z" fill="black"/>
          <path d="M57 12H54V15H57V12Z" fill="black"/>
          <path d="M63 12H60V15H63V12Z" fill="black"/>
          <path d="M3 15H0V18H3V15Z" fill="black"/>
          <path d="M21 15H18V18H21V15Z" fill="black"/>
          <path d="M27 15H24V18H27V15Z" fill="black"/>
          <path d="M30 15H27V18H30V15Z" fill="black"/>
          <path d="M33 15H30V18H33V15Z" fill="black"/>
          <path d="M39 15H36V18H39V15Z" fill="black"/>
          <path d="M45 15H42V18H45V15Z" fill="black"/>
          <path d="M63 15H60V18H63V15Z" fill="black"/>
          <path d="M3 18H0V21H3V18Z" fill="black"/>
          <path d="M6 18H3V21H6V18Z" fill="black"/>
          <path d="M9 18H6V21H9V18Z" fill="black"/>
          <path d="M12 18H9V21H12V18Z" fill="black"/>
          <path d="M15 18H12V21H15V18Z" fill="black"/>
          <path d="M18 18H15V21H18V18Z" fill="black"/>
          <path d="M21 18H18V21H21V18Z" fill="black"/>
          <path d="M27 18H24V21H27V18Z" fill="black"/>
          <path d="M33 18H30V21H33V18Z" fill="black"/>
          <path d="M39 18H36V21H39V18Z" fill="black"/>
          <path d="M45 18H42V21H45V18Z" fill="black"/>
          <path d="M48 18H45V21H48V18Z" fill="black"/>
          <path d="M51 18H48V21H51V18Z" fill="black"/>
          <path d="M54 18H51V21H54V18Z" fill="black"/>
          <path d="M57 18H54V21H57V18Z" fill="black"/>
          <path d="M60 18H57V21H60V18Z" fill="black"/>
          <path d="M63 18H60V21H63V18Z" fill="black"/>
          <path d="M33 21H30V24H33V21Z" fill="black"/>
          <path d="M36 21H33V24H36V21Z" fill="black"/>
          <path d="M39 21H36V24H39V21Z" fill="black"/>
          <path d="M3 24H0V27H3V24Z" fill="black"/>
          <path d="M6 24H3V27H6V24Z" fill="black"/>
          <path d="M9 24H6V27H9V24Z" fill="black"/>
          <path d="M12 24H9V27H12V24Z" fill="black"/>
          <path d="M15 24H12V27H15V24Z" fill="black"/>
          <path d="M21 24H18V27H21V24Z" fill="black"/>
          <path d="M24 24H21V27H24V24Z" fill="black"/>
          <path d="M27 24H24V27H27V24Z" fill="black"/>
          <path d="M30 24H27V27H30V24Z" fill="black"/>
          <path d="M39 24H36V27H39V24Z" fill="black"/>
          <path d="M42 24H39V27H42V24Z" fill="black"/>
          <path d="M48 24H45V27H48V24Z" fill="black"/>
          <path d="M54 24H51V27H54V24Z" fill="black"/>
          <path d="M60 24H57V27H60V24Z" fill="black"/>
          <path d="M3 27H0V30H3V27Z" fill="black"/>
          <path d="M12 27H9V30H12V27Z" fill="black"/>
          <path d="M15 27H12V30H15V27Z" fill="black"/>
          <path d="M18 27H15V30H18V27Z" fill="black"/>
          <path d="M30 27H27V30H30V27Z" fill="black"/>
          <path d="M33 27H30V30H33V27Z" fill="black"/>
          <path d="M39 27H36V30H39V27Z" fill="black"/>
          <path d="M42 27H39V30H42V27Z" fill="black"/>
          <path d="M51 27H48V30H51V27Z" fill="black"/>
          <path d="M54 27H51V30H54V27Z" fill="black"/>
          <path d="M63 27H60V30H63V27Z" fill="black"/>
          <path d="M21 30H18V33H21V30Z" fill="black"/>
          <path d="M27 30H24V33H27V30Z" fill="black"/>
          <path d="M30 30H27V33H30V30Z" fill="black"/>
          <path d="M36 30H33V33H36V30Z" fill="black"/>
          <path d="M60 30H57V33H60V30Z" fill="black"/>
          <path d="M3 33H0V36H3V33Z" fill="black"/>
          <path d="M6 33H3V36H6V33Z" fill="black"/>
          <path d="M15 33H12V36H15V33Z" fill="black"/>
          <path d="M24 33H21V36H24V33Z" fill="black"/>
          <path d="M30 33H27V36H30V33Z" fill="black"/>
          <path d="M51 33H48V36H51V33Z" fill="black"/>
          <path d="M54 33H51V36H54V33Z" fill="black"/>
          <path d="M57 33H54V36H57V33Z" fill="black"/>
          <path d="M60 33H57V36H60V33Z" fill="black"/>
          <path d="M21 36H18V39H21V36Z" fill="black"/>
          <path d="M24 36H21V39H24V36Z" fill="black"/>
          <path d="M27 36H24V39H27V36Z" fill="black"/>
          <path d="M30 36H27V39H30V36Z" fill="black"/>
          <path d="M33 36H30V39H33V36Z" fill="black"/>
          <path d="M36 36H33V39H36V36Z" fill="black"/>
          <path d="M45 36H42V39H45V36Z" fill="black"/>
          <path d="M51 36H48V39H51V36Z" fill="black"/>
          <path d="M27 39H24V42H27V39Z" fill="black"/>
          <path d="M33 39H30V42H33V39Z" fill="black"/>
          <path d="M39 39H36V42H39V39Z" fill="black"/>
          <path d="M42 39H39V42H42V39Z" fill="black"/>
          <path d="M45 39H42V42H45V39Z" fill="black"/>
          <path d="M48 39H45V42H48V39Z" fill="black"/>
          <path d="M51 39H48V42H51V39Z" fill="black"/>
          <path d="M63 39H60V42H63V39Z" fill="black"/>
          <path d="M3 42H0V45H3V42Z" fill="black"/>
          <path d="M6 42H3V45H6V42Z" fill="black"/>
          <path d="M9 42H6V45H9V42Z" fill="black"/>
          <path d="M12 42H9V45H12V42Z" fill="black"/>
          <path d="M15 42H12V45H15V42Z" fill="black"/>
          <path d="M18 42H15V45H18V42Z" fill="black"/>
          <path d="M21 42H18V45H21V42Z" fill="black"/>
          <path d="M27 42H24V45H27V42Z" fill="black"/>
          <path d="M30 42H27V45H30V42Z" fill="black"/>
          <path d="M39 42H36V45H39V42Z" fill="black"/>
          <path d="M45 42H42V45H45V42Z" fill="black"/>
          <path d="M54 42H51V45H54V42Z" fill="black"/>
          <path d="M60 42H57V45H60V42Z" fill="black"/>
          <path d="M3 45H0V48H3V45Z" fill="black"/>
          <path d="M21 45H18V48H21V45Z" fill="black"/>
          <path d="M33 45H30V48H33V45Z" fill="black"/>
          <path d="M36 45H33V48H36V45Z" fill="black"/>
          <path d="M39 45H36V48H39V45Z" fill="black"/>
          <path d="M42 45H39V48H42V45Z" fill="black"/>
          <path d="M51 45H48V48H51V45Z" fill="black"/>
          <path d="M54 45H51V48H54V45Z" fill="black"/>
          <path d="M57 45H54V48H57V45Z" fill="black"/>
          <path d="M3 48H0V51H3V48Z" fill="black"/>
          <path d="M9 48H6V51H9V48Z" fill="black"/>
          <path d="M12 48H9V51H12V48Z" fill="black"/>
          <path d="M15 48H12V51H15V48Z" fill="black"/>
          <path d="M21 48H18V51H21V48Z" fill="black"/>
          <path d="M27 48H24V51H27V48Z" fill="black"/>
          <path d="M36 48H33V51H36V48Z" fill="black"/>
          <path d="M45 48H42V51H45V48Z" fill="black"/>
          <path d="M51 48H48V51H51V48Z" fill="black"/>
          <path d="M60 48H57V51H60V48Z" fill="black"/>
          <path d="M63 48H60V51H63V48Z" fill="black"/>
          <path d="M3 51H0V54H3V51Z" fill="black"/>
          <path d="M9 51H6V54H9V51Z" fill="black"/>
          <path d="M12 51H9V54H12V51Z" fill="black"/>
          <path d="M15 51H12V54H15V51Z" fill="black"/>
          <path d="M21 51H18V54H21V51Z" fill="black"/>
          <path d="M27 51H24V54H27V51Z" fill="black"/>
          <path d="M30 51H27V54H30V51Z" fill="black"/>
          <path d="M48 51H45V54H48V51Z" fill="black"/>
          <path d="M51 51H48V54H51V51Z" fill="black"/>
          <path d="M54 51H51V54H54V51Z" fill="black"/>
          <path d="M57 51H54V54H57V51Z" fill="black"/>
          <path d="M3 54H0V57H3V54Z" fill="black"/>
          <path d="M9 54H6V57H9V54Z" fill="black"/>
          <path d="M12 54H9V57H12V54Z" fill="black"/>
          <path d="M15 54H12V57H15V54Z" fill="black"/>
          <path d="M21 54H18V57H21V54Z" fill="black"/>
          <path d="M27 54H24V57H27V54Z" fill="black"/>
          <path d="M30 54H27V57H30V54Z" fill="black"/>
          <path d="M36 54H33V57H36V54Z" fill="black"/>
          <path d="M39 54H36V57H39V54Z" fill="black"/>
          <path d="M42 54H39V57H42V54Z" fill="black"/>
          <path d="M45 54H42V57H45V54Z" fill="black"/>
          <path d="M54 54H51V57H54V54Z" fill="black"/>
          <path d="M57 54H54V57H57V54Z" fill="black"/>
          <path d="M3 57H0V60H3V57Z" fill="black"/>
          <path d="M21 57H18V60H21V57Z" fill="black"/>
          <path d="M27 57H24V60H27V57Z" fill="black"/>
          <path d="M30 57H27V60H30V57Z" fill="black"/>
          <path d="M33 57H30V60H33V57Z" fill="black"/>
          <path d="M36 57H33V60H36V57Z" fill="black"/>
          <path d="M42 57H39V60H42V57Z" fill="black"/>
          <path d="M48 57H45V60H48V57Z" fill="black"/>
          <path d="M51 57H48V60H51V57Z" fill="black"/>
          <path d="M54 57H51V60H54V57Z" fill="black"/>
          <path d="M57 57H54V60H57V57Z" fill="black"/>
          <path d="M3 60H0V63H3V60Z" fill="black"/>
          <path d="M6 60H3V63H6V60Z" fill="black"/>
          <path d="M9 60H6V63H9V60Z" fill="black"/>
          <path d="M12 60H9V63H12V60Z" fill="black"/>
          <path d="M15 60H12V63H15V60Z" fill="black"/>
          <path d="M18 60H15V63H18V60Z" fill="black"/>
          <path d="M21 60H18V63H21V60Z" fill="black"/>
          <path d="M27 60H24V63H27V60Z" fill="black"/>
          <path d="M33 60H30V63H33V60Z" fill="black"/>
          <path d="M36 60H33V63H36V60Z" fill="black"/>
          <path d="M45 60H42V63H45V60Z" fill="black"/>
          <path d="M48 60H45V63H48V60Z" fill="black"/>
          <path d="M60 60H57V63H60V60Z" fill="black"/>
        </svg>

        <p class="select-none flex flex-col items-start justify-center">
          <span class="font-hero uppercase text-2xl leading-none animate-slide-in">Ankeboot</span>
          <span class="font-sans lowercase text-base leading-none animate-slide-in">
            bookstore
            <span class="font-mono">x</span>
            publishing
          </span>
        </p>
      </div>

      <nav class="flex h-full">
        <ul class="font-hero font-bold uppercase flex justify-center h-full">
          <li class="hidden group relative md:flex items-center justify-center px-4 w-32 opacity-0 animate-[slideIn_300ms_100ms_forwards]">
            <div class="z-0 absolute h-full w-full bg-home-25 group-hover:bg-home-50 -skew-x-12"></div>
            <a href="/home" class="h-full w-full flex justify-center items-center z-10 group-hover:scale-125 transition duration-300">home</a>
          </li>
          <li class="hidden group relative lg:flex items-center justify-center px-4 w-32 opacity-0 animate-[slideIn_300ms_200ms_forwards]">
            <div class="z-0 absolute h-full w-full bg-about-25 group-hover:bg-about-50 -skew-x-12"></div>
            <a href="/about" class="h-full w-full flex justify-center items-center z-10 group-hover:scale-125 transition duration-300">about</a>
          </li>
          <li class="hidden group relative md:flex items-center justify-center px-4 w-32 opacity-0 animate-[slideIn_300ms_300ms_forwards]">
            <div class="z-0 absolute h-full w-full bg-books-25 group-hover:bg-books-50 -skew-x-12"></div>
            <a href="/books" class="h-full w-full flex justify-center items-center z-10 group-hover:scale-125 transition duration-300">books</a>
          </li>
          <li class="hidden group relative md:flex items-center justify-center px-4 w-32 opacity-0 animate-[slideIn_300ms_400ms_forwards]">
            <div class="z-0 absolute h-full w-full bg-publishing-25 group-hover:bg-publishing-50 -skew-x-12"></div>
            <a href="/publishing" class="h-full w-full flex justify-center items-center z-10 group-hover:scale-125 transition duration-300">publishing</a>
          </li>
          <li class="hidden group relative xl:flex items-center justify-center px-4 w-32 opacity-0 animate-[slideIn_300ms_500ms_forwards]">
            <div class="z-0 absolute h-full w-full bg-maps-25 group-hover:bg-maps-50 -skew-x-12"></div>
            <a href="/maps" class="h-full w-full flex justify-center items-center z-10 group-hover:scale-125 transition duration-300">maps</a>
          </li>
          <li class="hidden group relative xl:flex items-center justify-center px-4 w-32 opacity-0 animate-[slideIn_300ms_600ms_forwards]">
            <div class="z-0 absolute h-full w-full bg-programs-25 group-hover:bg-programs-50 -skew-x-12"></div>
            <a href="/programs" class="h-full w-full flex justify-center items-center z-10 group-hover:scale-125 transition duration-300">programs</a>
          </li>
          <li class="hidden group relative lg:flex items-center justify-center px-4 w-32 opacity-0 animate-[slideIn_300ms_700ms_forwards]">
            <div class="z-0 absolute h-full w-full bg-contact-25 group-hover:bg-contact-50 -skew-x-12"></div>
            <a href="/contact" class="h-full w-full flex justify-center items-center z-10 group-hover:scale-125 transition duration-300">contact</a>
          </li>
          <li class="group relative xl:hidden flex items-center justify-center px-4 sm:w-24">
            <div class="absolute h-full w-full"></div>
            <button class="flex flex-col gap-1 grid">
              <div class="grid grid-rows-5 opacity-0 animate-grow-skew">
                <div class="border-2 h-1 bg-home-25 border w-6 border-home-100"></div>
                <div class="w-6"></div>
                <div class="border-2 h-1 bg-books-25 border w-6 border-books-100"></div>
                <div class="w-6"></div>
                <div class="border-2 h-1 bg-publishing-25 border w-6 border-publishing-100"></div>
              </div>
            </button>
          </li>
          <li class="group relative hidden xl:flex flex-col items-center justify-center px-4"
              :class="[lightMode ? 'animate-somersault-down' : 'animate-somersault-up']"
              @click="changeTheme">
            <light v-if="lightMode" class="" :size="24"/>
            <dark v-else class="" :size="24"/>
          </li>
        </ul>
      </nav>

    </header>

    <main class="min-h-screen w-full flex flex-col items-center justify-center">

      <section class="z-20 h-screen w-full flex flex-col items-center justify-start">

        <div class="grow z-20 flex flex-col items-center justify-center animate-scale-up">

          <div class="hero flex flex-col items-center justify-center relative h-full">

            <div class="z-0 grow min-h-24"></div>
            <div class="relative flex flex-col items-center justify-center">

              <h1 class="filter drop-shadow-xl z-10 select-none uppercase hero-title font-hero leading-none text-[15vw] sm:text-8xl md:text-9xl after:content-['*'] overflow-clip">
                Ankeboot
              </h1>

              <h3 class="z-20 select-none hero-sub font-sans lowercase leading-none text-[6vw] sm:text-4xl md:text-5xl px-5 py-1">
          <span class="">
            bookstore
          </span>
                <span class="font-mono">x</span>
                <span class="">
            publishing
          </span>
              </h3>

              <h3 ref="tagline" class="z-20 select-none hero-sub font-sans lowercase text-[5vw] sm:text-2xl md:text-3xl text-center mt-12">

                inspired by the creativity and
                <br>perseverance of a <i><b>spider</b></i>

              </h3>

            </div>
            <div class="grow"></div>

          </div>

        </div>

      </section>

      <section class="z-20 grid grid-cols-2 grid-rows-3 lg:grid-cols-3 lg:grid-rows-2 -translate-y-1/4 lg:-translate-y-1/5 w-full md:w-3/4 xl:w-1/2 aspect-2/3 lg:aspect-3/2 lg:gap-2">

        <a href="/books" class="group lg:hover:drop-shadow-xl transition duration-150 w-full aspect-square bg-books-25 flex flex-col items-center justify-center" :class="[bottomGridVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12', durations[order[0]]]">

          <div class="group-hover:scale-125 transition duration-300 flex flex-col items-center justify-center w-3/4 h-3/4">

            <svg class="w-2/5 h-2/5" width="503" height="453" viewBox="0 0 503 453" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M41 149.5V299H47H53V149.5V-4.45545e-06H47H41V149.5Z" fill="black"/>
              <path d="M195.8 114.7L195.5 163.5L189.5 154.5C186.2 149.5 183.5 145.4 183.4 145.2C183.2 144.8 174 150.1 173.4 151.1C172.7 152.3 177.8 160.5 185.4 170.4C188.8 174.7 192.5 179.6 193.8 181.3L196 184.5L195.8 243L195.5 301.5H178H160.5L159.9 216C159.6 169 159.2 121.2 159.1 109.7L159 89.0002H152.9H146.8L147.4 187.7L148 286.5L143.9 278C131.3 251.7 97.7 173.6 86 143.5C82.6 134.6 81.1 132 78.2 129.7L74.6 127L71.8 129.7C70.3 131.2 69 132.9 69 133.5C69 138.2 114.9 246.1 134.9 288.4C138.2 295.2 140.5 301.1 140.2 301.4C139.9 301.7 108.2 302 69.8 302H0V308V314L73.8 314.2L147.5 314.5L147.3 369C147.1 406.3 146.7 424.2 145.9 425.6C145 427.4 145.8 429.6 151.3 440L157.8 452.2L158.5 436.9C158.8 428.4 159.5 403.7 159.9 382L160.6 342.5L163.9 349.5C165.7 353.3 167.6 357.5 168 358.7C168.8 360.6 169.3 360.8 171.8 360.1C173.7 359.5 175.4 359.7 177.1 360.6C178.4 361.3 179.9 361.9 180.4 362C182.7 362.1 179.3 352.5 170.6 334.5C165.3 323.6 161 314.5 161 314.3C161 314.2 180.6 314 204.5 314H248V353.5V393H254H260V353.5V314H275.8L291.5 314.1L298.2 323.2C304.9 332.3 304.9 332.3 303.5 335.6L302.1 339L305.7 340.5C307.6 341.3 309.7 342 310.2 342C310.7 342 312.6 343.5 314.5 345.2C316.3 347 319.7 349.7 321.9 351.2C325.1 353.4 326.3 355 327.2 358.5C328.1 362 328.9 363 330.5 363C331.6 363 334.2 363.3 336.3 363.6L340 364.3V360.2C340 352.7 335.8 345.3 328.5 340.1C326 338.3 322.9 335.4 321.4 333.5L318.9 330.1L321.3 322.3L323.8 314.5L413.4 314.2L503 314V308V302H416.1C368.2 302 328.9 301.6 328.6 301.2C327.9 300.1 345.1 254.9 367.5 199.2C378.3 172.1 387.1 149.8 386.9 149.6C386 149 375.7 145 375.5 145.2C374.6 146.5 327.8 265.2 323.5 277C320.4 285.5 317.1 294.5 316.1 297L314.4 301.5L306.3 301.8L298.2 302.1L293.7 296.3C291.3 293.1 282.7 281.5 274.6 270.6L260 250.7V168.4V86.0002H254H248V159.7C248 223.3 247.8 233.2 246.6 232C245.8 231.2 236.8 219 226.6 205L208 179.5V122.7V66.0002H202H196L195.8 114.7ZM229.1 229.5L247.5 254.5V278V301.5H228H208.5L208.2 251.5C208 208.7 208.2 201.8 209.4 203C210.1 203.8 219 215.7 229.1 229.5ZM270.5 286.1C275.8 293.4 280.4 299.9 280.7 300.6C281.1 301.7 279.1 302 270.6 302H260V287.5C260 279.5 260.2 273 260.4 273C260.6 273 265.2 278.9 270.5 286.1ZM310.4 315.5C309.9 316.7 309.4 316.8 308.4 315.9C306.5 314.4 306.6 314 309 314C310.3 314 310.8 314.5 310.4 315.5Z" fill="black"/>
            </svg>

          </div>

          <div class="lg:opacity-0 lg:translate-y-1.5 lg:group-hover:opacity-100 lg:group-hover:translate-y-0 lg:transition lg:duration-300 font-bold uppercase text-lg lg:text-xl font-hero text-center">Books</div>

        </a>

        <a href="/publishing" class="group lg:hover:drop-shadow-xl transition duration-150 w-full aspect-square bg-publishing-25 flex flex-col items-center justify-center" :class="[bottomGridVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12', durations[order[1]]]">

          <div class="group-hover:scale-125 transition duration-300 flex flex-col items-center justify-center w-3/4 h-3/4 overflow-clip">

            <svg class="w-2/5 h-2/5" width="372" height="438" viewBox="0 0 372 438" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M289 2.25414C274.6 5.35414 265.3 8.15414 253.1 12.8541C243.4 16.6541 170.5 39.6542 150.4 45.2542C125.5 52.2542 94.1 56.6542 67 57.1542C52 57.3542 51.4 57.2542 48.1 54.9542L44.8 52.5542L41.6 56.0542C39.9 58.0542 37.7 59.8542 36.8 60.2542C35.8 60.5542 35 61.7542 35 62.8542C35 63.9542 34.1 68.1542 33 72.1542C28.5 87.9542 27.8 96.4542 27.3 139.054L26.8 179.854H13.4H0V186.354V192.854H13.3H26.6L26.3 211.554C26.1 221.954 25.7 251.854 25.4 278.054L24.8 325.854H22.4C20.1 325.854 20 326.154 20 332.354C20 338.654 20.1 338.854 22.5 338.854H25V373.854V408.854H31H37V373.854V338.854H171H305.1L304.8 350.054L304.5 361.354L297.5 362.154C293.7 362.554 236.4 362.854 170.3 362.854L50 362.754V368.654V374.554L156.3 375.054C214.7 375.354 271.5 375.354 282.5 374.954C293.5 374.654 302.8 374.554 303.1 374.854C303.4 375.154 303.4 386.554 303.1 400.354L302.5 425.354L285.5 425.054C276.2 424.954 249.6 424.054 226.5 423.254C203.4 422.354 164.3 421.654 139.5 421.554C101.7 421.454 92.7 421.654 83.1 423.054L71.6 424.854L63.4 420.354C55.5 416.054 51.3 414.754 39.4 413.454L34.4 412.854L32.6 418.454C31.6 421.554 31.1 424.254 31.4 424.554C31.6 424.854 35.6 425.454 40.2 426.054C47.1 426.854 50.2 427.854 58.7 432.054C70.1 437.754 68.5 437.654 90.5 434.754C102.6 433.054 166.3 433.354 218.5 435.254C293.1 437.954 301 438.054 309.6 436.754L317.7 435.554L316.4 429.954C314.9 423.854 314.6 403.454 315.7 385.254L316.3 374.054L320.3 374.654C323 374.954 325.3 374.654 327.5 373.454C331 371.554 334.7 366.154 333.4 364.854C331.4 363.054 323.1 360.154 322.3 360.954C321.9 361.354 320.4 361.554 319.2 361.154C317 360.654 316.9 360.354 317.2 349.454L317.5 338.354L320.3 338.054C323.4 337.654 323.4 337.754 321.8 330.954C321.1 327.954 320.1 325.854 319.3 325.854C318.3 325.854 318 322.754 318 311.654V297.554L337.8 298.254C348.6 298.654 358.6 299.154 360.1 299.454C362.1 299.854 362.8 299.454 363.8 297.454C364.7 295.354 365.7 294.854 368.5 294.854C372.4 294.854 372.8 294.054 370.3 290.954C367.6 287.654 362.3 286.854 339.7 286.154C328.3 285.854 318.7 285.254 318.5 284.754C318.2 284.354 318.3 281.454 318.6 278.454L319.3 272.854H343.1H367V266.854V260.854H343H319V226.854V192.854H345H371V186.354V179.854H345H319V161.054C319 150.654 319.3 135.354 319.7 127.054L320.3 111.854H325.2H330V105.854V99.8542H325H320V83.0542C320.1 73.8542 320.5 53.2542 321 37.3542C321.7 10.8542 321.7 8.05414 320.1 5.35414C319.2 3.75414 317.3 1.75414 315.9 1.15414C312.2 -0.745856 300.7 -0.245856 289 2.25414ZM308.3 54.5542C308.1 78.1542 307.7 97.9542 307.5 98.5542C307.2 99.5542 301.9 99.8542 285.5 99.8542H264V105.854V111.854L285.5 112.054C297.3 112.254 307 112.654 307 113.054C307 113.554 307 128.654 307 146.854V179.854H172.9H38.7L39.3 141.054C39.9 100.954 40.5 93.3542 44.2 78.5542L46.5 69.8542H58.5C84.5 69.8542 115.7 66.2542 141.1 60.4542C157.6 56.5542 242.1 30.6541 255 25.4541C270.1 19.4541 297.5 12.1541 306.2 11.9541L308.8 11.8541L308.3 54.5542ZM307 214.654C307 226.754 306.7 242.054 306.3 248.654L305.7 260.854H181.3H57V266.854V272.854H181.5H306V279.354V285.854H183.5H61V291.854V297.854H183.5H306V311.754V325.554L297.3 326.254C292.4 326.654 232 326.654 163 326.254L37.5 325.554L37.7 282.454C37.9 258.754 38.3 228.854 38.6 216.054L39.2 192.854H173.1H307V214.654Z" fill="black"/>
              <path d="M77 142.854V148.854H175H273V142.854V136.854H175H77V142.854Z" fill="black"/>
              <path d="M70 226.854V232.854H174.5H279V226.854V220.854H174.5H70V226.854Z" fill="black"/>
            </svg>

          </div>

          <div class="lg:opacity-0 lg:translate-y-1.5 lg:group-hover:opacity-100 lg:group-hover:translate-y-0 lg:transition lg:duration-300 font-bold uppercase text-lg lg:text-xl font-hero text-center">Publishing</div>

        </a>

        <a href="/resources" class="group lg:hover:drop-shadow-xl transition duration-150 w-full aspect-square bg-resources-25 flex flex-col items-center justify-center" :class="[bottomGridVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12', durations[order[2]]]">

          <div class="group-hover:scale-125 transition duration-300 flex flex-col items-center justify-center w-3/4 h-3/4 overflow-clip">

            <svg class="w-2/5 h-2/5" width="537" height="417" viewBox="0 0 537 417" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M343.25 9.10012C282.45 43.9001 220.05 87.5001 133.75 155.5C119.75 166.5 101.95 180.5 94.2495 186.5C75.9495 200.9 58.8495 215.1 48.8495 224.6C41.5495 231.5 40.7495 232 40.7495 229.7C40.7495 223.4 38.4495 222.6 30.8495 226.4C25.2495 229.3 20.7495 234.1 17.1495 241.1C14.3495 246.7 10.7495 259.7 10.7495 264.2C10.7495 265.9 9.14954 269.2 6.34954 273C1.24954 279.9 -0.750461 286.7 0.249539 293.8C1.24954 300.9 1.74954 301.4 6.24954 299.6C8.24954 298.7 10.5495 298 11.1495 298C11.7495 298 13.5495 301.1 15.2495 304.8C19.2495 313.9 33.7495 328.5 45.1495 335C63.1495 345.1 81.3495 350 100.45 350C114.25 350 123.15 348.1 133.45 343C142.85 338.4 150.55 330.8 159.05 317.7C163.15 311.4 164.55 310 166.65 310C171.15 310.1 183.05 312 188.45 313.5C193.35 315 193.95 315.4 197.75 322L201.85 329.1L198.45 333.8C193.55 340.5 188.25 351.4 185.65 360.1C184.05 365.7 183.45 371.2 183.05 383.1L182.55 398.6L189.75 401.9C207.95 410 223.55 413.4 252.25 415.6C295.95 418.9 316.85 414.9 330.95 400.6C337.45 394 343.45 381.9 345.25 371.5C347.05 361.2 347.05 356.2 345.25 345.6L343.75 337L347.25 330C351.35 321.9 361.65 306.5 369.55 296.5C384.75 277.5 394.85 266.6 457.15 201.5C481.95 175.6 506.05 150.4 510.85 145.5C520.35 135.5 529.95 123.5 532.85 117.9C535.55 112.4 538.25 93.0001 536.15 93.0001C533.65 93.0001 518.65 102.3 511.85 108C501.75 116.6 500.75 117.1 488.55 120.4C483.15 121.8 477.05 123.8 475.05 124.9C470.55 127.2 466.35 131.4 466.95 133C467.15 133.7 469.55 135.1 472.25 136.1C477.05 137.9 477.25 137.9 481.25 136C483.45 135 489.15 133.1 494.05 131.9C499.05 130.7 505.25 128.3 508.45 126.3C516.45 121.5 516.45 121.5 462.25 177.9C410.55 231.7 384.65 259.2 373.95 271.5C362.75 284.5 348.65 303 343.25 312.1C336.65 323.2 337.65 322.9 332.15 314.2C316.85 289.9 286.45 272.8 263.35 275.5C253.15 276.6 248.05 279.5 244.65 286.1C242.45 290.4 224.15 309.9 220.35 311.9C218.95 312.7 217.75 314.1 217.75 315C217.75 315.9 216.55 317.3 215.05 318.1C213.45 318.8 211.95 319.6 211.55 319.8C211.15 320 209.95 318.3 208.75 316C203.25 305.2 196.35 301.3 178.55 298.9C173.65 298.2 169.75 297.3 169.75 296.9C169.75 296.4 170.65 292.8 171.65 288.8C175.15 275.7 175.25 271.8 172.35 265.4C165.95 251.5 155.15 240.6 142.95 235.9C134.35 232.6 116.25 232.1 104.65 234.8C99.9495 236 91.8495 237.6 86.6495 238.5C67.0495 241.8 41.2495 249.6 28.7495 256L24.4495 258.2L25.2495 255.3C26.4495 250.4 29.8495 243.2 31.7495 241.5C33.5495 239.9 33.9495 240 38.4495 243.8L43.1495 247.9L54.7495 236.7C68.2495 223.5 81.4495 212.4 110.15 190C121.65 181.1 138.55 167.8 147.65 160.6C199.25 119.6 244.15 86.8001 288.35 57.7001C308.75 44.2001 343.35 22.9001 346.85 21.5001C348.15 21.0001 348.35 22.2001 348.45 29.2001C348.45 36.1001 349.25 39.7001 352.55 50.0001C356.55 62.2001 356.65 62.7001 355.65 69.9001C353.95 82.2001 349.95 90.5001 344.35 93.7001C342.85 94.5001 342.65 95.5001 343.25 100.3C344.05 106.6 344.75 107 350.35 104.4C360.25 99.7001 367.05 85.7001 368.35 67.2001C368.95 60.1001 368.65 58.7001 365.15 48.5001C361.15 36.8001 360.55 30.1001 362.15 16.5001C362.65 11.9001 362.45 9.30009 361.05 5.20009L359.25 9.14471e-05L343.25 9.10012ZM139.05 247.9C142.45 249.2 146.85 252.1 149.75 254.8C155.85 260.5 161.75 270.2 161.75 274.5C161.75 278.2 158.15 292.4 156.35 296C155.55 297.4 154.25 300.3 153.25 302.4C148.15 314.3 135.65 328.4 126.75 332.4C106.55 341.5 79.1495 339 54.9495 326C33.0495 314.2 22.7495 299.7 22.7495 280.9C22.7495 274.7 22.9495 274 25.5495 272.2C35.0495 265.4 59.2495 256.8 80.2495 252.6C96.6495 249.3 112.95 245.9 114.25 245.4C117.55 244.2 133.75 245.9 139.05 247.9ZM282.45 290C288.95 292.1 298.95 297.8 305.75 303.3C313.95 310 320.65 318.2 325.85 328.3L329.95 336.2L328.45 342.1L326.95 348L330.15 348.8L333.25 349.6L333.55 358.4C333.95 371.9 328.75 386.2 321.05 393C309.25 403.4 293.35 406 257.25 403.5C229.05 401.6 219.15 399.8 201.55 393.3L194.75 390.8V384.5C194.75 371.4 199.55 354.7 206.25 344.6C211.75 336.2 220.85 328.2 225.45 327.4C228.85 326.9 229.35 326.5 229.05 324.6C228.65 322.9 231.15 319.9 239.75 311.1C245.85 304.9 252.45 297.4 254.35 294.4C257.75 289.1 258.95 288.3 265.25 287.8C269.25 287.4 277.75 288.5 282.45 290Z" fill="black"/>
            </svg>

          </div>

          <div class="lg:opacity-0 lg:translate-y-1.5 lg:group-hover:opacity-100 lg:group-hover:translate-y-0 lg:transition lg:duration-300 font-bold uppercase text-lg lg:text-xl font-hero text-center">Resources</div>

        </a>

        <a href="/programs" class="group lg:hover:drop-shadow-xl transition duration-150 w-full aspect-square bg-programs-25 flex flex-col items-center justify-center" :class="[bottomGridVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12', durations[order[3]]]">

          <div class="group-hover:scale-125 transition duration-300 flex flex-col items-center justify-center w-3/4 h-3/4 overflow-clip">

            <svg class="w-2/5 h-2/5" width="297" height="307" viewBox="0 0 297 307" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M158.818 0.386153C128.918 4.78615 103.618 15.3862 70.8176 37.2862C45.9176 53.8862 22.6176 73.8862 13.7176 86.3862C7.91757 94.4862 3.61757 103.786 1.61757 112.886C0.217568 118.786 -0.0824321 124.886 0.0175679 142.786C0.117568 168.486 1.31757 181.586 5.01757 197.286C6.41757 203.286 7.91757 213.386 8.41757 219.486C9.41757 232.686 11.3176 240.986 15.4176 249.286C21.7176 262.086 32.2176 272.186 47.3176 279.786C55.0176 283.686 72.8176 289.786 76.3176 289.786C77.4176 289.786 79.7176 291.086 81.5176 292.686C93.2176 302.786 120.518 307.686 158.818 306.486C208.518 304.886 248.018 290.086 272.518 263.886C290.518 244.586 298.518 212.486 295.518 171.486C292.818 134.986 284.918 104.486 270.218 73.7862C251.218 34.3862 226.818 10.8862 196.318 2.68615C189.018 0.686153 166.118 -0.713847 158.818 0.386153ZM192.418 14.6862C202.418 17.2862 210.218 20.7862 218.118 26.4862C240.418 42.3862 258.518 70.7861 271.118 109.786C275.418 123.086 280.618 144.986 280.118 147.586C279.918 148.486 278.318 145.186 276.418 140.186C271.718 127.486 262.418 108.586 256.318 99.2862C252.418 93.3862 250.418 88.9862 248.718 82.5862C243.518 63.1862 234.218 50.6862 219.918 43.7862C215.418 41.6862 209.118 39.3862 205.818 38.5862C198.218 36.9862 174.018 37.1862 165.818 38.9862C161.518 39.8862 157.118 40.0862 150.318 39.4862C130.518 37.7862 103.618 40.1862 86.5176 45.0862C82.0176 46.3862 78.3176 47.3862 78.3176 47.1862C78.3176 46.3862 98.0176 34.8862 107.218 30.1862C126.018 20.8862 143.418 14.9862 158.818 12.8862C168.318 11.5862 183.418 12.3862 192.418 14.6862ZM213.818 54.7862C219.718 57.5862 222.318 59.5862 227.318 65.1862C229.218 67.3862 227.918 66.7862 222.318 62.9862C218.118 60.1862 211.618 56.1862 207.818 54.1862C202.218 51.2862 201.518 50.6862 204.318 51.2862C206.218 51.6862 210.518 53.1862 213.818 54.7862ZM123.718 55.3862C107.418 65.1862 89.1176 82.0862 78.0176 97.4862C66.2176 113.986 57.7176 133.386 54.8176 150.686C52.6176 163.386 53.3176 220.686 55.7176 229.286C57.5176 235.786 63.1176 248.386 66.2176 252.586C68.0176 255.286 69.5176 262.786 68.2176 262.786C67.8176 262.786 65.1176 261.186 62.2176 259.186C45.5176 247.986 33.4176 234.686 25.6176 218.886C21.2176 209.986 20.9176 208.886 20.1176 198.386C19.0176 181.586 19.1176 144.286 20.3176 135.386C23.0176 116.586 27.8176 103.986 37.0176 92.0862C49.8176 75.2862 67.1176 63.6862 88.8176 57.2862C98.1176 54.5862 114.118 51.9862 122.218 51.8862L129.718 51.7862L123.718 55.3862ZM176.818 56.2862C198.718 61.7862 214.818 70.8862 229.918 86.2862C237.818 94.2862 239.118 96.0862 239.718 99.8862C240.818 107.086 241.618 136.986 240.918 142.086L240.218 146.786L236.618 142.086C234.718 139.586 230.818 131.986 228.118 125.386C214.918 93.0861 200.118 76.1862 179.818 70.1862C172.218 67.9862 159.018 67.9862 150.418 70.1862C123.418 77.3862 91.8176 104.386 74.3176 135.086C71.9176 139.286 69.8176 142.586 69.6176 142.386C68.9176 141.686 73.5176 130.286 77.9176 121.686C92.9176 92.7861 121.718 66.7862 150.818 56.1862C160.818 52.4862 161.718 52.4862 176.818 56.2862ZM181.718 84.1862C193.018 89.6862 205.518 104.586 212.718 120.986L215.218 126.686L212.018 125.986C205.218 124.486 184.118 125.486 176.018 127.586C164.618 130.686 148.118 137.986 136.718 144.886C110.118 161.086 94.9176 177.086 82.2176 202.386L76.5176 213.886L73.5176 207.486C66.4176 192.486 66.1176 187.786 71.5176 171.486C84.7176 131.286 116.618 95.2862 149.618 83.5862C156.818 81.0862 158.918 80.7862 166.918 80.9862C174.318 81.2862 176.918 81.8862 181.718 84.1862ZM263.718 142.386C273.218 166.086 275.018 176.786 271.818 189.286C269.018 199.986 260.618 213.186 248.118 226.186C243.218 231.486 242.418 231.986 242.318 229.986C242.318 228.686 243.418 226.186 244.718 224.486C251.018 216.086 253.118 203.386 251.418 184.386C250.418 174.586 250.418 169.486 251.218 164.286C251.918 160.386 252.618 148.786 253.018 138.386L253.618 119.486L255.818 123.886C257.118 126.286 260.618 134.586 263.718 142.386ZM213.318 139.286C220.418 141.786 221.318 142.986 224.418 153.286C227.818 164.886 231.818 188.486 231.018 191.986C229.818 196.586 222.018 207.086 212.418 216.986L203.018 226.786L198.918 226.186C190.818 224.886 179.418 221.086 173.818 217.686C161.818 210.486 148.018 195.486 144.818 186.186C143.318 181.686 144.118 178.686 148.118 174.486C153.218 169.186 160.518 171.886 171.418 182.986L178.218 189.986L182.818 186.686C185.318 184.886 187.318 182.886 187.318 182.286C187.318 181.686 183.918 177.786 179.718 173.586C161.118 154.886 144.818 154.186 134.518 171.686C127.218 184.086 135.018 202.286 154.918 219.186C164.318 227.186 171.518 231.386 180.918 234.586C189.718 237.486 189.818 236.986 178.118 243.886C169.918 248.686 161.018 252.686 152.118 255.686L145.518 257.886L136.818 255.886C126.518 253.386 115.918 249.286 108.318 244.786C102.218 241.186 92.1176 233.386 88.4176 229.386C86.1176 226.986 86.1176 226.586 87.2176 222.586C91.4176 208.786 103.418 188.786 114.318 177.786C133.218 158.686 163.618 142.186 187.718 137.786C194.718 136.586 207.918 137.286 213.318 139.286ZM281.918 213.286C280.018 224.086 277.318 232.886 273.018 241.786C268.718 250.586 253.918 265.486 242.718 272.086C234.518 276.886 221.118 283.086 216.118 284.286C212.018 285.286 212.418 281.686 216.818 278.386C221.018 275.186 227.918 266.286 232.318 258.486C234.718 254.186 237.118 251.686 241.718 248.586C254.918 239.586 272.018 219.586 279.118 204.786C282.718 197.186 282.818 197.086 283.118 200.586C283.318 202.486 282.718 208.186 281.918 213.286ZM231.318 218.286C231.318 220.186 230.318 221.286 227.118 222.886L223.018 224.986L226.918 220.386C229.018 217.886 230.918 215.886 231.118 215.786C231.218 215.786 231.318 216.886 231.318 218.286ZM71.4176 231.986L70.5176 234.286L69.5176 231.786C69.0176 230.386 68.2176 227.686 67.8176 225.786L67.1176 222.286L69.7176 225.986C71.7176 228.886 72.1176 230.186 71.4176 231.986ZM227.318 237.686C227.318 238.086 226.818 239.886 226.218 241.486C225.418 243.986 223.818 245.186 218.118 247.686C209.618 251.486 195.318 255.486 186.918 256.386L180.818 256.986L187.818 252.686C191.718 250.386 197.818 246.286 201.418 243.586C207.518 239.186 208.618 238.786 213.918 238.686C217.218 238.586 220.918 238.186 222.318 237.786C225.818 236.686 227.318 236.586 227.318 237.686ZM92.8176 249.486C96.6176 252.286 103.018 256.286 107.018 258.286C111.018 260.286 114.318 262.186 114.318 262.486C114.318 263.486 101.118 261.886 95.8176 260.286C93.0176 259.486 88.7176 257.486 86.1176 255.886C82.0176 253.286 81.3176 252.386 81.3176 249.586C81.3176 247.786 81.6176 245.286 81.9176 243.986C82.5176 241.986 82.8176 241.886 84.3176 242.986C85.2176 243.686 89.1176 246.586 92.8176 249.486ZM48.3176 265.086L51.8176 267.886L47.3176 265.586C42.4176 263.086 31.3176 252.686 29.3176 248.786C28.6176 247.386 31.8176 249.886 36.4176 254.286C41.0176 258.686 46.4176 263.586 48.3176 265.086ZM211.218 266.386C207.418 270.486 197.118 277.586 190.718 280.386L184.818 283.086L149.818 283.186L114.818 283.286L103.318 279.086C87.5176 273.386 82.3176 271.086 82.3176 269.686C82.3176 268.986 83.0176 268.886 84.1176 269.286C97.3176 275.086 113.518 276.286 134.418 272.986C142.718 271.686 154.618 270.686 165.818 270.386C183.218 269.986 195.818 268.386 205.318 265.386C207.818 264.586 210.718 263.986 211.718 263.886C213.518 263.786 213.418 263.986 211.218 266.386Z" fill="black"/>
            </svg>

          </div>

          <div class="lg:opacity-0 lg:translate-y-1.5 lg:group-hover:opacity-100 lg:group-hover:translate-y-0 lg:transition lg:duration-300 font-bold uppercase text-lg lg:text-xl font-hero text-center">Programs</div>

        </a>

        <a href="/services" class="group lg:hover:drop-shadow-xl transition duration-150 w-full aspect-square bg-services-25 flex flex-col items-center justify-center" :class="[bottomGridVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12', durations[order[4]]]">

          <div class="group-hover:scale-125 transition duration-300 flex flex-col items-center justify-center w-3/4 h-3/4 overflow-clip">

            <svg class="w-2/5 h-2/5" width="527" height="520" viewBox="0 0 527 520" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M462.9 0.951359C458.2 2.15136 457.1 2.75136 457.1 4.45136C457.1 10.9514 448.9 21.0514 430.5 37.2514C419.6 46.8514 360.7 107.151 332 138.151L317.6 153.751L283.9 137.251L250.1 120.751L249.9 82.2514L249.6 43.6514L243.4 43.3514L237.1 43.0514V143.851L237 244.651L232.8 249.351L228.6 254.051L221.2 245.851C217.2 241.351 203.1 226.551 190 212.951C172 194.351 166.2 187.751 166.3 186.151C166.6 184.351 165.7 183.551 161.6 181.951C155.6 179.651 153 177.451 155.2 176.751C156 176.451 173 171.251 193.1 165.151C213.2 159.051 229.7 153.851 229.9 153.651C230.5 153.151 226.8 142.151 226.1 142.151C225.7 142.151 207 147.751 184.6 154.651L143.8 167.051L134.4 158.551C116.9 142.451 62.2 87.0514 62.6 85.8514C62.9 85.1514 60.8 83.1514 57.9 81.2514L52.8 77.9514L51 80.2514C50.1 81.4514 48.5 83.8514 47.6 85.3514L45.9 88.2514L89.1 131.451C124.6 166.851 132.6 175.451 133.8 178.851C135.1 182.651 135.5 182.951 137.5 182.151C139.5 181.451 140.6 182.051 145.2 186.751L150.5 192.151L138.1 222.851C131.3 239.851 124.7 256.051 123.4 258.851L121.1 264.151L60.9 264.351L0.6 264.651L0.3 270.851L0 277.151H61H122L122.6 280.351C122.9 282.151 124.7 296.351 126.5 311.951C128.4 327.551 130.1 340.451 130.3 340.651C130.5 340.851 134.6 342.751 139.3 344.951L147.9 348.751L138.9 359.751C133.9 365.751 117.2 386.351 101.8 405.651C86.4 424.851 70.3 444.251 66.1 448.651C61.9 453.151 56.6 459.551 54.2 462.951C48.6 471.251 41.5 486.051 42.7 487.051C43.6 487.951 53.3 491.351 53.6 490.851C53.7 490.751 55.2 487.651 56.9 483.851C61.4 474.151 66.5 466.751 75.2 457.651C79.4 453.251 93.8 435.951 107.1 419.151C120.5 402.351 137.8 380.951 145.4 371.651C153.1 362.251 159.5 354.551 159.6 354.351C159.7 354.251 175.8 361.151 195.4 369.751L231 385.451L231.3 406.051C231.7 429.251 230.8 454.351 228.7 480.151C227.9 489.751 226.9 502.451 226.6 508.351L225.9 519.151H232.5H239.1V513.851C239.1 511.051 240.2 494.251 241.6 476.651C243.4 453.551 244.1 437.151 244.1 417.851C244.1 400.651 244.5 391.251 245.1 391.651C245.6 391.951 258.5 389.251 273.8 385.651C289 382.051 301.9 379.151 302.5 379.151C303.1 379.251 305.6 382.451 308 386.451C319.3 404.751 341.7 437.651 349.4 447.151C360.1 460.451 367.4 467.951 377.9 476.551L386.1 483.351V490.151V496.951L391.9 497.451C395 497.651 397.9 497.751 398.4 497.451C399.7 496.751 399.2 482.251 397.7 478.751C396.8 476.651 393.3 472.951 388.4 469.051C372 455.851 358.8 440.451 340.5 413.151C320.1 382.651 313.8 372.351 314.5 370.451C314.9 369.451 326.7 348.351 340.8 323.551L366.3 278.451L395.5 277.851C411.5 277.451 430.3 276.551 437.2 275.751C457.6 273.251 477.4 272.351 497.1 272.751C510.3 273.151 517.2 272.851 521.1 271.951L526.6 270.651L526.2 266.151C526.1 263.651 525.7 261.451 525.4 261.151C525.2 260.851 508.7 260.651 488.8 260.651C459.7 260.751 450.1 261.051 440.1 262.451C432 263.651 417.9 264.451 400 264.851L372.4 265.451L369.4 257.051C367.7 252.451 359.8 229.451 351.7 206.051L336.9 163.451L333 161.551L329.2 159.651L348.4 139.151C379 106.451 421.7 62.6514 433.1 52.2514C451.6 35.2514 461.7 24.7514 464.9 19.1514C468.4 12.9514 470.6 4.55136 469.4 1.55136C468.6 -0.348641 468.3 -0.448641 462.9 0.951359ZM279.4 149.251C294.9 157.051 307.8 163.551 308 163.651C308.1 163.851 302.3 170.651 294.9 178.851C287.6 186.951 275.1 201.051 267.2 210.151C259.3 219.251 252.2 227.351 251.5 228.151C250.3 229.351 250.1 222.351 250.1 182.351C250.1 156.351 250.3 135.151 250.6 135.151C250.9 135.151 263.8 141.551 279.4 149.251ZM327.2 174.451C328.2 176.751 358.9 264.551 358.7 264.751C358.6 264.851 334.2 264.651 304.4 264.351L250.1 263.851V256.251V248.651L263.3 233.651C270.5 225.351 286.3 207.551 298.4 193.951L320.4 169.251L323.3 170.751C324.9 171.551 326.6 173.251 327.2 174.451ZM209 251.151L220.3 263.651L178.1 263.951C154.8 264.051 135.7 264.051 135.5 263.851C135.3 263.751 140.9 249.451 147.9 232.251L160.6 200.951L179.1 219.851C189.3 230.151 202.7 244.351 209 251.151ZM206.9 278.851C198.9 288.251 173.6 318.051 166.2 326.951C161 333.051 156.3 338.151 155.7 338.051C155.1 338.051 151.7 336.651 148.1 334.851L141.6 331.651L138.4 305.651C136.6 291.351 135.2 279.051 135.2 278.351C135.1 277.451 143.1 277.151 171.8 277.151C206.6 277.151 208.3 277.251 206.9 278.851ZM234.5 280.551L237.1 284.051V319.851C237.1 357.951 237.3 355.851 232.2 370.351C231.7 371.851 227.3 370.151 201.1 358.551C184.3 351.051 170.2 344.551 169.7 344.151C168.9 343.351 179.7 330.051 210.4 294.351C224 278.451 225.4 277.151 228.5 277.151C231.2 277.151 232.4 277.851 234.5 280.551ZM352.1 277.551C352.1 278.251 306.4 358.351 305.9 358.551C305.7 358.551 298.2 347.751 289.3 334.451C280.4 321.151 268.1 303.651 262 295.451C255.8 287.351 250.6 279.851 250.4 278.851C249.9 277.251 252.8 277.151 301 277.151C329.1 277.151 352.1 277.351 352.1 277.551ZM258.4 311.751C267.2 323.951 295.1 365.851 295.1 366.951C295.1 368.251 246.8 379.151 245.5 378.151C244.1 376.851 245.3 369.151 247.8 363.651C249.3 360.151 249.6 355.951 249.9 330.251C250.1 314.151 250.6 301.351 251 301.751C251.4 302.251 254.7 306.751 258.4 311.751Z" fill="black"/>
            </svg>

          </div>

          <div class="lg:opacity-0 lg:translate-y-1.5 lg:group-hover:opacity-100 lg:group-hover:translate-y-0 lg:transition lg:duration-300 font-bold uppercase text-lg lg:text-xl font-hero text-center">Services</div>

        </a>

        <a href="/maps" class="group lg:hover:drop-shadow-xl transition duration-150 w-full aspect-square bg-maps-25 flex flex-col items-center justify-center" :class="[bottomGridVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12', durations[order[5]]]" ref="bottomGrid">

          <div class="group-hover:scale-125 transition duration-300 flex flex-col items-center justify-center w-3/4 h-3/4 overflow-clip">

            <svg class="w-2/5 h-2/5" width="485" height="388" viewBox="0 0 485 388" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M151.058 0.104291C125.458 2.70429 117.558 4.20429 102.558 9.10429C89.8579 13.3043 80.8578 18.5043 73.6578 25.6043C63.3578 36.0043 60.0578 45.1043 60.7578 60.9043C61.1578 68.7043 61.9578 73.1043 64.4578 80.5043C69.7578 96.3043 75.9578 106.104 97.4578 133.004C113.458 152.904 119.458 161.904 124.758 173.304C131.358 187.704 133.258 199.504 130.158 207.004C128.558 210.704 129.658 210.204 105.958 216.804C93.3579 220.404 76.8578 227.604 53.6578 239.904C42.7578 245.704 29.5578 252.304 24.4578 254.504C19.2578 256.804 13.2578 259.504 10.9578 260.604C8.75785 261.604 5.75785 262.504 4.25785 262.504C1.45785 262.504 1.25785 263.004 0.157846 270.704C-0.242154 273.704 0.0578459 274.404 1.75785 274.804C7.65785 276.404 21.1578 270.804 64.6578 248.704C94.0578 233.804 99.8579 231.404 121.858 225.504C128.258 223.704 134.658 221.404 136.058 220.404C137.358 219.304 139.658 215.904 141.258 212.704C143.658 207.704 144.058 205.904 144.058 198.004C144.058 190.804 143.458 187.304 141.158 180.504C135.258 162.804 127.858 150.704 107.958 125.804C90.6579 104.304 86.0578 97.6043 80.5578 86.0043C74.8578 74.1043 73.1578 67.6043 73.1578 57.5043C73.0578 35.7043 91.3579 22.0043 129.258 15.4043C140.158 13.5043 145.758 13.2043 167.058 13.1043C210.758 13.1043 224.658 13.5043 227.758 15.1043C230.758 16.7043 233.558 21.2043 233.558 24.5043C233.558 28.7043 222.058 51.9043 213.558 64.8043C202.958 81.0043 194.458 91.5043 175.858 111.304C153.358 135.304 148.358 143.404 148.358 156.004C148.358 164.204 151.258 170.304 158.858 178.204C167.858 187.604 178.058 193.904 207.658 208.404C235.258 221.904 244.558 227.704 253.258 236.604C261.258 245.004 263.058 249.204 263.058 260.004C262.958 267.604 262.558 269.904 260.258 274.904C254.758 286.904 243.958 303.004 231.058 318.304C214.058 338.604 206.458 348.904 202.358 357.204C199.358 363.404 199.058 364.704 199.158 372.504C199.358 384.304 200.258 386.204 206.258 387.204C208.858 387.604 231.758 387.904 257.058 387.904H303.058L311.058 385.204C324.758 380.604 333.258 372.404 337.758 359.504C339.858 353.604 340.058 351.304 339.958 335.004C339.858 316.804 338.058 302.004 330.458 257.004C325.758 229.004 317.158 193.304 310.058 172.004C301.658 146.704 299.458 136.004 299.458 120.604C299.458 94.1043 304.558 77.9043 314.158 73.9043C319.058 71.8043 321.658 72.2043 326.858 75.5043C332.258 78.9043 336.558 84.4043 340.958 93.5043C343.958 99.7043 344.058 100.604 344.058 112.504C344.058 122.804 343.658 126.304 341.758 132.504C338.258 143.404 332.958 153.004 327.658 157.604C323.758 161.104 323.158 162.104 323.458 164.804C323.958 169.704 327.158 175.204 331.258 178.004C333.358 179.304 338.658 181.704 343.058 183.204C351.358 185.904 351.458 186.004 362.158 197.704C368.258 204.504 370.958 205.404 386.258 206.204L397.458 206.804L393.658 214.404C384.158 233.104 380.358 250.704 384.358 257.004C385.858 259.504 387.358 260.304 392.158 261.304C400.258 263.004 408.258 267.204 411.958 271.804C414.758 275.304 415.058 276.404 415.058 282.404C415.058 288.704 414.758 289.704 409.358 299.204C406.258 304.804 402.958 311.704 402.158 314.604C400.358 320.604 400.058 328.104 401.558 329.004C402.158 329.404 405.058 329.104 408.058 328.404L413.558 327.204V322.704C413.558 319.204 414.858 315.804 419.958 306.104C427.558 291.704 429.258 285.204 427.558 276.704C426.158 269.704 422.858 263.804 417.858 259.504C413.858 256.004 404.258 251.204 398.858 250.004C396.158 249.504 395.558 248.904 395.558 246.704C395.558 240.504 405.658 217.004 417.958 194.504C422.458 186.304 437.258 154.304 444.058 138.004C458.258 104.204 467.858 85.2043 475.358 76.1043C477.558 73.5043 480.358 68.6043 481.758 65.1043L484.258 58.8043L475.258 58.1043C470.258 57.8043 456.958 57.5043 445.558 57.5043C421.658 57.5043 416.958 58.4043 411.258 64.1043C404.958 70.5043 404.558 72.1043 404.558 93.7043C404.558 117.804 407.158 159.304 409.058 166.104C411.458 174.304 410.958 180.104 407.258 187.004L404.058 193.004L393.058 193.304C375.258 193.804 374.558 193.604 367.658 185.204C361.358 177.404 355.958 173.804 346.558 171.204C336.658 168.304 336.558 168.004 342.858 159.204C351.358 147.304 357.558 127.304 357.558 111.604C357.458 98.9043 352.258 84.7043 343.658 73.8043C328.158 54.1043 303.958 56.2043 293.958 78.0043C289.058 88.5043 287.358 97.9043 286.858 116.504L286.358 134.004L289.958 148.004C291.858 155.704 295.358 167.404 297.558 174.004C307.158 202.204 315.758 242.304 323.558 294.504C331.358 346.804 329.058 362.504 312.458 371.004C304.758 375.004 298.258 375.404 253.858 375.404H211.558V371.404C211.558 363.704 219.758 351.004 239.958 327.504C256.858 307.704 270.058 286.604 274.458 272.104C279.758 254.904 274.858 239.604 259.558 225.104C249.258 215.404 242.858 211.504 214.258 197.504C178.858 180.204 167.758 172.704 162.558 162.604C160.158 157.804 160.058 155.304 162.058 149.404C164.158 143.304 169.758 136.204 186.458 118.404C206.658 96.9043 218.258 82.1043 230.258 62.5043C235.658 53.6043 246.558 28.9043 246.558 25.4043C246.558 20.5043 242.558 11.5043 238.458 7.40429C232.958 1.90429 226.758 0.304291 211.858 0.704291C205.358 0.804291 189.958 0.604291 177.558 0.304291C165.158 0.00429109 153.258 -0.0957089 151.058 0.104291ZM462.558 70.9043C462.558 71.1043 460.558 74.8043 458.058 79.0043C450.958 91.0043 446.158 101.004 435.058 127.004C425.658 149.204 420.758 159.804 420.558 158.504C419.558 148.404 417.458 114.404 416.958 99.6043C415.958 69.7043 415.158 70.6043 443.358 70.5043C453.858 70.5043 462.558 70.7043 462.558 70.9043Z" fill="black"/>
            </svg>

          </div>

          <div class="lg:opacity-0 lg:translate-y-1.5 lg:group-hover:opacity-100 lg:group-hover:translate-y-0 lg:transition lg:duration-300 font-bold uppercase text-lg lg:text-xl font-hero text-center">Maps</div>

        </a>

      </section>

      <section class="z-20 w-full h-screen items-center justify-center flex bg-gradient-to-b from-transparent to-gray-200">

        <div class="relative flex items-center justify-center h-[42rem] aspect-square">

          <div class="absolute h-full w-full bg-white bg-opacity-75 rounded-md hover:translate-x-2 hover:-translate-y-2 hover:bg-opacity-100 transition duration-500 hover:drop-shadow-lg"></div>

        </div>

      </section>

    </main>

  </div>

</template>

<script>

import { onMounted, ref, toRefs } from "vue"
  import { useElementVisibility, breakpointsTailwind, useBreakpoints, useScroll } from "@vueuse/core"

  import light from "./icons/light.vue";
  import dark from "./icons/dark.vue"
  import ankebootPNG from "../assets/images/ankeboot.png"

  export default {

    name: "First",
    components: {
      light,
      dark
    },

    setup() {

      const breakpoints = useBreakpoints(breakpointsTailwind)
      const lgAndLarger = breakpoints.greater('lg')
      const mdAndSmaller = breakpoints.smaller('lg')

      const bottomGrid = ref(null)
      const tagline = ref(null)
      const bottomGridVisible = useElementVisibility(bottomGrid)
      const taglineVisible = useElementVisibility(tagline)

      const lightMode = ref(true)
      function changeTheme() {
        lightMode.value = !lightMode.value
      }

      const durations = {
        1: "duration-150",
        2: "duration-300",
        3: "duration-500",
        4: "duration-700",
        5: "duration-1000",
        6: "duration-300",
      }

      function shuffle(array) {
        let currentIndex = array.length, randomIndex;

        // While there remain elements to shuffle...
        while (currentIndex !== 0) {

          // Pick a remaining element...
          randomIndex = Math.floor(Math.random() * currentIndex);
          currentIndex--;

          // And swap it with the current element.
          [array[currentIndex], array[randomIndex]] = [
            array[randomIndex], array[currentIndex]];
        }

        return array;
      }

      const DOMLoaded = ref(false)
      window.addEventListener('DOMContentLoaded', (event) => {
        DOMLoaded.value = true
      });

      const order = ref([1, 2, 3, 4, 5])
      order.value = shuffle(order.value)
      console.log(order.value)

      async function shareQR() {

        const response = await fetch(ankebootPNG);
        const blob = await response.blob();
        const filesArray = [
            new File(
                [blob],
                'ankeboot-qr.png',
                {
                  type: "image/png",
                  lastModified: new Date().getTime()
                }
            )
        ]

        const shareData = {
          files: filesArray,
          title: "Check out Ankeboot Bookstore + Publishing",
          text: "Ankeboot Bookstore and Publishing. Visit ankeboot.com for more"
        }

        await navigator.share(shareData)
      }

      return {
        shareQR, bottomGrid, bottomGridVisible, tagline, taglineVisible, top, durations, order, DOMLoaded, lightMode, changeTheme
      }

    }
  }

</script>

<style scoped>

.path {
  stroke-dasharray: 1000;
  stroke-dashoffset: 1000;
  animation: dash 5s linear forwards;
}

@keyframes dash {
  to {
    stroke-dashoffset: 0;
  }
}

</style>