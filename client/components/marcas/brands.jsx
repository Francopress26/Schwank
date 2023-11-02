import React from 'react'
import Sponsors from './sponsors'
import styles from './brand.module.css'
import tennis from '../../assets/tennis.svg'
const Brands = () => {
  return (
    <div className='flex flex-col justify-center items-center text-center'>

        <div className='flex flex-col justify-between items-center'>
        {/* <div className={styles.clip}>.</div> */}
            <h2 className='mb-4 m-4 text-4xl w-min p-4 whitespace-nowrap overflow-ellipsis bg-greenC bg-opacity-80 rounded-full z-50 relative'>Suma tu marca</h2>
            <p className=' w-5/6 text-center font-light text-2xl mb-4'>Optimiza la identidad de tu empresa y capta nuevos 
            clientes con el plan de sponsors que mejor se adapte a tus necesidades</p>
        </div>

        <div className='flex flex-col h-60 justify-between lg:h-32 w-full'>
            <div className='h-full flex flex-col justify-between items-center w-full lg:flex-row'>
            <Sponsors text={'Sponsors GRAND SLAM'}></Sponsors>
           <Sponsors text={'Sponsors ATP 500'}></Sponsors>
           <Sponsors text={'Sponsors MASTERS 1000'}></Sponsors>
            </div>
         
        </div>
        <p className=' w-5/6 text-center  text-2xl mb-4 mt-4 lg:mb-8'>Consultanos con nuestro staff comercial las alternativas de inversion</p>
    </div>  
    
    )
}

export default Brands