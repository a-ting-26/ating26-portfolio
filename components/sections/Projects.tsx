'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { ExternalLink, Github, X, Filter } from 'lucide-react'
import { projects, Project } from '@/data/projects'
import { cn } from '@/lib/utils'

const categories = ['all', 'web', 'mobile', 'ai', 'data', 'other'] as const
type Category = typeof categories[number]

export function Projects() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })
  const [selectedCategory, setSelectedCategory] = useState<Category>('all')
  const [selectedProject, setSelectedProject] = useState<Project | null>(null)

  const filteredProjects = selectedCategory === 'all'
    ? projects
    : projects.filter(p => p.category === selectedCategory)

  return (
    <section
      id="projects"
      ref={ref}
      className="py-32 px-6 sm:px-8 relative"
    >
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6">
            Featured Projects
          </h2>
          <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
            A collection of projects showcasing technical depth and creative problem-solving
          </p>
        </motion.div>

        {/* Filter Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex flex-wrap items-center justify-center gap-4 mb-12"
        >
          <Filter className="w-5 h-5 text-foreground/60" />
          {categories.map((category) => (
            <motion.button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={cn(
                'px-6 py-2 rounded-full text-sm font-medium transition-all',
                selectedCategory === category
                  ? 'bg-primary text-white'
                  : 'bg-muted/30 text-foreground/70 hover:bg-muted/50'
              )}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {category.charAt(0).toUpperCase() + category.slice(1)}
            </motion.button>
          ))}
        </motion.div>

        {/* Project Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence mode="wait">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group relative"
              >
                <motion.div
                  className={cn(
                    'h-full p-6 rounded-2xl',
                    'bg-muted/30 border border-muted/50',
                    'hover:border-primary/50 transition-all duration-300',
                    'cursor-pointer overflow-hidden',
                    'flex flex-col'
                  )}
                  whileHover={{ y: -8, scale: 1.02 }}
                  onClick={() => setSelectedProject(project)}
                >
                  {/* Featured Badge */}
                  {project.featured && (
                    <div className="absolute top-4 right-4 px-3 py-1 rounded-full bg-primary/20 text-primary text-xs font-semibold border border-primary/30">
                      Featured
                    </div>
                  )}

                  {/* Category Badge */}
                  <div className="mb-4">
                    <span className="px-3 py-1 rounded-full text-xs bg-secondary/20 text-secondary border border-secondary/30">
                      {project.category}
                    </span>
                  </div>

                  <h3 className="text-2xl font-bold mb-3">{project.title}</h3>
                  <p className="text-foreground/70 mb-4 flex-grow">{project.description}</p>

                  {/* Tech Stack Preview */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.techStack.slice(0, 4).map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-1 rounded text-xs bg-background/50 text-foreground/60"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.techStack.length > 4 && (
                      <span className="px-2 py-1 rounded text-xs bg-background/50 text-foreground/60">
                        +{project.techStack.length - 4}
                      </span>
                    )}
                  </div>

                  {/* Year */}
                  <div className="text-sm text-foreground/50">{project.year}</div>

                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-6">
                    <span className="text-sm font-semibold text-white">View Details →</span>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>

      {/* Project Modal */}
      <AnimatePresence>
        {selectedProject && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-background/80 backdrop-blur-sm z-50"
              onClick={() => setSelectedProject(null)}
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="fixed inset-4 md:inset-16 z-50 overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="max-w-4xl mx-auto bg-muted/50 backdrop-blur-md rounded-2xl border border-muted/50 p-8 md:p-12">
                <div className="flex items-start justify-between mb-6">
                  <div>
                    <h2 className="text-3xl md:text-4xl font-bold mb-2">{selectedProject.title}</h2>
                    <div className="flex items-center gap-4 text-sm text-foreground/60">
                      <span>{selectedProject.year}</span>
                      <span className="px-3 py-1 rounded-full bg-secondary/20 text-secondary border border-secondary/30">
                        {selectedProject.category}
                      </span>
                    </div>
                  </div>
                  <motion.button
                    onClick={() => setSelectedProject(null)}
                    className="p-2 rounded-lg hover:bg-muted transition-colors"
                    whileHover={{ rotate: 90 }}
                    whileTap={{ scale: 0.9 }}
                    aria-label="Close"
                  >
                    <X className="w-6 h-6" />
                  </motion.button>
                </div>

                <p className="text-lg text-foreground/70 mb-8 leading-relaxed">
                  {selectedProject.longDescription}
                </p>

                {/* Tech Stack */}
                <div className="mb-8">
                  <h3 className="text-xl font-semibold mb-4">Tech Stack</h3>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.techStack.map((tech) => (
                      <span
                        key={tech}
                        className="px-4 py-2 rounded-lg bg-primary/20 text-primary border border-primary/30"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Challenges & Solutions */}
                <div className="grid md:grid-cols-2 gap-6 mb-8">
                  <div>
                    <h3 className="text-xl font-semibold mb-4 text-primary">Challenges</h3>
                    <ul className="space-y-2">
                      {selectedProject.challenges.map((challenge, i) => (
                        <li key={i} className="text-foreground/70 flex items-start gap-2">
                          <span className="text-primary mt-1">•</span>
                          <span>{challenge}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-4 text-accent">Solutions</h3>
                    <ul className="space-y-2">
                      {selectedProject.solutions.map((solution, i) => (
                        <li key={i} className="text-foreground/70 flex items-start gap-2">
                          <span className="text-accent mt-1">✓</span>
                          <span>{solution}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Impact */}
                <div className="mb-8 p-6 rounded-xl bg-primary/10 border border-primary/20">
                  <h3 className="text-xl font-semibold mb-2 text-primary">Impact</h3>
                  <p className="text-foreground/70">{selectedProject.impact}</p>
                </div>

                {/* Links */}
                <div className="flex items-center gap-4">
                  {selectedProject.demoUrl && (
                    <motion.a
                      href={selectedProject.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-6 py-3 rounded-lg bg-primary text-white font-semibold hover:bg-primary/90 transition-colors"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <ExternalLink className="w-5 h-5" />
                      View Demo
                    </motion.a>
                  )}
                  {selectedProject.githubUrl && (
                    <motion.a
                      href={selectedProject.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-6 py-3 rounded-lg border-2 border-muted/50 hover:border-primary/50 transition-colors"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Github className="w-5 h-5" />
                      View Code
                    </motion.a>
                  )}
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </section>
  )
}

