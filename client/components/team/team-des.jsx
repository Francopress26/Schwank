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
import CardTeamDes from './card-team-des';
import logo from '../../assets/logo1.png'
const TeamDes = () => {
  return (
    <div id='main' className='flex justify-around mt-32'>
      
      <div className='flex flex-col items-center w-1/3 text-center'>
        
      <h2 className='text-4xl font-semibold text-center m-2 my-8  bg-greenC bg-opacity-80  rounded-full p-4'>
      <span className=''>Conocé</span> nuestro equipo
      </h2>
      <p className='text-2xl font-light '>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil similique, laudantium deserunt dolorem quasi animi! Voluptatum facere similique, saepe perferendis cum facilis vitae alias id fugit atque voluptatem, nulla quia?</p>
      <p className='text-2xl font-light '>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil similique, laudantium deserunt dolorem quasi animi! Voluptatum facere similique, saepe perferendis cum facilis vitae alias id fugit atque voluptatem, nulla quia?</p>
      <img src={logo.src}/>
      </div>

    <ScrollShadow  hideScrollBar  className="w-1/2 h-[700px] mt-16">
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

export default TeamDes;