import React from 'react';
import paladini from '../../assets/paladini.svg';
import styles from './brand.module.css'

const BrandList = () => {
  const svgArray = Array(16).fill(paladini);

  return (
    <div className="text-center flex flex-col justify-around items-center">
      <div className='w-11/12 flex items-center flex-col'>
         {/* <div className={styles.clip2}>.</div> */}
        <h2 className='text-4xl bg-greenC bg-opacity-80 z-50 relative w-min p-4 whitespace-nowrap overflow-ellipsis rounded-full  lg:mb-12 '>Nos acompañan:</h2>
      
      </div>
      <div className="flex flex-wrap">
        {svgArray.map((svg, index) => (
          <div key={index} className=" flex justify-center items-center w-1/2 sm:w-1/3 md:w-1/4 p-4 animate-wiggle animate-infinite">
            <img src={svg.src} width={100} height={100} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default BrandList;
