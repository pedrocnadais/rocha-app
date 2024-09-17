// components/PropertiesModal.tsx
import React from "react";
import { Property } from "@/Types/types";
import Maps from "@/Components/GoogleMaps/Maps";
import { MdKeyboardArrowLeft } from "react-icons/md";

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
    <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-xl h-auto max-h-[90vh] overflow-y-auto">
        <button onClick={closeModal} className="focus:outline-none mb-4">
        <MdKeyboardArrowLeft size={30} />
        </button>

        {/* Use the new Maps component to display the map */}
        <Maps
          center={{ lat: property.latitude, lng: property.longitude }}
          zoom={15}
          markers={[
            {
              position: { lat: property.latitude, lng: property.longitude },
              title: property.title,
            },
          ]}
          mapId={mapId} // Pass the Map ID to Maps component
        />
        <div className="mt-4">
          <p className="text-lg mb-2">{property.title}</p>
          <p className="text-sm mb-2">{property.location}</p>
          <p className="text-sm mb-2">Size: {property.size}</p>
          <p className="text-sm mb-2">Rooms: {property.rooms}</p>
        </div>
      </div>
    </div>
  );
};

export default PropertiesModal;
