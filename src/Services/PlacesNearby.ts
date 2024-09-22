// src/Services/PlacesNearby.ts
import { Place } from "@/Types/types";

export const placeTypes = [
 "supermarket",
 "pharmacy",
 "gas_station",
 "restaurant",
 "bar",
 "gym",
 "bakery",
 "beauty_salon",
];

export const getNearbyPlaces = async (
  map: google.maps.Map,
  latitude: number,
  longitude: number
): Promise<Place[]> => {
  const allPlaces: Place[] = [];

  const fetchPlacesByType = (type: string): Promise<Place[]> => {
    return new Promise((resolve, reject) => {
      const service = new google.maps.places.PlacesService(map);
      const request = {
        location: new google.maps.LatLng(latitude, longitude),
        radius: 1000, // 1 km range
        type,
      };

      service.nearbySearch(request, (results, status) => {
        if (status === google.maps.places.PlacesServiceStatus.OK && results) {
          const places: Place[] = results.map((place) => ({
            name: place.name || "Unknown",
            address: place.vicinity || "Unknown",
            type: place.types ? place.types[0] : "Unknown",
            latitude: place.geometry?.location?.lat() || 0, // Changed to latitude
            longitude: place.geometry?.location?.lng() || 0, // Changed to longitude
          }));
          resolve(places);
        } else {
          reject(`Failed to fetch nearby places of type ${type}: ${status}`);
        }
      });
    });
  };

  for (const type of placeTypes) {
   try {
    const places = await fetchPlacesByType(type);
    allPlaces.push(...places)
   } catch (error) {
    console.error(error)
   }
  }
  
  return allPlaces
};
