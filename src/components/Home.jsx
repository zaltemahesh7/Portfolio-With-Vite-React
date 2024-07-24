import React from 'react'
import HeroImage from '../assets/heroImageM.jpg'
import { MdOutlineKeyboardArrowRight } from 'react-icons/md'
import { Link } from 'react-scroll'

const Home = () => {
  return (
    <div name="home" className=' h-auto w-full bg-gradient-to-b from-black via-black to-gray-800 py-24'>
      <div className=' max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full max-sm:px-4 md:mx-5 md:flex-row'>
        <div className='flex flex-col justify-center h-full'>
          <h2 className=' text-4xl sm:text-7xl font-bold text-white'>I'm Web Developer</h2>
          <p className=' text-gray-500 py-4 max-w-md text-justify'>
            👋Passionate web developer with a Bachelor's in Computer Science, currently pursuing an MCA. Skilled in JavaScript, React JS, Node.js, MongoDB, HTML5, CSS3, Bootstrap, Tailwind CSS, Git, and GitHub. Let's connect 😍.
          </p>
          <div>
            <Link to="portfolio" smooth duration={500} className=' group text-white px-6 py-3 w-fit my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer'>
              Portfolio
              <span className=' group-hover:rotate-90 duration-300'><MdOutlineKeyboardArrowRight size={25} className='ml-1' /></span>
            </Link>
          </div>
        </div>
        <div>
          <img src={HeroImage} alt="My Profile" className=' mt-5 rounded-2xl mx-auto w-2/3 md:w-3/4' />
        </div>
      </div>
    </div>
  )
}

export default Home;