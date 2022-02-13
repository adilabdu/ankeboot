<script>

    export default {
        name: "go",
        props: {
            size: {
                type: Number,
                default: 36
            },
            styles: {
                type: String,
                default: "fill-black"
            }
        },
    }

</script>

<template>
    <svg :class="styles" xmlns="http://www.w3.org/2000/svg" :width="size" :height="size" viewBox="0 0 24 24" style="transform: ;msFilter:;"><path d="m11.293 17.293 1.414 1.414L19.414 12l-6.707-6.707-1.414 1.414L15.586 11H6v2h9.586z"></path></svg>
</template>

<style scoped></style>