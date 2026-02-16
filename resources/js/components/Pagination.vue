<template>
  <div class="flex items-center justify-between gap-4">
    <div>Страница {{ currentPage }} из {{ totalPage }}</div>
    <div class="flex items-center gap-4">
      <button class="inline-flex items-center justify-center size-6 cursor-pointer" @click="$emit('prev')">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
        </svg>
      </button>
      <div class="flex items-center gap-2">
        <button v-for="page in totalPage" class="size-8 p-2 rounded-md leading-none cursor-pointer" :class="{'bg-blue-500 text-white': page === currentPage}" @click="$emit('onClickPage', page)">{{ page }}</button>
      </div>
      <button class="inline-flex items-center justify-center size-6 cursor-pointer" @click="$emit('next')">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
        </svg>
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Pagination',
  props: ['totalPage', 'currentPage']
}
</script>