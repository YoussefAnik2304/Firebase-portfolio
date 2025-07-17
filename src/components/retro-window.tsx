import type { ReactNode } from 'react';
import { cn } from '@/lib/utils';
import { Minus, Square, X } from 'lucide-react';

type RetroWindowProps = {
  title: string;
  children: ReactNode;
  className?: string;
  contentClassName?: string;
};

export function RetroWindow({ title, children, className, contentClassName }: RetroWindowProps) {
  return (
    <div className={cn('border-2 border-black bg-secondary shadow-[8px_8px_0px_#000]', className)}>
      <div className="flex items-center justify-between border-b-2 border-black bg-primary px-2 py-1">
        <h2 className="font-headline text-lg text-primary-foreground">{title}</h2>
        <div className="flex items-center space-x-1">
          <div className="flex h-5 w-5 items-center justify-center border-2 border-black bg-secondary">
            <Minus size={16} />
          </div>
          <div className="flex h-5 w-5 items-center justify-center border-2 border-black bg-secondary">
            <Square size={12} />
          </div>
          <div className="flex h-5 w-5 items-center justify-center border-2 border-black bg-accent text-accent-foreground">
            <X size={16} />
          </div>
        </div>
      </div>
      <div className={cn('p-4', contentClassName)}>
        {children}
      </div>
    </div>
  );
}
