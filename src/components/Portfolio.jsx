import React from "react";
import bgColorChanger from "../assets/portfolio/download.png";
import installNode from "../assets/portfolio/installNode.jpg";
import navbar from "../assets/portfolio/navbar.jpg";
import reactParallax from "../assets/portfolio/reactParallax.jpg";
import reactSmooth from "../assets/portfolio/reactSmooth.jpg";
import reactWeather from "../assets/portfolio/reactWeather.jpg";
import { Link } from "react-scroll";

const Portfolio = () => {
  const portfolios = [
    {
      id: 1,
      src: bgColorChanger,
      codeurl:
        "https://github.com/zaltemahesh7/LearnReactJs/tree/BackgroundChanger",
      demourl:
        "https://6545fdf2b9207a5a0c40ac02--dynamic-kringle-aaccd8.netlify.app/",
    },
    {
      id: 2,
      src: installNode,
    },
    {
      id: 3,
      src: navbar,
    },
    {
      id: 4,
      src: reactParallax,
    },
    {
      id: 5,
      src: reactSmooth,
    },
    {
      id: 6,
      src: reactWeather,
    },
  ];

  return (
    <div
      name="portfolio"
      className="bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-full"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Portfolio
          </p>
          <p className="py-6">Check out some of my work right here:</p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-4 sm:px-0">
          {portfolios.map((portfolio) => (
            <div
              key={portfolio.id}
              className="flex flex-col shadow-md shadow-gray-600 rounded-lg"
            >
              <img
                src={portfolio.src}
                alt="Project Screenshot"
                className="rounded-md duration-200 hover:scale-105"
              />
              <div className="flex items-center justify-center">
                {portfolio.demourl && (
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href={portfolio.demourl}
                    className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105 text-center"
                  >
                    Demo
                  </a>
                )}
                {portfolio.codeurl && (
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href={portfolio.codeurl}
                    className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105 text-center"
                  >
                    Code
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
