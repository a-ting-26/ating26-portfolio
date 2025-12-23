'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { Calendar, MapPin, ChevronDown, ChevronUp } from 'lucide-react'
import { workExperience } from '@/data/experience'
import { cn } from '@/lib/utils'

export function WorkExperience() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })
  const [expandedId, setExpandedId] = useState<string | null>(null)

  const toggleExpand = (id: string) => {
    setExpandedId(expandedId === id ? null : id)
  }

  return (
    <section
      id="experience"
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
            Work Experience
          </h2>
          <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
            A journey of growth, ownership, and real-world impact
          </p>
        </motion.div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-secondary to-accent hidden md:block" />

          <div className="space-y-12">
            {workExperience.map((exp, index) => {
              const isExpanded = expandedId === exp.id
              const isEven = index % 2 === 0

              return (
                <motion.div
                  key={exp.id}
                  initial={{ opacity: 0, x: isEven ? -50 : 50 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                  className={cn(
                    'relative',
                    'md:flex md:items-center',
                    isEven ? 'md:flex-row' : 'md:flex-row-reverse'
                  )}
                >
                  {/* Timeline Dot */}
                  <div className="absolute left-8 md:left-1/2 w-4 h-4 rounded-full bg-primary border-4 border-background transform -translate-x-1/2 z-10 hidden md:block" />

                  {/* Content Card */}
                  <div className={cn(
                    'md:w-5/12 ml-0 md:ml-0',
                    isEven ? 'md:mr-auto md:pr-12' : 'md:ml-auto md:pl-12'
                  )}>
                    <motion.div
                      className={cn(
                        'p-6 rounded-2xl',
                        'bg-muted/30 border border-muted/50',
                        'hover:border-primary/50 transition-all duration-300',
                        'cursor-pointer'
                      )}
                      whileHover={{ scale: 1.02 }}
                      onClick={() => toggleExpand(exp.id)}
                    >
                      <div className="flex items-start justify-between mb-4">
                        <div>
                          <h3 className="text-2xl font-bold mb-2">{exp.role}</h3>
                          <p className="text-lg text-primary mb-2">{exp.company}</p>
                          <div className="flex flex-wrap items-center gap-4 text-sm text-foreground/60">
                            <span className="flex items-center gap-1">
                              <Calendar className="w-4 h-4" />
                              {new Date(exp.startDate).toLocaleDateString('en-US', { month: 'short', year: 'numeric' })} - {exp.endDate ? new Date(exp.endDate).toLocaleDateString('en-US', { month: 'short', year: 'numeric' }) : 'Present'}
                            </span>
                            <span className="flex items-center gap-1">
                              <MapPin className="w-4 h-4" />
                              {exp.location}
                            </span>
                          </div>
                        </div>
                        <motion.div
                          animate={{ rotate: isExpanded ? 180 : 0 }}
                          transition={{ duration: 0.3 }}
                        >
                          <ChevronDown className="w-5 h-5 text-foreground/60" />
                        </motion.div>
                      </div>

                      <p className="text-foreground/70 mb-4">{exp.description}</p>

                      {/* Tech Stack */}
                      <div className="flex flex-wrap gap-2 mb-4">
                        {exp.technologies.slice(0, 5).map((tech) => (
                          <span
                            key={tech}
                            className="px-3 py-1 rounded-full text-xs bg-primary/20 text-primary border border-primary/30"
                          >
                            {tech}
                          </span>
                        ))}
                        {exp.technologies.length > 5 && (
                          <span className="px-3 py-1 rounded-full text-xs bg-muted text-foreground/60">
                            +{exp.technologies.length - 5}
                          </span>
                        )}
                      </div>

                      {/* Expanded Content */}
                      <AnimatePresence>
                        {isExpanded && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: 'auto', opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.3 }}
                            className="overflow-hidden"
                          >
                            <div className="pt-4 border-t border-muted/50 space-y-6">
                              {/* Responsibilities */}
                              <div>
                                <h4 className="font-semibold mb-3 text-primary">Key Responsibilities</h4>
                                <ul className="space-y-2">
                                  {exp.responsibilities.map((resp, i) => (
                                    <li key={i} className="text-sm text-foreground/70 flex items-start gap-2">
                                      <span className="text-primary mt-1">•</span>
                                      <span>{resp}</span>
                                    </li>
                                  ))}
                                </ul>
                              </div>

                              {/* Achievements */}
                              <div>
                                <h4 className="font-semibold mb-3 text-primary">Notable Achievements</h4>
                                <ul className="space-y-2">
                                  {exp.achievements.map((achievement, i) => (
                                    <li key={i} className="text-sm text-foreground/70 flex items-start gap-2">
                                      <span className="text-accent mt-1">✓</span>
                                      <span>{achievement}</span>
                                    </li>
                                  ))}
                                </ul>
                              </div>

                              {/* All Technologies */}
                              <div>
                                <h4 className="font-semibold mb-3 text-primary">Technologies</h4>
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
                              </div>
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </motion.div>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}

