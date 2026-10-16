import { Quote, Star, BadgeCheck } from 'lucide-react'
import { testimonials } from '@/data/portfolio'
import { Reveal } from './motion'
import { SectionHeading } from './SectionHeading'

function Stars({ count = 5, size = 'h-4 w-4' }: { count?: number; size?: string }) {
  return (
    <div className="flex items-center gap-1" aria-label={`${count} out of 5 stars`}>
      {Array.from({ length: count }).map((_, i) => (
        <Star key={i} className={`${size} fill-primary text-primary`} aria-hidden />
      ))}
    </div>
  )
}

export function Testimonials() {
  return (
    <section
      id="testimonials"
      className="relative overflow-hidden py-24 md:py-28 scroll-mt-20"
    >
      <div
        className="absolute left-[-10%] top-1/4 h-[360px] w-[360px] rounded-full bg-primary/10 blur-[130px]"
        aria-hidden
      />
      <div className="relative mx-auto max-w-7xl px-6 lg:px-10">
        <SectionHeading
          index="05"
          kicker="Social Proof"
          title="What clients say"
          description="Real feedback from real clients — rated 5 stars across every category."
        />

        {testimonials.map((t, i) => (
          <Reveal key={t.source} delay={i * 100}>
            <article className="glow-card grid gap-8 rounded-[2rem] bg-card/70 p-8 md:p-12 lg:grid-cols-[1.4fr_0.6fr] lg:gap-12">
              {/* quote */}
              <div>
                <Quote className="h-10 w-10 text-primary/60" aria-hidden />
                <blockquote className="mt-5 font-display text-xl md:text-2xl leading-relaxed font-medium text-foreground">
                  “{t.quote}”
                </blockquote>
                <div className="mt-7 flex flex-wrap items-center gap-4">
                  <Stars count={t.rating} />
                  <p className="text-sm text-muted-foreground">
                    <span className="font-medium text-foreground">{t.source}</span>
                    {' · '}
                    {t.context}
                  </p>
                </div>
              </div>

              {/* ratings */}
              <div className="flex flex-col justify-center gap-5">
                <div className="flex items-center gap-3 rounded-2xl border border-primary/30 bg-primary/10 px-5 py-4">
                  <BadgeCheck className="h-6 w-6 shrink-0 text-primary" aria-hidden />
                  <div>
                    <p className="font-display text-lg font-bold leading-none">
                      5.0 <span className="text-sm font-normal text-muted-foreground">/ 5.0</span>
                    </p>
                    <p className="mt-1 font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
                      Verified Fiverr rating
                    </p>
                  </div>
                </div>

                <ul className="space-y-3">
                  {t.criteria.map((c) => (
                    <li
                      key={c.label}
                      className="flex items-center justify-between gap-3 border-b border-border pb-3 text-sm"
                    >
                      <span className="text-muted-foreground">{c.label}</span>
                      <span className="flex items-center gap-2">
                        <span className="font-mono text-xs text-primary">{c.score}.0</span>
                        <Stars count={c.score} size="h-3 w-3" />
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          </Reveal>
        ))}

        {/* highlights */}
        <Reveal delay={150} className="mt-8">
          <p className="mb-4 font-mono text-xs uppercase tracking-[0.25em] text-muted-foreground">
            Things that went well
          </p>
          <ul className="flex flex-wrap gap-2">
            {testimonials[0].highlights.map((h) => (
              <li
                key={h}
                className="rounded-full border border-border bg-secondary/60 px-3.5 py-1.5 text-[13px] text-muted-foreground transition-colors hover:border-primary/40 hover:text-foreground"
              >
                {h}
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  )
}
