// src/Components/NearbyPlaces.tsx
"use client";

import { getNearbyPlaces } from "@/Services/PlacesNearby";
import { Place, Property } from "@/Types/types";
import React, { useEffect, useState } from "react";
import Maps, { loadGoogleMapsScript } from "../GoogleMaps/Maps";

interface NearbyPlacesProps {
  property: Property;
  mapId: string; // Ensure mapId is passed as a prop
}

const NearbyPlaces: React.FC<NearbyPlacesProps> = ({ property, mapId }) => {
  const [places, setPlaces] = useState<Place[]>([]);
  const [markers, setMarkers] = useState<{ position: { lat: number; lng: number }; title: string }[]>([]);

  useEffect(() => {
    const loadPlaces = async () => {
     await loadGoogleMapsScript();

      const { latitude, longitude } = property;

      const mapElement = document.createElement("div"); // Create a temporary map element
      const map = new google.maps.Map(mapElement, {
        center: { lat: latitude, lng: longitude },
        zoom: 12,
        mapId, // Use the provided mapId
      });

      try {
       const placesData = await getNearbyPlaces(map, latitude, longitude);
       setPlaces(placesData);

       // Set markers for the map
       const newMarkers = placesData.map((place) => ({
         position: { lat: place.latitude, lng: place.longitude },
         title: place.name,
         }));
        setMarkers(newMarkers);
       } catch (error) {
        console.error(error);
       }
    };

    loadPlaces();
  }, [property, mapId]);

  return (
    <div>
      <Maps center={{ lat: property.latitude, lng: property.longitude }} zoom={12} markers={markers} mapId={mapId} />
      <ul>
        {places.map((place, index) => (
          <li key={index}>
            <strong>{place.name}:</strong> ({place.type}) - {place.address}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default NearbyPlaces;
