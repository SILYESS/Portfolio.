import { marqueeItems } from '@/data/portfolio'

export function Marquee() {
  const items = [...marqueeItems, ...marqueeItems]
  return (
    <div
      className="relative overflow-hidden border-y border-border bg-card/40 py-5"
      aria-hidden
    >
      <div className="marquee-track flex w-max items-center gap-10 pr-10">
        {items.map((item, i) => (
          <span key={`${item}-${i}`} className="flex items-center gap-10">
            <span className="font-mono text-sm uppercase tracking-[0.2em] text-muted-foreground whitespace-nowrap">
              {item}
            </span>
            <span className="h-1.5 w-1.5 rotate-45 bg-primary/70" />
          </span>
        ))}
      </div>
      <div className="pointer-events-none absolute inset-y-0 left-0 w-28 bg-gradient-to-r from-background to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-28 bg-gradient-to-l from-background to-transparent" />
    </div>
  )
}
