"use client";

import { usePathname } from "next/navigation";
import React from "react";

const NavHeader = () => {
  const currentRoute = usePathname();
  
  const redirectToHome = () => {
    window.location.href = '/inicio'
  };

  const redirectToProperties = () => {
    window.location.href = "/propriedades";
  };

  const redirectToContato = () => {
    window.location.href = '/contato'
  }

  return (
    <nav className="flex flex-row p-3 bg-[#2C3E50] justify-center gap-[10%] text-xl">
      <ul>
        <button
          onClick={redirectToHome}
          className={`${
            currentRoute === "/inicio" ? "bg-[#e3bf2f] text-[#ECF0F1] px-2 rounded-xl" : "text-[#ECF0F1]"
          }`}
        >
          Início
        </button>
      </ul>
      <ul>
        <button
          onClick={redirectToProperties}
          className={`${
            currentRoute === "/propriedades" ? "bg-[#e3bf2f] text-[#ECF0F1] px-2 rounded-xl" : "text-[#ECF0F1]"
          }`}
        >
          Propriedades
        </button>
      </ul>
      <ul>
        <button 
          onClick={redirectToContato}
          className={`${
            currentRoute === "/contato" ? "bg-[#e3bf2f] text-[#ECF0F1] px-2 rounded-xl" : "text-[#ECF0F1]"
          }`}>
            Contato
        </button>
      </ul>
    </nav>
  );
};

export default NavHeader;
