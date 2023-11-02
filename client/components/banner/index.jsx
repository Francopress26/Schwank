import React from 'react';
import banner from './banner.jpg';
import styles from './banner.module.css'
import { Button } from '@nextui-org/react';

export default function Banner() {
  return (
    <div className='relative'>
      <img src={banner.src} className='w-full max-h-screen border-b relative' />
      <div className='absolute bottom-4 left-0 right-0 text-center'>
        <Button className='m-auto mb-8 mr-4 bg-green' >Conocenos!</Button>
      </div>
    </div>
  );
}
