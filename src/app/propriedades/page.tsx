'use client';

import BodyContainer from "@/Components/Containers/BodyContainer";
import FooterContainer from "@/Components/Containers/FooterContainer";
import HeaderContainer from "@/Components/Containers/HeaderContainer";
import NavHeader from "@/Components/Containers/Navbar";
import PropertiesModal from "@/Components/Modals/PropertyModal";
import PropertyCard from "@/Components/PropertyCard";
import { propertiesData } from "@/Data/properties";
import { MAP_ID } from "@/Services/API/googleMapsAPI";
import { Property } from "@/Types/types";
import { useState } from "react";

export default function Propriedades() {
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
       <div className="flex flex-row gap-20 p-[5%] overflow-x-auto">
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
       <div className="text-center p-2">
         Todos os direitos reservados. © Rocha Empreendimentos Imobiliários
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

   </div>
 );
}
