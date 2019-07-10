<!--
  Map Component for VoiceTrip
-->
<template>
  <div class="hello">
  </div>
</template>

<script>
import gmapsInit from '@/utils/google-map'

export default {
  name: 'VoiceTripMap',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      count1: 10
    }
  },
  computed: {
    count: function () {
      return this.$store.state.count * 10
    }
  },
  props: {
    wayPoints: {
      type: Array,
      default: () => []
    }
  },
  async mounted () {
    try {
      const google = await gmapsInit()
      const geocoder = new google.maps.Geocoder()
      const map = new google.maps.Map(this.$el, {
        // Options for removing map controls
        zoomControl: false,
        mapTypeControl: false,
        scaleControl: false,
        streetViewControl: false,
        rotateControl: false,
        fullscreenControl: false,
        'stylers': [
          { 'color': '#ffffff' }
        ]
      })

      // Instantiate a directions service.
      const directionsService = new google.maps.DirectionsService()
      const directionsDisplay = new google.maps.DirectionsRenderer({
        map: map
      })

      // Style for Silver Google Map
      const style = [
        {
          elementType: 'geometry',
          stylers: [{color: '#f5f5f5'}]
        },
        {
          elementType: 'labels.icon',
          stylers: [{visibility: 'off'}]
        },
        {
          elementType: 'labels.text.fill',
          stylers: [{color: '#616161'}]
        },
        {
          elementType: 'labels.text.stroke',
          stylers: [{color: '#f5f5f5'}]
        },
        {
          featureType: 'administrative.land_parcel',
          elementType: 'labels.text.fill',
          stylers: [{color: '#bdbdbd'}]
        },
        {
          featureType: 'poi',
          elementType: 'geometry',
          stylers: [{color: '#eeeeee'}]
        },
        {
          featureType: 'poi',
          elementType: 'labels.text.fill',
          stylers: [{color: '#757575'}]
        },
        {
          featureType: 'poi.park',
          elementType: 'geometry',
          stylers: [{color: '#e5e5e5'}]
        },
        {
          featureType: 'poi.park',
          elementType: 'labels.text.fill',
          stylers: [{color: '#9e9e9e'}]
        },
        {
          featureType: 'road',
          elementType: 'geometry',
          stylers: [{color: '#ffffff'}]
        },
        {
          featureType: 'road.arterial',
          elementType: 'labels.text.fill',
          stylers: [{color: '#757575'}]
        },
        {
          featureType: 'road.highway',
          elementType: 'geometry',
          stylers: [{color: '#dadada'}]
        },
        {
          featureType: 'road.highway',
          elementType: 'labels.text.fill',
          stylers: [{color: '#616161'}]
        },
        {
          featureType: 'road.local',
          elementType: 'labels.text.fill',
          stylers: [{color: '#9e9e9e'}]
        },
        {
          featureType: 'transit.line',
          elementType: 'geometry',
          stylers: [{color: '#e5e5e5'}]
        },
        {
          featureType: 'transit.station',
          elementType: 'geometry',
          stylers: [{color: '#eeeeee'}]
        },
        {
          featureType: 'water',
          elementType: 'geometry',
          stylers: [{color: '#c9c9c9'}]
        },
        {
          featureType: 'water',
          elementType: 'labels.text.fill',
          stylers: [{color: '#9e9e9e'}]
        }
      ]

      // Init google map
      geocoder.geocode({ address: 'Austria' }, (results, status) => {
        if (status !== 'OK' || !results[0]) {
          throw new Error(status)
        }
        map.fitBounds(results[0].geometry.viewport)
        map.zoom = 15
        map.setOptions({styles: style})
        map.setCenter({lat: this.wayPoints[4].lat, lng: this.wayPoints[4].lng})
      })

      // Calc the directions between two points
      const calculateAndDisplayRoute = (directionsService, directionsDisplay, pointOrg, pointDst) => {
        directionsService.route({
          origin: pointOrg,
          destination: pointDst,
          avoidTolls: true,
          avoidHighways: false,
          travelMode: google.maps.TravelMode.DRIVING
        }, function (response, status) {
          if (status === google.maps.DirectionsStatus.OK) {
            console.log(response)
            directionsDisplay.setDirections(response)
          } else {
            window.alert('Directions request failed due to ' + status)
          }
        })
      }

      const pointA = new google.maps.LatLng(this.wayPoints[0].lat, this.wayPoints[0].lng)
      const pointB = new google.maps.LatLng(this.wayPoints[1].lat, this.wayPoints[1].lng)
      // const pointC = new google.maps.LatLng(this.wayPoints[2].lat, this.wayPoints[2].lng)
      // const pointD = new google.maps.LatLng(this.wayPoints[3].lat, this.wayPoints[3].lng)
      // const pointE = new google.maps.LatLng(this.wayPoints[4].lat, this.wayPoints[4].lng)

      /*
      const markerA = new google.maps.Marker({
        position: pointA,
        title: 'point A',
        label: 'A',
        map: map
      })
      const markerB = new google.maps.Marker({
        position: pointB,
        title: 'point B',
        label: 'B',
        map: map
      })
      const markerC = new google.maps.Marker({
        position: pointC,
        title: 'point C',
        label: 'C',
        map: map
      })
      const markerD = new google.maps.Marker({
        position: pointD,
        title: 'point D',
        label: 'D',
        map: map
      })
      const markerE = new google.maps.Marker({
        position: pointE,
        title: 'point E',
        label: 'E',
        map: map
      })
      */

      // get route from A to B
      calculateAndDisplayRoute(directionsService, directionsDisplay, pointA, pointB)
    } catch (error) {
      console.error(error)
    }

    this.$store.commit('increment')
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
