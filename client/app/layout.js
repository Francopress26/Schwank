import { Lato,Nunito } from 'next/font/google'
import './globals.css'
import {Providers} from "./providers";
import Nav from '@/components/navbar/navbar';
import WhatsAppButton from '@/components/redes/wspbtn';
const lato = Lato({
  weight: ['100','300','400', '700'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
  display: 'swap',
})
const nunito = Nunito({
  weight: ['200','300','400', '700'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
  display: 'swap',
})
export const metadata = {
  title: 'Schwank Tennis & Padel',
  description: 'Creado por Schwank',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={nunito.className}>
      <body className='min-w-full min-h-screen'>
        <Providers>
          <Nav> </Nav>
        {children}
      
        </Providers>
        
        </body>
    </html>
  )
}
