import { useState, useEffect } from 'react';
import Mapbox from 'mapbox-gl';

export default function Explore() {
  const [locations, setLocations] = useState([]);

  useEffect(() => {
    // Fetch locations data from API
    fetch('/api/locations')
      .then(response => response.json())
      .then(data => setLocations(data))
      .catch(error => console.error(error));
    
    // Initialize Mapbox map
    Mapbox.accessToken = '<your mapbox access token>';
    const map = new Mapbox.Map({
      container: 'map',
      style: 'mapbox://styles/mapbox/streets-v11',
      center: [-74.5, 40],
      zoom: 9
    });
    
    // Add location markers to map
    locations.forEach(location => {
      new Mapbox.Marker()
        .setLngLat(location.coordinates)
        .addTo(map);
    });
    
    // Cleanup
    return () => {
      map.remove();
    }
  }, []);

  return (
    <div>
      <h1>Explore</h1>
      <div id="map" style={{ height: '500px' }}></div>
      <ul>
        {locations.map(location => (
          <li key={location.id}>
            <h2>{location.name}</h2>
            <p>{location.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}