import { RetroWindow } from '@/components/retro-window';
import { TypingEffect } from '@/components/typing-effect';
import Image from 'next/image';

export function AboutSection() {
    const bio = "Welcome to my corner of the web! I'm a software engineer passionate about building cool things. I specialize in full-stack development, with a love for creating intuitive user experiences and robust backend systems. When I'm not coding, you can find me exploring old video games or tinkering with vintage hardware."

  return (
    <RetroWindow title="about_me.exe">
      <div className="flex flex-col md:flex-row items-center gap-6">
        <Image
          src="https://placehold.co/150x150.png"
          alt="Pixelated avatar"
          width={150}
          height={150}
          className="border-2 border-black"
          data-ai-hint="pixelated avatar"
        />
        <div className="w-full">
            <TypingEffect text={bio} />
        </div>
      </div>
    </RetroWindow>
  );
}
