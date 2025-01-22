"use client"
import React from 'react';
import Navbar from '@/components/Navbar/Navbar1';
import Image from 'next/image';
import Breadcrumb from './page2';
import Link from 'next/link';

const breadcrumbItems = [
  { label: 'Home', href: '/productList'},
  { label: 'Shop' },
];

const productlist = () => { 

  return (
    <div className='overflow-x-hidden'>
      <Navbar />
      <div className='w-full flex flex-col items-center lg:hidden'>
        
      <div className='bg-[#FAFAFA] h-[202px] p-[24px] w-full flex justify-center items-center'>
        <div className='h-[154px] gap-[30px]'>
          <div className='h-[80px] flex flex-col text-center'>
            <h2 className='text-[24px] text-[#252B42] font-bold'>Shop</h2>
          </div>
          <Breadcrumb items= {breadcrumbItems}/>
        </div>
     </div>

      <div className='bg-[#FAFAFA] flex justify-center items-center'>
      <div className='p-[24px] flex flex-col justify-center items-center gap-[18px]'>
            {[1, 2, 3, 4, 5].map((id) => (
              <Image 
              src={`/images/shopcard${id}.svg`}
              alt={`shopcard${id}`}
              width={332}
              height={300}/>
            )

            )}
           </div>
      </div>

      <div className='mt-[20px] w-full h-[216px] pt-[24px] pb-[24px] flex justify-center items-center'>
      <div className='w-[252px] h-[168px] gap-[24px] flex flex-col items-center justify-center'>
        <h1 className='text-[14px] font-bold'>Showing all 12 results </h1>
        <div className='w-[177px] h-[46px] pb-[1px] pr-[1px] gap-[15px] flex items-center'>
          <h6 className='text-[14px] font-bold w-[53px] h-[24px] text-[#737373]'>Views:</h6>
          <button className='border border-[#ECECEC] rounded p-[15px]'>
            <Image src="/images/icon.svg" alt='btn icn' width={16} height={16}/> </button>
            <button className='border border-[#ECECEC] rounded p-[15px]'>
            <Image src='/images/icon (1).svg' alt='btn icn' width={16} height={16}/></button>
        </div>
        <div className='w-[252px] h-[50px] pb-[1px] pr-[1px] gap-[10px] text-[14px] flex'>
          <div className='w-[141px] border border-[#DDDDDD] rounded flex'>
            <h1 className='text-[#737373] pt-[11px] pl-[18px] h-[28px] w-[74px]'>Popularity</h1>
          <Image src='/images/Vector (1).svg' alt='vector' width={8} height={14} className='ml-[15px] '/>
          </div>
          <button className='bg-[#23A6F0] w-[94px] h-[50px] rounded lg'>
            <h6 className='text-white font-bold text-center'>Filter</h6>
          </button>
        </div>
      </div>
    </div>


    <div className='flex flex-col pt-[80px] pb-[80px]'>
      <div className='flex flex-col gap-[30px]'> 
        {[1, 2, 4,].map ((id) => (
        
           <Image 
           src={`/images/SGD ${id}.svg`}
           alt={`SGD ${id}`}
           width={328}
           height={615} />
          
        )
        )}

      </div>
      
    <div className='flex items-center justify-center mt-[20px]'>
    <ul className='flex items-center justify-between w-[313px] h-[74px] border-[1.35px] rounded-[6.73px] border-solid border-[#BDBDBD]'>
    <Link href='/' className='p-[25px] w-[84px] bg-[#F3F3F3] rounded-l-[6.73px] text-[14px] font-bold text-[#BDBDBD] hover:text-[#23A6F0]'
    >First</Link>
    <Link href='' className='pr-[20px] pl-[20px] pt-[25px] text-[14px] text-[#23A6F0] font-bold w-[49px] border-[1px] border-[#E9E9E9] h-full hover:bg-[#23A6F0] hover:text-white'>
    1</Link>
    <Link href='/shop/product1' className='pr-[20px] pl-[20px] pt-[25px] text-[14px] text-[#23A6F0] font-bold w-[49px] border-[1px] border-[#E9E9E9] h-full hover:bg-[#23A6F0] hover:text-white'>2</Link>
    <Link href='' className='pr-[20px] pl-[20px] pt-[25px] text-[14px] text-[#23A6F0] font-bold w-[49px] border-[1px] border-[#E9E9E9] h-full hover:bg-[#23A6F0] hover:text-white'>3</Link>
    <Link href='' className='p-[25px] text-[14px] text-[#23A6F0] font-bold hover:bg-[#23A6F0] hover:text-white'>Next</Link>
    </ul>
    </div>
      
      <div className='w-full h-[952px] mt-[110px] pt-[50px] pb-[50px] flex flex-col bg-[#FAFAFA] justify-center items-center gap-[60px]'>
      <Image src='/images/hooli.svg' alt='logo' width={153} height={50} />
      <Image src='/images/lyat.svg' alt='logo' width={146} height={99} />
      <Image src='/images/leaf.svg' alt='logo' width={158} height={109} />
      <Image src='/images/stripe.svg' alt='logo' width={149} height={60} />
      <Image src='/images/aws.svg' alt='logo' width={151} height={92} />
      <Image src='/images/bear.svg' alt='logo' width={151} height={142} />
      </div>

    </div>
    
  </div>

      {/* For Laptop */}

      <div className='hidden lg:block w-full flex justify-center '>
      <div className='h-[92px] pt-[24px] pb-[24px] bg-[#FAFAFA]'>
        <div className='h-[44px] flex gap-[30px] w-[1049px]'>
        <h2 className='text-[24px] ml-8 font-bold w-[510px]'>Shop</h2>
        <div className='w-[509px] gap-[5px]'><Breadcrumb items= {breadcrumbItems}/></div>
        </div>
      </div>

      <div className='h-[271px] bg-[#FAFAFA] w-full'>
      <div className='h-[223px] flex gap-[15px] justify-center'>

             <Image src= '/images/shopcard1.svg' alt='shopcard1' width={190} height={223}/>
             <Image src= '/images/shopcard2.svg' alt='shopcard2' width={190} height={223}/>
             <Image src= '/images/shopcard3.svg' alt='shopcard3' width={190} height={223}/>
             <Image src= '/images/shopcard4.svg' alt='shopcard4' width={190} height={223}/> 
             <Image src= '/images/shopcard5.svg' alt='shopcard5' width={190} height={223}/> 
           
           </div>
      </div>
    
    <div className='h-[98px] pt-[24px] pb-[24px] flex justify-center gap-[80px]'>
      <div className='w-[1049px] h-[50px] flex justify-between'>
        <h1 className='text-[14px] font-bold'>Showing all 12 results </h1>
        <div className='w-[177px] h-[46px] pb-[1px] pr-[1px] gap-[15px] flex items-center'>
          <h6 className='text-[14px] font-bold w-[53px] h-[24px] text-[#737373]'>Views:</h6>
          <button className='border border-[#ECECEC] rounded p-[15px]'>
            <Image src="/images/icon.svg" alt='btn icn' width={16} height={16}/> </button>
            <button className='border border-[#ECECEC] rounded p-[15px]'>
            <Image src='/images/icon (1).svg' alt='btn icn' width={16} height={16}/></button>
        </div>
        <div className='w-[252px] h-[50px] pb-[1px] pr-[1px] gap-[10px] text-[14px] flex'>
          <div className='w-[141px] border border-[#DDDDDD] rounded flex'>
            <h1 className='text-[#737373] pt-[11px] pl-[18px] h-[28px] w-[74px]'>Popularity</h1>
          <Image src='/images/Vector (1).svg' alt='vector' width={8} height={14} className='ml-[15px] '/>
          </div>
          <button className='bg-[#23A6F0] w-[94px] h-[50px] rounded lg'>
            <h6 className='text-white font-bold text-center'>Filter</h6>
          </button>
        </div>
      </div>
    </div>


    <div className='flex flex-col items-center'>
      <div className='flex gap-[30px]'>
        <Image src="/images/SGD 1.svg" alt='SGD 1' width={238} height={488}/>
        <Image src="/images/SGD 2.svg" alt='SGD 2' width={238} height={488}/>
        <Image src="/images/SGD 3.svg" alt='SGD 3' width={238} height={488}/>
        <Image src="/images/SGD 4.svg" alt='SGD 4' width={238} height={488}/>
      </div>

      <div className='flex gap-[30px]'>
        <Image src="/images/SGD 5.svg" alt='SGD' width={238} height={488}/>
        <Image src="/images/SGD 6.svg" alt='SGD' width={238} height={488}/>
        <Image src="/images/SGD 7.svg" alt='SGD' width={238} height={488}/>
        <Image src="/images/SGD 8.svg" alt='SGD' width={238} height={488}/>
      </div>

      <div className='flex gap-[30px]'>
       <Image src="/images/SGD 9.svg" alt='SGD' width={238} height={488}/>
       <Image src="/images/SGD 10.svg" alt='SGD' width={238} height={488}/>
       <Image src="/images/SGD 11.svg" alt='SGD' width={238} height={488}/>
       <Image src="/images/SGD 12.svg" alt='SGD' width={238} height={488}/>
      </div>

    </div>

    <div className='bg-[#FAFAFA] h-[175px] flex items-center justify-center gap-[30px]'>
      <Image src='/images/hooli.svg' alt='logo' width={103} height={34} />
      <Image src='/images/lyat.svg' alt='logo' width={83} height={58.96} />
      <Image src='/images/leaf.svg' alt='logo' width={102} height={74.84} />
      <Image src='/images/stripe.svg' alt='logo' width={102.98} height={41.98} />
      <Image src='/images/aws.svg' alt='logo' width={103.68} height={61.75} />
      <Image src='/images/bear.svg' alt='logo' width={75.75} height={71.86} />
    </div>
     
     <div className='flex items-center justify-center mt-[20px]'>
    <ul className='flex items-center justify-between w-[313px] h-[74px] border-[1.35px] rounded-[6.73px] border-solid border-[#BDBDBD]'>
    <Link href='/' className='p-[25px] w-[84px] bg-[#F3F3F3] rounded-l-[6.73px] text-[14px] font-bold text-[#BDBDBD] hover:text-[#23A6F0]'
    >First</Link>
    <Link href='' className='pr-[20px] pl-[20px] pt-[25px] text-[14px] text-[#23A6F0] font-bold w-[49px] border-[1px] border-[#E9E9E9] h-full hover:bg-[#23A6F0] hover:text-white'>
    1</Link>
    <Link href='/product1/page' className='pr-[20px] pl-[20px] pt-[25px] text-[14px] text-[#23A6F0] font-bold w-[49px] border-[1px] border-[#E9E9E9] h-full hover:bg-[#23A6F0] hover:text-white'>2</Link>
    <Link href='' className='pr-[20px] pl-[20px] pt-[25px] text-[14px] text-[#23A6F0] font-bold w-[49px] border-[1px] border-[#E9E9E9] h-full hover:bg-[#23A6F0] hover:text-white'>3</Link>
    <Link href='' className='p-[25px] text-[14px] text-[#23A6F0] font-bold hover:bg-[#23A6F0] hover:text-white'>Next</Link>
    </ul>
    </div>
    </div>

    </div>
  )
 
}

export default productlist;




  
