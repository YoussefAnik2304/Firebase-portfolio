import { AboutSection } from '@/components/sections/about';
import { ContactSection } from '@/components/sections/contact';
import { GuestbookSection } from '@/components/sections/guestbook';
import { ProjectsSection } from '@/components/sections/projects';
import { SkillsSection } from '@/components/sections/skills';
import Image from 'next/image';

export default function Home() {
  return (
    <main className="container mx-auto p-4 md:p-8 space-y-12">
      <header className="text-center space-y-4">
        <div className="inline-block border-4 border-black border-double p-2 bg-secondary">
          <h1 className="font-headline text-5xl md:text-7xl">RetroCoder</h1>
        </div>
        <div className="overflow-x-hidden whitespace-nowrap relative h-8 bg-primary border-y-2 border-black flex items-center">
             <p className="animate-marquee font-headline text-lg text-primary-foreground">
                WELCOME TO MY HUMBLE ABODE ON THE WORLD WIDE WEB... PLEASE SIGN MY GUESTBOOK... SITE BEST VIEWED ON NETSCAPE NAVIGATOR 3.0...
             </p>
        </div>
      </header>
      
      <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
        <div className="lg:col-span-3 space-y-8">
            <AboutSection />
            <ProjectsSection />
        </div>
        <div className="lg:col-span-2 space-y-8">
            <SkillsSection />
            <ContactSection />
        </div>
      </div>

      <GuestbookSection />

      <footer className="text-center font-code text-sm text-gray-500 space-y-4">
        <div className="flex justify-center items-center gap-4">
            <Image src="https://placehold.co/88x31.png" data-ai-hint="netscape now button" alt="Netscape Now" width={88} height={31} />
            <Image src="https://placehold.co/88x31.png" data-ai-hint="made with macintosh" alt="Made with Macintosh" width={88} height={31} />
            <Image src="https://placehold.co/88x31.png" data-ai-hint="html badge" alt="HTML 4.01" width={88} height={31} />
        </div>
        <p>&copy; 1999-{new Date().getFullYear()} RetroCoder. All rights reserved... maybe.</p>
      </footer>
    </main>
  );
}
