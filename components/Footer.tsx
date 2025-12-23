'use client'

import { motion } from 'framer-motion'
import { Github, Linkedin, Mail, ExternalLink } from 'lucide-react'

const socialLinks = [
  { name: 'GitHub', icon: Github, href: 'https://github.com/a-ting-26' },
  { name: 'LinkedIn', icon: Linkedin, href: 'https://linkedin.com/in/andrew-ting1/' },
  { name: 'Email', icon: Mail, href: 'mailto:ating26@bu.edu' },
]

export function Footer() {
  return (
    <footer className="border-t border-muted/50 py-16 px-6 sm:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-foreground/60 text-sm"
          >
            © {new Date().getFullYear()} Andrew Ting. Built with Next.js & Framer Motion.
          </motion.p>

          <div className="flex items-center gap-6">
            {socialLinks.map((link) => {
              const Icon = link.icon
              return (
                <motion.a
                  key={link.name}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-foreground/60 hover:text-foreground transition-colors"
                  whileHover={{ scale: 1.2, y: -2 }}
                  whileTap={{ scale: 0.9 }}
                  aria-label={link.name}
                >
                  <Icon className="w-5 h-5" />
                </motion.a>
              )
            })}
          </div>
        </div>
      </div>
    </footer>
  )
}

