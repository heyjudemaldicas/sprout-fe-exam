<template>
  <Navbar />
  <router-view />
</template>
<script>
import Navbar from "@/components/Navbar.vue";

export default {
  components: {
    Navbar,
  },
};
</script>

<style>
#app {
}

html,
body {
  font-family: "Open Sans", sans-serif;
  height: 100%;
  margin: 0;
}

.cursor-pointer {
  cursor: pointer;
}
</style>
