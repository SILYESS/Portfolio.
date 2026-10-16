import Image from 'next/image'
import { ArrowDown, MapPin, Sparkles, Gamepad2 } from 'lucide-react'
import { identity, stats } from '@/data/portfolio'
import { Counter } from './motion'

export function Hero() {
  return (
    <section
      id="top"
      className="relative flex min-h-screen flex-col justify-center overflow-hidden pt-28 pb-16 noise"
    >
      {/* backdrop */}
      <div className="bg-grid absolute inset-0" aria-hidden />
      <div
        className="absolute -top-40 left-1/2 h-[480px] w-[820px] -translate-x-1/2 rounded-full bg-primary/25 blur-[160px]"
        aria-hidden
      />
      <div
        className="absolute bottom-0 right-[-10%] h-[380px] w-[560px] rounded-full bg-primary/15 blur-[140px]"
        aria-hidden
      />
      <div
        className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-background to-transparent"
        aria-hidden
      />

      <div className="relative mx-auto grid w-full max-w-7xl items-center gap-14 px-6 lg:grid-cols-[1.15fr_0.85fr] lg:gap-8 lg:px-10">
        {/* left — copy */}
        <div>
          <div className="rise-in flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-xs font-medium text-violet-300 w-fit" style={{ animationDelay: '0.05s' }}>
            <Sparkles className="h-3.5 w-3.5" aria-hidden />
            <span className="font-mono tracking-wide uppercase">
              Available for Unity &amp; Game Design roles
            </span>
          </div>

          <h1 className="rise-in mt-7 font-display text-6xl sm:text-7xl lg:text-8xl font-bold leading-[0.95] tracking-tight" style={{ animationDelay: '0.15s' }}>
            <span className="text-gradient">ILYES</span>
            <br />
            <span className="outline-text">AHMED</span>
          </h1>

          <p className="rise-in mt-6 max-w-xl text-lg md:text-xl leading-relaxed text-muted-foreground" style={{ animationDelay: '0.28s' }}>
            <span className="text-foreground font-medium">{identity.title}</span>
            {' '}·{' '}
            <span className="text-foreground font-medium">{identity.subtitle}</span> — crafting
            serious games, medical VR therapy, and multiplayer worlds from prototype to ship.
          </p>

          <div className="rise-in mt-5 flex items-center gap-2 font-mono text-sm text-muted-foreground" style={{ animationDelay: '0.36s' }}>
            <MapPin className="h-4 w-4 text-primary" aria-hidden />
            {identity.location}
          </div>

          <div className="rise-in mt-9 flex flex-wrap items-center gap-4" style={{ animationDelay: '0.45s' }}>
            <a
              href="#work"
              className="group inline-flex items-center gap-2 rounded-full bg-primary px-7 py-3.5 font-medium text-white shadow-[0_0_32px_rgba(139,92,246,0.45)] transition-all hover:shadow-[0_0_48px_rgba(139,92,246,0.65)] hover:bg-violet-500"
            >
              <Gamepad2 className="h-4 w-4" aria-hidden />
              View my work
              <ArrowDown className="h-4 w-4 transition-transform group-hover:translate-y-0.5" aria-hidden />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-full border border-border bg-card/60 px-7 py-3.5 font-medium text-foreground backdrop-blur transition-all hover:border-primary/50 hover:bg-accent"
            >
              Get in touch
            </a>
          </div>

          {/* stats */}
          <dl className="rise-in mt-14 grid max-w-xl grid-cols-2 gap-x-6 gap-y-8 sm:grid-cols-4" style={{ animationDelay: '0.55s' }}>
            {stats.map((s) => (
              <div key={s.label}>
                <dt className="order-2 mt-1 text-[13px] leading-snug text-muted-foreground">
                  {s.label}
                </dt>
                <dd className="font-display text-3xl md:text-4xl font-bold text-foreground">
                  <Counter value={s.value} suffix={s.suffix} />
                </dd>
              </div>
            ))}
          </dl>
        </div>

        {/* right — avatar */}
        <div className="rise-in relative mx-auto w-full max-w-[380px] lg:max-w-none" style={{ animationDelay: '0.3s' }}>
          <div className="relative aspect-square">
            {/* rings */}
            <div className="pulse-ring absolute inset-0 rounded-full border border-primary/30" aria-hidden />
            <div
              className="pulse-ring absolute inset-0 rounded-full border border-primary/20"
              style={{ animationDelay: '1.1s' }}
              aria-hidden
            />
            <div
              className="absolute inset-4 rounded-full border border-dashed border-primary/25"
              aria-hidden
            />
            {/* glow */}
            <div
              className="absolute inset-8 rounded-full bg-primary/35 blur-[70px]"
              aria-hidden
            />
            <div className="avatar-float relative h-full w-full">
              <div className="glow-card relative h-full w-full overflow-hidden rounded-full">
                <Image
                  src="/assets/photos/ilyes_home_photo2.jpg"
                  alt="Stylized 3D avatar of Ilyes Ahmed"
                  fill
                  priority
                  sizes="(max-width: 1024px) 380px, 460px"
                  className="object-cover"
                />
                <div
                  className="absolute inset-0 rounded-full bg-gradient-to-t from-primary/25 via-transparent to-transparent"
                  aria-hidden
                />
              </div>
            </div>

            {/* floating badges */}
            <div className="absolute -left-3 top-[16%] rounded-2xl border border-border bg-card/90 px-4 py-2.5 shadow-xl backdrop-blur md:-left-8">
              <p className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">Main engine</p>
              <p className="font-display text-sm font-semibold text-foreground">Unity · C#</p>
            </div>
            <div className="absolute -right-2 bottom-[14%] rounded-2xl border border-border bg-card/90 px-4 py-2.5 shadow-xl backdrop-blur md:-right-6">
              <p className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">Focus</p>
              <p className="font-display text-sm font-semibold text-primary">VR / XR · Serious Games</p>
            </div>
            <div className="absolute left-[8%] bottom-[6%] rounded-2xl border border-border bg-card/90 px-4 py-2.5 shadow-xl backdrop-blur">
              <p className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">Also teaching</p>
              <p className="font-display text-sm font-semibold text-foreground">Unity @ ISBAS · 5★ on Fiverr</p>
            </div>
          </div>
        </div>
      </div>

      {/* scroll hint */}
      <a
        href="#work"
        aria-label="Scroll to work section"
        className="absolute bottom-6 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 text-muted-foreground transition-colors hover:text-primary md:flex"
      >
        <span className="font-mono text-[10px] uppercase tracking-[0.3em]">Scroll</span>
        <ArrowDown className="h-4 w-4 animate-bounce" aria-hidden />
      </a>
    </section>
  )
}
