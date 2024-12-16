import React from 'react';
import Image from 'next/image';
import Breadcrumb from './page2';
import Product1 from './product1/page';

const breadcrumbItems = [
  { label: 'Home', href: '/' },
  { label: 'Shop' },
];

const productlist = () => {
 
  return (
    <div>
    
      <div className='h-[92px] pt-[24px] pb-[24px] bg-[#FAFAFA]'>
        <div className='h-[44px] flex gap-[30px] w-[1049px]'>
        <h2 className='text-[24px] ml-8 font-bold w-[510px]'>Shop</h2>
        <div className='w-[509px] gap-[5px]'><Breadcrumb items= {breadcrumbItems}/></div>
        </div>
      </div>

      <div className='h-[271px] bg-[#FAFAFA]'>
      <div className='h-[223px] flex justify-center items-center gap-[15px]'>
             
             <Image src= '/images/shopcard1.svg' alt='shopcard1' width={205} height={223}/>
             <Image src= '/images/shopcard2.svg' alt='shopcard2' width={205} height={223}/>
             <Image src= '/images/shopcard3.svg' alt='shopcard3' width={205} height={223}/>
             <Image src= '/images/shopcard4.svg' alt='shopcard4' width={205} height={223}/>  
           </div>
      </div>
    
    

    <div className='h-[98px] pt-[24px] pb-[24px] space-x-[80px]'>
      <div className='w-[1049px] h-[50px] gap-[80px] flex items-center justify-center gap-[15px]'>
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


    <div className='flex flex-col'>
      <div className='flex gap-[30px]'>
        <Image src="/images/SGD 1.svg" alt='SGD' width={238} height={488}/>
        <Image src="/images/SGD 2.svg" alt='SGD' width={238} height={488}/>
        <Image src="/images/SGD 3.svg" alt='SGD' width={238} height={488}/>
        <Image src="/images/SGD 4.svg" alt='SGD' width={238} height={488}/>
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
     <Image src='/images/pagination.svg' alt='pagination' width={313} height={7} />
     </div>

    <Product1 />
    </div>

    
  )
 
}

export default productlist;




  
