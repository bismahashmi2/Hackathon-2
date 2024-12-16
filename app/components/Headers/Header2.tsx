import React from 'react'
import Image from 'next/image'

const Header = () => {
  return (
    <header className='w-full h-[58px] bg-[#23856D] text-white hidden lg:block lg:flex items-center'>
    <div className='flex justify-between items-center space-x-20 text-[14px] mt-[8px]'>

    <div className='flex flex-row space-x-6'>
    <div className='flex flex-row'>
      <Image 
      src="/images/phone icn.svg"
      alt="phone"
      width={16}
      height={16} 
      className='ml-6'/>
      
      <h6 className=' ml-2'> (225) 555-0118</h6>
    </div>
      

      <div className='flex flex-row'>
      <Image 
      src="/images/email icn.svg"
      alt="email"
      width={16}
      height={16} 
       />

      <h6 className=' ml-2'>michelle.rivera@example.com</h6>
      </div>

      </div>

      <div className='ml-[10px]'>Follow Us and get a chance to win 80% off</div>

      <div className='flex flex-row space-x-2'>
        <h6>Follow Us  :</h6>
        
        <div className='space-x-4 flex flex-row'>
        <Image
         src="/images/insta icn.svg"
         alt="insta"
         width={16}
         height={16}
          />

        <Image
         src="/images/utube icn.svg"
         alt="utube"
         width={16}
         height={16}
          />

        <Image
         src="/images/facebk icn.svg"
         alt="facebk"
         width={16}
         height={16}
          />

        <Image
         src="/images/twitr icn.svg"
         alt="twitr"
         width={16}
         height={16}
          />
          
         </div>

         </div>

      </div>
    </header>
  )
}

export default Header
 