import { Card, CardHeader, Image } from '@nextui-org/react'
import React from 'react'

const CardTeamDes = ({src}) => {
  return (
    <div className=' my-2  flex justify-center items-center'>
    <Card className="w-1/2">
    {/* <CardHeader className="absolute z-10 top-1 flex-col !items-start">
      <p className="text-tiny text-white/60 uppercase font-bold">Pepito</p>
      <h4 className="text-white font-medium text-large">Lider de tenistas</h4>
    </CardHeader> */}
    <Image
      removeWrapper
      alt="Card background"
      className="z-0 w-full h-full object-cover"
      src={src}
    />
  </Card>
  </div>
  )
}

export default CardTeamDes