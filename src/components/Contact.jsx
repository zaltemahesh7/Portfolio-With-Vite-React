import React from 'react'

const Contact = () => {
  return (
    <div name='contact' className='w-full min-h-screen bg-gradient-to-b from-black to-gray-800 p-8 text-white'>
      <div className='flex flex-col justify-center max-w-screen-lg mx-auto h-full'>
        <div className='text-center pb-12'>
          <p className='text-5xl font-extrabold inline border-b-4 border-cyan-500'>Contact</p>
          <p className='py-8 text-lg'>I'd love to hear from you! Whether you have a question or just want to say hi, feel free to drop a message.</p>
        </div>

        <div className='flex items-center justify-center'>
          <form action="https://getform.io/f/5b896697-e59d-4463-949c-9e19ff5680f1" method='post' className='flex flex-col items-center justify-center w-full md:w-1/2'>
            <input type="text" name="name" id="name" placeholder='Enter Your Name' className='w-full p-3 mb-4 bg-transparent border-2 rounded-md text-white focus:outline-none' />
            <input type="email" name="email" id="email" placeholder='Enter Your Email' className='w-full p-3 mb-4 bg-transparent border-2 rounded-md text-white focus:outline-none' />
            <textarea name="desc" rows="5" placeholder='Message' className='w-full p-3 mb-4 bg-transparent border-2 rounded-md text-white focus:outline-none'></textarea>
            <button className='text-white bg-gradient-to-r from-cyan-500 to-blue-500 px-6 py-3 mt-4 rounded-md hover:scale-105 transform transition duration-300'>Submit</button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Contact;