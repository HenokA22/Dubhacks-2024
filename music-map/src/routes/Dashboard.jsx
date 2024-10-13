import { useRef, useEffect } from 'react'
import mapboxgl from 'mapbox-gl'

import 'mapbox-gl/dist/mapbox-gl.css'

import Navbar from '../Navbar'
import Footer from '../Footer'
import '../css/Dashboard.css'

function Dashboard () {
  const mapRef = useRef()
  const mapContainerRef = useRef()

  useEffect(() => {
    mapboxgl.accessToken = 'pk.eyJ1Ijoic3VuaXRpYSIsImEiOiJjbTI2djc1ejQwZWZwMmxwdjExOWh5b3JyIn0.X81TiGsk7gesz7bXYXv2SA'
    mapRef.current = new mapboxgl.Map({
      container: mapContainerRef.current,
      center: [-122.33999, 47.63645],
      zoom: 10
    });

    // for each json location instance (representing a song + location),
    // create a new marker component and set location to long + lat.
    // look into how this works with the remove function

    return () => {
      mapRef.current.remove()
    }
  }, [])

  return (
    <div id="screen">
      <Navbar />
      <div id="map-container" ref={mapContainerRef}>
      </div>
      <Footer />
    </div>
  )
}

export default Dashboard;