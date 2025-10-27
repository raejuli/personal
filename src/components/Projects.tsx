import React from 'react';

interface Project {
  title: string;
  description: string;
  technologies: string[];
  link?: string;
  github?: string;
}

const Projects: React.FC = () => {
  const projects: Project[] = [
    {
      title: 'Tower Defence Game',
      description: 'A full-fledged tower defence game with multiple types of towers, levels and enemies.',
      technologies: ['React', 'Pixi.js', 'Typescript', 'Custom Game Engine'],
      link: 'https://tdg.tomdavies.site',
      github: 'https://github.com/raejuli/tower-defence-web'
    },
    {
      title: 'Personal Website',
      description: 'This very website',
      technologies: ['React', 'TypeScript', 'Tailwind CSS'],
      link: `${window.location.href}`,
      github: 'https://github.com'
    },
    {
      title: 'Custom Game Engine',
      description: 'A custom game engine wrapper around a pixi.js renderer, version controlled with Github Actions CI and published to NPM repositories.',
      technologies: ['TypeScript', 'Pixi.js', 'NPM', 'Github Actions'],
      github: 'https://github.com/raejuli/core-engine-gdk'
    }
  ];

  return (
    <section id="projects" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">My Projects</h2>
        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {projects.map((project, index) => (
            <div 
              key={index} 
              className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition transform hover:-translate-y-2"
            >
              <div className="h-48 bg-gradient-to-br from-blue-400 to-indigo-600 flex items-center justify-center">
                <div className="text-white text-4xl font-bold">{project.title.charAt(0)}</div>
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold text-gray-800 mb-3">{project.title}</h3>
                <p className="text-gray-600 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, techIndex) => (
                    <span 
                      key={techIndex}
                      className="bg-blue-100 text-blue-600 px-3 py-1 rounded-full text-sm font-semibold"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex gap-4">
                  {project.link && (
                    <a 
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:text-blue-800 font-semibold"
                    >
                      View Live →
                    </a>
                  )}
                  {project.github && (
                    <a 
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-600 hover:text-gray-800 font-semibold"
                    >
                      GitHub →
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
