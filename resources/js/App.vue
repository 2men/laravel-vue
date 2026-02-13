<template>
  <div v-if="isAuth" class="min-h-lvh flex text-gray-600">
    <div class="flex grow">
      <div class="w-[320px] bg-gray-100 py-6 px-4">
        <div class="flex text-3xl font-bold mb-2 text-black">Daily Grow</div>
        <h1 class="font-md font-medium mb-4">Название аккаунта</h1>
        <ul>
          <li>
            <h2 class="flex gap-4 items-center text-lg py-3 pl-[40px] bg-white rounded-2xl mb-2 relative"><i class="absolute size-6 left-[10px] text-gray-300"><svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 16">
                  <path d="M12.496 8a4.5 4.5 0 0 1-1.703 3.526L9.497 8.5l2.959-1.11q.04.3.04.61" />
                  <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0m-1 0a7 7 0 1 0-13.202 3.249l1.988-1.657a4.5 4.5 0 0 1 7.537-4.623L7.497 6.5l1 2.5 1.333 3.11c-.56.251-1.18.39-1.833.39a4.5 4.5 0 0 1-1.592-.29L4.747 14.2A7 7 0 0 0 15 8m-8.295.139a.25.25 0 0 0-.288-.376l-1.5.5.159.474.808-.27-.595.894a.25.25 0 0 0 .287.376l.808-.27-.595.894a.25.25 0 0 0 .287.376l1.5-.5-.159-.474-.808.27.596-.894a.25.25 0 0 0-.288-.376l-.808.27z" />
                </svg></i> Отзывы</h2>
            <ul>
              <li>
                <router-link to='reviews' activeClass="bg-white" class="flex text-sm py-1 pl-[40px] rounded-3xl cursor-pointer hover:bg-white transition-background duration-300">Отзывы</router-link>
              </li>
              <li>
                <router-link to="settings" activeClass="bg-white" class="flex text-sm py-1 pl-[40px] rounded-3xl cursor-pointer hover:bg-white  transition-background duration-300">Настройки</router-link>
              </li>
            </ul>
          </li>
        </ul>
      </div>
      <div class="w-full">
        <div class="flex justify-end items-center px-8 h-[60px] border-b-[2px] border-gray-100">
          <a class="block" href="#" @click.prevent="logout()"><i class="block size-8"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 9V5.25A2.25 2.25 0 0 0 13.5 3h-6a2.25 2.25 0 0 0-2.25 2.25v13.5A2.25 2.25 0 0 0 7.5 21h6a2.25 2.25 0 0 0 2.25-2.25V15m3 0 3-3m0 0-3-3m3 3H9" />
              </svg>
            </i></a>
        </div>
        <div class="py-5 px-8">
          <router-view></router-view>
        </div>
      </div>
    </div>
  </div>
  <div v-else class="flex items-center justify-center p-8">
    <Login @auth="auth" />
  </div>
</template>

<script>
import Login from './pages/Login.vue';

export default {
  name: 'App',
  components: {
    Login
  },
  data() {
    return {
      isAuth: true
    }
  },
  methods: {
    auth() {
      this.isAuth = true;
      this.$router.push('reviews');
    },
    logout() {
      this.isAuth = false;
      this.$router.push('login');
    }
  }
};
</script>