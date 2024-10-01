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
    <div className="bg-[#BDC3C7] p-2 rounded-xl">
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
      <p className="text-lg text-left w-full mt-2 text-[#2C3E50]">
        {property.title}
      </p>
      <p className="text-sm w-full text-[#2C3E50]">{property.location}</p>
      <p
        className="text-sm sm:text-lg mt-2 cursor-pointer text-[#ECF0F1] bg-[#2980B9] px-2 rounded-xl inline-block hover:bg-[#60a1cd]"
        onClick={onClick}
      >
        Saiba Mais
      </p>
      {property.airbnbLink ? (
        <p className="bg-[#d66161] text-sm sm:text-lg cursor-pointer px-2 mt-2 rounded-xl hover:bg-[#e29090] inline-block text-[#ECF0F1]">
          <a
            href={property.airbnbLink}
            target="_blank"
            className="flex items-center"
          >
            Ver disponibilidade
            <FaAirbnb className="ml-1" />
          </a>
        </p>
      ) : (
        <p
          className="bg-[#d66161] text-sm sm:text-lg cursor-pointer px-2 mt-2 rounded-xl hover:bg-[#e29090] inline-block text-[#ECF0F1]"
          onClick={() =>
            alert(
              "Não encontramos um link para a propriedade desejada. Para mais informações entre em contato conosco."
            )
          }
        >
          Nenhum link disponível
        </p>
      )}
    </div>
  );
};

export default PropertyCard;
