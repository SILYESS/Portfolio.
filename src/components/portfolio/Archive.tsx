'use client'

import { useMemo, useState } from 'react'
import Image from 'next/image'
import { ArrowUpRight, Gamepad2, Wrench } from 'lucide-react'
import { categories, projects, type Category, type Project } from '@/data/portfolio'
import { Reveal } from './motion'
import { SectionHeading } from './SectionHeading'

export function Archive({ onSelect }: { onSelect: (p: Project) => void }) {
  const [active, setActive] = useState<Category | 'all'>('all')

  const filtered = useMemo(
    () => (active === 'all' ? projects : projects.filter((p) => p.category === active)),
    [active]
  )

  return (
    <section id="work" className="relative mx-auto max-w-7xl px-6 py-24 md:py-28 lg:px-10 scroll-mt-20">
      <SectionHeading
        index="01"
        kicker="Project Archive"
        title="Everything I've built"
        description="20 projects across VR therapy, cultural heritage, multiplayer, mobile, and editor tooling — from indie experiments to client commissions. Click any project for the full story and screenshots."
      />

      {/* filters */}
      <Reveal className="mb-10 flex flex-wrap gap-2">
        {categories.map((c) => {
          const isActive = active === c.id
          const count =
            c.id === 'all' ? projects.length : projects.filter((p) => p.category === c.id).length
          return (
            <button
              key={c.id}
              type="button"
              onClick={() => setActive(c.id)}
              aria-pressed={isActive}
              className={`inline-flex items-center gap-2 rounded-full border px-4 py-2 font-mono text-xs uppercase tracking-widest transition-all ${
                isActive
                  ? 'border-primary bg-primary text-white shadow-[0_0_24px_rgba(139,92,246,0.4)]'
                  : 'border-border bg-card/60 text-muted-foreground hover:border-primary/40 hover:text-foreground'
              }`}
            >
              {c.label}
              <span
                className={`rounded-full px-1.5 text-[10px] ${
                  isActive ? 'bg-white/20' : 'bg-secondary'
                }`}
              >
                {count}
              </span>
            </button>
          )
        })}
      </Reveal>

      {/* grid */}
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {filtered.map((project, i) => (
          <Reveal key={project.slug} delay={(i % 3) * 90}>
            <article className="group h-full">
              <button
                type="button"
                onClick={() => onSelect(project)}
                aria-label={`Open details for ${project.title}`}
                className="glow-card flex h-full w-full flex-col overflow-hidden rounded-3xl bg-card/70 text-left transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_20px_50px_-20px_rgba(139,92,246,0.35)] focus-visible:outline-2 focus-visible:outline-primary"
              >
                <div className="relative aspect-[16/10] overflow-hidden">
                  <Image
                    src={project.cover}
                    alt={`${project.title} — ${project.genre}`}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-[1.06]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent" />
                  <span className="absolute left-3 top-3 rounded-full bg-background/80 px-2.5 py-1 font-mono text-[10px] uppercase tracking-widest text-foreground backdrop-blur">
                    {project.platform}
                  </span>
                  <span className="absolute right-3 top-3 flex h-8 w-8 items-center justify-center rounded-full bg-primary/90 text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                    <ArrowUpRight className="h-4 w-4" aria-hidden />
                  </span>
                </div>

                <div className="flex flex-1 flex-col p-5">
                  <div className="flex items-center justify-between gap-3">
                    <h3 className="font-display text-lg font-bold leading-tight">
                      {project.title}
                    </h3>
                    {project.category === 'tool' ? (
                      <Wrench className="h-4 w-4 shrink-0 text-primary" aria-hidden />
                    ) : (
                      <Gamepad2 className="h-4 w-4 shrink-0 text-primary/70" aria-hidden />
                    )}
                  </div>
                  <p className="mt-1 font-mono text-[11px] uppercase tracking-widest text-primary/90">
                    {project.genre} · {project.year}
                  </p>
                  <p className="mt-3 line-clamp-3 text-sm leading-relaxed text-muted-foreground">
                    {project.description}
                  </p>
                  <div className="mt-auto flex items-center justify-between pt-5">
                    <span className="font-mono text-[11px] uppercase tracking-widest text-muted-foreground">
                      {project.role}
                    </span>
                    {project.link ? (
                      <span className="inline-flex items-center gap-1 text-xs font-medium text-primary">
                        {project.link.label}
                      </span>
                    ) : null}
                  </div>
                </div>
              </button>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
