<template>
  <Navbar />
  <router-view />
  <Footer />
</template>

<script setup>
import Navbar from "./components/Navbar.vue";
import Footer from "./components/Footer.vue";
</script>

<style>
@import "@/assets/scss/all.scss";
</style>
