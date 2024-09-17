// components/PropertyCard.tsx
import { Property } from '@/Types/types';
import React from 'react';

interface PropertyCardProps {
  property: Property;
  onClick: () => void;
}

const PropertyCard: React.FC<PropertyCardProps> = ({ property, onClick }) => {
  return (
    <div className="m-auto mb-10 max-w-xs cursor-pointer" onClick={onClick}>
      <div className="h-36 w-36 bg-black rounded-lg sm:h-56 sm:w-56"></div>
      <p className="text-lg text-left w-full mt-2">{property.title}</p>
      <p className="text-lg text-left w-full mt-2">{property.location}</p>
      <p className="text-lg text-left w-full mt-2">Saiba Mais</p>
    </div>
  );
};

export default PropertyCard;
