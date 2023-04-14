import React from 'react'
import { BsFacebook, BsTwitter, BsInstagram } from "react-icons/bs";

const Footer = () => {
    return (
        <div className='bg-[#F8F8F8] py-8'>
            <div className='w-[90%] max-w-[1300px] mx-[auto] grid grid-cols-1 md:grid-cols-4'>
                <ul className='text-[#132758]'>
                    <li className='font-bold pb-4'>Tools & info</li>
                    <li>Pricecare Search</li>
                    <li>Bill Upload</li>
                </ul>
                <ul className='text-[#132758]'>
                    <li className='font-bold pb-4'>Discover</li>
                    <li>Health Spotlight</li>
                    <li>Resource Library</li>
                </ul>
                <ul className='text-[#132758]'>
                    <li className='font-bold pb-4'>Support</li>
                    <li>FAQs</li>
                    <li>Partnerships</li>
                </ul>
                <ul className='text-[#132758]'>
                    <li className='font-bold pb-4'>Company</li>
                    <li>About Costnip</li>
                    <li>Contact</li>
                </ul>
            </div>
            <div className="divider w-[97%] mx-[auto] h-[3px] bg-[#132758]"></div>

            <div className='w-[90%] max-w-[1300px] mx-[auto] grid grid-cols-1 md:grid-cols-3'>
                <div className='text-center'>
                    <img className='w-[100px] mx-[auto]' src="costniplogo.png" alt="logo" />
                    <h2 className='text-[#132758]'>Empowering informed Decisions</h2>
                </div>
                <div className='text-center'>
                    <h2 className='text-[#132758]'>Copyright &copy;2023 Costnip, inc</h2>
                    <h2 className='text-[#132758]'>Terms of Service | Privacy Policy</h2>
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