import React from 'react';
import favorites from './assets/things-i-love-3.png';
import hobbies from './assets/website-hobbies-3.png';

function About() {
  console.log('AboutMe component rendered');
  return (
    <div className="flex flex-col items-center justify-start px-6 pt-16 min-h-screen">
      <div className="flex flex-col items-center md:items-start text-center md:text-left">
        <div className="font-source-code-pro font-semibold text-5xl text-white">
          About Me <span className="ml-2" role="img" aria-label="wave">👋</span>
        </div>
        <div className="mb-4"></div>
        <div className="font-source-code-pro font-semibold text-xl text-white">
          Hey there! I'm a tech nerd <span className="mr-2" role="img" aria-label="nerd">🤓</span>
          studying computer science and math at the University of Alabama.
        </div>
        <div className="font-source-code-pro font-semibold text-xl text-purple-800">
          When I'm not studying, you can find me...
        </div>
        <div className="w-full max-w-3xl">
          <img
            src={favorites}
            alt="My Hobbies"
            className="w-full h-auto object-contain"
          />
        </div>
        <div className="mb-4"></div>
        <div className="font-source-code-pro font-semibold text-xl text-white">
          Curious about the space robots? Check out the <span className=" text-purple-800">Experience</span> tab to learn more!
        </div>
      </div>
    </div>
  );
}

export default About;
