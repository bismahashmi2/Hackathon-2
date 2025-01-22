import React from 'react'
import Image from 'next/image'

const Header = () => {

  return (
    <header className='hidden lg:block w-full h-[58px] bg-[#252B42] '>
      <nav className='h-[46px] pt-[9px] ml-[2px] text-white'>
    <div className='flex justify-between pl-[24px] pr-[24px] text-[14px]'>

    <div className='flex gap-[10px] w-[415px]'>
      <button className='w-[145px] h-[44px] p-[10px] flex gap-[5px]'>
    
      <Image 
      src="/images/phone icn.svg"
      alt="phone"
      width={16}
      height={16} 
      />
      
      <h6 className='w-[104px] h-[24px] font-bold'> (225) 555-0118</h6>
    
    </button>
      
      <button className='w-[260px] h-[44px] p-[10px] flex gap-[5px]'>
      <Image 
      src="/images/email icn.svg"
      alt="email"
      width={16}
      height={16} 
       />

      <h6 className='w-[219px] h-[44px] font-bold'>michelle.rivera@example.com</h6>
      </button>

      </div>

      <div className='w-[332px] h-[44px] p-[10px] flex gap-[10px]'>
        <h6 className='w-[312px] h-[24px] font-bold'>Follow Us and get a chance to win 80% off</h6>
        </div>

      <div className='flex w-[233px] gap-[10px] p-[10px]'>
        <h6 className='w-[83px] h-[24px] font-bold'>Follow Us  :</h6>
        
        <div className='w-[120px] h-[26px] flex'>
          <a href="" className='w-[26px] h-[26px] p-[5px] flex gap-[10px]'>
        <Image
         src="/images/insta icn.svg"
         alt="insta"
         width={16}
         height={16}
          />
          </a>
        
        <a href="" className='w-[26px] h-[26px] p-[5px] flex gap-[10px]'>
        <Image
         src="/images/utube icn.svg"
         alt="utube"
         width={16}
         height={16}
          />
          </a>
        
        <a href="" className='w-[26px] h-[26px] p-[5px] flex gap-[10px]'>
        <Image
         src="/images/facebk icn.svg"
         alt="facebk"
         width={16}
         height={16}
          />
        </a>
        
        <a href="" className='w-[26px] h-[26px] p-[5px] flex gap-[10px]'>
        <Image
         src="/images/twitr icn.svg"
         alt="twitr"
         width={16}
         height={16}
          />
          </a>
          
         </div>
      </div>
   </div>
      </nav>
    </header>
  );
};

export default Header
 