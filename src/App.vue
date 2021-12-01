<template>
  <div id="app">
    <v-toolbar>
      <v-app-bar-nav-icon></v-app-bar-nav-icon>
      <v-toolbar-title>HR Manager</v-toolbar-title>
      <v-btn text>
        <router-link to="/list-employee">My employees</router-link>
      </v-btn>
      <v-spacer></v-spacer>
    </v-toolbar>
    <v-main transition="slide-x-transition">
      <router-view />
    </v-main>
  </div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "App",

  data: () => ({
    //
  }),
});
</script>
