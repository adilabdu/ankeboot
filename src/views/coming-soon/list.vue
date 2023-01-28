<template>

	<div class="w-[72rem]">

		<input
			autofocus
			id="searchBar"
			type="text"
			class="text-2xl px-4 font-medium text-black w-full h-14 focus:outline-none mb-2 font-light"
			placeholder="Search for book title or author... "
			v-model="searchQuery"
		/>

		<div class="flex items-center gap-2 px-4">
			<input id="filterStock" type="checkbox" class="accent-transparent w-4 h-4" v-model="onlyInStock">
			<label class="mt-0.5" for="filterStock">Only in Stock</label>
		</div>

		<ul class="flex flex-col gap-4 mt-4">
			<li v-for="book in paginated(filteredList, 10)" :class="{'opacity-50' : book.balance <= 0}" class="w-full flex items-center gap-8 p-4 border border-gray-100 rounded-xl">

				<div
					:class="[
							(book.balance > 0 && book.balance < 6) ? 'bg-orange-400 animate-pulse' :
							book.balance > 5 ? 'bg-green-600' :
							'bg-red-600'
						]"
					class="w-2.5 h-2.5 rounded-full" />

				<div class="flex flex-col grow">
					<h3 class="text-base font-medium">{{ book.title }}</h3>
					<div class="flex gap-2 items-center text-gray-400 text-sm">
						<h3 v-if="book.author">{{ book.author }}</h3>
						<p v-if="book.author">&bull;</p>
						<h3 v-if="book.year">{{ book.year }}</h3>
						<p v-if="book.year">&bull;</p>
						<h3 v-if="book.publisher">{{ book.publisher }}</h3>
						<p v-if="book.publisher">&bull;</p>
						<h3 v-if="book.category">{{ book.category }}</h3>
					</div>
				</div>

				<div class="flex gap-1 font-medium">
					<h3>{{ parseInt(book.price).toFixed(2) }}</h3>
					<h3 class="text-xs -translate-y-1">ETB</h3>
				</div>

			</li>
		</ul>

		<div class="flex justify-between items-center mt-4">
			<button :disabled="page===0" @click="page--" class="disabled:opacity-25 px-2 py-1.5 rounded-lg border border-black">Previous</button>
			<button :disabled="last_page" @click="page++" class="disabled:opacity-25 px-2 py-1.5 rounded-lg border border-black">Next</button>
		</div>

	</div>

</template>

<script setup>

	import { ref, computed } from "vue"
	import list from "../../assets/title-quantity-category-price.csv"

	const searchQuery = ref('')
	const onlyInStock = ref(true)

	const filteredList = computed(() => {

		let primaryList = list

		if (onlyInStock.value) {
			primaryList = list.filter(book => {
				return book.balance > 0
			})
		}

		return primaryList.filter(book => {
			return book.title.toLowerCase().includes(searchQuery.value.toLowerCase()) ||
				book.category?.toLowerCase()?.includes(searchQuery.value.toLowerCase())
		})

	})

	const page = ref(0)
	const last_page = ref(false)
	function paginated(list, per_page) {

		last_page.value = list.length < ((page.value + 1) * per_page)
		return list.slice((page.value * per_page), Math.min((page.value + 1) * per_page), list.length);

	}

</script>

<style scoped>

	input::placeholder {
		@apply text-gray-400 font-light text-2xl;
	}

</style>