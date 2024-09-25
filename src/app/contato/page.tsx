"use client";

import { sendEmail } from "@/Actions/sendEmail";
import FormSendBtn from "@/Components/Buttons/FormSendBtn";
import BodyContainer from "@/Components/Containers/BodyContainer";
import FooterContainer from "@/Components/Containers/FooterContainer";
import HeaderContainer from "@/Components/Containers/HeaderContainer";
import NavHeader from "@/Components/Containers/NavHeader";
import Spinner from "@/Components/Spinner";
import { useState } from "react";
import toast from "react-hot-toast";

export default function Contato() {
  const [isSending, setIsSending] = useState(false);
  const [isSent, setIsSent] = useState(false);

  const handleSubmit = async (formData: FormData) => {
    setIsSending(true);
    const { data, error } = await sendEmail(formData)

    console.log(data)

    if (error) {
      toast.error(error);
      setIsSending(false);
      return;
    }

    toast.success('Email enviado com sucesso. Entraremos em contato com você em breve.', 
      {
        duration: 6000,
      }
    );
    setIsSending(false);
    setIsSent(true)
  }

  return (
    <>
      <HeaderContainer />

      <NavHeader />
      
      <BodyContainer>
        <section className="p-10 w-[50%] text-[#2C3E50] mx-auto text-center">

          {isSending && <Spinner />}
          {isSent && <p className="text-4xl text-[#2C3E50]">Seu email foi enviado com sucesso!</p>}

          {!isSending && !isSent && (
            <>
            <p>
              Entre em contato pelo{" "}
              <a
                className="underline font-bold text-green-800 hover:scale-110 hover:text-green-500"
                href="https://api.whatsapp.com/send/?phone=5511910788778&text&type=phone_number&app_absent=0"
                target="_blank"
                >
                Whatsapp
              </a>{" "}
              ou através do nosso email
            </p>

            <form
              className="flex flex-col mt-10"
              onSubmit={async (e) => {
                e.preventDefault();
                const formData = new FormData(e.currentTarget);
                await handleSubmit(formData)
              }}
            >
              <input
              className="h-14 px-4 rounded-lg border-black"
              type="email"
              name="senderEmail"
              required
              maxLength={500}
              placeholder="Seu email"
              />
            <textarea
              className="h-52 my-3 rounded-lg border-black p-4"
              name="message"
              placeholder="Escreva sua mensagem aqui"
              required
              maxLength={1000}
              />

            <FormSendBtn />

            </form>
              </>
          )}
        </section>
      </BodyContainer>

      <FooterContainer />
    </>
  );
}
