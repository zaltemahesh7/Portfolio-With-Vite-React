import React from 'react'
import HeroImage from '../assets/heroImageM.jpg'
import { MdOutlineKeyboardArrowRight } from 'react-icons/md'
import { Link } from 'react-scroll'

const Home = () => {
  return (
    <div name="home" className=' h-auto w-full bg-gradient-to-b from-black via-black to-gray-800 py-24'>
      <div className=' max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full md:px-4 max-sm:mx-5 md:flex-row'>
        <div className='flex flex-col justify-center h-full text-center md:text-left'>
          <h2 className=' text-5xl sm:text-7xl font-extrabold text-white mb-4'>I'm Mahesh Zalte</h2>
          <h3 className='text-3xl sm:text-5xl font-bold text-cyan-500 mb-4'>Full-Stack Developer (MERN) | AWS & Cloud Solutions</h3>
          <p className=' text-gray-400 py-4 max-w-md text-justify'>
            📍 Pune, Maharashtra
          </p>
          <p className=' text-gray-400 py-4 max-w-md text-justify'>
            Dynamic Full-Stack Developer (MERN) with 2+ years of experience in designing, developing, and deploying scalable web applications. Expertise in JavaScript, React.js, Node.js, Express.js, MongoDB, and AWS services. Passionate about writing clean, maintainable code and following Agile methodologies to drive development efficiency.
          </p>
          <div className='mt-6'>
            <Link to="portfolio" smooth duration={500} className='group text-white px-8 py-4 w-fit my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer hover:scale-105 transform transition duration-300'>
              View Portfolio
              <span className='group-hover:rotate-90 duration-300'><MdOutlineKeyboardArrowRight size={25} className='ml-1' /></span>
            </Link>
          </div>
        </div>
        <div className='mt-8 md:mt-0'>
          <img src={HeroImage} alt="My Profile" className='rounded-2xl mx-auto w-2/3 md:w-3/4 shadow-lg' />
        </div>
      </div>
    </div>
  )
}

export default Home;