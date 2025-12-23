'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { Download, FileText, Eye } from 'lucide-react'
import { workExperience } from '@/data/experience'
import { projects } from '@/data/projects'
import { cn } from '@/lib/utils'

export function Resume() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })
  const [viewMode, setViewMode] = useState<'technical' | 'high-level'>('technical')

  return (
    <section
      id="resume"
      ref={ref}
      className="py-32 px-6 sm:px-8 relative"
    >
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6">
            Resume
          </h2>
          <p className="text-lg text-foreground/70 max-w-2xl mx-auto mb-8">
            A comprehensive overview of my experience, skills, and achievements
          </p>

          {/* View Toggle */}
          <div className="flex items-center justify-center gap-4 mb-8">
            <motion.button
              onClick={() => setViewMode('technical')}
              className={cn(
                'px-6 py-3 rounded-lg font-semibold transition-all',
                viewMode === 'technical'
                  ? 'bg-primary text-white'
                  : 'bg-muted/30 text-foreground/70 hover:bg-muted/50'
              )}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <FileText className="w-5 h-5 inline-block mr-2" />
              Technical View
            </motion.button>
            <motion.button
              onClick={() => setViewMode('high-level')}
              className={cn(
                'px-6 py-3 rounded-lg font-semibold transition-all',
                viewMode === 'high-level'
                  ? 'bg-primary text-white'
                  : 'bg-muted/30 text-foreground/70 hover:bg-muted/50'
              )}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Eye className="w-5 h-5 inline-block mr-2" />
              High-Level View
            </motion.button>
          </div>

          {/* Download Button */}
          <motion.a
            href="/resume.pdf"
            download
            className="inline-flex items-center gap-2 px-8 py-4 rounded-lg bg-gradient-to-r from-primary to-secondary text-white font-semibold hover:opacity-90 transition-opacity"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Download className="w-5 h-5" />
            Download PDF
          </motion.a>
        </motion.div>

        {/* Resume Content */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="bg-muted/30 backdrop-blur-sm rounded-2xl border border-muted/50 p-8 md:p-12"
        >
          {/* Header */}
          <div className="text-center mb-12 pb-8 border-b border-muted/50">
            <h1 className="text-4xl font-bold mb-2">Andrew Ting</h1>
            <p className="text-xl text-foreground/70 mb-4">Computer Science Student & Data Engineer</p>
            <div className="flex flex-wrap items-center justify-center gap-4 text-sm text-foreground/60">
              <span>516-503-8832</span>
              <span>•</span>
              <span>ating26@bu.edu</span>
              <span>•</span>
              <span>linkedin.com/in/andrew-ting1/</span>
              <span>•</span>
              <span>github.com/a-ting-26</span>
            </div>
          </div>

          {/* Experience */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold mb-6 text-primary">Experience</h2>
            <div className="space-y-8">
              {workExperience.map((exp, index) => (
                <motion.div
                  key={exp.id}
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                  className="pb-8 border-b border-muted/50 last:border-0"
                >
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-3">
                    <div>
                      <h3 className="text-xl font-semibold">{exp.role}</h3>
                      <p className="text-lg text-primary">{exp.company}</p>
                    </div>
                    <div className="text-sm text-foreground/60 mt-1 md:mt-0">
                      {new Date(exp.startDate).toLocaleDateString('en-US', { month: 'short', year: 'numeric' })} - {exp.endDate ? new Date(exp.endDate).toLocaleDateString('en-US', { month: 'short', year: 'numeric' }) : 'Present'}
                    </div>
                  </div>
                  <p className="text-foreground/70 mb-4">{exp.description}</p>
                  
                  {viewMode === 'technical' ? (
                    <>
                      <div className="mb-4">
                        <h4 className="font-semibold mb-2 text-sm text-foreground/80">Key Responsibilities:</h4>
                        <ul className="space-y-1">
                          {exp.responsibilities.map((resp, i) => (
                            <li key={i} className="text-sm text-foreground/70 flex items-start gap-2">
                              <span className="text-primary mt-1">•</span>
                              <span>{resp}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div className="mb-4">
                        <h4 className="font-semibold mb-2 text-sm text-foreground/80">Achievements:</h4>
                        <ul className="space-y-1">
                          {exp.achievements.map((achievement, i) => (
                            <li key={i} className="text-sm text-foreground/70 flex items-start gap-2">
                              <span className="text-accent mt-1">✓</span>
                              <span>{achievement}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {exp.technologies.map((tech) => (
                          <span
                            key={tech}
                            className="px-3 py-1 rounded-full text-xs bg-primary/20 text-primary border border-primary/30"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </>
                  ) : (
                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.slice(0, 6).map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 rounded-full text-xs bg-primary/20 text-primary border border-primary/30"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  )}
                </motion.div>
              ))}
            </div>
          </div>

          {/* Featured Projects */}
          {viewMode === 'technical' && (
            <div className="mb-12">
              <h2 className="text-2xl font-bold mb-6 text-primary">Featured Projects</h2>
              <div className="space-y-6">
                {projects.filter(p => p.featured).slice(0, 3).map((project) => (
                  <div key={project.id} className="pb-6 border-b border-muted/50 last:border-0">
                    <h3 className="text-lg font-semibold mb-2">{project.title}</h3>
                    <p className="text-sm text-foreground/70 mb-3">{project.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {project.techStack.slice(0, 5).map((tech) => (
                        <span
                          key={tech}
                          className="px-2 py-1 rounded text-xs bg-background/50 text-foreground/60"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Education */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold mb-6 text-primary">Education</h2>
            <div className="pb-8 border-b border-muted/50 last:border-0">
              <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-3">
                <div>
                  <h3 className="text-xl font-semibold">Bachelor of Arts in Computer Science</h3>
                  <p className="text-lg text-primary">Boston University</p>
                  <p className="text-sm text-foreground/70">Minor in Data Science, GPA: 3.5</p>
                </div>
                <div className="text-sm text-foreground/60 mt-1 md:mt-0">
                  Sep. 2022 – May 2026
                </div>
              </div>
              <p className="text-foreground/70">Boston, MA</p>
            </div>
          </div>

          {/* Skills Summary */}
          <div>
            <h2 className="text-2xl font-bold mb-6 text-primary">Technical Skills</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div>
                <h3 className="font-semibold mb-3 text-foreground/80">Languages</h3>
                <div className="flex flex-wrap gap-2">
                  {['Java', 'Python', 'SQL', 'Assembly', 'C', 'JavaScript', 'HTML', 'CSS', 'C#'].map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1 rounded-full text-xs bg-secondary/20 text-secondary border border-secondary/30"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
              <div>
                <h3 className="font-semibold mb-3 text-foreground/80">Frameworks & Tools</h3>
                <div className="flex flex-wrap gap-2">
                  {['React', 'Node.js', 'Flask', 'Next.js', 'Supabase', 'Snowflake', 'dbt', 'Mapbox GL'].map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1 rounded-full text-xs bg-secondary/20 text-secondary border border-secondary/30"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
              <div>
                <h3 className="font-semibold mb-3 text-foreground/80">Libraries & Developer Tools</h3>
                <div className="flex flex-wrap gap-2">
                  {['Pandas', 'NumPy', 'Matplotlib', 'Seaborn', 'Sci-Kit Learn', 'NLTK', 'Git', 'VS Code', 'PyCharm', 'DBT-Core'].map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1 rounded-full text-xs bg-secondary/20 text-secondary border border-secondary/30"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

