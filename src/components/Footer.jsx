import React from 'react'
import { FaGithub, FaLinkedin } from 'react-icons/fa'
import { HiOutlineMail } from 'react-icons/hi'
import { BsFillPersonLinesFill } from 'react-icons/bs'

const Footer = () => {
    const links = [
        {
            id: 1,
            child: (
                <>
                    LinkedIn <FaLinkedin size={30} />
                </>
            ),
            href: 'https://linkedin.com/in/mahesh-zalte2000',
            style: ' rounded-tr-md'
        },
        {
            id: 2,
            child: (
                <>
                    GitHub <FaGithub size={30} />
                </>
            ),
            href: "",
        },
        {
            id: 3,
            child: (
                <>
                    Mail <HiOutlineMail size={30} />
                </>
            ),
            href: 'mailto:maheshzalte2000@gmail.com',
        },
        {
            id: 4,
            child: (
                <>
                    Resume <BsFillPersonLinesFill size={30} />
                </>
            ),
            href: '/Mahesh_Zalte-Resume-.pdf',
            style: ' rounded-br-md',
            download: true
        },
    ]
    return (
        <div className=' text-white flex flex-col bg-gradient-to-b from-gray-800 to-black items-center justify-center h-full '>
            <div>
                <ul className=' flex justify-around w-80 py-20'>
                    {links.map((link) => (
                        <li key={link.id} className=''><a className=' hover:cursor-pointer flex flex-col items-center gap-6' href={link.href}>{link.child}</a></li>
                    ))}
                </ul>
            </div>
            <p>&copy; 2023 Mahesh Zalte. All rights reserved</p>
        </div>
    )
}

export default Footer