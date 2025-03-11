import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className="w-full h-full bg-gradient-to-b from-gray-800 to-black text-white"
    >
      <div className="max-w-5xl pb-8 md:mx-auto flex flex-col justify-center w-full max-sm:px-4 h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            About
          </p>
        </div>
        <h2 className="text-2xl font-semibold">🎓 Bachelor's in Computer Science | 🎓 Master of Computer Applications (MCA)</h2>
        <p className="text-xl mt-9">
          💡 Skilled in: JavaScript, React.js, Node.js, Express.js, MongoDB, HTML5, CSS3, Bootstrap, Tailwind CSS, Git, GitHub
        </p>

        <br />

        <p className="text-justify text-xl">
          I am a dynamic Full-Stack Developer (MERN) with over 2 years of experience in designing, developing, and deploying scalable web applications. I have expertise in JavaScript, React.js, Node.js, Express.js, MongoDB, and AWS services. I am passionate about writing clean, maintainable code and following Agile methodologies to drive development efficiency. Having completed my MCA, I am eager to apply my knowledge and skills to innovative projects. Let's connect and create something great together! 🔗
        </p>
      </div>
    </div>
  );
};

export default About;
