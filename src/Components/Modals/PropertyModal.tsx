// components/PropertiesModal.tsx
import React from "react";
import { Property } from "@/Types/types";
import Maps from "@/Components/GoogleMaps/Maps";
import { MdKeyboardArrowLeft } from "react-icons/md";
import NearbyPlaces from "../PlacesNearby/NearbyPlaces";

interface PropertiesModalProps {
  isOpen: boolean;
  closeModal: () => void;
  property: Property;
  mapId: string; // Add mapId prop
}

const PropertiesModal: React.FC<PropertiesModalProps> = ({
  isOpen,
  closeModal,
  property,
  mapId,
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-gray-800 bg-opacity-80 flex items-center justify-center z-50">
      <div className="bg-[#d4d5d6] rounded-lg shadow-lg w-full max-w-xl h-auto max-h-[90vh] overflow-y-auto">
        <button onClick={closeModal} className="focus:outline-none mt-5 ml-5">
        <MdKeyboardArrowLeft size={30} />
        </button>

        {/* Use the new Maps component to display the map */}
        <Maps
          center={{ lat: property.latitude, lng: property.longitude }}
          zoom={16}
          markers={[
            {
              position: { lat: property.latitude, lng: property.longitude },
              title: property.title,
            },
          ]}
          mapId={mapId} // Pass the Map ID to Maps component
        />
        <div className="p-4 ml-12 flex flex-col items-start">
          <p className="text-2xl text-[#2C3E50] mb-2">{property.title} - {property.size}</p>
          {/* <p className="mb-2">Size: {property.size}</p> */}
          <p className="mb-2 text-[#2C3E50]">{property.location}</p>
          <p className="mb-2 text-[#2C3E50]">Rooms: {property.rooms}</p>
          <h2 className="text-[#2C3E50]">Locais próximos ao endereço:</h2>
          <NearbyPlaces property={property} mapId={mapId} />
          <button onClick={closeModal} className="bg-red-400 mt-3 px-2 rounded-xl hover:brightness-90 transition">Close</button>
        </div>
      </div>
    </div>
  );
};

export default PropertiesModal;
