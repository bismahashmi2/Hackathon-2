import React from 'react'
import Image from 'next/image'

// const page = () => {
//   return (
//     <div className='w-full'>
//       <div className='bg-[#FAFAFA] flex flex-row  gap-[30px]'>
//         <h3 className='text-[24px] text-[#252B42] font-bold'>Shop</h3>
//         <div className='gap-[15px] flex flex-row'>
//         <span>Home</span>
//         <Image src='/images/Vector.svg' alt='Vector img' width={8.62} height={16}/>
//          <span>Shop</span>
//         </div>
        
//       </div>
      
//     </div>
//   )
// }

// export default page

import Link from 'next/link';

const Breadcrumbs = () => {
  return (
    <nav className="text-sm text-gray-600">
      <ol className="flex items-center space-x-2">
        <li>
          <Link legacyBehavior href="/">
            <a className="hover:text-blue-500">Home</a>
          </Link>
        </li>
        <li>
          <span className="mx-2 text-gray-400">/</span>
        </li>
        <li>
          <Link legacyBehavior href="/shop">
            <a className="hover:text-blue-500">Shop</a>
          </Link>
        </li>
        <li>
          <span className="mx-2 text-gray-400">/</span>
        </li>
        <li className="text-gray-800 font-semibold">Current Page</li>
      </ol>
    </nav>
  );
};

export default Breadcrumbs;

