'use client';

export default function NavHeader() {
 return (
  <nav className='flex flex-row justify-center gap-[20%] text-2xl'>
   <ul>Início</ul>
   <ul><button><a href='https://api.whatsapp.com/send/?phone=5511910788778&text&type=phone_number&app_absent=0' target="_blank">Contato</a></button></ul>
  </nav>
 )
}