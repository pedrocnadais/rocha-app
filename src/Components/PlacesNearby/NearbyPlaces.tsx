// src/Components/NearbyPlaces.tsx
"use client";

import { getNearbyPlaces, placeTypes } from "@/Services/PlacesNearby";
import { Place, Property } from "@/Types/types";
import React, { useEffect, useState } from "react";
import { loadGoogleMapsScript } from "../GoogleMaps/Maps";

interface NearbyPlacesProps {
  property: Property;
  mapId: string; // Ensure mapId is passed as a prop
}

const typeTranslations: { [key: string]: string } = {
 supermarket: "Supermercado",
 pharmacy: "Farmácia",
 gas_station: "Posto de Gasolina",
 restaurant: "Restaurante",
 bar: "Bar",
 meal_takeaway: "Comida para Viagem",
 cafe: "Café",
 gym: "Academia",
 hospital: "Hospital",
 convenience_store: "Loja de Conveniência",
 veterinary_care: "Clínica Veterinária",
 doctor: "Médico",
 physiotherapist: "Fisioterapeuta",
 bakery: "Padaria",
 meal_delivery: "Entrega de Comidas",
 store: "Loja",
 lodging: "Hotel",
 school: "Escola",
 church: "Igreja",
 dentist: "Dentista",
 beauty_salon: "Salão de Beleza",
 point_of_interest: "Outros"
};

const NearbyPlaces: React.FC<NearbyPlacesProps> = ({ property, mapId }) => {
  const [places, setPlaces] = useState<Place[]>([]);
  // const [markers, setMarkers] = useState<{ position: { lat: number; lng: number }; title: string }[]>([]);
  const [categories, setCategories] = useState<{ [key: string]: Place[] }>({});
  const [expandedCategory, setExpandedCategory] = useState<string | null>(null);

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
       const placesData = await getNearbyPlaces( map, latitude, longitude);
       setPlaces(placesData);

       // Set markers for the map
       // const newMarkers = placesData.map((place) => ({
       //   position: { lat: place.latitude, lng: place.longitude },
       //   title: place.name,
       //   }));
       //  setMarkers(newMarkers);

        // Group places by category
        const groupedCategories: { [key: string]: Place[] } = {};
        placesData.forEach((place) => {
         if (!groupedCategories[place.type]) {
          groupedCategories[place.type] = [];
         }
         groupedCategories[place.type].push(place)
        });

        setCategories(groupedCategories);
       } catch (error) {
        console.error(error);
       }
    };

    loadPlaces();
  }, [property, mapId]);

  // Show/hide places
  const toggleCategory = (category: string) => {
   setExpandedCategory(expandedCategory === category ? null : category)
  }

  const filteredCategories = Object.entries(categories).filter(([category]) =>
   placeTypes.includes(category)
  )

  return (
    <div>
      {/* <Maps center={{ lat: property.latitude, lng: property.longitude }} zoom={15} markers={markers} mapId={mapId} /> */}
      {filteredCategories.map(([category, places]) => (
       <div key={category}>
        <div onClick={() => toggleCategory(category)} className="cursor-pointer font-bold my-2">
         {typeTranslations[category] || category.replace('_', ' ')} ({places.length})
        </div>
        {expandedCategory === category && (
         <ul>
          {places.map((place, index) => (
           <li key={index}>
            <strong>{place.name}:</strong> ({typeTranslations[place.type] || place.type}) - {place.address}
           </li>
          ))}
         </ul>
        )}
        </div>
      ))}
      {/* {Object.entries(categories).map(([category, places]) => (
       <div key={category}>
        <div onClick={() => toggleCategory(category)} className="cursor-pointer font-bold my-2">
         {category.charAt(0).toUpperCase() + category.slice(1)} ({places.length})
        </div>
        {expandedCategory === category && (

         <ul>
           {places.map((place, index) => (
             <li key={index}>
               <strong>{place.name}:</strong> ({place.type}) - {place.address}
             </li>
           ))}
         </ul>
        )}
        </div>
      ))} */}
    </div>
  );
};

export default NearbyPlaces;
