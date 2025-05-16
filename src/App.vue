<template>
  <Navbar />
  <router-view />
  <Footer />
</template>

<script setup>
import Navbar from "./components/Navbar.vue";
import Footer from "./components/Footer.vue";
import { ref } from "vue";
const ref = ref("");
onMounted(() => {});
const name = computed(() => {
  return 
})
computed(() => {
  get: () => {}
  set: () => {}
})
test.value;
</script>

<style>
@import "@/assets/scss/all.scss";
</style>
