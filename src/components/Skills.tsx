"use client";

import React from 'react';

const Skills = () => {
  // All skills organized in rows of 5
  const skillRows = [
    "js,ts,python,html,css",
    "react,nextjs,tailwind,nodejs,git",
    "mongodb,figma,aws,github,vscode"
  ];

  return (
    <section id="skills" className="py-32 bg-gray-50 dark:bg-neutral-950">
      <div className="apple-section">
        {/* Section title */}
        <h2 className="section-title text-center mb-4 animate-reveal-up">My Skills</h2>
        <p className="section-subtitle text-center mb-16 animate-reveal-up animate-delay-100">
          Technologies and tools I work with
        </p>
        
        {/* Skills Display */}
        <div className="mb-16 animate-reveal-up">
          {skillRows.map((iconSet, index) => (
            <div key={index} className={`overflow-hidden ${index > 0 ? 'mt-6' : ''}`}>
              <picture>
                <source 
                  media="(max-width: 640px)" 
                  srcSet={`https://skillicons.dev/icons?i=${iconSet}&perline=3`} 
                />
                <img
                  src={`https://skillicons.dev/icons?i=${iconSet}`}
                  width={800}
                  height={100}
                  alt={`Skills: ${iconSet.split(',').join(', ')}`}
                  loading="eager"
                  className="max-w-full h-auto mx-auto rounded-xl shadow-sm bg-gray-50 dark:bg-neutral-900 p-4"
                  decoding="async"
                />
              </picture>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
