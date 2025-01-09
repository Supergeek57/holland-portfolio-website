// Experience.js
import React from 'react';

function Experience() {
    console.log('Experience component rendered');
    return (
      <div className="flex items-center justify-center px-6" style={{ height: 'calc(40vh - 64px)' }}>
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
              <div className="font-source-code-pro font-semibold text-5xl text-white">
                  Experience
              </div>
              <div className="font-source-code-pro font-semibold text-xl text-white">
                  Yay quantitative data!
              </div>
          </div>
      </div>
  
    );
}

export default Experience;
