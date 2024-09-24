import React from "react";


const FooterContainer: React.FC = () => {
  return (
    <div
      className={`w-screen flex bg-[#2C3E50] text-[#ECF0F1] items-center justify-center py-4 unselectable`}
    >
       <div className="text-center p-2">
          Todos os direitos reservados. © Rocha Empreendimentos Imobiliários
        </div>
    </div>
  );
};

export default FooterContainer;
