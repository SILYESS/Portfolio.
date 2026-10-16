import {
  Mail,
  Phone,
  Linkedin,
  Github,
  Gamepad2,
  FileDown,
  ArrowUpRight,
} from 'lucide-react'
import { identity } from '@/data/portfolio'
import { Reveal } from './motion'
import { SectionHeading } from './SectionHeading'

const channels = [
  {
    icon: Mail,
    label: 'Email',
    value: identity.email,
    href: `mailto:${identity.email}`,
  },
  {
    icon: Phone,
    label: 'Phone',
    value: identity.phone,
    href: `tel:+21629246536`,
  },
  {
    icon: Linkedin,
    label: 'LinkedIn',
    value: 'in/ilyesahmed',
    href: identity.linkedin,
  },
  {
    icon: Gamepad2,
    label: 'itch.io',
    value: 'silyesss.itch.io',
    href: identity.itch,
  },
  {
    icon: Github,
    label: 'GitHub',
    value: 'github.com/SILYESS',
    href: identity.github,
  },
]

export function Contact() {
  return (
    <section id="contact" className="relative overflow-hidden py-24 md:py-32 scroll-mt-20">
      {/* backdrop */}
      <div
        className="absolute left-1/2 top-1/2 h-[480px] w-[820px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/15 blur-[160px]"
        aria-hidden
      />
      <div className="bg-grid absolute inset-0 opacity-60" aria-hidden />

      <div className="relative mx-auto max-w-5xl px-6 text-center lg:px-10">
        <SectionHeading
          index="06"
          kicker="Contact"
          title="Let's build something players remember"
          description="Open to Unity Development and Game Design roles — remote or onsite, worldwide — as well as freelance commissions. The fastest way to reach me is email."
        />

        <Reveal className="flex flex-wrap items-center justify-center gap-4">
          <a
            href={`mailto:${identity.email}`}
            className="inline-flex items-center gap-2 rounded-full bg-primary px-8 py-4 font-medium text-white shadow-[0_0_40px_rgba(139,92,246,0.5)] transition-all hover:shadow-[0_0_60px_rgba(139,92,246,0.7)] hover:bg-violet-500"
          >
            <Mail className="h-4 w-4" aria-hidden />
            {identity.email}
          </a>
          <a
            href={identity.resume}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-primary/40 bg-primary/10 px-8 py-4 font-medium text-foreground transition-all hover:bg-primary hover:text-white hover:border-primary"
          >
            <FileDown className="h-4 w-4" aria-hidden />
            Download my CV
          </a>
        </Reveal>

        {/* channel cards */}
        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {channels.map((channel, i) => (
            <Reveal key={channel.label} delay={(i % 3) * 80}>
              <a
                href={channel.href}
                target={channel.href.startsWith('http') ? '_blank' : undefined}
                rel={channel.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                className="glow-card group flex h-full items-center gap-4 rounded-3xl bg-card/70 p-5 text-left transition-all duration-300 hover:-translate-y-1 hover:bg-accent"
              >
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-primary/15 text-primary transition-colors group-hover:bg-primary group-hover:text-white">
                  <channel.icon className="h-5 w-5" aria-hidden />
                </span>
                <span className="min-w-0">
                  <span className="block font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
                    {channel.label}
                  </span>
                  <span className="block truncate font-medium">{channel.value}</span>
                </span>
                <ArrowUpRight
                  className="ml-auto h-4 w-4 shrink-0 text-muted-foreground transition-all group-hover:text-primary group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  aria-hidden
                />
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
