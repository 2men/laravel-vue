<template>
  <div class="p-6 shadow-2xl border border-gray-200 rounded-xl">
    <h1 class="text-[30px] text-center mb-6">Войти</h1>

    <form class="w-md" @submit.prevent="login()">
      <div class="mb-6 grid grid-cols-1 gap-3">
        <div class="sm:col-span-3">
          <label for="login" class="block text-sm/6 font-medium text-gray-900">Логин</label>
          <div class="mt-2">
            <input id="login" type="text" name="login" v-model="form.login" placeholder="admin" class="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6" />
          </div>
        </div>

        <div class="sm:col-span-3">
          <label for="passowrd" class="block text-sm/6 font-medium text-gray-900">Пароль</label>
          <div class="mt-2">
            <input id="passowrd" type="password" name="passowrd" v-model="form.password" placeholder="123456" class="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6" />
          </div>
        </div>
      </div>
      <div class="flex items-center justify-center gap-x-6">
        <button type="submit" class="w-full rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Войти</button>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  name: 'Login',
  data() {
    return {
      form: {
        login: 'admin',
        password: '123456',
      }
    }
  },
  methods: {
    login() {
      if (this.form.login === 'admin' && this.form.password === '123456')
        this.$emit('auth');
      else
        alert("Неверный логин или пароль!");
    }
  }
};
</script>