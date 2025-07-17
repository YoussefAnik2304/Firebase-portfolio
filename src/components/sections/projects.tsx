import { RetroWindow } from '@/components/retro-window';
import Image from 'next/image';

const projects = [
  { name: 'Project Alpha', image: 'https://placehold.co/300x200.png', hint: 'retro computer', hits: 1337 },
  { name: 'Geo-Locator', image: 'https://placehold.co/300x200.png', hint: 'pixelated map', hits: 42069 },
  { name: 'E-Commerce Platform', image: 'https://placehold.co/300x200.png', hint: 'shopping cart', hits: 80085 },
  { name: 'Data Visualizer', image: 'https://placehold.co/300x200.png', hint: 'pixelated chart', hits: 9001 },
];

export function ProjectsSection() {
  return (
    <RetroWindow title="C:\\Projects">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {projects.map((project) => (
          <div key={project.name} className="border-2 border-black p-2 bg-background">
            <h3 className="font-headline text-xl mb-2">{project.name}</h3>
            <Image
              src={project.image}
              alt={project.name}
              width={300}
              height={200}
              className="w-full border-2 border-black"
              data-ai-hint={project.hint}
            />
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
