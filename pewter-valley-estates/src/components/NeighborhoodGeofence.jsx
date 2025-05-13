import { useState } from 'react';
// import * as turf from '@turf/turf'; // Uncomment when turf.js is installed

function NeighborhoodGeofence() {
  const [inZone, setInZone] = useState(null);

  // Stub: In real use, get user location and check with turf.booleanPointInPolygon
  const checkLocation = () => {
    // TODO: Use turf.js and Pewter Valley polygon
    setInZone(true); // Simulate user in zone
  };

  return (
    <div className="pv-geofence" aria-label="Neighborhood geofencing" role="region">
      <h3>Neighborhood Check</h3>
      {inZone === null ? (
        <button onClick={checkLocation}>Check if I'm in Pewter Valley Estates</button>
      ) : inZone ? (
        <div className="pv-geofence-success">You're in the zone! Welcome to Pewter Valley Estates.</div>
      ) : (
        <div className="pv-geofence-fail">You're outside Pewter Valley Estates. Explore nearby homes!</div>
      )}
    </div>
  );
}

export default NeighborhoodGeofence; 