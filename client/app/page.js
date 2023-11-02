'use client'
import Banner from '@/components/banner'
import BrandList from '@/components/marcas/brandList'
import Brands from '@/components/marcas/brands'
import Chips from '@/components/mini-cards/chips'
import CardTeam from '@/components/team/card-team'
import Team from '@/components/team/team'
import TeamDes from '@/components/team/team-des'
import Image from 'next/image'
import {Divider} from "@nextui-org/react";
import { useEffect, useState } from 'react'
import WhatsAppButton from '@/components/redes/wspbtn'
import { FloatingWhatsApp } from 'react-floating-whatsapp'
import Logo from '../assets/logo1.png'
import Redes from '@/components/redes/redes'
import BannerDes from '@/components/banner/bannerDes'
import Footer from '@/components/footer/footer'
import Form from '@/components/form/form'
import Contacto from '@/components/form/contacto'

export default function Home() {
  const [anchoPantalla, setAnchoPantalla] = useState(0);

  useEffect(() => {
    // Access window.innerWidth after component mounts on the client-side
    setAnchoPantalla(window.innerWidth);

    // Add event listener to update anchoPantalla when window is resized
    const handleResize = () => {
      setAnchoPantalla(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []); // Empty dependency array ensures this effect runs only once after initial render
 
  return (
    <main className="min-w-full min-h-screen flex justify-between flex-col overflow-x-hidden ">
      
      {anchoPantalla > 1000 ? (
        // Mostrar este componente si el ancho de pantalla es mayor a 768px
        <BannerDes></BannerDes>
      ) : (
        // Mostrar este componente si el ancho de pantalla es menor o igual a 768px
        <Banner></Banner>
      )}
      {/* banner
      cards chiquitas sobre ellos
      marcas asociadas
      el equipo
      entrevistas relacionadas
      contacto
      footer */}
           

      <Chips></Chips>
      <Brands></Brands>
      <BrandList></BrandList>
     

      {anchoPantalla > 850 ? (
        // Mostrar este componente si el ancho de pantalla es mayor a 768px
        <TeamDes></TeamDes>
      ) : (
        // Mostrar este componente si el ancho de pantalla es menor o igual a 768px
        <Team></Team>
      )}
      
      <FloatingWhatsApp phoneNumber='+54 9 341 635-2295'  allowEsc accountName='Tennis & Padel Center' avatar={Logo.src} statusMessage='En breve nos pondremos en contacto' chatMessage='Hola! Como podemos ayudarte?' placeholder='Escribe tu mensaje...'/>
        {/* <Redes></Redes> */}
      <Contacto></Contacto>        
      <Footer></Footer> 
      
    </main>
  )
}
