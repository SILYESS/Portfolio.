import {
  Gamepad2,
  Glasses,
  Cpu,
  Server,
  PenTool,
  type LucideIcon,
} from 'lucide-react'
import { skillGroups } from '@/data/portfolio'
import { Reveal } from './motion'
import { SectionHeading } from './SectionHeading'

const iconMap: Record<string, LucideIcon> = {
  Gamepad2,
  Glasses,
  Cpu,
  Server,
  PenTool,
}

export function Skills() {
  return (
    <section id="skills" className="relative mx-auto max-w-7xl px-6 py-24 md:py-28 lg:px-10 scroll-mt-20">
      <SectionHeading
        index="03"
        kicker="Tech Stack"
        title="Tools of the trade"
        description="From engine-level C# systems to backend infrastructure — the stack I use to take games from idea to deployed product."
      />

      <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {skillGroups.map((group, i) => {
          const Icon = iconMap[group.icon] ?? Gamepad2
          return (
            <Reveal
              key={group.title}
              delay={(i % 3) * 90}
              className={i === 4 ? 'md:col-span-2 lg:col-span-1' : ''}
            >
              <div className="glow-card h-full rounded-3xl bg-card/70 p-6 transition-transform duration-300 hover:-translate-y-1">
                <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/15 text-primary">
                  <Icon className="h-6 w-6" aria-hidden />
                </div>
                <h3 className="font-display text-lg font-bold">{group.title}</h3>
                <ul className="mt-4 flex flex-wrap gap-2">
                  {group.skills.map((skill) => (
                    <li
                      key={skill}
                      className="rounded-full border border-border bg-secondary/60 px-3 py-1.5 text-[13px] text-muted-foreground transition-colors hover:border-primary/40 hover:text-foreground"
                    >
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          )
        })}

        {/* languages card fills the grid */}
        <Reveal delay={180}>
          <div className="glow-card h-full rounded-3xl bg-gradient-to-br from-primary/20 via-card to-card p-6">
            <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/15 text-primary">
              <Glasses className="h-6 w-6" aria-hidden />
            </div>
            <h3 className="font-display text-lg font-bold">Currently exploring</h3>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
              Interactive storytelling, AI-driven game mechanics, and pushing serious games
              further into healthcare and education — the next project is always the most
              interesting one.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
