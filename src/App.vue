<template>
  <v-app>

    <v-toolbar app><v-toolbar-title class="m1-0 p1-3">
      <v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>
      <span class="hidden-sm-and-down">{{title}}</span>
      </v-toolbar-title>
    </v-toolbar>

    <v-content>
      <v-alert v-model="alert.value"
               :type="alert.type"> {{alert.text}}</v-alert>
      <v-container fluid>
        <router-view></router-view>
      </v-container>
    </v-content>
    <v-footer class="pa-3">
      <v-spacer></v-spacer>
      <span>&copy; {{ new Date().getFullYear() }}</span>
    </v-footer>

  </v-app>
</template>

<script>

export default {
  name: 'App',
  data () {
    return {
        alert:{
            value:false,
            type:"success",
            text:"test alert"
        },
        title:"툴바",
      clipped: false,
      drawer: true,
      fixed: false,
      items: [{
        icon: 'bubble_chart',
        title: 'Inspire'
      }],
      miniVariant: false,
      right: true,
      rightDrawer: false,

    }
  }
}
</script>
