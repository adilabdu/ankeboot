<script>

import { computed, onBeforeMount, ref } from "vue"
import go from "./icons/go.vue"

export default {

    name: "NavLinks",
    components: {
        go,
    },
    props: {
        colorClass: {
            type: String,
            default: null
        },
        title: {
            type: String
        },
        active: {
            type: Boolean,
            default: false
        },
    },

    setup(props) {
        
        const color = computed(() => !! props.colorClass ? 
            `bg-${props.colorClass}-25` :
            `bg-${props.title.toLowerCase()}-25`
        )
        const borderColor = computed(() => !! props.colorClass ?
            'outline-home-100 outline-2 outline-dashed' :
            'outline-home-100 outline-2 outline-dashed'
        )

        const home = ref("home")

        return {
            color, borderColor, home
        }
    },
}

</script>

<template>
    
    <li class="flex justify-end" :class="[active ? '!grayscale-0' : '']">
        <a class="group flex justify-center items-center cursor-pointer px-2 font-hero uppercase"
            :class="[color, 
                        active ? borderColor : '', 
                        active ? '' : 'hover:w-full hover:text-center'
                    ]">
            {{ title }}
            <go :size="26" class="group-hover:inline hidden" :class="[active ? '!hidden' : '']"/>
        </a>
    </li>

</template>


<style scoped>
</style>