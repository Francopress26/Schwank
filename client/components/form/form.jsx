import { Input, Textarea } from '@nextui-org/react'
import React from 'react'

const Form = () => {
  return (
    
<form className='w-3/4  h-96 flex flex-col justify-around items-center'>
<Input variant='underlined' color='success' type="text" label="Nombre" placeholder="Ingresa tu nombre" />
<Input variant='underlined' color='success' type="text" label="Telefono" placeholder="Ingresa tu telefono" />
<Input variant='underlined' color='success' type="email" label="Email" placeholder="Ingresa tu email" />
<Textarea
      label="Mensaje"
      variant='underlined'
      labelPlacement="outside"
      placeholder="Dejanos tu mensaje aca y nosotros nos comunicaremos"
      className=""
      color='success'
    />
</form>

  )
}

export default Form