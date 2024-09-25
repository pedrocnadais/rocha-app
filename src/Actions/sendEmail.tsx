"use server";

import { Resend } from "resend";
import { validateString, getErrorMessage } from "@/Lib/utils";
import ContactFormEmail from "./Contact-form/contact-form";
import React from "react";
import { RESEND_API } from "@/Services/API/resendAPI";

const resend = new Resend(RESEND_API);

export const sendEmail = async (formData: FormData) => {
 const senderEmail = formData.get('senderEmail');
 const message = formData.get('message');

 if (!validateString(senderEmail, 500)) {
  return {
   error: 'Invalid sender email'
  }
 }
 if (!validateString(message, 1000)) {
  return {
   error: 'Invalid message'
  }
 }

 let data;
 try {
  data = await resend.emails.send({
   from: 'Rocha Empreendimentos Imobiliários - Contact Form<onboarding@resend.dev>', 
   to: 'pedrocorsi@live.com',
   subject: 'Formulário de contato do site Rocha Empreendimentos Imobiliários ',
   reply_to: senderEmail as string,
   react: React.createElement(ContactFormEmail, {
    message: message as string, 
    senderEmail: senderEmail as string,
   }),
  });
 } catch (error: unknown) {
  return {
   error: getErrorMessage(error),
  };
 }

 return {
  data,
 };
};
