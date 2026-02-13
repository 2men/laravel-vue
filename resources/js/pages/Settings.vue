<template>
  <h2 class="text-md font-medium text-black mb-4">Подключить Яндекс</h2>
  <p class="mb-2 text-sm">Укажите ссылку на яндекс, например <span class="underline">https://yandex.ru/maps/org/samoe_popularnoe_kafe/1010501395/reviews/</span></p>
  <form @submit.prevent="onSubmit()">
    <div class="mb-4">
      <input class="w-full max-w-xl px-3 border border-gray-300 rounded-md text-sm" type="text" value="https://yandex.ru/maps/org/samoe_popularnoe_kafe/1010501395/reviews/"></input>
    </div>
    <button class="py-1 px-6 bg-blue-500 rounded-lg text-md text-white cursor-pointer hover:bg-blue-600 transition-background duration-300">Сохранить</button>
  </form>
</template>

<script>
export default {
  name: 'Settings',
  methods: {
    onSubmit() {
      console.log("form submit")
    }
  }
}
</script>