import React from 'react';
import html from '../assets/html.png'
import css from '../assets/css.png'
import javascript from '../assets/javascript.png'
import reactImage from '../assets/react.png'
import nextjs from '../assets/nextjs.png'
import graphql from '../assets/graphql.png'
import github from '../assets/github.png'
import tailwind from '../assets/tailwind.png'

const Experience = () => {
    const Skills = [
        {
            id: 1,
            name: 'HTML',
            src: html,
            style: "shadow-[#f16529]"
        },
        {
            id: 2,
            name: 'CSS',
            src: css,
            style: "shadow-[#039be5]"
        },
        {
            id: 3,
            name: 'JavaScript',
            src: javascript,
            style: "shadow-[#ffd600]"
        },
        {
            id: 4,
            name: "ReactJs",
            src: reactImage,
            style: "shadow-[#00d8ff]"
        },
        {
            id: 5,
            name: 'GraphQl',
            src: graphql,
            style: "shadow-[#e632ad]"
        },
        {
            id: 6,
            name: 'GitHub',
            src: github,
            style: "shadow-[#eee]"
        },
        {
            id: 7,
            name: 'Next.Js',
            src: nextjs,
            style: "shadow-[#fff]"
        },
        {
            id: 8,
            name: 'Tailwind',
            src: tailwind,
            style: "shadow-[#44a8b3]"
        },
    ]

  return (
    <div name="experience" className=' bg-gradient-to-b from-gray-800 to-black w-full text-white  md:h-full'>

            <div className=' max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
                <div className=' pb-8'>
                    <p className=' text-4xl font-bold inline border-b-4 border-gray-500'>Experience</p>
                    <p className='py-6'>These are technologies I've worked with.</p>
                </div>

                <div className=' grid sm:grid-cols-2 md:grid-cols-4 gap-8 px-4 sm:px-0'>

                    {Skills.map((Skill) =>
                    (<div key={Skill.id} className={`flex flex-col justify-center items-center shadow-md ${Skill.style} rounded-lg`}>
                        <img src={Skill.src} alt="" className='rounded-md duration-200 hover:scale-105' />
                        <div className=' flex items-center justify-center'>
                            <p className=' cursor-pointer w-1/2 py-3 m-4 duration-200 hover:scale-105'>{Skill.name}</p>
                        </div>
                    </div>)
                    )}

                </div>
            </div>

        </div>
  )
}

export default Experience