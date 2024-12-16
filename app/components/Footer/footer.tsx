import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const Footer = () => {
  return (
    <div>
    <footer className='w-full h-[488px] hidden lg:block'>
    <div className='h-[142px] gap-[577.7px] justify-center items-center flex flex-row'>
    <h3 className='text-[#252B42] text-[24px] font-bold'>Bandage</h3>

    <div className='flex flex-row gap-[20px]'>
    I <Image src='/images/facebook.svg' alt='facebook logo' width={24} height={24}/>
      <Image src='/images/instagram.svg' alt='instagram logo' width={24} height={24} />
      <Image src='/images/twitter.svg' alt='twitter logo' width={24} height={24} />
    </div>

    </div>
    <hr className='w-[1057px]' />

    <div className='h-[272px] flex flex-row justify-center items-center gap-[30px] ml-[40px]'>
        <div className='flex flex-col font-bold gap-[10px]'>
            <h5 className='text-[#252B42] text-[16px]'>Company Info</h5>
            <div className='text-[#737373]'><Link href='/'>About Us</Link></div>
            <div className='text-[#737373]'><Link href='/'>Carrier</Link></div>
            <div className='text-[#737373]'><Link href='/'>We are hiring</Link></div>
            <div className='text-[#737373]'><Link href='/'>Blog</Link></div>
        </div>

        <div className='flex flex-col font-bold gap-[10px]'>
            <h5 className='text-[#252B42] text-[16px]'>Legal</h5>
            <div className='text-[#737373]'><Link href='/'>About Us</Link></div>
            <div className='text-[#737373]'><Link href='/'>Carrier</Link></div>
            <div className='text-[#737373]'><Link href='/'>We are hiring</Link></div>
            <div className='text-[#737373]'><Link href='/'>Blog</Link></div>
        </div>

        <div className='flex flex-col font-bold gap-[10px]'>
            <h5 className='text-[#252B42] text-[16px]'>Features</h5>
            <div className='text-[#737373]'><Link href='/'>Business Marketing</Link></div>
            <div className='text-[#737373]'><Link href='/'>User Analytic</Link></div>
            <div className='text-[#737373]'><Link href='/'>Live Chat</Link></div>
            <div className='text-[#737373]'><Link href='/'>Unlimited Support</Link></div>
        </div>

        <div className='flex flex-col font-bold gap-[10px]'>
            <h5 className='text-[#252B42] text-[16px]'>Resources</h5>
            <div className='text-[#737373]'><Link href='/'>IOS & Android</Link></div>
            <div className='text-[#737373]'><Link href='/'>Watch a Demo</Link></div>
            <div className='text-[#737373]'><Link href='/'>Customers</Link></div>
            <div className='text-[#737373]'><Link href='/'>API</Link></div>
        </div>

        <div className='flex flex-col gap-[20px]'>
        <h5 className='text-[#252B42] text-[16px] font-bold mt-[-35px]'>Get In Touch</h5>  
        <form action="">
        <div className='w-[321px] h-[58px] border-[1px] border-solid flex overflow-hidden rounded-lg'>   
        <input type="text" placeholder='Your Email' className='pl-[20px]' />
        <button className='bg-[#23A6F0] text-white w-[117px]'>Subscribe</button>
        </div>

        <div className='text-[#737373]'>Lore imp sum dolor Amit</div>
        </form>
        </div>

    </div>

    <div className='h-[74px] bg-[#FAFAFA] flex flex-col justify-center'>
       <h6 className='text-[#737373] text-[14px] font-bold ml-[100px]'> Made With Love By Finland All Right Reserved </h6>
        </div>

        </footer>

  {/* For Mobile */}
  <footer className='w-full h-[1342px] block lg:hidden'>
  <div className='h-[173px] gap-[11.5px] bg-[#FAFAFA] justify-center flex flex-col pl-[40px]'>
    <h3 className='text-[#252B42] text-[24px] font-bold'>Bandage</h3>

    <div className='flex flex-row gap-[20px]'>
    I <Image src='/images/facebook.svg' alt='facebook logo' width={24} height={19.76}/>
      <Image src='/images/instagram.svg' alt='instagram logo' width={24} height={19.76} />
      <Image src='/images/twitter.svg' alt='twitter logo' width={24} height={19.76} />
    </div>

    </div>

    <div className='h-[1071px] flex flex-col gap-[30px] ml-[40px]'>
        <div className='flex flex-col font-bold gap-[10px]'>
            <h5 className='text-[#252B42] text-[16px]'>Company Info</h5>
            <div className='text-[#737373]'>About Us</div>
            <div className='text-[#737373]'>Carrier</div>
            <div className='text-[#737373]'>We are hiring</div>
            <div className='text-[#737373]'>Blog</div>
        </div>

        <div className='flex flex-col font-bold gap-[10px]'>
            <h5 className='text-[#252B42] text-[16px]'>Legal</h5>
            <div className='text-[#737373]'>About Us</div>
            <div className='text-[#737373]'>Carrier</div>
            <div className='text-[#737373]'>We are hiring</div>
            <div className='text-[#737373]'>Blog</div>
        </div>

        <div className='flex flex-col font-bold gap-[10px]'>
            <h5 className='text-[#252B42] text-[16px]'>Features</h5>
            <div className='text-[#737373]'>Business Marketing</div>
            <div className='text-[#737373]'>User Analytic</div>
            <div className='text-[#737373]'>Live Chat</div>
            <div className='text-[#737373]'>Unlimited Support</div>
        </div>

        <div className='flex flex-col font-bold gap-[10px]'>
            <h5 className='text-[#252B42] text-[16px]'>Resources</h5>
            <div className='text-[#737373]'>IOS & Android</div>
            <div className='text-[#737373]'>Watch a Demo</div>
            <div className='text-[#737373]'>Customers</div>
            <div className='text-[#737373]'>API</div>
        </div>

        <div className='flex flex-col gap-[20px]'>
        <h5 className='text-[#252B42] text-[16px] font-bold'>Get In Touch</h5>  
        <form action="">
        <div className='w-[321px] h-[58px] border-[1px] border-solid flex overflow-hidden rounded-lg'>   
        <input type="text" placeholder='Your Email' className='pl-[20px]' />
        <button className='bg-[#23A6F0] text-white w-[117px]'>Subscribe</button>
        </div>

        <div className='text-[#737373]'>Lore imp sum dolor Amit</div>
        </form>
        </div>

    </div>

    <div className='h-[98px] bg-[#FAFAFA] flex flex-col justify-center items-center'>
       <h6 className='text-[#737373] text-[14px] font-bold ml-[100px] text-center'> Made With Love By <br />Finland All Right Reserved </h6>
        </div>

  </footer>
    </div>
  )
}

export default Footer
