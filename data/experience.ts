export interface WorkExperience {
  id: string
  company: string
  role: string
  location: string
  startDate: string
  endDate: string | null
  description: string
  technologies: string[]
  achievements: string[]
  responsibilities: string[]
}

export const workExperience: WorkExperience[] = [
  {
    id: '1',
    company: 'Transparency Hub (Applied Social Media Lab, Harvard Berkman Klein Center)',
    role: 'Data Visualization Consultant',
    location: 'Boston, MA',
    startDate: '2025-09',
    endDate: null,
    description: 'Partnered with researchers at Harvard\'s Applied Social Media Lab to design an interactive Transparency Hub dashboard enabling comparison of 300+ social media companies\' privacy policies, terms of service, and transparency reports.',
    technologies: ['Data Visualization', 'JavaScript', 'HTML', 'CSS', 'Statistical Analysis'],
    achievements: [
      'Delivered a statistical report and embeddable dashboard summarizing key findings for target audiences including researchers, advocacy groups, and the general public',
      'Collaborated in a client-facing, agile environment, gathering requirements, iterating on prototypes, and presenting findings to Harvard faculty and stakeholders'
    ],
    responsibilities: [
      'Design interactive dashboard for comparing 300+ social media companies\' policies',
      'Create statistical reports and visualizations for diverse audiences',
      'Gather requirements and iterate on prototypes in agile environment',
      'Present findings to Harvard faculty and stakeholders'
    ]
  },
  {
    id: '2',
    company: 'Voya Investment Management',
    role: 'Investment Management Technology Intern',
    location: 'New York City, NY',
    startDate: '2025-06',
    endDate: '2025-08',
    description: 'Built end-to-end data pipelines using Snowflake and dbt to integrate external shared tables into internal Snowflake databases, applying medallion architecture for data transformation and aggregation.',
    technologies: ['Snowflake', 'dbt', 'SQL', 'Python', 'Data Engineering', 'ETL'],
    achievements: [
      'Built a dbt materialization that shortened dataset onboarding from hours to minutes and reduced Snowflake compute usage by 60–70%, projecting annual savings of $50K–$100K in warehouse credits',
      'Designed and implemented a JSON-based staging layer to decouple raw data ingestion from transformation logic, enabling seamless handling of upstream schema changes',
      'Reduced dataset onboarding time and compute usage in Snowflake by automating single-pass inserts and efficient versioned snapshots',
      'Collaborated with data engineering and business intelligence teams to define data quality checks and ensure reliable, production-grade data delivery'
    ],
    responsibilities: [
      'Build end-to-end data pipelines using Snowflake and dbt',
      'Apply medallion architecture (bronze, silver, gold layers) for data transformation',
      'Design and implement staging layers for data ingestion',
      'Automate data processing workflows to improve efficiency',
      'Collaborate with cross-functional teams on data quality and delivery'
    ]
  },
  {
    id: '3',
    company: 'Boston University',
    role: 'Course Assistant – Foundations of Data Science III',
    location: 'Boston, MA',
    startDate: '2025-01',
    endDate: '2025-05',
    description: 'Facilitated student learning in advanced topics of probability, statistics, and data science, including Bayesian statistics, Markov models, and optimization techniques.',
    technologies: ['Python', 'Statistics', 'Probability', 'Data Science', 'Teaching'],
    achievements: [
      'Collaborated with the teaching team to maintain an inclusive and engaging learning environment',
      'Conducted office hours to assist students with homework and clarify theoretical concepts'
    ],
    responsibilities: [
      'Facilitate student learning in advanced data science topics',
      'Conduct office hours and provide academic support',
      'Clarify theoretical concepts such as Central Limit Theorem, Maximum Likelihood Estimation, and Markov Chain Monte Carlo methods',
      'Collaborate with teaching team on course delivery'
    ]
  },
]
