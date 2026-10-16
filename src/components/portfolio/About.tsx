import Image from 'next/image'
import { Languages, MapPin, Zap } from 'lucide-react'
import { identity } from '@/data/portfolio'
import { Reveal } from './motion'
import { SectionHeading } from './SectionHeading'

export function About() {
  return (
    <section id="about" className="relative overflow-hidden py-24 md:py-32 scroll-mt-20">
      <div
        className="absolute left-[-15%] top-1/3 h-[420px] w-[420px] rounded-full bg-primary/10 blur-[140px]"
        aria-hidden
      />
      <div className="relative mx-auto grid max-w-7xl items-center gap-14 px-6 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20 lg:px-10">
        {/* photo */}
        <Reveal className="relative mx-auto w-full max-w-[420px]">
          <div className="glow-card relative overflow-hidden rounded-[2rem]">
            <Image
              src="/assets/photos/ilyes_new_photo.jpg"
              alt="Portrait of Ilyes Ahmed"
              width={400}
              height={400}
              className="h-auto w-full object-cover"
            />
            <div
              className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent"
              aria-hidden
            />
          </div>
          <div className="absolute -bottom-5 -right-3 rounded-2xl border border-border bg-card/95 px-5 py-3 shadow-2xl backdrop-blur md:-right-8">
            <p className="font-display text-2xl font-bold text-primary">4+</p>
            <p className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
              Years shipping games
            </p>
          </div>
        </Reveal>

        {/* copy */}
        <div>
          <SectionHeading
            index="02"
            kicker="About Me"
            title="Games that heal, teach, and connect"
          />
          <Reveal className="-mt-6 md:-mt-10 space-y-5 text-muted-foreground leading-relaxed md:text-lg">
            <p>
              I&apos;m Ilyes Ahmed — a Unity developer from Hammam Sousse, Tunisia. I&apos;ve spent
              the last 4+ years building gameplay systems and VR/XR experiences in C#, shipping
              everything from medical rehabilitation games to multiplayer cultural simulations.
              What drives me is the space where games stop being just entertainment: a therapy
              session disguised as a boss fight, a history lesson hidden inside a playable city.
            </p>
            <p>
              At 3DWAVE I shipped gameplay, UI, and core mechanics across 15 indie and VR titles,
              re-engineering performance-critical systems to cut frame time by ~25%. Since 2023
              I&apos;ve also been teaching Unity at ISBAS — 12 students per cohort — and mentoring
              students online with a 5-star Fiverr rating, including a 13-year-old game dev from
              Canada. Recently I&apos;ve gone freelance, delivering full-stack game products:
              Netcode multiplayer, Strapi + PostgreSQL backends, and store-ready mobile titles.
            </p>
            <p>
              When I&apos;m not building, I&apos;m exploring interactive storytelling and
              AI-driven game mechanics — always chasing the next way to make players feel
              something real.
            </p>
          </Reveal>

          <Reveal delay={120} className="mt-8 flex flex-wrap gap-3">
            <div className="inline-flex items-center gap-2 rounded-full border border-border bg-card/70 px-4 py-2 text-sm">
              <MapPin className="h-4 w-4 text-primary" aria-hidden />
              {identity.location}
            </div>
            <div className="inline-flex items-center gap-2 rounded-full border border-border bg-card/70 px-4 py-2 text-sm">
              <Languages className="h-4 w-4 text-primary" aria-hidden />
              Arabic (Native) · French (B2) · English (B2)
            </div>
            <div className="inline-flex items-center gap-2 rounded-full border border-border bg-card/70 px-4 py-2 text-sm">
              <Zap className="h-4 w-4 text-primary" aria-hidden />
              Open to remote &amp; onsite worldwide
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
