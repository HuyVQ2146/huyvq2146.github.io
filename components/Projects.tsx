import React, { useState } from 'react';
import { Github, ExternalLink, ChevronDown, ChevronUp } from 'lucide-react';
import { Project } from '../types';

export const Projects: React.FC = () => {
  const [showAll, setShowAll] = useState(false);

  const projects: Project[] = [
    {
      id: '1',
      title: 'AI Analytics Dashboard',
      description: 'A comprehensive dashboard visualizing real-time data using D3.js and Recharts. Integrated with Gemini API for predictive insights.',
      technologies: ['React', 'TypeScript', 'Tailwind', 'Gemini API', 'D3.js'],
      imageUrl: 'https://picsum.photos/id/1/600/400',
      github: '#',
      link: '#'
    },
    {
      id: '2',
      title: 'E-Commerce Platform',
      description: 'A headless e-commerce storefront built with Next.js and Shopify Storefront API. Features include optimistic UI updates and dark mode.',
      technologies: ['Next.js', 'GraphQL', 'Shopify', 'Framer Motion'],
      imageUrl: 'https://picsum.photos/id/2/600/400',
      github: '#',
      link: '#'
    },
    {
      id: '3',
      title: 'Task Management App',
      description: 'Collaborative task management tool with real-time updates using WebSockets. Supports drag-and-drop kanban boards.',
      technologies: ['React', 'Node.js', 'Socket.io', 'PostgreSQL'],
      imageUrl: 'https://picsum.photos/id/3/600/400',
      github: '#'
    },
    {
      id: '4',
      title: 'Finance Tracker',
      description: 'Personal finance application for tracking expenses and setting budgets with interactive charts.',
      technologies: ['Vue.js', 'Firebase', 'Chart.js'],
      imageUrl: 'https://picsum.photos/id/4/600/400',
      github: '#'
    },
    {
      id: '5',
      title: 'Travel Journal',
      description: 'A digital journal to map your travels and share photo memories with friends.',
      technologies: ['React', 'Google Maps API', 'AWS S3'],
      imageUrl: 'https://picsum.photos/id/5/600/400',
      github: '#'
    }
  ];

  const visibleProjects = showAll ? projects : projects.slice(0, 3);

  return (
    <div className="space-y-12">
      <div className="flex items-center gap-4 mb-8">
        <h2 className="text-3xl font-bold text-slate-900 flex items-center gap-2">
          <span className="text-primary font-mono text-xl">02.</span> Featured Project
        </h2>
        <div className="h-px bg-slate-300 flex-1 max-w-xs"></div>
      </div>

      <div className="grid gap-12">
        {visibleProjects.map((project, index) => (
          <div key={project.id} className={`flex flex-col md:flex-row gap-6 ${index % 2 === 1 ? 'md:flex-row-reverse' : ''}`}>
            
            {/* Image Side */}
            <div className="w-full md:w-3/5 relative group cursor-pointer">
              <div className="absolute inset-0 bg-primary/20 group-hover:bg-transparent transition duration-300 z-10 rounded-lg"></div>
              <div className="relative rounded-lg overflow-hidden border border-slate-200 shadow-lg">
                 <img 
                   src={project.imageUrl} 
                   alt={project.title} 
                   className="w-full h-full object-cover transform group-hover:scale-105 transition duration-500 filter grayscale group-hover:grayscale-0"
                 />
              </div>
            </div>

            {/* Content Side */}
            <div className={`w-full md:w-2/5 flex flex-col justify-center ${index % 2 === 1 ? 'md:items-start text-left' : 'md:items-end md:text-right'}`}>
              <p className="font-mono text-primary text-sm mb-2 font-semibold">Featured Project</p>
              <h3 className="text-2xl font-bold text-slate-900 mb-4 hover:text-primary transition">{project.title}</h3>
              
              <div className="bg-white p-6 rounded shadow-lg text-slate-600 text-sm leading-relaxed mb-6 z-20 relative border border-slate-100">
                {project.description}
              </div>

              <ul className={`flex flex-wrap gap-4 text-xs font-mono text-slate-500 mb-6 ${index % 2 === 1 ? 'justify-start' : 'justify-end'}`}>
                {project.technologies.map(tech => (
                  <li key={tech} className="bg-surface px-2 py-1 rounded text-primary/80">{tech}</li>
                ))}
              </ul>

              <div className={`flex gap-4 ${index % 2 === 1 ? 'justify-start' : 'justify-end'}`}>
                {project.github && (
                  <a href={project.github} className="text-slate-500 hover:text-primary transition" aria-label="GitHub">
                    <Github size={20} />
                  </a>
                )}
                {project.link && (
                  <a href={project.link} className="text-slate-500 hover:text-primary transition" aria-label="External Link">
                    <ExternalLink size={20} />
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>

      {projects.length > 3 && (
        <div className="text-center mt-12">
          <button 
            onClick={() => setShowAll(!showAll)}
            className="inline-flex items-center gap-2 py-3 px-8 rounded border-2 border-primary text-primary font-mono text-sm hover:bg-primary hover:text-white transition font-semibold"
          >
            {showAll ? 'Show Less' : 'Show More'}
            {showAll ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
          </button>
        </div>
      )}
    </div>
  );
};