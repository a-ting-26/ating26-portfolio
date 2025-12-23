import type { Metadata } from 'next'
import './globals.css'
import { ThemeProvider } from '@/components/ThemeProvider'
import { Navigation } from '@/components/Navigation'

export const metadata: Metadata = {
  title: 'Andrew Ting | Computer Science Student & Data Engineer',
  description: 'Portfolio of Andrew Ting - Computer Science student at Boston University, data engineer, and full-stack developer specializing in data pipelines, web applications, and data visualization',
  keywords: ['Andrew Ting', 'computer science', 'data engineer', 'software engineer', 'developer', 'portfolio', 'Boston University', 'data science', 'web development'],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <ThemeProvider>
          <Navigation />
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}

