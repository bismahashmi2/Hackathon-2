import React from 'react'
import Link from 'next/link';
import Image from 'next/image';

const About = () => {
  return (
    <div className='overflow-x-hidden'>
        <div className='hidden lg:block'>
    <div className='w-full h-[729px] flex relative'>
    <Image src='/images/background.svg' alt='background' width={1440} height={729} 
    className='absolute top-[-50px] left-0 object-cover -z-10' /> 

    {/* Navbar Section */}
    <header className='h-[91px] flex w-full justify-between px-[59px]'>
        <div className='w-[187px] mt-[16px] ml-[59px] flex items-center'>
        <h3 className='text-[#252B42] text-[24px] font-bold'>Bandage</h3>
        </div>

         <nav className='h-[24px] mt-[17px] h-[58px] w-[815px] flex items-center'>
         <ul className='flex gap-[21px] text-[20px] font-bold text-[#737373]'>
                <li><Link href='/' aria-label='Go to home page'>Home</Link></li>
                <li><Link href='/productList' aria-label='View products'>Product</Link></li>
                <li><Link href='/productList/pricing' aria-label='View pricing'>Pricing</Link></li> 
                <li><Link href='/contact' aria-label='Contact us'>Contact</Link></li>     
                </ul>
                <div className='h-[52px] mt-[2px] ml-[115px] flex items-center gap-[45px] w-[300px] text-[14px] font-bold'>
                    <div className='h-[22px] w-[41px] justify-center flex flex-col'>
                        <Link href="" className='text-[#23A6F0]'>
                            <span>Login</span>
                        </Link>
                    </div>
            
                    <button className='w-[214px] h-[48px] bg-[#23A6F0] rounded-[5px] flex items-center justify-center'>
                        <span className='text-white flex items-center gap-[15px]'>Become a member
                            <span> {`\u2794`} </span>
                        </span>

                    </button>
                    
                </div>
            </nav>   
    </header>

    {/* About Section */}
    <div className='w-[1050px] h-[545px] absolute mt-[104px] flex pt-[112px]  ml-[155px]'>
        <div className='ml-auto w-[1044px] h-[321px] flex gap-[30px]'>
            <div className='w-[599px] flex flex-col gap-[35px]'>
        <h5 className='text-[#252B42] font-bold text-[16px]'>ABOUT COMPANY</h5>
        <h1 className='text-[#252B42] font-bold text-[58px]'>ABOUT US</h1>
        <h4 className='text-[#737373] text-[20px]'>We know how large objects will act,<br />
         but things on a small scale</h4>
         <button  className='w-[195px] h-[52px] rounded-lg text-center bg-[#23A6F0] text-white font-bold text-[14px]'>
        Get Quote Now</button>
        </div>
        </div>
    </div>
    </div>
    
    <div className='w-full h-[236px] flex justify-center pt-[24px] pb-[24px]'>
    <div className='w-[1018px] h-[188px] flex gap-[60px]'>
    <div className='h-[188px] w-[394px] flex flex-col justify-center gap-[80px]'>
     <div className='h-[140px] flex flex-col gap-[24px]'>
     <p className='text-[#E74040] text-[14px]'>Problems trying</p>
     <h2 className='text-[#252B42] text-[24px] font-bold w-[394px]'>Met minim Mollie non desert  Alamo est sit cliquey dolor do  met sent.</h2>
     </div>
    </div>

    <div className='w-[529px] flex items-center gap-[49px]'>
    <p className='text-[#737373] text-[14px]'>Problems trying to resolve the conflict between the two major realms of Classical physics: Newtonian mechanics </p>
    </div>
    </div>
    </div>

    <div className='w-full h-[264px] flex justify-center'>
        <div className='w-[1050px] flex gap-[50px] pt-[80px] pb-[80px]'>
            <div className='w-[1049px] h-[104px] flex gap-[30px]'>

               <div className='w-[238px] flex flex-col justify-center items-center'>
                <h1 className='text-[58px] font-bold text-[#252B42]'>15K</h1>
                <h5 className='text-[#737373] font-bold text-[16px]'>Happy Customers</h5>
            </div>

            <div className='w-[241px] flex flex-col justify-center items-center'>
                <h1 className='text-[58px] font-bold text-[#252B42]'>150K</h1>
                <h5 className='text-[#737373] font-bold text-[16px]'>Monthly Visitors</h5>
            </div>
  
            <div className='w-[240px] flex flex-col justify-center items-center'>
                <h1 className='text-[58px] font-bold text-[#252B42]'>15</h1>
                <h5 className='text-[#737373] font-bold text-[16px]'>Countries Worldwide</h5>
            </div>

            <div className='w-[240px] flex flex-col justify-center items-center'>
                <h1 className='text-[58px] font-bold text-[#252B42]'>100+</h1>
                <h5 className='text-[#737373] font-bold text-[16px]'>Top Partners</h5>
            </div>

        </div>
        </div>
    </div>

    <div className='h-[764px] flex justify-center'>
        <Image src='/images/video card.svg' alt='video card' width={989} height={540} />
    </div>

    <div className='h-[819px] flex flex-col items-center'>
        <div className='flex flex-col items-center gap-[10px] w-[607px] h-[100px]'>
            <h2 className='w-[316px] h-[50px] text-[#252B42] text-[40px] font-bold text-center'>Meet Our Team</h2>
            <p className='w-[469px] h-[40px] text-[#737373] text-[14px] font-bold text-center'>Problems trying to resolve the conflict between <br />the two major realms of Classical physics: Newtonian mechanics </p>
        </div>

        <div className='h-[383px] gap-[30px] flex mt-[112px]'>
            <Image src='/images/card-item (4).svg' alt='team member1' width={316} height={383} />
            <Image src='/images/card-item (5).svg' alt='team member2' width={329} height={383} />
            <Image src='/images/card-item (6).svg' alt='team member3' width={329} height={383} />
        </div>
    </div>

    <div className='pt-[80px] pb-[80px] h-[479px] bg-[#FAFAFA] flex flex-col items-center'>
        <div className='flex flex-col items-center gap-[30px] w-[864px] h-[120px]'>
            <h2 className='w-[496px] h-[50px] text-[#252B42] text-[40px] font-bold'>Big Companies Are Here</h2>
            <p className='w-[547px] h-[40px] text-[#737373] text-[14px] font-bold text-center'>Problems trying to resolve the conflict between <br />the two major realms of Classical physics: Newtonian mechanics </p>
        </div>

        <div className='h-[175px] pt-[50px] pb-[50px] flex gap-[30px]'>
            <Image src='/images/hooli.svg' alt='logo' width={102.99} height={33.81} />
             <Image src='/images/lyat.svg' alt='logo' width={83} height={58.96} />
             <Image src='/images/leaf.svg' alt='logo' width={102} height={74.84} />
             <Image src='/images/stripe.svg' alt='logo' width={102.98} height={41.98} />
             <Image src='/images/aws.svg' alt='logo' width={103.68} height={61.75} />
             <Image src='/images/bear.svg' alt='logo' width={75.75} height={71.86} />
        </div>
    
   </div>
    
    <div className='h-[636px] bg-[#2A7CC7] flex'>
        <div className='text-white flex flex-col justify-center gap-[24px] ml-[195px]'>
            <h5 className='text-[16px] font-bold'>WORK WITH US</h5>
            <h2 className='text-[40px] font-bold'>Now Let&apos;s grow Yours</h2>
            <p className='text-[14px] w-[440px]'>The gradual accumulation of information about atomic and <br /> small-scale behavior during the first quarter of the 20th 
            </p>
            <button className='w-[132px] h-[52px] text-[14px] font-bold border-[1px] border-solid flex rounded-[5px] pt-[15px] pb-[15px] pr-[40px] pl-[40px]'>Button</button>
            </div>
 
           <div className='flex-1 flex justify-end'>
           <Image src={'/images/promotion girl.svg'} alt='promotion girl' width={590} height={640} />
           </div>
    </div>
    </div>
    
    {/* for Mobile */}
    <div className='flex flex-col justify-center items-center lg:hidden'>
    <div className='flex flex-col h-[1,071px] gap-[41px]'>
    
    <div className='w-full h-[590px] flex flex-col gap-[40px] justify-center items-center'>
        <h1 className='text-[#252B42] font-bold text-[40px] text-center'>ABOUT US</h1>
        <h4 className='text-[#737373] text-[20px] text-center'>We know how large <br /> objects will act,
         but things <br />on a small scale just do <br /> not act that way.</h4>
         <button className='w-[195px] h-[52px] rounded-lg bg-[#23A6F0] text-white font-bold text-[14px]'>Get Quote Now</button>
    </div>
    <div className='flex flex-col justify-center items-center h-[440px]'>
    <Image src='/images/bg.svg' alt='background' width={387} height={440}  />
    </div>
    </div>

    <div className='h-[500px] flex flex-col pt-[80px] pb-[80px] items-center gap-[60px]'>
    <div className='h-[172px] flex flex-col gap-[24px] text-center'>
     <p className='text-[#E74040] text-[14px]'>Problems trying</p>
     <h2 className='text-[#252B42] text-[24px] font-bold w-[269px]'>Met minim Mollie non desert  Alamo est sit cliquey dolor do  met sent.</h2>
    </div>

    <div className='h-[60px] w-[306px] flex gap-[38px] justify-center items-center'>
    <p className='text-[#737373] text-[14px]'>Problems trying to resolve the conflict between the two major realms of Classical physics: Newtonian mechanics </p>
    </div>

    </div>

    <div className='h-[1006px] flex flex-col items-center'>
        <div className='h-[806px] w-[329px] flex flex-col items-center gap-[100px] pt-[45px] pb-[45px]'>

            <div className='w-[238px] flex flex-col items-center'>
                <h1 className='text-[58px] font-bold text-[#252B42]'>15K</h1>
                <h5 className='text-[#737373] font-bold text-[16px]'>Happy Customers</h5>
            </div>

            <div className='w-[241px] flex flex-col items-center'>
                <h1 className='text-[58px] font-bold text-[#252B42]'>150K</h1>
                <h5 className='text-[#737373] font-bold text-[16px]'>Monthly Visitors</h5>
            </div>
  
            <div className='w-[240px] flex flex-col items-center'>
                <h1 className='text-[58px] font-bold text-[#252B42]'>15</h1>
                <h5 className='text-[#737373] font-bold text-[16px]'>Countries Worldwide</h5>
            </div>

            <div className='w-[240px] flex flex-col items-center'>
                <h1 className='text-[58px] font-bold text-[#252B42]'>100+</h1>
                <h5 className='text-[#737373] font-bold text-[16px]'>Top Partners</h5>
            </div>

        </div>
    </div>

    <div className='h-[477px]'>
        <Image src='/images/video card mob.svg' alt='video card' width={307} height={316} />
    </div>

    <div className='h-[1627px] flex flex-col items-center'>
        <div className='flex flex-col items-center gap-[20px] h-[280px] pt-[45px] pb-[45px]'>
            <h2 className='h-[100px] text-[#252B42] text-[40px] font-bold text-center'>Meet Our <br /> Team</h2>
            <p className='h-[80px] text-[#737373] text-[14px] font-bold text-center'>Problems trying to resolve <br /> the conflict between the two major <br /> realms of Classical physics: <br /> Newtonian mechanics </p>
        </div>

        <div className='flex flex-col gap-[30px]'>
            <Image src='/images/card-item (7).svg' alt='team member1' width={316} height={403} />
            <Image src='/images/card-item (8).svg' alt='team member2' width={329} height={403} />
            <Image src='/images/card-item (9).svg' alt='team member3' width={329} height={403} />
        </div>
    </div>

    <div className='w-full h-[1444px] bg-[#FAFAFA] flex flex-col items-center'>
        <div className='h-[1192px] mt-[120px]'>
        <div className='flex flex-col items-center gap-[30px] w-[318px] h-[240px]'>
            <h2 className='text-[#252B42] text-[40px] font-bold text-center'>Big Companies Are Here</h2>
            <p className='text-[#737373] text-[14px] font-bold text-center'>Problems trying to resolve the conflict between <br />the two major realms of Classical physics: Newtonian mechanics </p>
        </div>

        <div className='h-[952px] pt-[50px] pb-[50px] flex flex-col bg-[#FAFAFA] justify-center items-center gap-[60px]'>
              <Image src='/images/hooli.svg' alt='logo' width={148.98} height={48.73} />
              <Image src='/images/lyat.svg' alt='logo' width={139} height={98.93} />
              <Image src='/images/leaf.svg' alt='logo' width={149} height={108.77} />
              <Image src='/images/stripe.svg' alt='logo' width={148.98} height={59.98} />
              <Image src='/images/aws.svg' alt='logo' width={152.53} height={91.92} />
              <Image src='/images/bear.svg' alt='logo' width={148.52} height={141.72} />
              </div>
    </div>
   </div>
    
    <div className='w-full h-[520px] bg-[#2A7CC7] flex flex-col'>
        <div className='text-white flex flex-col  items-center mt-[60px] gap-[36px]'>
            <h5 className='text-[16px] font-bold text-center'>WORK WITH US</h5>
            <h2 className='text-[40px] font-bold'>Now Let&apos;s <br />grow Yours</h2>
            <p className='text-[14px] text-center'>The gradual accumulation of <br />information about atomic and <br />
            small-scale behavior during the <br /> first quarter of the 20th 
            </p>
            <button className='w-[132px] h-[52px] text-[14px] font-bold border-[1px] border-solid flex rounded-[5px] pt-[15px] pb-[15px] pr-[40px] pl-[40px]'>Button</button>
            </div>
    </div>
    </div>


 </div>
    
  )
}

export default About;
