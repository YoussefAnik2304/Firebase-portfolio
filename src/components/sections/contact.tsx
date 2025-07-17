import { RetroWindow } from '@/components/retro-window';
import Image from 'next/image';

export function ContactSection() {
  return (
    <RetroWindow title="contact.ini">
      <div className="flex flex-col items-center text-center">
        <Image
          src="https://placehold.co/100x100.png"
          alt="Animated email icon"
          width={100}
          height={100}
          className="mb-4"
          data-ai-hint="animated email gif"
        />
        <h3 className="font-headline text-3xl mb-2">Get In Touch!</h3>
        <p className="mb-4 font-code">
          Have a question or want to work together? <br/> Send me an email!
        </p>
        <a href="mailto:hello@retrocoder.dev" className="font-headline text-xl text-accent hover:underline">
          hello@retrocoder.dev
        </a>
        <div className="mt-8 border-2 border-black p-2 w-full max-w-sm">
            <div className="flex items-center justify-between bg-black text-white p-1">
                <span className="font-code text-xs">now_playing.mid</span>
                <span className="font-code text-xs">01:23 / 03:45</span>
            </div>
            <div className="h-2 w-full bg-gray-300 mt-1">
                <div className="h-2 bg-accent w-1/3"></div>
            </div>
        </div>
      </div>
    </RetroWindow>
  );
}
