// pages/index.tsx
"use client";

import BodyContainer from "@/Components/Containers/BodyContainer";
import FooterContainer from "@/Components/Containers/FooterContainer";
import HeaderContainer from "@/Components/Containers/HeaderContainer";
import NavHeader from "@/Components/Containers/NavHeader";
import PropertiesModal from "@/Components/Modals/PropertyModal";
import PropertyCard from "@/Components/PropertyCard";
import { propertiesData } from "@/Data/properties";
import { Property } from "@/Types/types";
import { useState } from "react";
import { MAP_ID } from "@/Services/API/googleMapsAPI";
import GrayDivider from "@/Components/Dividers/divider";

export default function Home() {
  const [selectedProperty, setSelectedProperty] = useState<Property | null>(null);
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
    <div className="flex flex-col min-h-screen">
      <HeaderContainer />
        
      <NavHeader />

      <BodyContainer>
        <div className="m-5 text-center text-[#2C3E50]">
          <h1 className="text-3xl">Quem somos nós?</h1> 
          <h3 className="my-5">Somos um negócio familiar que busca fornecer os melhores imóveis, sempre com muita qualidade para que você possa se sentir sempre em casa.</h3>
        </div>

        <GrayDivider />

        <div className="flex flex-row gap-20 p-[5%] overflow-x-auto">
          {propertiesData.slice(0, 5).map((property, index) => (
            <PropertyCard
              key={index}
              property={property}
              onClick={() => handleCardClick(property)}
            />
          ))}
        </div>
      </BodyContainer>

      <FooterContainer />

      {selectedProperty && (
        <PropertiesModal
          isOpen={isModalOpen}
          closeModal={closeModal}
          property={selectedProperty}
          mapId={MAP_ID}  // Pass the valid Map ID here
        />
      )}

    </div>
  );
}
