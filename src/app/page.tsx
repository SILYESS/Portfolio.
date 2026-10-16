'use client'

import { useState } from 'react'
import type { Project } from '@/data/portfolio'
import { Nav } from '@/components/portfolio/Nav'
import { Hero } from '@/components/portfolio/Hero'
import { Marquee } from '@/components/portfolio/Marquee'
import { Archive } from '@/components/portfolio/Archive'
import { About } from '@/components/portfolio/About'
import { Skills } from '@/components/portfolio/Skills'
import { Experience } from '@/components/portfolio/Experience'
import { Testimonials } from '@/components/portfolio/Testimonials'
import { Contact } from '@/components/portfolio/Contact'
import { Footer } from '@/components/portfolio/Footer'
import { ProjectDialog } from '@/components/portfolio/ProjectDialog'

export default function Home() {
  const [selected, setSelected] = useState<Project | null>(null)

  return (
    <div className="flex min-h-screen flex-col">
      <Nav />
      <main className="flex-1">
        <Hero />
        <Marquee />
        <Archive onSelect={setSelected} />
        <About />
        <Skills />
        <Experience />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
      <ProjectDialog project={selected} onClose={() => setSelected(null)} />
    </div>
  )
}
