'use client'

import { Reveal } from './motion'

interface SectionHeadingProps {
  index: string
  kicker: string
  title: string
  description?: string
}

export function SectionHeading({ index, kicker, title, description }: SectionHeadingProps) {
  return (
    <Reveal className="mb-12 md:mb-16">
      <div className="flex items-center gap-3 mb-4">
        <span className="font-mono text-xs md:text-sm text-primary tracking-widest">
          {index}
        </span>
        <span className="h-px w-10 bg-primary/50" />
        <span className="font-mono text-xs md:text-sm uppercase tracking-[0.25em] text-muted-foreground">
          {kicker}
        </span>
      </div>
      <h2 className="font-display text-4xl md:text-6xl font-bold tracking-tight leading-[1.05]">
        {title}
      </h2>
      {description ? (
        <p className="mt-5 max-w-2xl text-muted-foreground text-base md:text-lg leading-relaxed">
          {description}
        </p>
      ) : null}
    </Reveal>
  )
}
