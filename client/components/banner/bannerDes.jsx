import React from 'react';
import banner from './banner.jpg';
import styles from './banner.module.css';
import { Button } from '@nextui-org/react';

export default function BannerDes() {
  return (
<section className="bg-cover bg-no-repeat bg-center bg-[url('https://res.cloudinary.com/dvmvqnxgd/image/upload/v1698466205/Schwank/zzdapdfkljucr7nec7bj.jpg')] bg-gray-700 bg-blend-multiply max-h-xl">
      <div className="px-4 mx-auto max-w-screen-xl text-center py-24 lg:py-56">
        <h1 className="mb-4 tracking-tight leading-none text-transparent">.</h1>
        <p className="mb-8 sm:px-16 lg:px-48 text-transparent">.</p>
      </div>
      <div className='text-transparent py-2'>.</div>
      <div className="flex flex-col space-y-4 sm:flex-row sm:justify-center sm:space-y-0 sm:space-x-4 md:pt-12 pb-12">
        {/* <a href="#" className="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-white rounded-lg bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900">
          Get started
          <svg className="w-3.5 h-3.5 ml-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
          </svg>
        </a> */}
        <a href="#" className=" text-5xl w-64 inline-flex justify-center  items-center py-3 px-5   text-center  rounded-lg">
        <Button className='m-auto mb-8 mr-4 bg-greenC bg-opacity-80 rounded-full w-full h-full text-2xl' >Conocenos!</Button>
        </a>
      </div>
 
    </section>
  );
}
