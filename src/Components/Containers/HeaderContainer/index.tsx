import React from "react";
import { GiFamilyHouse } from "react-icons/gi";

const HeaderContainer: React.FC = () => {
 return (
  <div className={`w-screen flex flex-1 bg-[#2C3E50] flex-col  items-center unselectable`}>
   <div className="flex flex-row items-center p-5">
          <GiFamilyHouse size={80} className="text-[#2980B9]" />
          <div className="ml-10 text-3xl text-[#ECF0F1]">
            Rocha Empreendimentos Imobiliários
          </div>
        </div>
  </div>
 )
}

export default HeaderContainer