import React, { useState } from 'react'
import { FaBars, FaTimes } from 'react-icons/fa'
import { Link } from 'react-scroll';

const Navbar = () => {

    const [nav, setNav] = useState(false);

    const links = [
        {
            id: 1,
            link: 'home'
        },
        {
            id: 2,
            link: 'about'
        },
        {
            id: 3,
            link: 'portfolio'
        },
        {
            id: 4,
            link: 'experience'
        },
        {
            id: 5,
            link: 'contact'
        }
    ]

    return (
        <div className='flex justify-between z-10 items-center w-full h-20 fixed text-white bg-black px-4'>
            <div>
                <h1 className=' font-signature text-5xl ml-2 cursor-pointer'><Link to='home' smooth duration={500}>Mahesh</Link></h1>
            </div>


            <ul className=" hidden md:flex">
                {links.map((link) => (
                    <li key={link.id} className=' px-4 cursor-pointer capitalize font-medium text-gray-500 hover:scale-105 duration-200'><Link to={link.link} smooth duration={500}>{link.link}</Link></li>

                ))}
            </ul>

            <div onClick={() => setNav(!nav)} className=' cursor-pointer pr-1 z-10 text-gray-500 md:hidden'>
                {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
            </div>

            {nav && (
                <ul className='flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-gradient-to-b from-black to-gray-800 to-gray-500'>
                    {links.map((link) => (
                        <li key={link.id} className=' px-4 cursor-pointer capitalize py-6 text-4xl text-gray-500'><Link onClick={() => setNav(!nav)} to={link.link} smooth duration={500}>{link.link}</Link></li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default Navbar;