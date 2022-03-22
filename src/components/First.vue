<template>

  <div class="min-h-screen w-full flex flex-col items-center justify-center">

    <main class="h-screen w-full flex flex-col items-center justify-start">

      <header class="sticky top-0 z-30 h-16 w-full flex justify-between items-center shadow-md bg-white z-10 overflow-clip">

        <div class="hero-logo flex px-4 gap-2 min-w-fit">
          <svg @click="shareQR" class="hover:scale-110 transition duration-300" width="42" height="42" viewBox="0 0 63 63" fill="black" xmlns="http://www.w3.org/2000/svg">
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
            <span class="font-hero uppercase text-2xl leading-none">Ankeboot</span>
            <span class="font-sans lowercase text-base leading-none">
            bookstore
            <span class="font-mono">x</span>
            publishing
          </span>
          </p>
        </div>

        <nav class="flex h-full">
          <ul class="font-hero uppercase flex justify-center h-full">
            <li class="hidden group relative md:flex items-center justify-center px-4 w-32">
              <div class="absolute h-full w-full bg-home-25 group-hover:bg-home-50 -skew-x-12"></div>
              <a href="/home" class="group-hover:scale-125 transition duration-300">home</a>
            </li>
            <li class="hidden group relative lg:flex items-center justify-center px-4 w-32">
              <div class="absolute h-full w-full bg-about-25 group-hover:bg-about-50 -skew-x-12"></div>
              <a href="/about" class="group-hover:scale-125 transition duration-300">about</a>
            </li>
            <li class="hidden group relative md:flex items-center justify-center px-4 w-32">
              <div class="absolute h-full w-full bg-books-25 group-hover:bg-books-50 -skew-x-12"></div>
              <a href="/books" class="group-hover:scale-125 transition duration-300">books</a>
            </li>
            <li class="hidden group relative md:flex items-center justify-center px-4 w-32">
              <div class="absolute h-full w-full bg-publishing-25 group-hover:bg-publishing-50 -skew-x-12"></div>
              <a href="/publishing" class="group-hover:scale-125 transition duration-300">publishing</a>
            </li>
            <li class="hidden group relative xl:flex items-center justify-center px-4 w-32">
              <div class="absolute h-full w-full bg-maps-25 group-hover:bg-maps-50 -skew-x-12"></div>
              <a href="/maps" class="group-hover:scale-125 transition duration-300">maps</a>
            </li>
            <li class="hidden group relative xl:flex items-center justify-center px-4 w-32">
              <div class="absolute h-full w-full bg-programs-25 group-hover:bg-programs-50 -skew-x-12"></div>
              <a href="/programs" class="group-hover:scale-125 transition duration-300">programs</a>
            </li>
            <li class="hidden group relative lg:flex items-center justify-center px-4 w-32">
              <div class="absolute h-full w-full bg-contact-25 group-hover:bg-contact-50 -skew-x-12"></div>
              <a href="/contact" class="group-hover:scale-125 transition duration-300">contact</a>
            </li>
            <li class="group relative xl:hidden flex items-center justify-center px-4 sm:w-24">
              <div class="absolute h-full w-full -skew-x-12"></div>
              <button class="flex flex-col gap-1 grid">
                <div class="grid grid-rows-5 -skew-x-12">
                  <div class="border-2 h-1 bg-home-25 border w-6 border-home-50"></div>
                  <div class="w-6"></div>
                  <div class="border-2 h-1 bg-books-25 border w-6 border-books-50"></div>
                  <div class="w-6"></div>
                  <div class="border-2 h-1 bg-publishing-25 border w-6 border-publishing-50"></div>
                </div>
              </button>
            </li>
            <li class="group relative hidden xl:flex items-center justify-center px-4">
              <light :size="24"/>
            </li>
          </ul>
        </nav>

      </header>

      <div class="grow flex flex-col items-center justify-end">

        <div class="hero flex flex-col items-center justify-center relative h-full">

          <div class="relative flex flex-col items-center justify-center">
            <div class="blur-3xl absolute top-0 sm:top-1/4 left-0 animate-rotate-slow h-64 w-64 xs:h-96 xs:w-96 bg-books-50 absolute"></div>
            <div class="blur-3xl absolute top-0 sm:top-1/4 right-0 animate-pulse h-64 w-64 xs:h-96 xs:w-96 bg-publishing-50 absolute rounded-full"></div>
            <div class="blur-3xl -translate-y-16 sm:translate-y-0 absolute bottom-0 animate-pulse h-64 w-64 xs:h-96 xs:w-96 bg-resources-50 absolute rounded-full"></div>

            <h1 class="filter drop-shadow-xl z-20 select-none uppercase hero-title font-hero leading-none text-[15vw] sm:text-8xl md:text-9xl after:content-['*'] overflow-clip">
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

            <h3 class="z-20 select-none hero-sub font-sans lowercase text-[5vw] sm:text-2xl md:text-3xl text-center my-12">

              inspired by the creativity and
              <br>perseverance of a <i><b>spider</b></i>

            </h3>

          </div>

        </div>

        <!--      <div class="grow w-full"></div>-->

        <div class="sm:py-8 scale-70 max-w-full">
          <svg class="max-w-full" width="324.5" height="97.5" viewBox="0 0 649 195" fill="black" xmlns="http://www.w3.org/2000/svg">
            <path fill="black" stroke="black" stroke-width="2" d="M66.1349 2.12105C65.9807 2.81487 65.7109 4.51087 65.4796 5.89851C65.2483 7.28614 64.9785 12.1814 64.8629 16.7683C64.6316 25.6338 65.017 30.9531 66.2505 36.6963L66.9443 39.8956L65.0556 42.1698C61.4323 46.5254 57.1152 49.4934 52.0272 51.1894C49.8687 51.9218 44.3181 52.1531 42.3523 51.6134C41.5043 51.3822 41.5043 51.4207 42.5836 52.2302C46.3225 55.1211 49.8301 59.4767 54.417 67.0316C63.5909 82.18 69.0258 98.3305 67.4454 105.847C66.289 111.552 60.6229 113.749 54.4556 110.973C49.0978 108.507 42.8534 101.645 39.0374 93.9749C37.881 91.6622 37.881 91.6236 37.6498 83.3749C37.457 75.5116 36.8789 69.3058 36.2236 68.612C36.0694 68.4192 35.337 68.8818 34.6047 69.6142C32.7545 71.4643 32.2149 73.6229 32.4461 78.4796C32.6003 81.7945 32.8701 83.028 34.1036 86.4585C35.4141 90.0433 35.6069 90.8913 35.5683 93.7822C35.4912 100.335 32.6774 109.393 29.4781 113.286C26.6643 116.678 21.9618 117.796 17.1821 116.139C8.31667 113.093 3.99957 102.725 2.65048 81.0622C2.14939 72.6978 2.38067 62.7531 3.61412 38.932C3.7683 36.2338 3.69121 35.964 3.07448 35.964C2.11085 35.964 2.0723 36.3109 1.45557 49.6476C0.761756 64.8345 0.877392 82.4883 1.68685 89.0411C4.07667 108.699 9.89703 117.757 20.497 118.374C24.1589 118.605 26.1632 118.066 28.6301 116.293C32.5232 113.44 35.8381 106.117 36.8403 98.0222C36.9945 96.8658 37.2258 95.7094 37.3414 95.4396C37.4956 95.1698 38.2665 96.1334 39.3072 97.868C43.1618 104.459 48.5967 109.971 53.569 112.4C55.8047 113.479 56.4599 113.633 59.3509 113.633C63.1283 113.633 64.94 112.901 66.9829 110.588C71.0687 105.924 69.8352 95.4782 63.5138 81.0622C59.7363 72.3509 53.4149 61.5967 48.7894 55.9305L47.0163 53.7334L48.3654 53.5022C49.0978 53.3865 50.3698 53.1938 51.1792 53.0782C55.3036 52.4614 61.0083 48.9923 65.0941 44.6367C66.4047 43.2105 67.5225 42.1312 67.561 42.1698C67.5996 42.2469 68.1392 43.8658 68.7945 45.7545C71.0687 52.6927 75.5785 60.9414 81.052 68.1494C83.9814 71.9654 91.0738 79.2891 95.6221 83.1822L99.0527 86.1502L99.5923 84.8396C100.749 82.1029 101.019 78.7494 100.941 67.3014C100.864 53.9262 100.903 53.6949 103.408 53.6949C107.379 53.6949 110.655 55.5065 113.43 59.2069C115.319 61.7123 116.591 64.1792 120.099 72.3123C124.531 82.604 127.384 86.4971 132.125 88.6942C133.936 89.5422 134.861 89.7349 137.444 89.7349C140.104 89.7349 140.759 89.6193 141.954 88.7713C144.729 86.8825 146.464 83.1436 147.312 77.2847L147.774 73.9698L148.622 76.5138C150.164 81.0622 152.978 86.0345 155.522 88.5785C159.685 92.8571 163.578 94.3603 169.668 94.1291L173.06 93.9749L175.989 100.142C183.352 115.715 185.395 122.653 184.585 129.398C184.007 134.216 181.694 137.917 177.493 140.808C172.906 143.968 162.845 147.861 152.669 150.444C141.221 153.335 132.163 154.106 115.357 153.72C109.036 153.566 104.064 153.605 104.064 153.759C104.102 155.147 104.449 155.185 119.906 155.224C132.472 155.224 135.902 155.108 139.872 154.568C149.547 153.181 160.494 150.367 168.435 147.168C181.925 141.771 186.204 136.799 186.243 126.739C186.243 120.032 184.392 114.134 177.917 100.451C176.105 96.596 174.602 93.3196 174.602 93.204C174.602 93.0883 174.795 93.0113 175.026 93.0113C175.296 93.0113 177.107 92.2789 179.112 91.4309C185.395 88.6556 186.589 86.7283 185.819 80.6382C185.048 74.7407 183.776 71.7342 181.27 70.0382C180.576 69.5756 178.225 68.8432 175.874 68.3422C173.6 67.8796 170.824 67.1472 169.668 66.7618C167.085 65.8752 167.085 65.8367 167.124 72.1967C167.163 77.7087 168.049 81.6018 170.67 88.1931L172.173 92.0476L171.171 92.2789C168.319 92.9727 164.04 92.3945 161.111 90.8913C153.71 87.1523 148.545 76.0127 147.389 61.2883C147.196 58.8214 147.042 58.3203 146.502 58.3203C145.885 58.3203 145.847 59.1298 145.885 68.0338C145.885 78.3254 145.616 80.5611 143.765 84.1458C141.607 88.4243 137.367 89.4651 132.317 86.9982C128.309 85.0709 125.803 81.3705 120.908 70.0767C119.251 66.2607 117.208 61.9822 116.36 60.556C112.621 54.196 107.61 51.4207 101.635 52.3072L99.9007 52.5771L99.5923 54.5814C99.4381 55.6992 99.284 62.1363 99.2454 68.9203C99.2069 80.9851 99.0527 82.9894 98.1276 82.9894C97.3567 82.9894 87.7203 73.5843 84.3669 69.5371C80.2425 64.6418 76.388 58.7829 73.8054 53.5022C71.7625 49.3007 68.9872 41.9 68.9872 40.628C68.9872 40.2425 69.8352 38.508 70.9145 36.7734C72.9574 33.3429 74.6149 29.3727 76.0025 24.516C76.7349 22.0105 76.889 20.5843 76.889 15.7276C76.889 10.2927 76.812 9.83015 75.8869 7.82578C75.3472 6.66942 74.4221 5.1276 73.8054 4.43378C72.6105 3.0076 69.8738 1.50433 67.7538 1.11887C66.3661 0.887598 66.3276 0.887598 66.1349 2.12105ZM70.9916 4.20251C72.8418 5.39742 74.1523 7.40178 75.0003 10.2927C75.9254 13.6076 75.5785 20.3145 74.2294 24.9785C72.9574 29.2956 68.6403 38.2382 68.1778 37.4287C68.0236 37.1589 67.561 35.2702 67.2141 33.2658C66.3276 28.5632 66.212 12.2971 67.0214 6.55378L67.561 2.77633L68.5632 3.0076C69.1029 3.12323 70.2207 3.66287 70.9916 4.20251ZM174.448 69.6912C179.574 70.8476 180.962 71.4643 182.195 73.3145C183.197 74.8178 184.277 79.2891 184.354 82.4498C184.469 86.42 183.429 87.7691 178.264 90.0047C174.486 91.6622 173.985 91.7007 173.33 90.4287C172.443 88.7713 170.053 81.6789 169.437 78.9807C168.203 73.7771 168.203 68.0338 169.36 68.4578C169.668 68.5734 171.942 69.1131 174.448 69.6912ZM36.0309 81.0622C36.3007 88.0774 36.0309 88.4629 34.6818 82.9509C33.7181 78.9422 33.6796 74.6251 34.5661 72.6593L35.1829 71.2331L35.4912 72.9676C35.6454 73.9313 35.9152 77.5545 36.0309 81.0622Z"/>
            <path fill="black" stroke="black" stroke-width="2" d="M516.23 13.1061C516.384 15.8429 516.654 25.3251 516.885 34.2291C517.54 61.6349 518.119 73.4683 519.429 85.1862C520.046 90.6596 520.007 90.6982 519.159 93.2807C516.924 100.142 514.148 103.572 508.636 106.271C503.741 108.66 501.236 109.316 497.651 109.123C494.182 108.892 492.1 107.967 489.749 105.538C484.97 100.643 482.348 91.0451 481.924 76.976C481.693 69.9607 481.732 69.5752 482.426 69.3825C490.906 66.8 499.694 64.7956 505.36 64.1018C508.675 63.6778 509.06 63.5622 508.906 62.9069C508.714 62.2516 508.328 62.2131 502.469 62.4058C493.951 62.6756 487.012 63.2538 483.659 64.0247C481.154 64.6414 480.845 64.7956 480.73 65.6436C480.46 68.1876 480.421 68.2262 477.299 69.0742C475.642 69.4982 472.905 70.1534 471.209 70.4618C469.513 70.8087 467.74 71.1556 467.277 71.2327C465.774 71.5796 465.08 75.3571 464.463 86.8436C463.307 108.776 463.037 111.898 461.919 116.331C460.994 119.916 460.146 120.995 457.911 121.535C456.446 121.881 455.675 121.881 454.557 121.535C450.317 120.185 446.347 112.823 446.347 106.348C446.347 101.953 445.807 96.5571 444.034 82.9891C441.991 67.5323 442.184 68.7272 441.375 68.7272C440.719 68.7272 440.642 69.0356 440.796 72.8516C441.452 89.0022 442.261 97.8676 443.88 105.692C444.651 109.431 444.805 111.127 444.612 113.016C444.304 115.868 443.495 118.798 442.415 120.956C441.22 123.231 437.597 126.815 434.783 128.511C430.196 131.209 421.794 133.522 414.547 134.023L411.849 134.255L414.932 133.484C418.864 132.481 434.938 128.049 435.092 127.933C435.13 127.856 435.362 124.888 435.593 121.303C436.055 113.633 435.554 101.568 434.359 92.0472C433.588 86.1883 432.355 79.2887 432.008 78.9418C431.546 78.4407 427.306 77.9782 423.644 77.9782C416.667 77.9782 412.196 79.7127 407.802 84.1454C401.75 90.1971 398.435 100.643 397.471 116.716L397.202 121.342L396.7 117.873C395.93 111.975 394.735 98.7927 394.272 90.5054C393.848 83.4902 393.732 82.6036 393.154 82.6036C392.576 82.6036 392.46 83.2203 392.268 87.6916C392.114 91.7003 391.844 93.5891 391.073 96.2873C386.717 111.012 373.419 124.387 357.615 129.937C353.491 131.402 348.788 132.327 345.435 132.327H342.891L346.321 130.361C361.393 121.727 366.442 114.018 364.014 103.303C363.127 99.448 361.277 95.3236 358.039 90.0429C352.72 81.3702 350.446 77.1687 348.441 72.3505C344.703 63.2538 342.814 53.8872 342.274 41.9381C342.081 37.6981 341.812 33.8821 341.735 33.4581C341.619 33.0341 341.465 32.2247 341.311 31.608C341.156 30.8756 340.848 30.5672 340.308 30.5672C339.537 30.5672 339.499 30.6829 339.769 34.3061C339.923 36.3876 340.154 39.5483 340.347 41.3214C340.809 46.3709 339.807 52.6538 337.225 60.6327C335.143 66.9927 333.139 71.6182 325.507 87.2291C321.421 95.5934 317.258 104.497 316.295 107.003C314.059 112.631 312.055 119.839 311.438 124.503C310.898 128.511 311.091 140.229 311.708 140.846C311.9 141.039 312.363 141.116 312.71 140.961C313.172 140.807 313.288 140.46 313.057 139.535C312.903 138.841 312.787 135.257 312.787 131.556C312.787 123.847 313.249 121.226 315.871 113.247C318.145 106.232 319.764 102.57 327.82 86.0727C336.531 68.1876 338.073 64.3716 341.002 53.3091C341.349 51.9985 341.388 52.0371 341.85 54.8509C343.777 66.6458 347.632 76.3592 355.225 88.5782C362.048 99.5251 364.091 105.962 362.549 111.744C360.737 118.605 354.84 124.04 341.696 131.017C336.993 133.522 337.186 133.676 345.165 133.676C349.906 133.638 351.525 133.484 354.185 132.751C371.183 128.203 386.409 114.635 391.805 99.2553C392.306 97.9062 392.769 96.7498 392.884 96.6342C392.962 96.5185 393.154 98.0603 393.308 100.026C393.694 104.999 395.313 120.147 396.238 127.316C397.317 135.565 397.394 134.948 395.004 135.103C393.27 135.218 392.962 135.334 392.846 136.028C392.73 136.76 392.884 136.799 395.043 136.644L397.356 136.49L397.548 137.762C397.664 138.495 398.011 142.349 398.358 146.396C398.705 150.405 399.322 156.303 399.707 159.502C400.632 167.404 403.6 191.186 403.793 192.728C403.947 193.692 404.178 194 404.756 194C405.45 194 405.527 193.807 405.335 191.764C405.219 190.569 404.911 187.293 404.718 184.556C404.101 177.001 402.521 163.164 400.825 150.251C398.975 136.143 399.013 136.567 400.401 136.567C403.562 136.567 414.74 135.719 418.402 135.218C431.623 133.407 440.218 128.704 443.996 121.149C444.805 119.492 445.615 117.256 445.769 116.138L446.039 114.134L447.465 116.678C450.163 121.612 453.324 123.809 457.14 123.346C460.069 122.999 461.303 122.151 462.382 119.8C464.116 116.023 464.926 109.663 465.62 94.36C466.121 83.5672 466.66 77.1687 467.277 74.7018L467.74 72.8131L471.787 71.9651C474.023 71.5025 476.798 70.8858 477.993 70.5389L480.151 69.9992L480.383 77.3614C480.807 91.8545 483.582 101.684 488.554 106.695C491.407 109.508 493.604 110.472 497.612 110.665C501.814 110.857 504.743 110.125 509.639 107.581C514.303 105.191 516.962 102.493 519.159 97.9447L520.624 94.8225L521.279 98.4458C522.667 106.039 522.513 105.654 524.286 105.924C525.172 106.078 529.181 107.234 533.228 108.506C545.602 112.361 556.972 114.982 561.328 114.982C561.868 114.982 563.756 115.676 565.53 116.524C572.468 119.839 579.213 119.492 587.655 115.329C593.976 112.168 598.332 107.928 600.143 103.187C601.338 99.9105 601.724 94.784 601.3 87.3447C601.107 83.7985 600.914 76.3207 600.914 70.8087V60.7098L602.572 61.3651C603.805 61.8276 605.501 61.9818 609.587 61.9818C614.675 61.9818 615.176 61.9047 618.607 60.7098C620.611 60.016 622.307 59.5149 622.384 59.592C622.808 60.0545 623.232 67.9178 623.425 79.0189C623.695 93.2422 624.196 98.176 626.162 104.921C629.13 115.252 631.558 118.721 642.389 127.933C646.706 131.595 647.285 131.98 647.824 131.479C648.325 130.94 647.786 130.361 643.045 126.276C635.836 120.031 633.023 116.948 631.095 113.247C628.397 107.967 625.969 99.0625 625.391 92.24C625.275 90.6596 625.005 83.1047 624.812 75.4727C624.62 67.8407 624.273 60.5556 624.042 59.2451L623.579 56.8938L620.65 58.1658C616.217 60.0931 612.709 60.7869 608.276 60.5171C606.234 60.4014 603.767 60.016 602.764 59.6691C600.76 58.9752 600.799 59.0523 600.336 54.08C599.45 44.5978 595.98 38.9701 589.196 36.1563L587.693 35.5011L587.924 39.3171C588.464 47.7585 591.895 54.8509 597.252 58.5512L599.372 59.9774V70.8087C599.411 76.7832 599.565 84.4152 599.758 87.7687C600.452 100.489 598.794 105.615 592.511 110.356C587.616 114.018 581.564 116.601 576.631 117.102C574.01 117.372 570.001 116.755 567.38 115.676L566.031 115.097L568.652 114.635C576.052 113.324 580.485 109.508 582.22 102.84C582.914 100.103 582.991 92.4712 582.374 89.4647C581.449 85.1476 577.209 78.7105 572.853 75.0102C567.804 70.7316 560.981 66.9927 556.202 65.8749C553.234 65.1811 548.916 65.1425 546.758 65.7978L545.216 66.2603L544.985 68.7272C544.638 72.3891 545.293 81.2545 546.18 85.7643C548.338 96.2102 552.578 105.23 558.129 111.166C559.17 112.284 560.018 113.209 559.94 113.247C559.902 113.286 558.244 113.093 556.317 112.785C551.615 112.091 545.602 110.549 535.426 107.465C530.839 106.039 526.406 104.69 525.558 104.459C523.823 103.919 523.978 104.343 522.513 95.8247L521.665 90.7367L522.436 86.5738C523.091 82.9891 523.207 80.6763 523.207 70.2691C523.207 56.2771 522.937 52.6923 519.776 27.5607C518.62 18.3869 517.656 10.2538 517.656 9.52141C517.656 8.44214 517.502 8.21087 516.847 8.21087C515.999 8.21087 515.999 8.28796 516.23 13.1061ZM521.01 51.7672C521.78 59.7076 521.935 81.1003 521.241 83.1818C520.894 84.2225 520.855 84.1069 520.624 81.64C519.622 71.6182 518.967 57.5876 518.658 41.1672L518.466 30.76L519.391 37.6981C519.892 41.5141 520.624 47.8356 521.01 51.7672ZM593.86 41.1287C594.593 41.9381 595.749 43.7112 596.366 45.0603C598.062 48.6836 599.719 57.5491 598.679 57.5491C598.062 57.5491 594.708 54.0414 593.436 52.0756C591.355 48.7607 589.351 42.2851 589.351 38.7774V37.8523L590.931 38.7389C591.818 39.2014 593.128 40.2807 593.86 41.1287ZM488.169 66.0291C485.201 66.8771 482.657 67.5709 482.503 67.5709C481.809 67.5709 482.271 66.0676 483.042 65.7978C484.584 65.3352 489.711 64.5643 491.638 64.5643C493.334 64.5258 492.91 64.7185 488.169 66.0291ZM556.047 67.5709C559.709 68.496 565.183 71.1556 568.343 73.5454C573.817 77.6312 578.751 83.5672 580.292 87.8843C581.179 90.3127 581.526 97.9833 580.909 101.144C579.599 107.697 575.86 111.513 569.346 112.9C567.958 113.17 565.954 113.44 564.913 113.44C563.14 113.44 562.947 113.324 560.172 110.626C554.12 104.767 549.842 95.9789 547.722 85.0705C546.796 80.2909 546.218 72.5432 546.527 69.4982C546.719 67.6865 546.874 67.3782 547.722 67.1469C549.572 66.6458 553.041 66.8 556.047 67.5709ZM429.117 79.8669C429.927 80.0596 430.659 80.2909 430.775 80.368C431.122 80.7534 432.856 92.1243 433.473 98.2145C434.167 105.345 434.359 123.539 433.743 125.582C433.396 126.661 433.126 126.815 428.963 127.972C416.551 131.518 400.285 135.025 399.283 134.409C398.782 134.139 398.859 117.603 399.36 112.438C400.247 103.264 402.559 94.6683 405.527 89.696C408.303 84.9934 412.812 81.4472 417.708 80.0982C419.828 79.52 426.959 79.3658 429.117 79.8669Z"/>
            <path fill="black" stroke="black" stroke-width="2" d="M434.707 42.7474C433.435 43.4026 433.628 44.5975 435.17 45.2143C436.866 45.9081 437.675 45.5997 437.791 44.135C437.907 43.0557 437.791 42.9015 436.943 42.9015C436.442 42.9015 435.941 42.7474 435.864 42.5546C435.825 42.3619 435.286 42.439 434.707 42.7474Z"/>
            <path fill="black" stroke="black" stroke-width="2" d="M243.792 71.3098C231.38 72.3505 222.399 76.4749 219.431 82.5265C218.467 84.5309 218.352 85.1091 218.352 88.7709C218.39 92.3942 218.506 93.1265 219.624 95.9018C221.204 99.872 223.016 102.609 224.712 103.572C226.6 104.69 233.037 104.921 237.509 104.035C243.946 102.763 248.109 99.8334 249.766 95.4778C250.73 92.8182 251.385 86.0727 251.077 81.7171C250.922 79.8669 250.922 78.3636 251.038 78.3636C251.192 78.3636 252.503 80.7534 253.968 83.6829C263.18 101.799 268.268 106.81 279.176 108.275C280.834 108.506 280.988 108.429 280.988 107.735C280.988 107.08 280.68 106.887 279.562 106.695C273.472 105.769 270.581 104.459 267.112 100.99C263.334 97.2894 258.67 89.696 252.618 77.4771C251.346 74.9331 250.537 73.7382 250.074 73.7382C249.728 73.7382 249.342 73.8538 249.265 74.008C249.188 74.2007 249.265 76.7447 249.419 79.7127C249.728 85.6487 249.342 91.3149 248.417 94.5142C246.837 99.7563 240.091 103.033 230.917 103.033C225.02 103.033 223.093 101.26 220.626 93.4734C216.848 81.64 225.174 74.6632 245.256 72.7745C247.453 72.5432 247.839 72.4276 247.839 71.7723C247.839 71.0014 247.608 70.9629 243.792 71.3098Z"/>
          </svg>
        </div>

      </div>

    </main>

    <main class="h-screen grid lg:grid-cols-3 lg:grid-rows-2 grid-cols-2 grid-rows-3 w-full">

      <div class="hidden hover:bg-books-25 hover:shadow-2xl transition duration-300"></div>
      <div class="hidden hover:bg-publishing-25 hover:shadow-2xl transition duration-300"></div>
      <div class="hidden hover:bg-resources-25 hover:shadow-2xl transition duration-300"></div>
      <div class="hidden hover:bg-programs-25 hover:shadow-2xl transition duration-300"></div>
      <div class="hidden hover:bg-services-25 hover:shadow-2xl transition duration-300"></div>
      <div class="hidden hover:bg-maps-25 hover:shadow-2xl transition duration-300"></div>

    </main>

  </div>

</template>

<script>

  import light from "./icons/light.vue";
  import ankebootPNG from "../assets/images/ankeboot.png"

  export default {

    name: "First",
    components: {
      light
    },

    setup() {

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

        shareQR

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