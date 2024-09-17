// components/PropertyCard.tsx
import { Property } from '@/Types/types';
import React from 'react';

interface PropertyCardProps {
  property: Property;
  onClick: () => void;
}

const PropertyCard: React.FC<PropertyCardProps> = ({ property, onClick }) => {
  return (
    <div className="m-auto mb-10">
      <div className="h-36 w-36 bg-black rounded-lg sm:h-56 sm:w-56 cursor-pointer" onClick={onClick}></div>
      <p className="text-lg text-left w-full mt-2">{property.title}</p>
      <p className="text-sm sm:text-lg w-full mt-2">{property.location}</p>
      <p className="text-sm sm:text-lg mt-2 cursor-pointer text-white bg-[#4c72bd] px-2 rounded-xl" onClick={onClick}>Saiba Mais</p>
    </div>
  );
};

export default PropertyCard;
