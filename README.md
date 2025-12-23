# Andrew Ting - Personal Portfolio

A modern, interactive personal portfolio website built with Next.js, React, TypeScript, Tailwind CSS, and Framer Motion.

## Features

- 🎨 **Modern Design**: Clean, minimal, and premium aesthetic with dark-mode first
- ✨ **Smooth Animations**: Fluid motion and interactive elements powered by Framer Motion
- 📱 **Fully Responsive**: Desktop-first design that works beautifully on all devices
- 🌓 **Theme Toggle**: Dark and light mode support
- 🎯 **Interactive Sections**:
  - Full-screen animated hero section with parallax effects
  - Expandable work experience timeline
  - Project cards with detailed modals
  - Filterable project gallery
  - Embedded resume with view toggles
  - Personal about section with values

## Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: Lucide React

## Getting Started

### Prerequisites

- Node.js 18+ and npm/yarn/pnpm

### Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/ating-portfolio.git
cd ating-portfolio
```

2. Install dependencies:
```bash
npm install
# or
yarn install
# or
pnpm install
```

3. Run the development server:
```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Customization

### Update Personal Information

1. **Projects**: Edit `data/projects.ts` to add/modify your projects
2. **Work Experience**: Edit `data/experience.ts` to update your work history
3. **About Section**: Modify `components/sections/About.tsx` for your personal story
4. **Social Links**: Update links in `components/Footer.tsx`
5. **Resume PDF**: Add your resume PDF to the `public` folder as `resume.pdf`

### Styling

- Colors and theme variables are defined in `app/globals.css`
- Tailwind configuration is in `tailwind.config.ts`
- Component styles use Tailwind utility classes

### Content

All content is stored in TypeScript data files for easy editing:
- `data/projects.ts` - Project information
- `data/experience.ts` - Work experience details

## Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Import your repository on [Vercel](https://vercel.com)
3. Deploy with default settings

### Other Platforms

The site can be deployed to any platform that supports Next.js:
- Netlify
- AWS Amplify
- Railway
- Or any Node.js hosting service

## Project Structure

```
ating-portfolio/
├── app/
│   ├── globals.css          # Global styles and CSS variables
│   ├── layout.tsx            # Root layout with theme provider
│   └── page.tsx              # Main page component
├── components/
│   ├── sections/             # Section components
│   │   ├── Hero.tsx
│   │   ├── About.tsx
│   │   ├── WorkExperience.tsx
│   │   ├── Projects.tsx
│   │   └── Resume.tsx
│   ├── Navigation.tsx        # Navigation bar
│   ├── Footer.tsx            # Footer component
│   └── ThemeProvider.tsx     # Theme context provider
├── data/
│   ├── projects.ts           # Project data
│   └── experience.ts         # Work experience data
├── lib/
│   └── utils.ts              # Utility functions
└── public/                   # Static assets
    └── resume.pdf            # Resume PDF (add your own)
```

## Performance

- Optimized images and assets
- Code splitting with Next.js
- Reduced motion support for accessibility
- SEO-friendly metadata

## Accessibility

- Keyboard navigation support
- ARIA labels on interactive elements
- Reduced motion preferences respected
- Semantic HTML structure

## License

This project is open source and available under the [MIT License](LICENSE).

## Credits

Built with:
- [Next.js](https://nextjs.org/)
- [Framer Motion](https://www.framer.com/motion/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Lucide Icons](https://lucide.dev/)

---

Made with ❤️ by Andrew Ting

