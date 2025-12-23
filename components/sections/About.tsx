'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { Brain, Zap, Heart } from 'lucide-react'

const values = [
  {
    icon: Brain,
    title: 'Curiosity-Driven',
    description: 'I thrive on understanding how things work under the hood and exploring new technologies that push boundaries.',
  },
  {
    icon: Zap,
    title: 'Problem Solver',
    description: 'Complex challenges excite me. I break them down, analyze patterns, and craft elegant solutions.',
  },
  {
    icon: Heart,
    title: 'Impact-Focused',
    description: 'I build products that matter—tools that empower people and solve real-world problems.',
  },
]

export function About() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section
      id="about"
      ref={ref}
      className="py-32 px-6 sm:px-8 relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6">
            About Me
          </h2>
          <div className="max-w-3xl mx-auto">
            <p className="text-lg sm:text-xl text-foreground/70 leading-relaxed mb-6">
              I'm a Computer Science student at Boston University with a passion for data engineering and full-stack development.
              Currently pursuing a Bachelor of Arts in Computer Science with a Minor in Data Science, I'm driven by the challenge
              of building systems that transform complex data into actionable insights.
            </p>
            <p className="text-lg sm:text-xl text-foreground/70 leading-relaxed">
              From optimizing data pipelines at Voya Investment Management to building interactive dashboards for Harvard researchers,
              I've worked on projects that bridge the gap between technical complexity and real-world impact. Whether it's reducing
              compute costs by 60-70% or helping students discover leftover food on campus, I believe great engineering comes from
              understanding both the technical and human sides of a problem.
            </p>
          </div>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 mt-16">
          {values.map((value, index) => {
            const Icon = value.icon
            return (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className="group relative p-8 rounded-2xl bg-muted/30 border border-muted/50 hover:border-primary/50 transition-all duration-300"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-secondary/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="relative z-10">
                  <div className="w-12 h-12 rounded-lg bg-primary/20 flex items-center justify-center mb-6 group-hover:bg-primary/30 transition-colors">
                    <Icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-4">{value.title}</h3>
                  <p className="text-foreground/70 leading-relaxed">{value.description}</p>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

