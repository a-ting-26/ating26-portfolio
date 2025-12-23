'use client'

import { Hero } from '@/components/sections/Hero'
import { Projects } from '@/components/sections/Projects'
import { WorkExperience } from '@/components/sections/WorkExperience'
import { Resume } from '@/components/sections/Resume'
import { About } from '@/components/sections/About'
import { Footer } from '@/components/Footer'

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <About />
      <WorkExperience />
      <Projects />
      <Resume />
      <Footer />
    </main>
  )
}

