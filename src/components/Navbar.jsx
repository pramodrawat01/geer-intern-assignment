import React from 'react'
import { Link } from 'react-router-dom'
import { CiSearch } from "react-icons/ci";
import { CiUser } from "react-icons/ci";
import { MdKeyboardArrowDown } from "react-icons/md";
import { SlArrowDown } from "react-icons/sl";
import { IoIosArrowDown } from "react-icons/io";

const Navbar = () => {
  return (
    <div className='px-8 h-[50px] flex items-center justify-between shadow-xl'>
        <div className=''>
           <Link > N.jewels</Link>
        </div>
        <div className='flex gap-6'>

            {/* RINGS */}
            <div className='group relative'>
                <div className='flex items-center gap-1 '>
                    <Link>RINGS </Link>
                    <IoIosArrowDown className=' font-thin group-hover:rotate-180 transition-transform duration-100'/>
                </div>

                {/* Dropdown Menu */}
                <div className="absolute left-[-480px] right-0 top-[100%] w-screen bg-white shadow-lg rounded-md p-2 z-50 opacity-0 translate-y-[-10px] invisible 
                group-hover:opacity-100 group-hover:translate-y-0 group-hover:visible
                transition-all duration-300 ease-in-out flex justify-around">

                    <ul className="flex flex-col gap-4 font-thin ">
                        <p className='text-2xl font-normal'>shop by design</p>
                        <li>
                            <Link to="/rings/engagement" className="hover:text-red-500">Engagement Rings</Link>
                        </li>
                        <li>
                            <Link to="/rings/wedding" className="hover:text-red-500">Wedding Bands</Link>
                        </li>
                        <li>
                            <Link to="/rings/diamond" className="hover:text-red-500">Diamond Rings</Link>
                        </li>
                        <li>
                            <Link to="/rings/gold" className="hover:text-red-500">Gold Rings</Link>
                        </li>
                        
                    </ul>

                    <ul className="flex flex-col gap-4 font-thin ">
                        <p className='text-2xl font-normal'>show by price</p>
                        <li>
                            <Link to="/rings/engagement" className="hover:text-red-500">Engagement Rings</Link>
                        </li>
                        <li>
                            <Link to="/rings/wedding" className="hover:text-red-500">Wedding Bands</Link>
                        </li>
                        
                    </ul>

                    <ul className="flex flex-col gap-4 font-thin ">
                        <p className='text-2xl font-normal'>show by ocasion</p>
                        <li>
                            <Link to="/rings/engagement" className="hover:text-red-500">Engagement Rings</Link>
                        </li>
                        <li>
                            <Link to="/rings/wedding" className="hover:text-red-500">Wedding Bands</Link>
                        </li>
                        <li>
                            <Link to="/rings/diamond" className="hover:text-red-500">Diamond Rings</Link>
                        </li>
                       
                    </ul>
                </div>

            </div>

            <Link>NECKLACE</Link>

            {/* EARRINGS */}
            <div className='group relative'>
                <div className='flex items-center gap-1 '>
                    <Link>EARRINGS </Link>
                    <IoIosArrowDown className=' font-thin group-hover:rotate-180 transition-transform duration-100'/>
                </div>

                {/* Dropdown Menu */}
                <div className="absolute left-[-560px] right-0 top-[100%] w-screen bg-white shadow-lg rounded-md p-2 z-50 opacity-0 translate-y-[-10px] invisible 
                group-hover:opacity-100 group-hover:translate-y-0 group-hover:visible
                transition-all duration-300 ease-in-out flex justify-around">

                    <ul className="flex flex-col gap-4 font-thin ">
                        <p className='text-2xl font-normal'>shop EARRINGS</p>
                        <li>
                            <Link to="/rings/engagement" className="hover:text-red-500">Engagement Rings</Link>
                        </li>
                        <li>
                            <Link to="/rings/wedding" className="hover:text-red-500">Wedding Bands</Link>
                        </li>
                        <li>
                            <Link to="/rings/diamond" className="hover:text-red-500">Diamond Rings</Link>
                        </li>
                        <li>
                            <Link to="/rings/gold" className="hover:text-red-500">Gold Rings</Link>
                        </li>
                        
                    </ul>

                    <ul className="flex flex-col gap-4 font-thin ">
                        <p className='text-2xl font-normal'>show by price</p>
                        <li>
                            <Link to="/rings/engagement" className="hover:text-red-500">Engagement Rings</Link>
                        </li>
                        <li>
                            <Link to="/rings/wedding" className="hover:text-red-500">Wedding Bands</Link>
                        </li>
                        
                    </ul>

                    <ul className="flex flex-col gap-4 font-thin ">
                        <p className='text-2xl font-normal'>show by ocasion</p>
                        <li>
                            <Link to="/rings/engagement" className="hover:text-red-500">Engagement Rings</Link>
                        </li>
                        <li>
                            <Link to="/rings/wedding" className="hover:text-red-500">Wedding Bands</Link>
                        </li>
                        <li>
                            <Link to="/rings/diamond" className="hover:text-red-500">Diamond Rings</Link>
                        </li>
                       
                    </ul>
                </div>

            </div>
            

            
            <Link>OTHER JEWELLERY</Link>
            <Link>ABOUT</Link>
            <Link>CONTACT</Link>
        </div>

        <div className='flex gap-4'>
            <CiSearch  className=''/>

            <Link>
                <CiUser />
            </Link>
        </div>
    </div>
  )
}

export default Navbar