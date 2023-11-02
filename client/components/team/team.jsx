import React from 'react'
import {ScrollShadow} from "@nextui-org/react";

import CardTeam from './card-team';
import ayrton from '../../assets/team/ayrton.png'
import damian from '../../assets/team/damianleguizamon.png'
import dani from '../../assets/team/dani.png'
import david from '../../assets/team/david.png'
import debora from '../../assets/team/debora.png'
import edu from '../../assets/team/edu.png'
import joaquin from '../../assets/team/joaquin.png'
const Team = () => {
  return (
    <div>
   <h2 className='text-3xl bg-greenC bg-opacity-80 whitespace-nowrap overflow-ellipsis rounded-full font-light text-center m-2 my-8 md:text-5xl'>
        <span className=''>Conocé</span> nuestro equipo
      </h2>
      <p className='text-xl font-light text-center '>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil similique, laudantium deserunt dolorem quasi animi! Voluptatum facere similique </p>

    <ScrollShadow className="w-full h-[650px]  ">
      <CardTeam src={damian.src}></CardTeam>
      <CardTeam src={ayrton.src}></CardTeam>
      <CardTeam src={dani.src}></CardTeam>
      <CardTeam src={david.src}></CardTeam>
      <CardTeam src={debora.src}></CardTeam>
      <CardTeam src={edu.src}></CardTeam>
      <CardTeam src={joaquin.src}></CardTeam>
    </ScrollShadow>
    </div>
  )
}

export default Team