<template>
  <div class="hello">
      
            <v-toolbar dark color="primary">
                    <v-toolbar-side-icon @click.stop="drawer = !drawer" ></v-toolbar-side-icon>
                    <v-toolbar-title class="white--text">Vue PWA starter</v-toolbar-title>
                    <v-spacer></v-spacer>

            </v-toolbar>
            
            <!--  Menu drawer test -->
            <v-layout wrap>
                    <v-navigation-drawer
                      temporary
                      v-model="drawer"
                      light
                      absolute
                    >
                      <v-list class="pa-1">
                        <v-list-tile avatar>
                          <v-list-tile-avatar>
                            <img src="https://randomuser.me/api/portraits/men/81.jpg" />
                          </v-list-tile-avatar>
                          <v-list-tile-content>
                            <v-list-tile-title>TxTony</v-list-tile-title>
                          </v-list-tile-content>
                        </v-list-tile>
                      </v-list>
                    </v-navigation-drawer>
            </v-layout>
            
            <v-container grid-list-md text-xs-center>
              <v-flex xs10 offset-xs1 v-if="isAppWorking" >
                    <h1>{{ $t("message.msg") }}</h1>
                    <v-chip v-if="isVuexOn" label color="green lighten-2" text-color="white"  >
                      <a href="https://vuex.vuejs.org/en/" >Vuex</a>
                    </v-chip>+
                    <v-chip v-if="isVuexOn" label color="cyan lighten-2" text-color="white">
                      <a href="https://vuetifyjs.com/components/alerts" >Vuetify</a>
                    </v-chip>+
                    <v-chip label color="grey darken-1" text-color="black">
                      <a href="https://expressjs.com/" >ExpressJS</a>
                    </v-chip>+                    
                    <v-chip label color="pink" text-color="black">
                      <a href="http://kazupon.github.io/vue-i18n/en/installation.html" >VueI18n </a>
                    </v-chip>+
                    <v-chip label color="amber lighten-5" text-color="black">
                      <a href="https://github.com/vue-styleguidist/vue-styleguidist" > vue-styleguidist </a>
                    </v-chip>
              </v-flex>
              <v-flex xs10 offset-xs1 v-else >
                    <h1> {{ $t("message.dont_work") }} </h1>
              </v-flex>
            </v-container>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
/** Hello world component **/
export default {
    name: 'hello',
    props: {
        /**
        * This is a sample property
        * @public
        */
        sampleProp: String

    },
    data: function () {
        return {
            /**
            * This message is render in the main container of this view
            * @public
            * @model
            */
            msg: 'Welcome to Your Vue.js PWA (pack with webpack 4)',
            /**
            * Define if drawer menu is open or not
            * @public
            * @model
            */
            drawer: false
        }
    },
    created:function(){
        this.tryAxiosGet();
    },
    methods: {
        /**
        * sample function to see how the doc generator works
        *
        * @public
        * @params {string} sampleString
        * @params {object} sampleObject
        * @return {boolean}
        **/
        fakeFunctionToSeeHowTheDocWorks: function (sampleString, sampleObject) {
            return true
        },
        /**
        * this function make a GET request on a fake data server located here : https://reqres.in
        * it demonstrates how Axios works, and print something in your console when the request is done
        */
        tryAxiosGet:function(){
            this.$axios.get('https://reqres.in/api/users?page=2')
              .then(function (response) {
                console.log(response);
              })
              .catch(function (error) {
                console.log(error);
              });
        }
    },
    computed: {
        ...mapGetters([
            'isAppWorks',
            'isVuexOn'
        ]),
        /**
        *   Check from vuex if the app work
        *   @public
        *   @return {boolean}
        */
        isAppWorking: function () {
            return this.$store.getters.isAppWorks
        },
        /**
        * Check if vuex exist
        * @public
        * @return {boolean}
        */
        isVuexOn: function () {
            return this.$store.getters.isVuexOn
        }
    }
}
</script>

