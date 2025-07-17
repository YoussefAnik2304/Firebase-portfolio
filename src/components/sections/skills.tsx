import { RetroWindow } from '@/components/retro-window';
import { Progress } from '@/components/ui/progress';

const skills = [
  { name: 'JavaScript/TypeScript', level: 95 },
  { name: 'React & Next.js', level: 90 },
  { name: 'Node.js & Express', level: 85 },
  { name: 'HTML & CSS', level: 98 },
  { name: 'SQL & NoSQL Databases', level: 80 },
  { name: 'Docker & CI/CD', level: 75 },
];

export function SkillsSection() {
  return (
    <RetroWindow title="skills.dat">
      <div className="space-y-4">
        {skills.map((skill) => (
          <div key={skill.name}>
            <p className="mb-1 font-code">{skill.name}</p>
            <div className="w-full bg-secondary border-2 border-black p-1">
                <Progress value={skill.level} className="h-6 rounded-none [&>div]:bg-primary" />
            </div>
          </div>
        ))}
      </div>
    </RetroWindow>
  );
}
