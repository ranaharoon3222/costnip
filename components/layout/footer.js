import Image from 'next/image';
import Link from 'next/link';
import React from 'react'
import { BsFacebook, BsTwitter, BsInstagram } from "react-icons/bs";

const Footer = () => {
    return (
        <div className='bg-[#F8F8F8] py-8'>
            <div className='w-[90%] max-w-[1300px] mx-[auto] grid grid-cols-1 md:grid-cols-4'>
                <ul className='text-[#132758]'>
                    <li className='font-bold pb-4'>Tools & info</li>
                    <li>  <Link href='/pricecare'>Pricecare Search</Link></li>
                    <li> <Link href='/billupload'> Bill Upload </Link></li>
                </ul>
                <ul className='text-[#132758]'>
                    <li className='font-bold pb-4'>Discover</li>
                    <li><Link href='/spotlight'>Health Spotlight</Link></li>
                    <li> <Link href='/resource-library'> Resource Library</Link></li>
                </ul>
                <ul className='text-[#132758]'>
                    <li className='font-bold pb-4'>Support</li>
                    <li> <Link href="/faq">FAQs</Link> </li>
                    <li> <Link href="/patnership">Partnerships</Link></li>
                </ul>
                <ul className='text-[#132758]'>
                    <li className='font-bold pb-4'>Company</li>
                    <li> <Link href="/about"> About Costnip </Link></li>
                    <li> <Link href="/contact">Contact </Link> </li>
                </ul>
            </div>
            <div className="divider w-[97%] mx-[auto] h-[3px] bg-[#132758]"></div>

            <div className='w-[90%] max-w-[1300px] mx-[auto] grid grid-cols-1 md:grid-cols-3 gap-y-4'>
                <div className='text-center'>
                    <Image className='m-[auto]'
                        src="/costniplogo.png"
                        alt="Picture of the author"
                        width={150}
                        height={150}
                    />
                    <h2 className='text-[#132758]'>Empowering informed Decisions</h2>
                </div>
                <div className='text-center'>
                    <h2 className='text-[#132758]'>Copyright &copy;2023 Costnip, inc</h2>
                    <h2 className='text-[#132758]'>
                        <Link href='/terms-coundiation'> Terms of Service </Link> |
                        <Link href='/privacy'> Privacy Policy </Link>
                    </h2>
                </div>
                <div className='flex justify-center'>
                    <BsFacebook className='mr-6 text-3xl' />
                    <BsTwitter className='mr-6 text-3xl' />
                    <BsInstagram className=' text-3xl' />

                </div>
            </div>
        </div>
    )
}

export default Footer;