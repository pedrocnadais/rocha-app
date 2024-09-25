import React from "react";
import { useFormStatus } from "react-dom";

const FormSendBtn = () => {
 const { pending } = useFormStatus();

  return (
    <button
      className="group flex items-center justify-center gap-2 h-[3rem] w-[8rem] bg-gray-900 text-white rounded-full outline-none transition-all focus:scale-110 hover:scale-110 hover:bg-gray-950 active:scale-105"
      type="submit"
      disabled={pending}
    >
      {pending ? (
        <div className="h-5 w-5 animate-spin rounded-full border-b-2 border-white"></div>
      ) : (
        <>Enviar</>
      )}
    </button>
  );
};

export default FormSendBtn;
