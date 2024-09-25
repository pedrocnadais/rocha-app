// components/GoogleMaps/Maps.tsx
import React, { useEffect, useRef } from 'react';
import { GOOGLE_MAPS_API } from '@/Services/API/googleMapsAPI';

interface Marker {
  position: { lat: number; lng: number };
  title: string;
}

interface MapsProps {
  center: { lat: number; lng: number };
  zoom: number;
  markers?: Marker[];
  mapId: string;  // Add mapId as a required prop
  onLoad?: () => void;
}

export const loadGoogleMapsScript = (): Promise<void> => {
  return new Promise((resolve, reject) => {
    if (typeof window.google !== 'undefined' && window.google.maps) {
      resolve(); // If Google Maps is already loaded, resolve immediately
      return;
    }

    const existingScript = document.getElementById('googleMaps');

    if (!existingScript) {
      const script = document.createElement('script');
      script.src = `https://maps.googleapis.com/maps/api/js?key=${GOOGLE_MAPS_API}&libraries=places`;
      script.id = 'googleMaps';
      script.async = true;
      script.defer = true;
      script.onload = () => {
        if (typeof google !== 'undefined') {
          resolve();
        } else {
          reject(new Error('Google Maps API failed to load.'));
        }
      };
      script.onerror = () => reject(new Error('Failed to load the Google Maps script.'));
      document.body.appendChild(script);
    } else {
      existingScript.onload = () => resolve();
    }
  });
};

const Maps: React.FC<MapsProps> = ({ center, zoom, markers = [], mapId, onLoad }) => {
  const mapRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    let map: google.maps.Map;

    async function initializeMap(): Promise<void> {
      await loadGoogleMapsScript();

      if (!mapRef.current) return;

      const { Map } = await google.maps.importLibrary("maps") as google.maps.MapsLibrary;
      const { AdvancedMarkerElement } = await google.maps.importLibrary("marker") as google.maps.MarkerLibrary;

      // Initialize the map with the provided mapId
      map = new Map(mapRef.current, {
        center,
        zoom,
        mapId, // Use the provided Map ID here
      });

      // Add markers to the map
      markers.forEach((markerData) => {
        new AdvancedMarkerElement({
          position: markerData.position,
          map,
          title: markerData.title,
        });
      });
    }

    if (onLoad) {
      onLoad();
    }

    initializeMap();

    return () => {
      if (map) {
        map = null as never; // Cleanup map instance on component unmount
      }
    };
  }, [center, zoom, markers, mapId, onLoad]); // Include mapId in the dependency array

  return (
    <div className="flex items-center justify-center h-full w-full">
      <div ref={mapRef} className="w-[440px] h-[400px] border border-gray-300 rounded-lg shadow-lg" />
    </div>
  );
};

export default Maps;
