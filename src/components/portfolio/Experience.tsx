import { GraduationCap, Award, Briefcase } from 'lucide-react'
import { experience, education, certifications } from '@/data/portfolio'
import { Reveal } from './motion'
import { SectionHeading } from './SectionHeading'

export function Experience() {
  return (
    <section
      id="experience"
      className="relative overflow-hidden py-24 md:py-28 scroll-mt-20"
    >
      <div
        className="absolute right-[-12%] top-0 h-[380px] w-[380px] rounded-full bg-primary/10 blur-[130px]"
        aria-hidden
      />
      <div className="relative mx-auto max-w-7xl px-6 lg:px-10">
        <SectionHeading
          index="04"
          kicker="Career Path"
          title="Experience & education"
          description="From consulting to shipping 15 titles, to teaching the next generation of Unity developers."
        />

        <div className="grid gap-14 lg:grid-cols-[1.25fr_0.75fr] lg:gap-16">
          {/* timeline */}
          <div>
            <ol className="relative space-y-10 border-l border-border pl-8">
              {experience.map((job, i) => (
                <Reveal as="li" key={job.role + job.org} delay={i * 80} className="relative">
                  <span
                    className={`absolute -left-[41px] top-1 flex h-5 w-5 items-center justify-center rounded-full border-2 ${
                      job.current
                        ? 'border-primary bg-primary shadow-[0_0_16px_rgba(139,92,246,0.7)]'
                        : 'border-border bg-card'
                    }`}
                    aria-hidden
                  >
                    {job.current ? (
                      <span className="h-1.5 w-1.5 rounded-full bg-white" />
                    ) : null}
                  </span>
                  <div className="flex flex-wrap items-center gap-x-3 gap-y-1">
                    <h3 className="font-display text-xl font-bold">{job.role}</h3>
                    {job.current ? (
                      <span className="rounded-full bg-primary/15 px-2.5 py-0.5 font-mono text-[10px] uppercase tracking-widest text-primary">
                        Current
                      </span>
                    ) : null}
                  </div>
                  <p className="mt-1 flex flex-wrap items-center gap-2 text-sm text-muted-foreground">
                    <Briefcase className="h-3.5 w-3.5 text-primary/70" aria-hidden />
                    {job.org}
                    <span className="text-border">|</span>
                    <span className="font-mono text-xs">{job.period}</span>
                  </p>
                  <ul className="mt-4 space-y-2.5">
                    {job.points.map((point) => (
                      <li
                        key={point}
                        className="flex gap-3 text-sm leading-relaxed text-muted-foreground"
                      >
                        <span
                          className="mt-[7px] h-1.5 w-1.5 shrink-0 rotate-45 bg-primary/60"
                          aria-hidden
                        />
                        {point}
                      </li>
                    ))}
                  </ul>
                </Reveal>
              ))}
            </ol>
          </div>

          {/* education + certs */}
          <div className="space-y-6">
            <Reveal>
              <div className="glow-card rounded-3xl bg-card/70 p-6">
                <h3 className="mb-5 flex items-center gap-2 font-display text-lg font-bold">
                  <GraduationCap className="h-5 w-5 text-primary" aria-hidden />
                  Education
                </h3>
                <div className="space-y-5">
                  {education.map((edu) => (
                    <div key={edu.degree} className="border-l-2 border-primary/30 pl-4">
                      <p className="font-medium leading-snug">{edu.degree}</p>
                      <p className="mt-1 text-sm text-muted-foreground">{edu.school}</p>
                      <p className="mt-1 font-mono text-xs text-primary/80">{edu.period}</p>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>

            <Reveal delay={120}>
              <div className="glow-card rounded-3xl bg-card/70 p-6">
                <h3 className="mb-5 flex items-center gap-2 font-display text-lg font-bold">
                  <Award className="h-5 w-5 text-primary" aria-hidden />
                  Certifications
                </h3>
                <div className="space-y-4">
                  {certifications.map((cert) => (
                    <div
                      key={cert.name}
                      className="rounded-2xl border border-border bg-secondary/50 p-4"
                    >
                      <p className="font-medium leading-snug">{cert.name}</p>
                      <p className="mt-1 font-mono text-xs text-muted-foreground">{cert.detail}</p>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  )
}
