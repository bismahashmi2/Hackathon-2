import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const Navbar = () => {
  return (
    <div className='flex flex-row'>
      <h3 className='text-[#252B42] text-[24px] ml-8 mt-5 font-bold'>Bandage</h3>

      <div className='block lg:hidden'>
      <div className='flex flex-row space-x-8 ml-[330px] mt-5'>
        <Image src="/images/search icn.svg" alt="search" width={24} height={24}/>
        <Image src="/images/shop cart.svg" alt="shop" width={24} height={22.4}/>
        <Image src="/images/menu icn.svg" alt="menu" width={24} height={13.71}/>
      </div>

      {/* For Mobile  */}
      <div className='text-[30px] text-[#737373] mt-[164px] flex justify-center items-center'>
        <nav>
        <ul className='space-y-[30px]'>
          <li><Link href="/">Home</Link></li>
          <li><Link href="/">Shop</Link></li>
          <li><Link href="/">About</Link></li>
          <li><Link href="/">Blog</Link></li>
          <li><Link href="/">Contact</Link></li>
          <li><Link href="/">Pages</Link></li>
        </ul>
        </nav>
      </div>

      </div>

      <nav className='hidden lg:block'>
        <ul className='text-[14px] flex flex-row text-[#737373] mt-[28px] ml-[100px] gap-[15px]'>
            <li className='font-bold'><Link href="/">Home</Link></li>
            <div className='flex flex-row gap-[10px]'>
            <li className='text-[#252B42]'> <Link href="/shop">Shop</Link></li>
            <Image src="/images/Arrow down.svg" alt="Arrow" width={10} height={10}/>
            </div>
            <li className='font-bold'><Link href='/'>About</Link></li>
            <li className='font-bold'><Link href='/'>Blog</Link></li>
            <li className='font-bold'><Link href='/'>Contact</Link></li>
            <li className='font-bold'><Link href='/'>Pages</Link></li>
        </ul>
      </nav>

      <div className='hidden lg:block'>
      <div className='flex flex-row ml-[170px]'>
       <span className='space-x-1 flex flex-row'>
       <Image src='/images/login icn.svg' alt='login' width={12} height={12} className='mt-[18px]'/>
       <Link href="/" className='text-[#23A6F0] text-[14px] font-bold mt-[31px]'> Login / Register</Link>
       </span>
        <Image src='/images/search.svg' alt='search' width={46} height={46} className='mt-[18px] ml-[5px]' />
        <Image src='/images/cart icn.svg' alt='cart' width={56} height={46} className='mt-[18px]' />
        <Image src='/images/fav icn.svg' alt='icn' width={56} height={46} className='mt-[18px]' />
       </div>
       </div>

    </div>
  )
}

export default Navbar
