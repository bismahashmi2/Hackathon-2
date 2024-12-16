import React from 'react'
import Image from 'next/image'
import Breadcrumb from '../page2'
import Link from 'next/link';

const breadcrumbItems = [
    { label: 'Home', href: '/' },
    { label: 'Shop' },
  ];

  
const Product1 = () => {
  return (
    <div>
        {/* desktop-product-cards-42 */}
     <div className='h-[92px] pt-[24px] pb-[24px] bg-[#FAFAFA]'>
        <div className='h-[44px] flex gap-[30px] w-[1033px]'>
        <div className='w-[509px] gap-[5px] ml-8'><Breadcrumb items= {breadcrumbItems}/></div>
        </div>
      </div>

      <div className='h-[598px] bg-[#FAFAFA]'>
      <div className='h-[550px] gap-[30px]'>
        <div className='flex justify-center items-center'>
             
             <Image src= '/images/carousel-inner (1).svg' alt='shopcard1' width={506} height={450}/>
              <div className='w-[510px] h-[471px] ml-[24px]'>
                <h4 className='text-[20px] mt-[11px]'>Floating Phone</h4>
                <div className='flex gap-[10px] mt-[23px]'>
                <Image src='/images/stars.svg' alt='review rating' width={130.07} height={22.01}/>
                <h6 className='text-[14px] text-[#737373] font-bold'>10 Reviews</h6>
                </div>
                <h5 className='text-[24px] font-bold mt-[27px]'>$1,139.33</h5>
                <div className='gap-[5px] flex'>
                    <h6 className='text-[#737373] font-bold text-[14px]'>Availability  :</h6>
                    <h6 className='text-[#23A6F0] font-bold text-[14px]'>In Stock </h6>
                </div>
                <p className='w-[464px] text-[#858585] font-bold mt-[28px]'>Met minim Mollie non desert Alamo est sit cliquey dolor do met sent. RELIT official consequent
                 door ENIM RELIT Mollie. Excitation venial consequent sent nostrum met.</p>
                 <hr className='border-[#BDBDBD] border-[1px] border-solid w-[445px] mt-[15px]'/>
                 
                 <Image  src='/images/product-colors.svg' alt='product colors' width={150} height={30} className='mt-[26px]'/>

                 <div className='flex gap-[10px] mt-[73px]'>
                    <button className='w-[148px] h-[44px] bg-[#23A6F0] rounded-lg'><h6 className='text-white font-bold text-[14px]'>Select Options</h6></button>
                    <Image src='/images/like.svg' alt='like' width={40} height={40} />
                    <Image src='/images/basket.svg' alt='basket' width={40} height={40} />
                    <Image src='/images/eyes.svg' alt='eyes' width={40} height={40} />
                 </div>
              </div>
              </div>

              <div className='flex gap-[15px]'>
                <Image src='/images/brown chair.svg' alt='brown chair' width={100} height={75} />
                <Image src='/images/yellow sofa.svg' alt='yellow sofa' width={100} height={75} />
              </div>

           </div>
      </div>

      {/* desktop-product-description-1 */}

      <nav className='h-[91px]'>
        <div className='h-[72px] flex justify-center items-center '>
          <ul className='flex text-[14px] text-[#737373] font-bold gap-[44px]'>
          <li><Link href='' className='w-[134px]'>Description</Link></li>
         <li><Link href='' className='w-[220px]'>Additional Information</Link></li>
         <li><Link href='' className='w-[138px]'>Reviews 
         <span className='text-[#23856D] ml-[8px]'>(0)</span></Link></li>
          </ul>
        </div>
      </nav>

      <div className='h-[427px] gap-[30px] flex pt-[22px]'>
        <Image src='/images/card-item1.svg' alt='lounge' width={337} height={392} />

        {/* 1st column */}
        <div className='flex flex-col w-[332px]'>
          <h3 className='text-[24px] font-bold text-[#252B42]'>the quick fox jumps over </h3>
          <br />
          <p className='text-[#737373] text-[14px] font-bold'>Met minim Mollie non desert Alamo est sit 
            <br />
            cliquey dolor do met sent. RELIT official consequent door ENIM RELIT Mollie. 
            <br />
            Excitation venial consequent sent nostrum <br /> met. 
            <br /> <br />
            Met minim Mollie non desert Alamo est sit
            <br />
            cliquey dolor do met sent. RELIT official consequent door ENIM RELIT Mollie.
             <br /> Excitation venial consequent sent nostrum <br />met.
             <br /><br />
          Met minim Mollie non desert Alamo est sit <br /> cliquey dolor do met sent. RELIT official consequent door ENIM RELIT Mollie.<br /> Excitation venial consequent sent nostrum <br />met.</p>
        </div>


      {/* 2nd column */}
      <div className='flex flex-col'>
      <div className='flex flex-col w-[332px]'>
          <h3 className='text-[24px] font-bold text-[#252B42]'>the quick fox jumps over </h3><br />

        <div className='space-y-3'>
          <p className='text-[#737373] text-[14px] font-bold flex gap-[20px]'>
          <Image src='/images/dark vector.svg' alt='vector' width={8.62} height={16}/>
          the quick fox jumps over the lazy dog</p>
          
          <p className='text-[#737373] text-[14px] font-bold flex gap-[20px]'>
          <Image src='/images/dark vector.svg' alt='vector' width={8.62} height={16} />
          the quick fox jumps over the lazy dog</p>

          <p className='text-[#737373] text-[14px] font-bold flex gap-[20px]'>
          <Image src='/images/dark vector.svg' alt='vector' width={8.62} height={16} />
          the quick fox jumps over the lazy dog</p>

          <p className='text-[#737373] text-[14px] font-bold flex gap-[20px]'>
          <Image src='/images/dark vector.svg' alt='vector' width={8.62} height={16} />
          the quick fox jumps over the lazy dog</p>
          </div>
        </div>

        {/* 3rd col */}

        <div className='flex flex-col w-[332px] mt-[40px]'>
          <h3 className='text-[24px] font-bold text-[#252B42]'>the quick fox jumps over </h3><br />

        <div className='space-y-2'>
          <p className='text-[#737373] text-[14px] font-bold flex gap-[20px]'>
          <Image src='/images/dark vector.svg' alt='vector' width={8.62} height={16}/>
          the quick fox jumps over the lazy dog</p>
          
          <p className='text-[#737373] text-[14px] font-bold flex gap-[20px]'>
          <Image src='/images/dark vector.svg' alt='vector' width={8.62} height={16} />
          the quick fox jumps over the lazy dog</p>

          <p className='text-[#737373] text-[14px] font-bold flex gap-[20px]'>
          <Image src='/images/dark vector.svg' alt='vector' width={8.62} height={16} />
          the quick fox jumps over the lazy dog</p>

          <p className='text-[#737373] text-[14px] font-bold flex gap-[20px]'>
          <Image src='/images/dark vector.svg' alt='vector' width={8.62} height={16} />
          the quick fox jumps over the lazy dog</p>
          </div>
        </div>
        </div>

      </div>

     <div className='mt-[48px] bg-[#FAFAFA] h-[1086px]'>
       <h3 className='text-[#252B42] text-[24px] font-bold h-[32px] ml-[40px] gap-[10px]'>BESTSELLER PRODUCTS</h3>
              
      
              <div className='flex flex-col mt-[82px] justify-center items-center'>
              <div className='flex flex-row gap-[30px] ml-[40px]'>
                  <Image src ='/images/Fork knife.svg' alt='fork knife' width={238} height={442} />
                  <Image src ='/images/cup.svg' alt='cup' width={241} height={442} />
                  <Image src ='/images/Fork spoon.svg' alt='fork spoon' width={240} height={442} />
                  <Image src ='/images/cups.svg' alt='cups' width={239} height={442} />
              </div>
      
              <div className='flex flex-row mt-[62px] gap-[30px] ml-[40px]'>
                  <Image src ='/images/bowl.svg' alt='bowl' width={239} height={442} />
                  <Image src ='/images/stylish chair.svg' alt='chair' width={241} height={442} />
                  <Image src ='/images/Fork knife.svg' alt='Fork knife' width={239} height={442} />
                  <Image src ='/images/Fork spoon.svg' alt='Fork spoon' width={240} height={442} />
              </div>
      
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
    
     </div>
  )
}

export default Product1
