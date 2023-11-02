import Link from 'next/link'
import React from 'react'
import instagram from '../../assets/REDES/instagram.svg'
import facebook  from '../../assets/REDES/facebook.svg'
import mail from '../../assets/REDES/gmail.svg'
import tel from '../../assets/REDES/celu.png'
import { Image } from '@nextui-org/react'
const Redes = () => {
  return (
    <div className='flex justify-around items-center border-b border-t m-4 text-center'>
        <Link href='' className='flex flex-col justify-center items-center'>
            <span>Schwanktennisandpadelcenter</span>
        <Image
          alt="nextui logo"
          height={80}
          radius="sm"
          src={instagram.src}
          width={80}
        />
        </Link>
        <Link href=''>
        <Image
          alt="nextui logo"
          height={80}
          radius="sm"
          src={facebook.src}
          width={80}
        />
        </Link>
        <Link href=''>
        <Image
          alt="nextui logo"
          height={80}
          radius="sm"
          src={mail.src}
          width={80}
        />
        </Link>
        <Link href=''>
        <Image
          alt="nextui logo"
          height={80}
          radius="sm"
          src={tel.src}
          width={80}
        />
        </Link>
    </div>
  )
}

export default Redes