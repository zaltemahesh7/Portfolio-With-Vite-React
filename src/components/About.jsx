import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className=" w-full h-full bg-gradient-to-b from-gray-800 to-black text-white"
    >
      <div className=" max-w-5xl pb-8 md:mx-auto flex flex-col justify-center w-full max-sm:px-4 h-full">
        <div className=" pb-8">
          <p className=" text-4xl font-bold inline border-b-4 border-gray-500">
            About
          </p>
        </div>
        <h2>🎓 Bachelor's in Computer Science | 📚 Pursuing MCA</h2>
        <p className=" text-xl mt-9">
          💡 Skilled in: JavaScript, React JS, Node.js, MongoDB, HTML5, CSS3,
          Bootstrap, Tailwind CSS, Git, GitHub
        </p>

        <br />

        <p className=" text-justify text-xl">
          Passionate web developer with a strong foundation in Computer Science.
          Currently pursuing an MCA to further expand my knowledge and skills.
          Proficient in a range of web technologies, from JavaScript to various
          front-end and back-end tools. Eager to take on new challenges and
          contribute to innovative projects. Let's connect and create something
          great together! 🔗
        </p>
      </div>
    </div>
  );
};

export default About;
