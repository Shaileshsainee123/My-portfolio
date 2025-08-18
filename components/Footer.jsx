import React from 'react'
import { Instagram,  Linkedin ,Github} from 'lucide-react'
import Link from 'next/link';

const Footer = () => {
    const getCurrentYear =  new Date().getFullYear();
  return (
    <footer className='bg-[#00d2b5] py-18'>
    <div className='flex flex-col items-center gap-4'>
     <div className='flex gap-4 '>
        <div className='bg-white rounded-full p-3 cursor-pointer hover:shadow-lg'>
          <Link href='https://www.linkedin.com/in/shailesh-sainee-63a7101a3/' target='_blank'>
            <Linkedin className='transition ease-in-out delay-150 duration-300 hover:scale-110' size={30} color='#00d2b5'/>
          </Link>
        </div>
        <div className='bg-white rounded-full p-3 cursor-pointer hover:shadow-lg'>
          <Link href='https://github.com/Shaileshsainee123' target='_blank'>
            <Github className='transition ease-in-out delay-150 duration-300 hover:scale-110' size={30} color='#00d2b5'/>
          </Link>
        </div>
        <div className='bg-white rounded-full p-3 cursor-pointer hover:shadow-lg'>
          <Link href='https://www.instagram.com/shaileshsainee/' target='_blank'>
            <Instagram className='transition ease-in-out delay-150 duration-300 hover:scale-110' size={30} color='#00d2b5'/>
          </Link>
        </div>
     </div>
     <h2 className='text-white'>© {getCurrentYear}. All Rights Reserved. Designed by <a className='font-bold cursor-pointer underline' href='#home'>Shailesh</a></h2>

    </div>

    </footer>
  )
}

export default Footer