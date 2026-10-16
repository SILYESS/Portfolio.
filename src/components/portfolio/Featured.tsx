'use client'

import Image from 'next/image'
import { ArrowUpRight } from 'lucide-react'
import { projects, type Project } from '@/data/portfolio'
import { Reveal } from './motion'
import { SectionHeading } from './SectionHeading'

export function Featured({ onSelect }: { onSelect: (p: Project) => void }) {
  const featured = projects.filter((p) => p.featured)

  return (
    <section id="work" className="relative mx-auto max-w-7xl px-6 py-24 md:py-32 lg:px-10 scroll-mt-20">
      <SectionHeading
        index="01"
        kicker="Selected Work"
        title="Featured projects"
        description="A curated selection of shipped work — medical VR, cultural heritage, and full game products. Click any project to see the full story."
      />

      <div className="flex flex-col gap-16 md:gap-24">
        {featured.map((project, i) => {
          const reversed = i % 2 === 1
          return (
            <Reveal key={project.slug}>
              <article
                className={`group grid items-center gap-8 lg:grid-cols-2 lg:gap-14 ${
                  reversed ? 'lg:[&>*:first-child]:order-2' : ''
                }`}
              >
                {/* image */}
                <button
                  type="button"
                  onClick={() => onSelect(project)}
                  aria-label={`Open details for ${project.title}`}
                  className="glow-card relative block w-full overflow-hidden rounded-3xl focus-visible:outline-2 focus-visible:outline-primary"
                >
                  <div className="relative aspect-[16/10] overflow-hidden">
                    <Image
                      src={project.cover}
                      alt={`${project.title} — ${project.genre}`}
                      fill
                      sizes="(max-width: 1024px) 100vw, 50vw"
                      className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background/70 via-transparent to-transparent" />
                    <div className="absolute bottom-4 left-4 flex items-center gap-2">
                      <span className="rounded-full bg-background/80 px-3 py-1 font-mono text-[11px] uppercase tracking-widest text-foreground backdrop-blur">
                        {project.platform}
                      </span>
                      <span className="rounded-full bg-primary/90 px-3 py-1 font-mono text-[11px] uppercase tracking-widest text-white">
                        {project.year}
                      </span>
                    </div>
                  </div>
                </button>

                {/* copy */}
                <div className={reversed ? 'lg:pl-6' : 'lg:pr-6'}>
                  <p className="font-mono text-xs uppercase tracking-[0.25em] text-primary">
                    {project.genre}
                  </p>
                  <h3 className="mt-3 font-display text-3xl md:text-4xl font-bold tracking-tight">
                    {project.title}
                  </h3>
                  <p className="mt-1 font-mono text-sm text-muted-foreground">
                    {project.role} · {project.year}
                  </p>
                  <p className="mt-5 text-muted-foreground leading-relaxed md:text-lg">
                    {project.description}
                  </p>

                  <ul className="mt-6 flex flex-wrap gap-2">
                    {project.tags.slice(0, 4).map((tag) => (
                      <li
                        key={tag}
                        className="rounded-full border border-border bg-secondary/60 px-3 py-1 text-xs text-muted-foreground"
                      >
                        {tag}
                      </li>
                    ))}
                  </ul>

                  <button
                    type="button"
                    onClick={() => onSelect(project)}
                    className="mt-7 inline-flex items-center gap-1.5 font-medium text-primary transition-colors hover:text-violet-300"
                  >
                    Explore project
                    <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" aria-hidden />
                  </button>
                </div>
              </article>
            </Reveal>
          )
        })}
      </div>
    </section>
  )
}
