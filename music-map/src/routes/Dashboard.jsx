import { useRef, useEffect } from 'react'
import mapboxgl from 'mapbox-gl'

import 'mapbox-gl/dist/mapbox-gl.css'

import Navbar from '../components/Navbar'
import '../css/Dashboard.css'

function Dashboard () {
  const mapRef = useRef()
  const mapContainerRef = useRef()

  useEffect(() => {
    mapboxgl.accessToken = 'pk.eyJ1Ijoic3VuaXRpYSIsImEiOiJjbTI2djc1ejQwZWZwMmxwdjExOWh5b3JyIn0.X81TiGsk7gesz7bXYXv2SA'
    mapRef.current = new mapboxgl.Map({
      container: mapContainerRef.current,
    });

    return () => {
      mapRef.current.remove()
    }
  }, [])

  return (
    <div id="screen">
      <Navbar />
      <h2>Dashboard</h2>
      <div id="map-container" ref={mapContainerRef}>
      </div>
    </div>
  )
}

export default Dashboard;