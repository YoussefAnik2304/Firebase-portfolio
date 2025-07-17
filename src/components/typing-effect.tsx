"use client";

import { useState, useEffect } from 'react';

type TypingEffectProps = {
  text: string;
  speed?: number;
};

export function TypingEffect({ text, speed = 50 }: TypingEffectProps) {
  const [displayedText, setDisplayedText] = useState('');

  useEffect(() => {
    setDisplayedText(''); // Reset on text change
    let i = 0;
    const intervalId = setInterval(() => {
      if (i < text.length) {
        setDisplayedText(text.substring(0, i + 1));
        i++;
      } else {
        clearInterval(intervalId);
      }
    }, speed);

    return () => clearInterval(intervalId);
  }, [text, speed]);

  return (
    <span className="font-code text-lg">
      {displayedText}
      <span className="animate-blink bg-foreground w-3 h-5 inline-block ml-1" style={{ verticalAlign: 'text-bottom' }} />
    </span>
  );
}
