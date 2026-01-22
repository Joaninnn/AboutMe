<div align="center">
  <h1>🚀 About Me - Portfolio Website</h1>
  <p><strong>Modern, Animated & Fully Responsive Portfolio</strong></p>
  
  ![Next.js](https://img.shields.io/badge/Next.js-15.0.5-black?style=for-the-badge&logo=next.js)
  ![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue?style=for-the-badge&logo=typescript)
  ![React](https://img.shields.io/badge/React-18.3-61DAFB?style=for-the-badge&logo=react)
  ![Vercel](https://img.shields.io/badge/Deployed%20on-Vercel-000000?style=for-the-badge&logo=vercel)
  
  <p>
    <a href="#features">Features</a> •
    <a href="#tech-stack">Tech Stack</a> •
    <a href="#getting-started">Getting Started</a> •
    <a href="#deployment">Deployment</a> •
    <a href="#contact">Contact</a>
  </p>
</div>

---

## 📋 Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [Getting Started](#getting-started)
- [Environment Variables](#environment-variables)
- [Scripts](#scripts)
- [Deployment](#deployment)
- [Performance Optimizations](#performance-optimizations)
- [Browser Support](#browser-support)
- [Contributing](#contributing)
- [License](#license)
- [Contact](#contact)

---

## 🎯 Overview

A modern, professional portfolio website showcasing my skills, projects, and experience as a Full-Stack Developer. Built with cutting-edge technologies and featuring smooth animations, interactive UI elements, and optimized performance.

**Live Demo:** [Your Vercel URL]

**Key Highlights:**
- ⚡ **Lightning Fast** - Optimized for Core Web Vitals
- 🎨 **Beautiful Animations** - Powered by Framer Motion
- 📱 **Fully Responsive** - Perfect on all devices
- 🌙 **Dark Theme** - Minimalist black & white design
- ♿ **Accessible** - WCAG 2.1 compliant
- 🔒 **Secure** - Security headers configured

---

## ✨ Features

### 🎭 Visual & UX
- **Animated Hero Section** with typing effect and gradient animations
- **3D Interactive Cards** with hover effects and transformations
- **Lightning Background Effects** for dynamic visual appeal
- **Smooth Scroll Navigation** with section highlighting
- **Progress Bar** showing page scroll position
- **Glassmorphism Design** elements throughout

### 🧩 Sections
1. **Hero** - Animated introduction with call-to-action
2. **About** - Personal info with 3D profile card and stats
3. **Tech Stack** - Skills and technologies with icons
4. **Statistics** - GitHub activity and coding languages
5. **Projects** - Portfolio showcase with live demos
6. **Contact** - Working contact form

### ⚙️ Technical Features
- **Server-Side Rendering (SSR)** for optimal SEO
- **Static Site Generation (SSG)** where applicable
- **Image Optimization** with Next.js Image component
- **Code Splitting** for faster initial load
- **Lazy Loading** for below-the-fold content
- **TypeScript** for type safety
- **SCSS Modules** for scoped styling

---

## 🛠️ Tech Stack

### Core Technologies
| Technology | Version | Purpose |
|------------|---------|---------|
| [Next.js](https://nextjs.org/) | 15.0.5 | React framework with SSR/SSG |
| [React](https://react.dev/) | 18.3.1 | UI library |
| [TypeScript](https://www.typescriptlang.org/) | 5.x | Type safety |
| [SASS](https://sass-lang.com/) | 1.97.3 | Advanced CSS preprocessing |

### Libraries & Tools
- **[Framer Motion](https://www.framer.com/motion/)** (11.13.4) - Animation library
- **[React Icons](https://react-icons.github.io/react-icons/)** (5.4.0) - Icon library
- **[Zustand](https://zustand-demo.pmnd.rs/)** (5.0.1) - State management
- **[Redux Toolkit](https://redux-toolkit.js.org/)** (2.3.0) - Advanced state management
- **[Axios](https://axios-http.com/)** (1.7.7) - HTTP client

### Development Tools
- **ESLint** - Code linting
- **Next.js ESLint Config** - Next.js specific rules
- **TypeScript ESLint** - TypeScript support

---

## 📁 Project Structure

```
about-me/
├── 📂 public/                      # Static assets
│   ├── hero.jpg                   # Hero section image
│   ├── profile.jpg                # Profile photo
│   ├── next.svg                   # Next.js logo
│   └── vercel.svg                 # Vercel logo
│
├── 📂 src/
│   ├── 📂 app/                    # Next.js App Router
│   │   ├── layout.tsx             # Root layout (server component)
│   │   ├── layout.client.tsx      # Client layout wrapper
│   │   ├── page.tsx               # Home page entry
│   │   └── globals.scss           # Global styles
│   │
│   ├── 📂 appPages/
│   │   └── 📂 site/
│   │       └── 📂 components/
│   │           ├── 📂 layout/     # Layout components
│   │           │   ├── Navigation/
│   │           │   │   ├── Navigation.tsx
│   │           │   │   └── Navigation.module.scss
│   │           │   ├── Footer/
│   │           │   │   ├── Footer.tsx
│   │           │   │   └── Footer.module.scss
│   │           │   └── BackgroundEffects/
│   │           │       ├── BackgroundEffects.tsx
│   │           │       └── BackgroundEffects.module.scss
│   │           │
│   │           └── 📂 pages/
│   │               ├── HomePage.tsx
│   │               └── 📂 homeSections/
│   │                   ├── HeroSection/
│   │                   ├── AboutSection/
│   │                   ├── TechStackSection/
│   │                   ├── StatsSection/
│   │                   ├── ProjectsSection/
│   │                   └── ContactSection/
│   │
│   ├── 📂 assets/                 # Project assets
│   │   └── hero.jpg
│   │
│   └── 📂 hooks/                  # Custom React hooks
│       └── useScrollAnimation.ts
│
├── 📄 .env.example                # Environment variables template
├── 📄 .gitignore                  # Git ignore rules
├── 📄 next.config.js              # Next.js configuration
├── 📄 vercel.json                 # Vercel deployment config
├── 📄 tsconfig.json               # TypeScript configuration
├── 📄 package.json                # Dependencies and scripts
├── 📄 README.md                   # This file
├── 📄 README_DEPLOY.md            # Deployment guide
└── 📄 PRODUCTION_READY.md         # Production checklist
```

---

## 🚀 Getting Started

### Prerequisites

Ensure you have the following installed:
- **Node.js** 18.x or higher
- **npm** 9.x or higher (or **pnpm** / **yarn**)

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/Joaninnn/about-me.git
   cd about-me
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   pnpm install
   # or
   yarn install
   ```

3. **Set up environment variables**
   ```bash
   cp .env.example .env.local
   ```
   
   Edit `.env.local` with your configuration:
   ```env
   NEXT_PUBLIC_SITE_URL=http://localhost:3000
   ```

4. **Run development server**
   ```bash
   npm run dev
   ```

5. **Open your browser**
   
   Navigate to [http://localhost:3000](http://localhost:3000)

---

## 🔐 Environment Variables

Create a `.env.local` file in the root directory:

```env
# Site Configuration
NEXT_PUBLIC_SITE_URL=https://your-domain.vercel.app

# Analytics (Optional)
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX

# Contact Form (Optional)
NEXT_PUBLIC_EMAILJS_SERVICE_ID=your_service_id
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=your_template_id
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=your_public_key
```

**Note:** Variables prefixed with `NEXT_PUBLIC_` are exposed to the browser.

---

## 📜 Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server on port 3000 |
| `npm run build` | Create optimized production build |
| `npm run start` | Start production server |
| `npm run lint` | Run ESLint code analysis |

### Development Workflow

```bash
# Development
npm run dev          # Start dev server with hot reload

# Production Testing
npm run build        # Build for production
npm run start        # Test production build locally

# Code Quality
npm run lint         # Check for linting errors
npm run lint --fix   # Auto-fix linting issues
```

---

## 🌐 Deployment

### Deploy to Vercel (Recommended)

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/Joaninnn/about-me)

#### Method 1: Using Vercel CLI

```bash
# Install Vercel CLI
npm i -g vercel

# Login to Vercel
vercel login

# Deploy
vercel

# Deploy to production
vercel --prod
```

#### Method 2: Using Git Integration

1. Push your code to GitHub
2. Visit [vercel.com](https://vercel.com)
3. Click "New Project"
4. Import your GitHub repository
5. Configure environment variables
6. Click "Deploy"

**Vercel automatically detects Next.js and configures everything!**

### Environment Variables in Vercel

Add these in your Vercel project settings:
- `NEXT_PUBLIC_SITE_URL` - Your production URL
- Any other variables from `.env.example`

### Custom Domain

1. Go to your Vercel project settings
2. Navigate to "Domains"
3. Add your custom domain
4. Update DNS records as instructed

**Detailed deployment guide:** See [README_DEPLOY.md](./README_DEPLOY.md)

---

## ⚡ Performance Optimizations

### Implemented Optimizations

- ✅ **Next.js Image Optimization** - Automatic image optimization with AVIF/WebP
- ✅ **Code Splitting** - Automatic route-based code splitting
- ✅ **Tree Shaking** - Remove unused code
- ✅ **Compression** - Gzip/Brotli compression enabled
- ✅ **Caching Headers** - Optimized cache control
- ✅ **Lazy Loading** - Components load on demand
- ✅ **Font Optimization** - Next.js font optimization
- ✅ **Security Headers** - XSS, MIME-sniffing protection

### Performance Scores

Target metrics (Lighthouse):
- Performance: 95+
- Accessibility: 100
- Best Practices: 100
- SEO: 100

### Monitoring

```bash
# Analyze bundle size
npm run build

# Check bundle analyzer (if configured)
npm run analyze
```

---

## 🌍 Browser Support

| Browser | Version |
|---------|---------|
| Chrome | Last 2 versions |
| Firefox | Last 2 versions |
| Safari | Last 2 versions |
| Edge | Last 2 versions |
| iOS Safari | 12+ |
| Chrome Android | Last 2 versions |

---

## 📦 Production Checklist

Before deploying to production, ensure:

- [ ] All environment variables configured
- [ ] Images optimized and compressed
- [ ] SEO meta tags updated
- [ ] Analytics integrated
- [ ] Contact form tested
- [ ] All links working
- [ ] Mobile responsiveness verified
- [ ] Cross-browser testing completed
- [ ] Lighthouse audit passed (90+ scores)
- [ ] Security headers configured

**Full checklist:** See [PRODUCTION_READY.md](./PRODUCTION_READY.md)

---

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

---

## 📄 License

© 2026 Nurmuhammet Altybaev. All rights reserved.

This project is for personal portfolio use. Feel free to fork and modify for your own portfolio.

---

## 📞 Contact

**Nurmuhammet Altybaev**

- 🌐 Website: [Your Website]
- 💼 LinkedIn: [nurmuhammet-altybaev](https://www.linkedin.com/in/nurmuhammet-altybaev)
- 🐱 GitHub: [@Joaninnn](https://github.com/Joaninnn)
- 📱 Telegram: [@joaninnn](https://t.me/joaninnn)
- 📸 Instagram: [@joaninnn_](https://www.instagram.com/joaninnn_)

---

## 🙏 Acknowledgments

- Design inspiration from modern portfolio trends
- Built with ❤️ using Next.js and React
- Deployed on Vercel
- Part of my portfolio project series (LibraryStore, Gymnasium3, MotionCourses)

---

<div align="center">
  <p>⭐ Star this repo if you like it!</p>
  <p>Made with ❤️ by <a href="https://github.com/Joaninnn">Nurmuhammet Altybaev</a></p>
</div>
