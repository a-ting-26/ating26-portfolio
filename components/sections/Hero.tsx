'use client'

import { useEffect, useState, useMemo } from 'react'
import { motion } from 'framer-motion'
import { ArrowDown, Download, Code, Sparkles } from 'lucide-react'
import { cn } from '@/lib/utils'

export function Hero() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [dimensions, setDimensions] = useState({ width: 1920, height: 1080 })
  const [mounted, setMounted] = useState(false)
  
  // Safely use useScroll with layoutEffect: false to avoid SSR issues
  // Disabled scroll transforms for better performance - can be re-enabled if needed
  // const { scrollY } = useScroll({ layoutEffect: false })
  // const fallbackScroll = useMotionValue(0)
  // const scrollValue = scrollY || fallbackScroll
  // const opacity = useTransform(scrollValue, [0, 500], [1, 0], { clamp: false })
  // const scale = useTransform(scrollValue, [0, 500], [1, 0.8], { clamp: false })

  // Memoize particles - must be called unconditionally (hooks rule)
  // Reduced from 20 to 8 for better performance
  const particles = useMemo(() => {
    return [...Array(8)].map((_, i) => {
      // Use a seeded random based on index for consistency
      const seed = i * 0.1
      const initialX = (Math.sin(seed) * 0.5 + 0.5) * dimensions.width
      const initialY = (Math.cos(seed) * 0.5 + 0.5) * dimensions.height
      const offsetX = (Math.sin(seed * 2) * 0.5 + 0.5) * 200 - 100
      const offsetY = (Math.cos(seed * 2) * 0.5 + 0.5) * 200 - 100
      const duration = 10 + (Math.sin(seed) * 0.5 + 0.5) * 10
      
      return {
        key: i,
        initialX,
        initialY,
        offsetX,
        offsetY,
        duration,
      }
    })
  }, [dimensions.width, dimensions.height])

  useEffect(() => {
    setMounted(true)
    setDimensions({ width: window.innerWidth, height: window.innerHeight })
    
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth - 0.5) * 20,
        y: (e.clientY / window.innerHeight - 0.5) * 20,
      })
    }
    
    const handleResize = () => {
      setDimensions({ width: window.innerWidth, height: window.innerHeight })
    }
    
    window.addEventListener('mousemove', handleMouseMove)
    window.addEventListener('resize', handleResize)
    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  const handleScroll = () => {
    const element = document.querySelector('#about')
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pb-8"
    >
      {/* Animated Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-secondary/20 to-accent/20 animate-gradient" />
      
      {/* Floating Particles - Reduced for performance */}
      {mounted && (
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {particles.map((particle) => (
            <motion.div
              key={particle.key}
              className="absolute w-1 h-1 bg-primary/20 rounded-full"
              initial={{
                x: particle.initialX,
                y: particle.initialY,
              }}
              animate={{
                y: [particle.initialY, particle.initialY + particle.offsetY],
                x: [particle.initialX, particle.initialX + particle.offsetX],
              }}
              transition={{
                duration: particle.duration,
                repeat: Infinity,
                repeatType: 'reverse',
                ease: 'easeInOut',
              }}
            />
          ))}
        </div>
      )}

      {/* Parallax Effect - Simplified for performance */}
      <motion.div
        style={{
          x: mounted ? mousePosition.x : 0,
          y: mounted ? mousePosition.y : 0,
        }}
        className="relative z-10 text-center px-6 sm:px-8 max-w-5xl mx-auto"
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-6"
        >
          <motion.div
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-muted/50 backdrop-blur-sm border border-primary/20 mb-8"
            whileHover={{ scale: 1.05 }}
          >
            <Sparkles className="w-4 h-4 text-primary" />
            <span className="text-sm text-foreground/80">Computer Science Student & Data Engineer</span>
          </motion.div>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold mb-8 leading-[1.15] pb-6"
        >
          <span className="block mb-2">Creating Value</span>
          <span className="block bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent pb-4">
            Through Technology
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-lg sm:text-xl text-foreground/70 mb-12 max-w-2xl mx-auto leading-relaxed"
        >
          Computer Science student at Boston University passionate about data engineering, full-stack development,
          and building systems that solve real-world problems. Currently working on data pipelines, web applications, and data visualization.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <motion.button
            onClick={() => {
              const element = document.querySelector('#projects')
              element?.scrollIntoView({ behavior: 'smooth' })
            }}
            className={cn(
              'group relative px-8 py-4 rounded-full',
              'bg-gradient-to-r from-primary to-secondary',
              'text-white font-semibold',
              'overflow-hidden',
              'transition-all duration-300'
            )}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="relative z-10 flex items-center gap-2">
              <Code className="w-5 h-5" />
              Explore Projects
            </span>
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-secondary to-accent"
              initial={{ x: '-100%' }}
              whileHover={{ x: 0 }}
              transition={{ duration: 0.3 }}
            />
          </motion.button>

          <motion.a
            href="/resume.pdf"
            download
            className={cn(
              'px-8 py-4 rounded-full',
              'border-2 border-primary/50',
              'text-foreground font-semibold',
              'hover:bg-primary/10',
              'transition-all duration-300',
              'flex items-center gap-2'
            )}
            whileHover={{ scale: 1.05, borderColor: 'var(--primary)' }}
            whileTap={{ scale: 0.95 }}
          >
            <Download className="w-5 h-5" />
            Download Resume
          </motion.a>
        </motion.div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.button
        onClick={handleScroll}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, repeat: Infinity, repeatType: 'reverse', duration: 2 }}
        aria-label="Scroll down"
      >
        <ArrowDown className="w-6 h-6 text-foreground/60 animate-bounce" />
      </motion.button>
    </section>
  )
}

