<template>
 <header class="header w-full flex justify-space">
  <IconLogo class="header__logo"/>
  <div class="header__profile flex items-center gap-x-1.5">
    <h3 class="header__name">{{ name }}</h3>
    <img 
      class="header__avatar" 
      :src="user.avatar" 
      alt="avatar">
  </div>
 </header>
</template>

<script setup lang="ts">
import { reactive, onMounted, computed } from 'vue';

interface User {
  id: number,
  email: string,
  first_name: string,
  last_name: string,
  avatar: string,
}

const user: User = reactive({
  id: 0,
  email: '',
  first_name: '',
  last_name: '',
  avatar: '',
});

const name = computed(() => {
  return `${user.first_name} ${user.last_name}`
})
onMounted(async () => {
  await getUser();
});

const getUser = async () => {
  const res = await fetch(`https://reqres.in/api/users/1`)
  const json = await res.json();

 user.id = json.data.id;
 user.first_name = json.data.first_name;
 user.last_name = json.data.last_name;
 user.avatar = json.data.avatar;
 user.email = json.data.email;
}

</script>
