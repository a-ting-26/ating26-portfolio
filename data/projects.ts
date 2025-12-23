export interface Project {
  id: string
  title: string
  description: string
  longDescription: string
  techStack: string[]
  category: 'web' | 'mobile' | 'ai' | 'data' | 'other'
  year: number
  image?: string
  demoUrl?: string
  githubUrl?: string
  challenges: string[]
  solutions: string[]
  impact: string
  featured: boolean
}

export const projects: Project[] = [
  {
    id: '1',
    title: 'Spark!Bytes – BU Food Finder App',
    description: 'Full-stack web application enabling Boston University students to discover and reserve leftover food from campus events',
    longDescription: 'A comprehensive food discovery platform built with Next.js and Supabase that helps reduce food waste on campus by connecting students with leftover food from events. Features role-based flows for organizers and students, interactive map-based discovery, and real-time reservation system.',
    techStack: ['Next.js', 'TypeScript', 'Supabase', 'PostgreSQL', 'Mapbox GL', 'Tailwind CSS'],
    category: 'web',
    year: 2025,
    featured: true,
    demoUrl: 'https://cs391-group8-deploy.vercel.app/landing',
    githubUrl: 'https://github.com/a-ting-26/cs391-group8',
    challenges: [
      'Designing scalable architecture for real-time event discovery',
      'Implementing secure role-based access control',
      'Optimizing map rendering and state management for performance',
      'Handling concurrent reservations and preventing double-booking'
    ],
    solutions: [
      'Built scalable architecture using Next.js App Router with Supabase authentication',
      'Implemented PostgreSQL row-level security for role-based access control',
      'Developed interactive map-based UI with Mapbox GL for real-time event discovery',
      'Optimized client-side rendering and state updates to reduce unnecessary re-renders',
      'Designed RESTful data access patterns for efficient data fetching'
    ],
    impact: 'Enabled students to discover and reserve leftover food from campus events, supporting role-based flows for organizers and students while reducing food waste'
  },
  {
    id: '2',
    title: 'Transparency Hub Dashboard',
    description: 'Interactive dashboard enabling comparison of 300+ social media companies\' privacy policies, terms of service, and transparency reports',
    longDescription: 'A comprehensive data visualization project for Harvard\'s Applied Social Media Lab that enables researchers, advocacy groups, and the general public to compare and analyze privacy policies, terms of service, and transparency reports across 300+ social media companies. The dashboard includes interactive visualizations for policy complexity, opt-in ratios, arbitration clauses, and generational platform comparisons.',
    techStack: ['JavaScript', 'HTML', 'CSS', 'Data Visualization', 'Statistical Analysis'],
    category: 'data',
    year: 2025,
    featured: true,
    demoUrl: 'https://analytics.transparency.berkmancenter.org/',
    githubUrl: 'https://github.com/BU-Spark/data-viz-berkman-social-media',
    challenges: [
      'Designing intuitive visualizations for complex policy data',
      'Creating embeddable dashboard components',
      'Summarizing findings for diverse target audiences',
      'Handling large datasets with 300+ companies'
    ],
    solutions: [
      'Designed interactive dashboard with comparative visualizations',
      'Created embeddable components for easy integration',
      'Delivered statistical reports tailored to different audiences',
      'Collaborated in agile environment with iterative prototyping'
    ],
    impact: 'Enabled researchers, advocacy groups, and the public to easily compare and understand privacy policies across major social media platforms'
  },
  {
    id: '3',
    title: 'Snowflake Data Pipeline Optimization',
    description: 'dbt materialization that reduced dataset onboarding time from hours to minutes and cut compute costs by 60-70%',
    longDescription: 'Developed an optimized data pipeline architecture using Snowflake and dbt that implements medallion architecture (bronze, silver, gold layers) for incremental data transformation. The solution includes automated single-pass inserts, efficient versioned snapshots, and a JSON-based staging layer.',
    techStack: ['Snowflake', 'dbt', 'SQL', 'Python', 'ETL', 'Data Engineering'],
    category: 'data',
    year: 2025,
    featured: true,
    demoUrl: 'https://github.com/a-ting-26',
    githubUrl: 'https://github.com/a-ting-26',
    challenges: [
      'Reducing dataset onboarding time from hours to minutes',
      'Minimizing Snowflake compute usage and costs',
      'Handling upstream schema changes gracefully',
      'Ensuring data quality and reliability'
    ],
    solutions: [
      'Built custom dbt materialization with optimized transformation logic',
      'Implemented JSON-based staging layer to decouple ingestion from transformation',
      'Automated single-pass inserts and efficient versioned snapshots',
      'Applied medallion architecture for incremental data cleansing and aggregation',
      'Collaborated with teams to define comprehensive data quality checks'
    ],
    impact: 'Reduced dataset onboarding from hours to minutes, cut Snowflake compute usage by 60-70%, projecting annual savings of $50K-$100K in warehouse credits'
  },
]
