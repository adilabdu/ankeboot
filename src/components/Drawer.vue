<script>

export default {

    name: "Drawer",
    emits: ['close'],

    setup(props, { emit }) {

        function closeDrawer() {
            emit('close')
        }

        return { 
            closeDrawer 
        }
    }
    
}

</script>

<template>

    <div class="flex flex-col items-center justify-start w-full h-screen fixed font-hero uppercase text-xl">

        <!-- hero-title-(<=sm) -->
        <div class="flex justify-between items-start lg:hidden w-full p-8">
            <div class="flex flex-col justify-start lg:hidden text-3xl">
                <h1 class="font-hero uppercase leading-tight">Ankeboot Books</h1>
                <h1 class="font-amh leading-tight">አንከቡት መጻህፍት</h1>
            </div>
            <div :onclick="closeDrawer" class="lg:hidden items-center justify-end drawer-button">
                <div class="relative flex items-end justify-center flex-col gap-1 w-9 h-9">
                    <div class="absolute h-1 bg-maps-100 w-4/5 rotate-45"></div>
                    <div class="absolute h-1 bg-resources-100 w-4/5 -rotate-45"></div>
                </div>
            </div>
        </div>

        <div class="py-12 flex flex-col items-center justify-center gap-5">
            <div class="">
                <label class="text-sm mx-1">01.</label>
                <a class="px-2 py-1 bg-home-25">Home</a>
            </div>

            <div>
                <label class="text-sm mx-1">02.</label>
                <a class="px-2 py-1 bg-about-25">About</a>            
            </div>

            <div>
                <label class="text-sm mx-1">03.</label>
                <a class="px-2 py-1 bg-books-25">Books</a>
            </div>

            <div>
                <label class="text-sm mx-1">04.</label>
                <a class="px-2 py-1 bg-publishing-25">Publications</a>
            </div>

            <div>
                <label class="text-sm mx-1">05.</label>
                <a class="px-2 py-1 bg-maps-25">Maps</a>
            </div>

            <div>
                <label class="text-sm mx-1">06.</label>
                <a class="px-2 py-1 bg-programs-25">Programs</a>
            </div>

            <div>
                <label class="text-sm mx-1">07.</label>
                <a class="px-2 py-1 bg-services-25">Distributors</a>
            </div>

            <div>
                <label class="text-sm mx-1">08.</label>
                <a class="px-2 py-1 bg-resources-25">Resources</a>
            </div>

            <div>
                <label class="text-sm mx-1">09.</label>
                <a class="px-2 py-1 bg-contact-25">Contact Us</a>
            </div>
        </div>
    
    </div>
    
</template>

<style scoped></style>