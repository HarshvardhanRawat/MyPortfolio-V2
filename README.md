# Harsh Portfolio — React Clone

A pixel-perfect React + Vite + Tailwind CSS clone of [harsh07.framer.website](https://harsh07.framer.website/).

## Tech Stack

| Tool | Version |
|------|---------|
| React | 18 |
| Vite | 5 |
| Tailwind CSS | 4 |
| Framer Motion | 11 |
| React Router | 6 |
| Lucide React | latest |

## Project Structure

```
src/
├── assets/               # Static images and icons
├── components/
│   ├── Navbar.jsx        # Sticky nav with backdrop blur + mobile menu
│   ├── GridBackground.jsx # 8-column vertical grid lines overlay
│   ├── ProjectCard.jsx    # Reusable coloured project card
│   ├── SectionLabel.jsx   # Monospace .label style text
│   ├── RotatingText.jsx   # Hero animated text rotator (Framer Motion)
│   ├── ScrollTicker.jsx   # Infinite horizontal marquee ticker
│   └── Footer.jsx         # Full footer with brand text
├── sections/
│   ├── Hero.jsx           # Full-screen hero section
│   ├── Projects.jsx       # Stacked project cards
│   ├── Services.jsx       # Services grid + ticker
│   ├── About.jsx          # About info + stats + portrait
│   └── SayHello.jsx       # Contact CTA
├── hooks/
│   └── useScrollAnimation.js
├── utils/
│   └── cn.js             # className utility
├── pages/
│   ├── Home.jsx           # Main landing page
│   ├── AboutPage.jsx      # /about route
│   └── GalleryPage.jsx    # /gallery route with masonry grid
├── App.jsx                # Router with lazy loading
├── main.jsx               # Entry point
└── index.css              # Global styles + Tailwind v4 theme
```

## Setup

```bash
# Install dependencies
npm install

# Start dev server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## Design System

| Token | Value |
|-------|-------|
| Background | `#000000` |
| Grid lines | `#1a1a1a` |
| Primary text | `#ffffff` |
| Secondary text | `#888888` |
| Green accent | `#00ff41` |
| Font | Inter (Google Fonts) |
| Mono font | Courier New |

## Pages

- **`/`** — Home: Hero → Projects → Services → About → Say Hello → Footer
- **`/about`** — Full about page with experience timeline
- **`/gallery`** — Masonry gallery with casestudy hover effect

## Features

- ✅ Pixel-perfect dark theme matching original
- ✅ 8-column grid background overlay
- ✅ Animated rotating text in hero
- ✅ Pulsing green availability dot
- ✅ 5 coloured project cards with hover effects
- ✅ Services section with scrolling ticker
- ✅ Smooth scroll navigation
- ✅ Framer Motion entrance animations
- ✅ Mobile-responsive with hamburger menu
- ✅ Lazy-loaded routes for performance
- ✅ Semantic HTML + ARIA labels
- ✅ Custom scrollbar
- ✅ Backdrop-blur navbar on scroll
