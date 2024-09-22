// components/PropertyCard.tsx
import { Property } from "@/Types/types";
import Image from "next/image";
import React from "react";
import { FaAirbnb } from "react-icons/fa";

interface PropertyCardProps {
  property: Property;
  onClick: () => void;
}

const PropertyCard: React.FC<PropertyCardProps> = ({ property, onClick }) => {
  return (
    <div className="">
      {property.imageUrl ? (
        <div className="relative h-36 w-36 sm:h-56 sm:w-56">
          <Image
            src={property.imageUrl}
            alt={`${property.title} picture`}
            sizes="h-36 w-36"
            style={{ objectFit: "cover" }}
            fill
            priority
            className="rounded-lg cursor-pointer"
            onClick={onClick}
          />
        </div>
      ) : (
        <div
          className="sm:h-56 sm:w-56 h-36 w-36 bg-gray-300 rounded-lg flex items-center justify-center cursor-pointer"
          onClick={onClick}
        >
          <span className="text-sm text-gray-500">No Image Available</span>
        </div>
      )}
      <p className="text-lg text-left w-full mt-2">{property.title}</p>
      <p className="text-sm w-full mt-2">{property.location}</p>
      {property.airbnbLink ? (
        <p className="bg-[#d66161] text-sm sm:text-lg cursor-pointer px-2 mt-2 rounded-xl hover:brightness-90 transition inline-block">
        <a
          href={property.airbnbLink}
          target="_blank"
          className="flex items-center"
          >
          Check availability
          <FaAirbnb className="ml-1" />
        </a>
      </p>
        ) : (
          <p className="bg-[#d66161] text-sm sm:text-lg px-2 mt-2 rounded-xl cursor-default inline-block">No Links Available</p>
        )}
      <p
        className="text-sm sm:text-lg mt-2 cursor-pointer text-white bg-[#4c72bd] px-2 rounded-xl inline-block"
        onClick={onClick}
      >
        Saiba Mais
      </p>
    </div>
  );
};

export default PropertyCard;
