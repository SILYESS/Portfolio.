'use client'

import Image from 'next/image'
import { ExternalLink } from 'lucide-react'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog'
import type { Project } from '@/data/portfolio'

interface ProjectDialogProps {
  project: Project | null
  onClose: () => void
}

export function ProjectDialog({ project, onClose }: ProjectDialogProps) {
  return (
    <Dialog open={!!project} onOpenChange={(open) => !open && onClose()}>
      <DialogContent className="max-h-[88vh] max-w-3xl overflow-y-auto rounded-3xl border-border bg-card p-0 sm:rounded-3xl">
        {project ? (
          <div>
            {/* cover */}
            <div className="relative aspect-[16/9] w-full overflow-hidden rounded-t-3xl">
              <Image
                src={project.cover}
                alt={`${project.title} cover`}
                fill
                sizes="(max-width: 768px) 100vw, 672px"
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent" />
            </div>

            <div className="p-6 md:p-8">
              <DialogHeader className="space-y-3 text-left">
                <div className="flex flex-wrap items-center gap-2 font-mono text-[11px] uppercase tracking-widest text-primary">
                  <span className="rounded-full bg-primary/15 px-3 py-1">{project.genre}</span>
                  <span className="rounded-full bg-secondary px-3 py-1 text-muted-foreground">
                    {project.platform}
                  </span>
                  <span className="rounded-full bg-secondary px-3 py-1 text-muted-foreground">
                    {project.year}
                  </span>
                </div>
                <DialogTitle className="font-display text-3xl font-bold tracking-tight">
                  {project.title}
                </DialogTitle>
                <DialogDescription className="font-mono text-sm text-muted-foreground">
                  Role — {project.role}
                </DialogDescription>
              </DialogHeader>

              <p className="mt-5 leading-relaxed text-foreground/90">
                {project.longDescription}
              </p>

              {/* screenshots */}
              {project.screenshots.length > 0 ? (
                <div className="mt-7">
                  <h4 className="mb-3 font-mono text-xs uppercase tracking-[0.25em] text-muted-foreground">
                    Screenshots
                  </h4>
                  <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
                    {project.screenshots.map((shot, i) => (
                      <img
                        key={shot}
                        src={shot}
                        alt={`${project.title} screenshot ${i + 1}`}
                        loading="lazy"
                        className="aspect-video w-full rounded-xl border border-border object-cover transition-transform duration-300 hover:scale-[1.02]"
                      />
                    ))}
                  </div>
                </div>
              ) : null}

              {/* tags */}
              <div className="mt-7 flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-border bg-secondary/60 px-3 py-1 text-xs text-muted-foreground"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* link */}
              {project.link ? (
                <a
                  href={project.link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-7 inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-medium text-white transition-all hover:bg-violet-500 hover:shadow-[0_0_32px_rgba(139,92,246,0.5)]"
                >
                  <ExternalLink className="h-4 w-4" aria-hidden />
                  {project.link.label}
                </a>
              ) : null}
            </div>
          </div>
        ) : null}
      </DialogContent>
    </Dialog>
  )
}
