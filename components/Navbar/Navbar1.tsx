"use client"
import React, {useState, useEffect} from 'react'
import Image from 'next/image'
import Link from 'next/link'

const Navbar = () => {
  
    const [isDropdownOpen , setisDropdownOpen] = useState (false);

    const toggleDropdown = () => {
      setisDropdownOpen (!isDropdownOpen);
    };

    useEffect (() => {
      const handleOutsideClick = (menu: any) => {
        if (!menu.target.closest ('.dropdown-list')) {
          setisDropdownOpen(false);
        }
      };
      document.addEventListener("click", handleOutsideClick);
      return () => {
        document.removeEventListener ("click", handleOutsideClick)
      }
    }, [])
  
  return (
    <div className='overflow-x-hidden flex'>
      <h3 className='text-[#252B42] text-[24px] ml-8 mt-5 font-bold'>Bandage</h3>

      {/* For Mobile  */}
      <div className='w-full flex flex-col lg:hidden'>
      <div className='flex space-x-8 ml-[100px] mt-5'>
        <Image src="/images/search icn.svg" alt="search" width={24} height={24}/>
        <Image src="/images/shop cart.svg" alt="shop" width={24} height={22.4}/>

        <button 
        onClick= { toggleDropdown }
        aria-label='Toggle Menu'>
        <Image src="/images/menu icn.svg" alt="menu" width={24} height={13.71}/>
        </button>
      </div>

       {isDropdownOpen && (
        <nav className='w-full text-center mt-[164px]'>
        <ul className='space-y-[30px] text-[30px] text-[#737373]'>
          <li><Link href="/">Home</Link></li>
          <li><Link href="/productList">Shop</Link></li>
          <li><Link href="/about">About</Link></li>
          <li><Link href="/">Contact</Link></li>
        </ul>
        </nav>
       )}

      </div>

      {/* For Laptop */}
      <nav className='hidden lg:flex h-[58px] w-full justify-between items-center ml-[87px] relative'>
      <div className='flex'>
        <ul className='text-[14px] flex text-[#737373] gap-[15px]'>
            <li className='font-bold'><Link href="/">Home</Link></li>
            <div className='flex gap-[10px] dropdown-list'>
            <li className='text-[#252B42] flex cursor-pointer gap-[6px]'>
            <Link href="/productList">Shop</Link>
            <span className='cursor-pointer dropdown-arrow'
            onClick={(e) => {
              e.stopPropagation();  //prevent closing when clicking the arrow
            setisDropdownOpen(!isDropdownOpen)}}>
              {isDropdownOpen? 
                <span>&#x25B2;</span> //downward arrow
               : 
                <span>&#x25BC;</span> //upward arrow
              }
            </span> 
            {isDropdownOpen && (
              <div className='absolute top-[100%] bg-white text-black rounded-md shadow-md p-3'>
                <ul className='space-y-2'>
                  <li className='hover:bg-gray-200 rounded-sm'>
                  <Link href="/productList/products">Product</Link>
                  </li>
                  <li className='hover:bg-gray-200 rounded-sm'>
                  <Link href="/productList/pricing">Pricing</Link>
                  </li>
                  <li className='hover:bg-gray-200 rounded-sm'>
                  <Link href="/shop/sale">Sale</Link>
                  </li>
                </ul>
              </div>
            )}
            </li>
            </div>

            <li className='font-bold'><Link href='/about'>About</Link></li>
            <li className='font-bold'><Link href='/'>Blog</Link></li>
            <li className='font-bold'><Link href='/'>Contact</Link></li>
            <li className='font-bold'><Link href='/'>Pages</Link></li>
        </ul>
      </div>

      
      <div className='flex space-x-5 items-center w-[324px]'>
        <ul className='flex'>
        <li className='w-[166px]'>
          <Link href="">
            <button className='p-[15px] flex gap-[5px] text-[14px] font-bold text-[#23A6F0]'>
            <Image src='/images/login icn.svg' alt='login' width={12} height={12} className='mt-[1.5px]'/>
            Login / Register
            </button>
          </Link>
        </li>
        <li>
          <Link href=''>
          <button>
          <Image src='/images/search.svg' alt='search' width={46} height={46} />
          </button></Link>
        </li>
        <li>
          <Link href=''>
          <button><Image src='/images/cart icn.svg' alt='cart' width={56} height={46} />
          </button></Link>
        </li>
        <li>
          <Link href=''>
          <button>
          <Image src='/images/fav icn.svg' alt='icn' width={56} height={46} />
          </button></Link>
        </li>
        </ul>
      
       </div>
       
       </nav>

    </div>
  )
}

export default Navbar
