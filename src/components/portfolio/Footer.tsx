import { identity } from '@/data/portfolio'

export function Footer() {
  return (
    <footer className="border-t border-border py-10 mt-auto">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-6 sm:flex-row lg:px-10">
        <p className="font-mono text-xs text-muted-foreground">
          © {new Date().getFullYear()} {identity.name} — Built with Next.js &amp; too much coffee
        </p>
        <a
          href="#top"
          className="font-mono text-xs uppercase tracking-widest text-muted-foreground transition-colors hover:text-primary"
        >
          Back to top ↑
        </a>
      </div>
    </footer>
  )
}
