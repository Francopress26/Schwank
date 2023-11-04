import React from 'react'
import logo from '../../assets/logo1.png'

const Footer = () => {
  return (
    
<footer className="flex justify-between items-center flex-col bg-white dark:bg-gray-900 border-t mb-2">
    <div className="flex justify-around items-center mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
          <div className=" ">
              <a href="https://flowbite.com/" className="flex items-center flex-col">
                  <img src={logo.src} alt="FlowBite Logo" height={200} width={200}/>
                  {/* <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Tennis & Padel Center</span> */}
              </a>
          </div>
          <div>
                <p className='text-xl font-bold'> Comunicate</p>
                <p className='text-lg'>Telefono</p>
                <p className='text-lg'>Mail</p>
            </div>
         
          <div>
                <p className='text-xl font-bold'> Seguinos</p>
                <p className='text-lg'>Instagram</p>
                <p className='text-lg'>Facebook</p>
            </div>
      </div>
      <div className='font-light text-lg'> ©2023 Schwank Center. All rights reserved
</div>
</footer>
// ©2023 Schwank Center. All rights reserved
  )
}

export default Footer