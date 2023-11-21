import React from 'react'

const Contact = () => {
  return (
    <div name='contact' className=' w-full h-screen bg-gradient-to-b from-black to-gray-800 p-4 text-white'>

      <div className=' flex flex-col p-4 justify-center max-w-screen-lg mx-auto h-full'>

        <div className=' pb-8'>
          <p className=' text-4xl font-bold inline border-b-4 border-gray-500'>Contact</p>
          <p className='py-6'>Get in Touch with Me.</p>
        </div>

        <div className=' flex items-center flex-col justify-center'>
          <form action="https://getform.io/f/5b896697-e59d-4463-949c-9e19ff5680f1" method='post' className='flex flex-col items-center justify-center'>

            <input type="text" name="name" id="name" placeholder='Enter Your Name' className=' md:w-96 p-2 bg-transparent border-2 rounded-md text-white focus:outline-none' />
            <input type="email" name="email" id="email" placeholder='Enter Your Email' className=' md:w-96 my-3 p-2 bg-transparent border-2 rounded-md text-white focus:outline-none' />
            <textarea name="desc" rows="10" placeholder='Message' className=' md:w-96 p-4 bg-transparent border-2 rounded-md text-white focus:outline-none'></textarea>
            <button className=' text-white bg-gradient-to-b from-cyan-500 to-blue-500 px-6 py-3 my-8 mx-auto flex items-center rounded-md hover:scale-110 duration-300' >Submit</button>

          </form>
        </div>

      </div>
    </div>
  )
}

export default Contact;