<template>
  <v-card class="explore-page" height="100%" flat>
    <vt-map class="google-map"
      :way-points="ptArray"
    />
    <v-layout align-start class="map-toolbar">
      <v-toolbar dense>
        <v-text-field
          hide-details
          prepend-icon="search"
          single-line
        ></v-text-field>
        <v-btn icon>
          <v-icon>my_location</v-icon>
        </v-btn>
        <v-btn icon>
          <v-icon>more_vert</v-icon>
        </v-btn>
      </v-toolbar>
      <v-btn fab dark small color="gray" class="bookmark">
        <v-icon color="blue">favorite</v-icon>
      </v-btn>
    </v-layout>
  </v-card>
</template>
<script>
import VTMap from './VTMap'

export default {
  name: 'Explore',
  data () {
    return {
      // Mock data for trajectory
      ptArray: [
        {
          lat: 40.648381,
          lng: -73.905224
        },
        {
          lat: 40.6391501,
          lng: -73.901427
        },
        {
          lat: 40.639362,
          lng: -73.894818
        },
        {
          lat: 40.641967,
          lng: -73.898079
        },
        {
          lat: 40.646787,
          lng: -73.898294
        }
      ]
    }
  },
  components: {
    'vt-map': VTMap
  }
}
</script>
<style scoped>
  .map-toolbar {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    padding: 40px 20px 0px;
  }

  .layout .v-btn.bookmark {
    background-color: rgba(128, 128, 128, 0.2);
    margin-left: 20px;
  }

  .explore-page {
    height: calc(100% - 56px);
    position: relative;
  }

  .explore-page .google-map {
    height: calc(100% - 56px);
  }
</style>
