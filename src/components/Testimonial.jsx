import React from 'react';

const Testimonial = () => {
  const testimonials = [
    {
      name: "John Doe",
      role: "Senior Developer",
      text: "Working with this team has been an incredible experience. Their attention to detail and technical expertise is outstanding.",
    },
    {
      name: "Jane Smith",
      role: "Project Manager",
      text: "Exceptional problem-solving skills and always delivers high-quality work. A true professional in every sense.",
    },
    {
      name: "Mike Johnson",
      role: "Tech Lead",
      text: "One of the most dedicated and skilled developers I've had the pleasure to work with. Consistently exceeds expectations.",
    }
  ];

  return (
    <div name="testimonial" className='w-full min-h-screen bg-gradient-to-b from-black to-gray-800 text-white'>
      <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
        <div className='pb-8'>
          <p className='text-4xl font-bold inline border-b-4 border-gray-500'>
            Testimonials
          </p>
          <p className='py-6'>What others say about my work</p>
        </div>

        <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0'>
          {testimonials.map(({ name, role, text }, index) => (
            <div
              key={index}
              className='shadow-md shadow-gray-600 rounded-lg overflow-hidden bg-black p-6 hover:scale-105 duration-500'
            >
              <div className='flex flex-col h-full justify-between'>
                <p className='text-gray-300 text-lg mb-4'>"{text}"</p>
                <div>
                  <p className='text-white font-bold'>{name}</p>
                  <p className='text-gray-400'>{role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testimonial; 