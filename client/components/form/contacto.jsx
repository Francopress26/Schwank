import React from 'react'
import Form from './form'
import tennis from '../../assets/tennis.svg'
const Contacto = () => {
  return (
    <div className='flex flex-col  text-center mt-8 justify-around items-center border-t md:items-end md:pb-0 md:flex-row '>
    <div className='flex flex-col items-center justify-between'>
    <h2 className='  text-4xl border-b border-green m-2'>Charlemos!</h2>
    <h3 className='font-light text-2xl w-3/4 m-2'>Dejanos un mensaje y nos contactaremos enseguida</h3>
    <Form></Form>
    </div>
    <div className='hidden md:block w-1/2 min-h-full'>
    <img src={tennis.src} className='h-full'></img>
    </div>
    </div>
  )
}

export default Contacto