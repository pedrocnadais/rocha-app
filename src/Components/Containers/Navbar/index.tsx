"use client";

import { usePathname } from "next/navigation";
import React from "react";

const NavHeader = () => {
  const currentRoute = usePathname();

  const redirectToProperties = () => {
    window.location.href = "/propriedades";
  };

  const redirectToHome = () => {
    window.location.href = '/inicio'
  };

  return (
    <nav className="flex flex-row p-3 bg-[#2C3E50] justify-center gap-[10%] text-xl">
      <ul>
        <button
          onClick={redirectToHome}
          className={`${
            currentRoute === "/inicio" ? "bg-[#e3bf2f] text-[#ECF0F1] px-2 rounded-xl transition" : "text-[#ECF0F1]"
          }`}
        >
          Início
        </button>
      </ul>
      <ul>
        <button
          onClick={redirectToProperties}
          className={`${
            currentRoute === "/propriedades" ? "bg-[#e3bf2f] text-[#ECF0F1] px-2 rounded-xl transition" : "text-[#ECF0F1]"
          }`}
        >
          Propriedades
        </button>
      </ul>
      <ul>
        <button className="text-[#ECF0F1]">
          <a
            href="https://api.whatsapp.com/send/?phone=5511910788778&text&type=phone_number&app_absent=0"
            target="_blank"
          >
            Contato
          </a>
        </button>
      </ul>
    </nav>
  );
};

export default NavHeader;
