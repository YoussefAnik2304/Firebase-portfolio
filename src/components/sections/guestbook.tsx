"use client";

import { RetroWindow } from '@/components/retro-window';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { useForm, type SubmitHandler } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { useState } from 'react';

const guestbookSchema = z.object({
  name: z.string().min(2, "C'mon, your name is longer than that!").max(50),
  message: z.string().min(5, "Say a little more!").max(200),
});

type GuestbookForm = z.infer<typeof guestbookSchema>;

type Message = {
    name: string;
    message: string;
    date: string;
}

const initialMessages: Message[] = [
    {
        name: 'WebMaster',
        message: 'Welcome to my guestbook! Feel free to leave a message.',
        date: '1/1/1999',
    }
]

export function GuestbookSection() {
    const [messages, setMessages] = useState<Message[]>(initialMessages);
    const [success, setSuccess] = useState(false);
    const [currentDate, setCurrentDate] = useState('');

    useState(() => {
        setCurrentDate(new Date().toLocaleDateString());
    });

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<GuestbookForm>({
    resolver: zodResolver(guestbookSchema),
  });

  const onSubmit: SubmitHandler<GuestbookForm> = (data) => {
    const newMessage = { ...data, date: currentDate };
    setMessages((prev) => [newMessage, ...prev]);
    setSuccess(true);
    reset();
    setTimeout(() => setSuccess(false), 3000);
  };

  return (
    <RetroWindow title="guestbook.html">
        <div className="grid md:grid-cols-2 gap-8">
            <div>
                <h3 className="font-headline text-2xl mb-4">Leave a Message!</h3>
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                    <div>
                        <Label htmlFor="name" className='font-code'>Your Name:</Label>
                        <Input id="name" {...register('name')} className="bg-background border-2 border-black rounded-none focus:ring-accent" />
                        {errors.name && <p className="text-destructive mt-1 font-code">{errors.name.message}</p>}
                    </div>
                    <div>
                        <Label htmlFor="message" className='font-code'>Your Message:</Label>
                        <Textarea id="message" {...register('message')} className="bg-background border-2 border-black rounded-none focus:ring-accent" />
                        {errors.message && <p className="text-destructive mt-1 font-code">{errors.message.message}</p>}
                    </div>
                    <Button type="submit" className="font-headline bg-accent text-accent-foreground rounded-none border-2 border-black hover:bg-pink-500 active:translate-y-1 active:translate-x-1">
                        Sign Guestbook
                    </Button>
                    {success && <p className="text-green-600 mt-2 font-code">Thanks for signing!</p>}
                </form>
            </div>
            <div className="max-h-96 overflow-y-auto p-2 border-2 border-black bg-background space-y-4">
                {messages.map((msg, index) => (
                    <div key={index} className="border-b-2 border-dashed border-black pb-2">
                        <p className="font-code text-sm">
                            <span className="text-accent font-bold">{msg.name}</span> wrote on <span className="text-primary-foreground/70">{msg.date}</span>:
                        </p>
                        <p className="font-code mt-1">{msg.message}</p>
                    </div>
                ))}
            </div>
        </div>
    </RetroWindow>
  );
}
