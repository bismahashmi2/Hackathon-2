import React from 'react'
import Image from 'next/image'

const Hero = () => {
  return (
    <div>
    {/* New collcetion */}

    <div className='text-white font- relative'>
    <div className='hidden lg:block'>
      <Image
      src='/images/hero girl 1.svg'
      alt='hero img1'
      width={1440} 
      height={716} />

    <div className='absolute top-36 left-44 w-full h-full flex flex-col ' >
        <h5 className='text-[16px]'>SUMMER 2020</h5>
        <h1 className='text-[48px] font-bold mt-[14px]'>NEW COLLECTION</h1>
        <h4 className='text-[20px] mt-[10px]'>We know how large objects will act, <br />
        but things on small scale.</h4>
        <button className='bg-[#2DC071] w-[221px] h-[62px] text-[24px] rounded-lg font-bold mt-[20px]'>SHOP NOW</button>
    </div>
    </div>

    {/* For Mobile */}
    <div className='block lg:hidden'>
        <Image 
        src='/images/hero mob img.svg'
        alt='hero img'
        width={414}
        height={753} 
        className='w-full mt-[130px]'/>
    </div>

    </div>
     
     {/* Edito's Pick */}

     <div className='w-full h-[770px] bg-[#FAFAFA] hidden lg:block'>
    <div className='flex flex-col justfy-center items-center pt-[70px]'>
      <h3 className='text-[24px] text-[#252B42] font-bold'>EDITOR'S PICK</h3>
      <p className='text-[14px] text-[#737373] mt-[5px]'>Problems trying to resolve the conflict between </p>
    </div>

    <div className='flex flex-row mt-[60px] space-x-4 ml-2'>
        <Image src='/images/men.svg' alt='men' width={510} height={500}/>
        <Image src='/images/women.svg' alt='women' width={240} height={500}/>
       <div className='flex flex-col space-y-7'>
       <Image src='/images/accessories.svg' alt='accessories' width={240} height={242}/>
       <Image src='/images/kids.svg' alt='kids' width={240} height={242}/>
       </div>
    </div>
    </div>

    {/* // For Mobile */}
    <div className='h-[1850px] bg-[#FAFAFA] block lg:hidden flex flex-col justfy-center items-center'>

    <div className='flex flex-col justfy-center items-center pt-[70px]'>
      <h3 className='text-[24px] text-[#252B42] font-bold'>EDITOR'S PICK</h3>
      <p className=' text-[14px] text-[#737373] mt-[5px] w-[196px] text-center'>Problems trying to resolve <br /> the conflict between </p>
    </div>

    <div className='mt-[40px] space-y-6 flex flex-col justfy-center items-center'>
    <Image src='/images/men.svg' alt='men' width={510} height={500}/>
    <Image src='/images/women.svg' alt='women' width={240} height={500}/>

   <div className='space-y-4'>
   <Image src='/images/accessories.svg' alt='accessories' width={240} height={242}/>
   <Image src='/images/kids.svg' alt='kids' width={240} height={242}/>
   </div>

    </div>

    </div>


    {/* Bestseller Products */}

    <div className='w-full h-[1652px] hidden lg:block'>

        <div className='font-bold mt-[102px] space-y-[10px] flex flex-col justify-center items-center'>
        <h4 className='text-[#737373] text-[20px]'>Featured Products</h4>
        <h3 className='text-[#252B42] text-[24px]'>BESTSELLER PRODUCTS</h3>
        <p className='text-[#737373] text-[14px]'>Problems trying to resolve the conflict between </p>
        </div>

        <div className='flex flex-col mt-[82px]'>
        <div className='flex flex-row space-x-[20px] ml-[40px]'>
            <Image src ='/images/GD 1.svg' alt='gd 1' width={238} height={615} />
            <Image src ='/images/GD 2.svg' alt='gd 2' width={238} height={615} />
            <Image src ='/images/GD 3.svg' alt='gd 3' width={238} height={615} />
            <Image src ='/images/GD 4.svg' alt='gd 4' width={238} height={615} />
        </div>

        <div className='flex flex-row mt-[62px] space-x-[20px] ml-[40px]'>
            <Image src ='/images/GD 5.svg' alt='gd 5' width={238} height={615} />
            <Image src ='/images/GD 6.svg' alt='gd 6' width={238} height={615} />
            <Image src ='/images/GD 7.svg' alt='gd 7' width={238} height={615} />
            <Image src ='/images/GD 8.svg' alt='gd 8' width={238} height={615} />
        </div>

        </div>
        
        </div>

        {/* For Mobile */}
        <div className='w-full h-[5510px] block lg:hidden'>
            
            <div className='font-bold mt-[102px] space-y-[10px] flex flex-col justify-center items-center'>
            <h4 className='text-[#737373] text-[20px]'>Featured Products</h4>
            <h3 className='text-[#252B42] text-[24px]'>BESTSELLER PRODUCTS</h3>
            <p className='text-[#737373] text-[14px] w-[261px] text-center'>Problems trying to resolve the <br /> conflict between </p>
            </div>

            <div className='flex flex-col justify-center items-center space-y-6 mt-[80px]'>
            <Image src ='/images/GD 1.svg' alt='gd 1' width={328} height={615} />
            <Image src ='/images/GD 2.svg' alt='gd 2' width={328} height={615} />
            <Image src ='/images/GD 3.svg' alt='gd 3' width={328} height={615} />
            <Image src ='/images/GD 4.svg' alt='gd 4' width={328} height={615} />
            <Image src='/images/mob gd 1.svg' alt='gd 1' width={328} height={615} />
            <Image src='/images/mob gd 2.svg' alt='gd 2' width={328} height={615} />
            <Image src='/images/mob gd 2.svg' alt='gd 2' width={328} height={615} />
            <Image src='/images/mob gd 3.svg' alt='gd 3' width={328} height={615} />
            </div>

        </div>

     {/* Vita Classic Product */}

     <div className='h-[711px] bg-[#23856D] text-white font-bold  w-full hidden lg:block'>
      
      <div className='flex flex-row'>

      <div className='flex flex-col ml-[166px]'>
        
      <h4 className='text-[20px] pt-[170px]'>SUMMER 2020</h4>
      <h1 className='text-[48px] mt-[22px]'>Vita Classic Product</h1>
      <p className='text-[14px] mt-[22px]'>We know how large objects will act, We know <br />
      how are objects will act, We know</p>
      
      <div className='flex flex-row'>
      <h3 className='text-[24px] mt-[22px]'>$16.48</h3>
      <button className='w-[184px] h-[52px] bg-[#2DC071] mt-[15px] ml-[25px] rounded-lg text-[14px] font-bold'>ADD TO CART</button>
      </div>

      </div>

      <Image src='/images/Vita img.svg' alt='Vita' width={403} height={645}
      className='pt-[170px] mr-[40px]' />

      </div>
    
    </div>

    {/* For Mobile */}
    <div className='h-[1230px] bg-[#23856D] text-white font-bold block lg:hidden mt-[750px]'>
    <div className='flex flex-col justify-center items-center'>
        
        <h4 className='text-[20px] pt-[170px] '>SUMMER 2020</h4>
        <h1 className='text-[48px] mt-[22px] text-center'>Vita Classic <br /> Product</h1>
        <p className='text-[14px] mt-[22px] text-center'>We know how large objects <br /> will act,
         but things on a <br /> small scale.</p>
        
        <div className='flex flex-col justify-center items-center'>
        <h3 className='text-[24px] mt-[22px]'>$16.48</h3>
        <button className='w-[184px] h-[52px] bg-[#2DC071] mt-[15px] rounded-lg text-[14px] font-bold'>
        ADD TO CART</button>
        </div>

        <Image src='/images/Vita img.svg' alt='Vita' width={416} height={681}
        className='pt-[95px]' />

        </div>
    </div>

    
    {/* Universe */}

    <div className='h-[682px] w-full hidden lg:block'>
      <div className='flex flex-row'>
        
        <Image src='/images/Universe img.svg' alt='Universe img' width={544} height={462} 
        className='ml-[40px]'/>

        <div className='flex flex-col ml-[20px]'>

        <h5 className='text-[#BDBDBD] text-[16px]  mt-[120px]'>SUMMER 2020</h5>
        <h2 className='text-[40px] text-[#252B42] font-bold  mt-[20px]'>Part of the Neural Universe</h2>
        <h4 className='text-[20px] text-[#737373] font-bold'>We know how large objects will act, 
        <br /> but things on a small scale.</h4>
        
        <div className='flex flex-row text-[14px] font-bold gap-[10px] mt-[20px]'>
        <button className='bg-[#2DC071] w-[156px] h-[52px] rounded-lg text-white'>BUY NOW</button>
        <button className='border-[#2DC071] text-[#2DC071] border-[1px] rounded-lg w-[156px] h-[52px]'>READ MORE</button>
        </div>

        </div>
        
        </div>
    </div>

    {/* For Mobile */}
    <div className='h-[911.25px] w-full block lg:hidden'>
    <div className='flex flex-col justify-center items-center'>

     <div className='flex flex-col ml-[20px] text-center'>

      <h5 className='text-[#BDBDBD] text-[16px]  mt-[120px]'>SUMMER 2020</h5>
      <h2 className='text-[40px] text-[#252B42] font-bold  mt-[20px]'>Part of the <br />
       Neural <br /> Universe</h2>
      <h4 className='text-[20px] text-[#737373] font-bold'>We know how large <br />
      objects will act, but <br /> things on a small scale.</h4>
  
     <div className='flex flex-col justify-center items-center text-[14px] font-bold space-y-[25px] mt-[20px]'>
      <button className='bg-[#23A6F0] w-[156px] h-[52px] rounded-lg text-white'>BUY NOW</button>
      <button className='border-[#23A6F0] text-[#23A6F0] border-[1px] rounded-lg w-[156px] h-[52px]'>READ MORE</button>
      </div>

      </div>

      <Image src='/images/universe img 2.svg' alt='Universe img' width={414} height={407} 
      className='ml-[40px]'/>

    </div>
     </div>

     
     {/* Posts */}
     <div className='hidden lg:block'>
      <div className='font-bold flex flex-col justify-center items-center'>
      <h6 className='text-[14px] text-[#23A6F0]'>Practice Advice</h6>
      <h2 className='text-[40px] text-[#252B42]'>Featured Posts</h2>
      <p className='text-[14px] text-[#737373] text-center mt-[15px]'>Problems trying to resolve the conflict between <br />the two major realms of Classical physics: Newtonian mechanics </p>
    </div>

    <div className='flex flex-row mt-[70px] gap-[10px]'>

        {/* For Road Image */}
     <div className='flex flex-col border-[0.5px] border-solid border-[#737733] h-[606px]'>
        <Image src='/images/Road.svg' alt='Road' width={348} height={300}/>

        <div className='ml-[24px]'>

        <div className='space-x-[15px] mt-[20px]'>
            <small className='text-[12px] text-[#8EC2F2]'>Google</small>
            <small className='text-[12px] text-[#737733]'>Trending</small>
            <small className='text-[12px] text-[#737373]'>New</small>
        </div>
        
        <div>
        <h4 className='text-[20px] text-[#252B42] mt-[12px]'>Loudest à la Madison #1 
        <br /> (L'integral) </h4>

        <p className='text-[14px] text-[#737373] mt-[10px]'>We focus on ergonomics and meeting <br />
         you where you work. It's only a <br /> keystroke away.</p>
         </div>
         
         <div className='flex flex-row space-x-[80px] mt-[18px]'>
         <div className='flex flex-row gap-[5px]'>
            <Image src='/images/clock icn.svg' alt='clock' width={16} height={16} />
            <small className='text-[12px] text-[#737373]'>22 April 2021</small>
         </div>

         <div className='flex flex-row gap-[5px]'>
            <Image src='/images/cmnt icn.svg' alt='cmnt' width={16} height={16} />
            <small className='text-[12px] text-[#737373]'>10 comments</small>
         </div>
         </div>

         <div className='flex flex-row gap-[10px] mt-[18px]'>
         <h6 className='text-[14px] text-[#737373] font-bold'>Learn More</h6>
        <Image src='/images/arrow right.svg' alt='right arrow' width={9} height={16} />
         </div>

     </div>

     </div>
     
     {/* For Foxi Image */}
     <div className='flex flex-col border-[0.5px] border-solid border-[#737733] h-[606px]'>
        <Image src='/images/Foxi.svg' alt='Foxi' width={348} height={300}/>

        <div className='ml-[24px]'>

        <div className='space-x-[15px] mt-[20px]'>
            <small className='text-[12px] text-[#8EC2F2]'>Google</small>
            <small className='text-[12px] text-[#737373]'>Trending</small>
            <small className='text-[12px] text-[#737373]'>New</small>
        </div>
        
        <div>
        <h4 className='text-[20px] text-[#252B42] mt-[12px]'>Loudest à la Madison #1 
        <br /> (L'integral) </h4>

        <p className='text-[14px] text-[#737373] mt-[10px]'>We focus on ergonomics and meeting <br />
         you where you work. It's only a <br /> keystroke away.</p>
         </div>
         
         <div className='flex flex-row space-x-[80px] mt-[18px]'>
         <div className='flex flex-row gap-[5px]'>
            <Image src='/images/clock icn.svg' alt='clock' width={16} height={16} />
            <small className='text-[12px] text-[#737373]'>22 April 2021</small>
         </div>

         <div className='flex flex-row gap-[5px]'>
            <Image src='/images/cmnt icn.svg' alt='cmnt' width={16} height={16} />
            <small className='text-[12px] text-[#737373]'>10 comments</small>
         </div>
         </div>

         <div className='flex flex-row gap-[10px] mt-[18px]'>
         <h6 className='text-[14px] text-[#737373] font-bold'>Learn More</h6>
        <Image src='/images/arrow right.svg' alt='right arrow' width={9} height={16} />
         </div>

     </div>

     </div>
     
     {/* For Umbrella Image */}
     <div className='flex flex-col border-[0.5px] border-solid border-[#737733] h-[606px]'>
        <Image src='/images/Umbrellas.svg' alt='Umbrellas' width={348} height={300}/>

        <div className='ml-[24px]'>

        <div className='space-x-[15px] mt-[20px]'>
            <small className='text-[12px] text-[#8EC2F2]'>Google</small>
            <small className='text-[12px] text-[#737373]'>Trending</small>
            <small className='text-[12px] text-[#737373]'>New</small>
        </div>
        
        <div>
        <h4 className='text-[20px] text-[#252B42] mt-[12px]'>Loudest à la Madison #1 
        <br /> (L'integral) </h4>

        <p className='text-[14px] text-[#737373] mt-[10px]'>We focus on ergonomics and meeting <br />
         you where you work. It's only a <br /> keystroke away.</p>
         </div>
         
         <div className='flex flex-row space-x-[80px] mt-[18px]'>
         <div className='flex flex-row gap-[5px]'>
            <Image src='/images/clock icn.svg' alt='clock' width={16} height={16} />
            <small className='text-[12px] text-[#737373]'>22 April 2021</small>
         </div>

         <div className='flex flex-row gap-[5px]'>
            <Image src='/images/cmnt icn.svg' alt='cmnt' width={16} height={16} />
            <small className='text-[12px] text-[#737373]'>10 comments</small>
         </div>
         </div>

         <div className='flex flex-row gap-[10px] mt-[18px]'>
         <h6 className='text-[14px] text-[#737373] font-bold'>Learn More</h6>
        <Image src='/images/arrow right.svg' alt='right arrow' width={9} height={16} />
         </div>

     </div>

     </div>

    </div>

    </div>


     {/* For Mobile */}
     <div className='block lg:hidden mt-[140px] h-[2302px]'>
      <div className='font-bold flex flex-col justify-center items-center'>
      <h6 className='text-[14px] text-[#23A6F0] pt-[10px]'>Practice Advice</h6>
      <h2 className='text-[40px] text-[#252B42] pt-[10px]'>Featured <br /> Products</h2>
      <p className='text-[14px] text-[#737373] text-center mt-[8px]'>
    Problems trying to resolve the <br />conflict between the two major</p>
    </div>

    <div className='flex flex-col mt-[70px] gap-[30px] justify-center items-center'>

        {/* For Rainbow Image */}
     <div className='flex flex-col border-[0.5px] border-solid h-[606px] w-[303px]'>
        <Image src='/images/mob rainbow.svg' alt='rainbow' width={348} height={300}/>

        <div className='ml-[24px]'>

        <div className='space-x-[15px] mt-[20px]'>
            <small className='text-[12px] text-[#8EC2F2]'>Google</small>
            <small className='text-[12px] text-[#737733]'>Trending</small>
            <small className='text-[12px] text-[#737373]'>New</small>
        </div>
        
        <div>
        <h4 className='text-[20px] text-[#252B42] mt-[12px]'>Loudest à la Madison #1 
        <br /> (L'integral) </h4>

        <p className='text-[14px] text-[#737373] mt-[10px]'>We focus on ergonomics and meeting <br />
         you where you work. It's only a <br /> keystroke away.</p>
         </div>
         
         <div className='flex flex-row space-x-[80px] mt-[18px]'>
         <div className='flex flex-row gap-[5px]'>
            <Image src='/images/clock icn.svg' alt='clock' width={16} height={16} />
            <small className='text-[12px] text-[#737373]'>22 April 2021</small>
         </div>

         <div className='flex flex-row gap-[5px]'>
            <Image src='/images/cmnt icn.svg' alt='cmnt' width={16} height={16} />
            <small className='text-[12px] text-[#737373]'>10 comments</small>
         </div>
         </div>

         <div className='flex flex-row gap-[10px] mt-[18px]'>
         <h6 className='text-[14px] text-[#737373] font-bold'>Learn More</h6>
        <Image src='/images/arrow right.svg' alt='right arrow' width={9} height={16} />
         </div>

     </div>

     </div>
     
     {/* For Windows Image */}
     <div className='flex flex-col border-[0.5px] border-solid h-[606px] w-[303px]'>
        <Image src='/images/mob colored windows.svg' alt='windows' width={348} height={300}/>

        <div className='ml-[24px]'>

        <div className='space-x-[15px] mt-[20px]'>
            <small className='text-[12px] text-[#8EC2F2]'>Google</small>
            <small className='text-[12px] text-[#737373]'>Trending</small>
            <small className='text-[12px] text-[#737373]'>New</small>
        </div>
        
        <div>
        <h4 className='text-[20px] text-[#252B42] mt-[12px]'>Loudest à la Madison #1 
        <br /> (L'integral) </h4>

        <p className='text-[14px] text-[#737373] mt-[10px]'>We focus on ergonomics and meeting <br />
         you where you work. It's only a <br /> keystroke away.</p>
         </div>
         
         <div className='flex flex-row space-x-[80px] mt-[18px]'>
         <div className='flex flex-row gap-[5px]'>
            <Image src='/images/clock icn.svg' alt='clock' width={16} height={16} />
            <small className='text-[12px] text-[#737373]'>22 April 2021</small>
         </div>

         <div className='flex flex-row gap-[5px]'>
            <Image src='/images/cmnt icn.svg' alt='cmnt' width={16} height={16} />
            <small className='text-[12px] text-[#737373]'>10 comments</small>
         </div>
         </div>

         <div className='flex flex-row gap-[10px] mt-[18px]'>
         <h6 className='text-[14px] text-[#737373] font-bold'>Learn More</h6>
        <Image src='/images/arrow right.svg' alt='right arrow' width={9} height={16} />
         </div>

     </div>

     </div>
     
     {/* For Canvas Image */}
     <div className='flex flex-col border-[0.5px] border-solid h-[606px] w-[303px]'>
        <Image src='/images/mob canvas.svg' alt='canvas' width={348} height={300}/>

        <div className='ml-[24px]'>

        <div className='space-x-[15px] mt-[20px]'>
            <small className='text-[12px] text-[#8EC2F2]'>Google</small>
            <small className='text-[12px] text-[#737373]'>Trending</small>
            <small className='text-[12px] text-[#737373]'>New</small>
        </div>
        
        <div>
        <h4 className='text-[20px] text-[#252B42] mt-[12px]'>Loudest à la Madison #1 
        <br /> (L'integral) </h4>

        <p className='text-[14px] text-[#737373] mt-[10px]'>We focus on ergonomics and meeting <br />
         you where you work. It's only a <br /> keystroke away.</p>
         </div>
         
         <div className='flex flex-row space-x-[80px] mt-[18px]'>
         <div className='flex flex-row gap-[5px]'>
            <Image src='/images/clock icn.svg' alt='clock' width={16} height={16} />
            <small className='text-[12px] text-[#737373]'>22 April 2021</small>
         </div>

         <div className='flex flex-row gap-[5px]'>
            <Image src='/images/cmnt icn.svg' alt='cmnt' width={16} height={16} />
            <small className='text-[12px] text-[#737373]'>10 comments</small>
         </div>
         </div>

         <div className='flex flex-row gap-[10px] mt-[18px]'>
         <h6 className='text-[14px] text-[#737373] font-bold'>Learn More</h6>
        <Image src='/images/arrow right.svg' alt='right arrow' width={9} height={16} />
         </div>

     </div>

     </div>

    </div>

    </div>


    </div>
  )
}

export default Hero
