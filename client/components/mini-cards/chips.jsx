import React from 'react'
import Chip from './chip'
const Chips = () => {
  return (
    <div className='flex justify-around flex-col items-center w-full p-4 md:flex-row'>
            <Chip 
            title='Academia de Tenis y Padel' 
            quote='somos los mejores' 
            description='Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam voluptatibus velit error exercitationem ea. Error debitis quos fugit, officiis cumque libero, amet cum iste, nemo aspernatur harum porro repellendus quam.
            '>

            </Chip>
            
            <Chip 
            title='Alquiler de canchas' 
            quote='somos los mejores' 
            description='Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam voluptatibus velit error exercitationem ea. Error debitis quos fugit, officiis cumque libero, amet cum iste, nemo aspernatur harum porro repellendus quam.
            '>
                
            </Chip>
            <Chip 
            title='Mas de 12 años transmitiendo experiencia' 
            quote='somos los mejores' 
            description='tLorem ipsum dolor sit amet consectetur adipisicing elit. Totam voluptatibus velit error exercitationem ea. Error debitis quos fugit, officiis cumque libero, amet cum iste, nemo aspernatur harum porro repellendus quam.
            '>
            </Chip>
    </div>
  )
}

export default Chips