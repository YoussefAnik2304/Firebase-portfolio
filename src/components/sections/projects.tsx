import { RetroWindow } from '@/components/retro-window';
import Image from 'next/image';

const projects = [
  { 
    name: 'Project Alpha', 
    image: 'https://placehold.co/300x200.png', 
    hint: 'retro computer', 
    hits: 1337,
    description: 'A retro-themed project showcasing vintage computing aesthetics.',
    stack: ['HTML', 'CSS', 'JavaScript']
  },
  { 
    name: 'Geo-Locator', 
    image: 'https://placehold.co/300x200.png', 
    hint: 'pixelated map', 
    hits: 42069, 
    description: 'A simple application to find your current location using geolocation APIs.',
    stack: ['React', 'Leaflet', 'Geolocation API']
  },
  { 
    name: 'E-Commerce Platform', 
    image: 'https://placehold.co/300x200.png', 
    hint: 'shopping cart', 
    hits: 80085, 
    description: 'A full-featured e-commerce platform with user authentication and payment processing.',
    stack: ['Next.js', 'TypeScript', 'TailwindCSS', 'Stripe']
  },
  { 
    name: 'Data Visualizer', 
    image: 'https://placehold.co/300x200.png', 
    hint: 'pixelated chart', 
    hits: 9001, 
    description: 'An interactive tool for visualizing complex data from various sources.',
    stack: ['Vue.js', 'D3.js', 'Node.js']
  },
];

type Project = typeof projects[0] & { description?: string; stack?: string[] };

export function ProjectsSection() {
  return (
    <RetroWindow title="C:\Projects">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {projects.map((project) => (
          <div key={project.name} className="border-2 border-black p-2 bg-background">
            <h3 className="font-headline text-xl mb-2">{project.name}</h3>
            <div className="relative group"> {/* Added group here */}
              {project.description && (
                <div className="absolute inset-0 bg-background border-2 border-black p-2 flex flex-col justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <p className="font-code text-sm mb-2 text-center">{project.description}</p>
                  {project.stack && (
                    <div className="flex flex-wrap justify-center gap-2 mt-2">
                      {project.stack.map((tech) => (
                        <span key={tech} className="bg-[#FF69B4] text-white px-3 py-1 rounded-full text-xs font-code border border-black">
                          {tech}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              )}
              <Image
                src={project.image}
                alt={project.name}
                width={300}
                height={200}
                className="w-full border-2 border-black"
                data-ai-hint={project.hint}
              />
            </div>
            <div className="flex items-center justify-end mt-2 gap-2">
                <span className='font-code'>Hits:</span>
                <span className="font-code bg-black text-lime-400 px-2 py-0.5">{project.hits}</span>
            </div>
          </div>
        ))}
      </div>
    </RetroWindow>
  );
}
