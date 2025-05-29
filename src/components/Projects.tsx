"use client";

import React, { useState } from 'react';
import { Carousel, Card } from '@/components/ui/apple-cards-carousel';

const Projects = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  
  const categories = [
    { id: 'all', label: 'All Projects' },
    { id: 'web', label: 'Web Apps' },
    { id: 'mobile', label: 'Mobile Apps' },
    { id: 'design', label: 'Design' }
  ];
  
  const projects = [
    {
      title: "Essente Perfumes",
      description: "A modern, responsive E-commerce website for perfumes, built with React and Tailwind CSS, featuring a clean design and smooth animations.",
      image: "/WhatsApp Image 2025-05-30 at 02.41.43_7206e7d2.jpg",
      category: "web",
      technologies: ["React", "TypeScript", "Tailwind CSS"],
      github: "https://github.com/mrinalkapoor/portfolio",
      live: "https://mrinalkapoor.com"
    },
    {
      title: "Portfolio OS",
      description: "Interactive portfolio designed and developed like an operating system with window terminals showcasing different sections.",
      image: "/WhatsApp Image 2025-05-30 at 02.41.42_55deb11d.jpg",
      category: "web",
      technologies: ["Next.js", "Typescript", "Tailwind CSS"],
      github: "https://github.com/mrinalkapoor/ecommerce-dashboard",
      live: "https://ecommerce-dashboard-demo.vercel.app"
    },
    {
      title: "Portfolio V1",
      description: "My first portfolio website built with react, typesript and tailwind css.",
      image: "/Portfolio1.jpg",
      category: "mobile",
      technologies: ["React", "Typescript", "Tailwind CSS"],
      github: "https://github.com/mrinalkapoor/weather-app",
      live: ""
    },
    {
      title: "Task Manager",
      description: "A productivity app for managing tasks and projects with features like drag-and-drop organization and time tracking.",
      image: "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      category: "web",
      technologies: ["Vue.js", "Firebase", "Vuetify"],
      github: "https://github.com/mrinalkapoor/task-manager",
      live: "https://task-manager-demo.netlify.app"
    },
    {
      title: "Photography Portfolio",
      description: "A sleek photography portfolio design with fullscreen galleries, image lightbox, and smooth transitions.",
      image: "https://images.unsplash.com/photo-1452587925148-ce544e77e70d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      category: "design",
      technologies: ["Figma", "Adobe XD", "Photoshop"],
      github: "",
      live: "https://dribbble.com/mrinalkapoor"
    },
    {
      title: "Fitness Tracker",
      description: "A mobile application for tracking workouts, nutrition, and fitness goals with progress visualization.",
      image: "https://images.unsplash.com/photo-1461896836934-ffe607ba8211?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      category: "mobile",
      technologies: ["Flutter", "Firebase", "Google Fit API"],
      github: "https://github.com/mrinalkapoor/fitness-tracker",
      live: ""
    }
  ];
  
  const filteredProjects = activeCategory === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeCategory);

  // Map projects to card format
  const cards = filteredProjects.map((project, index) => (
    <Card 
      key={project.title}
      card={{
        category: project.category,
        title: project.title,
        src: project.image,
        technologies: project.technologies,
        github: project.github,
        live: project.live,
        content: (
          <div className="space-y-6">
            <p>{project.description}</p>
            {project.technologies && (
              <div>
                <h4 className="text-lg font-semibold mb-2">Technologies Used</h4>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map(tech => (
                    <span 
                      key={tech} 
                      className="px-3 py-1 rounded-full bg-neutral-100 dark:bg-neutral-800 text-neutral-700 dark:text-neutral-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </div>
        )
      }}
      index={index}
      layout={true}
    />
  ));

  return (
    <section id="projects" className="py-32 bg-gray-50 dark:bg-neutral-950">
      {/* Section header with standard width */}
      <div className="apple-section">
        {/* Section title */}
        <h2 className="section-title text-center mb-4 animate-reveal-up">Projects</h2>
        <p className="section-subtitle text-center mb-16 animate-reveal-up animate-delay-100">
          Showcasing my latest work and creations
        </p>
        
        {/* Category tabs */}
        <div className="flex justify-center mb-16 animate-reveal-up animate-delay-200">
          <div className="inline-flex rounded-full bg-gray-100 dark:bg-neutral-900 p-1">
            {categories.map(category => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  activeCategory === category.id 
                    ? 'bg-white dark:bg-black text-black dark:text-white shadow-sm' 
                    : 'text-gray-500 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-200'
                }`}
              >
                {category.label}
              </button>
            ))}
          </div>
        </div>
      </div>
      
      {/* Expanded width container for carousel */}
      <div className="w-full max-w-[1400px] mx-auto">
        {/* Apple-style Cards Carousel */}
        <Carousel items={cards} />
      </div>
    </section>
  );
};

export default Projects;
