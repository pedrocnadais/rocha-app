// pages/index.tsx
"use client";

import BodyContainer from "@/Components/Containers/BodyContainer";
import FooterContainer from "@/Components/Containers/FooterContainer";
import HeaderContainer from "@/Components/Containers/HeaderContainer";
import NavHeader from "@/Components/Containers/Navbar";
import PropertiesModal from "@/Components/Modals/PropertyModal";
import PropertyCard from "@/Components/PropertyCard";
import { propertiesData } from "@/Data/properties";
import { Property } from "@/Types/types";
import { useState } from "react";
import { GiFamilyHouse } from "react-icons/gi";
import { MAP_ID } from "@/Services/API/googleMapsAPI";

export default function Home() {
  const [selectedProperty, setSelectedProperty] = useState<Property | null>(
    null
  );
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  const handleCardClick = (property: Property) => {
    setSelectedProperty(property);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedProperty(null);
  };

  return (
    <>
      <HeaderContainer>
        <div className="flex flex-row items-center p-5">
          <GiFamilyHouse size={80} />
          <div className="ml-10 text-3xl">
            Rocha Empreendimentos Imobiliários
          </div>
        </div>
      </HeaderContainer>

      <NavHeader />

      <BodyContainer>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 p-[5%]">
          {propertiesData.map((property, index) => (
            <PropertyCard
              key={index}
              property={property}
              onClick={() => handleCardClick(property)}
            />
          ))}
        </div>
      </BodyContainer>

      <FooterContainer>
        <div>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Esse porro
          corporis accusantium odit repellendus, ad praesentium at neque magnam!
          Tempore.
        </div>
      </FooterContainer>
      {selectedProperty && (
        <PropertiesModal
          isOpen={isModalOpen}
          closeModal={closeModal}
          property={selectedProperty}
          mapId={MAP_ID}  // Pass the valid Map ID here
        />
      )}
    </>
  );
}
