<template>
  <header class="flex  text border-b p-2 items-center">
    <div class="w-12 h-12"></div>
    <h1 class="text-xl my-auto">
      {{ company }}
    </h1>
    <nav class="ml-[30px] gap-3 flex mb-3">
      <a :href="url" class="text-sm" v-for="(item, index) in menuItems" :key="index">
        {{ item }}
      </a>
    </nav>
    <div class="ml-auto h-full items-center py-2.5 flex">
      <Profile v-if="!logIn" />
      <action-button v-else @click="loginUser" />

    </div>
  </header>
</template>

<script>
import ActionButton from './ActionButton.vue';
import Profile from './Profile.vue';
export default {
  components: {
    ActionButton,
    Profile
  },
  data() {
    return {
      company: "Levi Career",
      menuItems: [
        "Teams",
        "Locations",
        "Benefits",
        "Jobs",
        "Students"
      ],
      url: '#',
      logIn: true
    }
  },
  methods: {
    loginUser() {
      console.log("OK")
      this.logIn = false
    }
  }
}
</script>