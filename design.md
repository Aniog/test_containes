# MicroCosmos Design System

## Theme
Dark, immersive scientific aesthetic inspired by microscopy and the hidden world of microorganisms. Deep blacks and navy backgrounds with luminous teal, cyan, and violet accents evoke bioluminescence and scientific discovery.

## Colors

### Background Palette
- Page background: `bg-cosmos-black` (#050810)
- Section background dark: `bg-cosmos-deep` (#0a0f1e)
- Card background: `bg-cosmos-card` (#0f1628)
- Subtle border: `border-cosmos-border` (#1e2a45)

### Accent Palette
- Primary teal: `text-cosmos-teal` (#00d4c8) — headings, highlights
- Secondary cyan: `text-cosmos-cyan` (#38bdf8) — links, badges
- Violet accent: `text-cosmos-violet` (#a78bfa) — tags, secondary highlights
- Amber glow: `text-cosmos-amber` (#fbbf24) — call-to-action, warm accents

### Text
- Primary text: `text-white` or `text-slate-100`
- Secondary text: `text-slate-300`
- Muted text: `text-slate-400`

## Typography

### Font
- Primary: Inter (Google Fonts, loaded in index.html)
- Headings: font-bold or font-extrabold, tracking-tight
- Body: font-normal, leading-relaxed

### Scale
- Hero title: `text-5xl md:text-7xl font-extrabold`
- Section title: `text-3xl md:text-4xl font-bold`
- Card title: `text-xl font-semibold`
- Body: `text-base md:text-lg`
- Caption/label: `text-sm text-slate-400`

## Spacing
- Section padding: `py-20 md:py-28 px-6`
- Card padding: `p-6`
- Grid gap: `gap-6 md:gap-8`
- Max content width: `max-w-7xl mx-auto`

## Borders & Shadows
- Card border: `border border-cosmos-border rounded-2xl`
- Glow effect: `shadow-[0_0_30px_rgba(0,212,200,0.15)]`
- Image overlay: gradient from transparent to cosmos-black

## Components

### Hero Section
- Full-viewport height
- Background image with dark overlay gradient
- Centered text with large title and subtitle
- CTA button with teal border and hover glow

### Gallery Grid
- Masonry-style or uniform grid: `grid-cols-2 md:grid-cols-3 lg:grid-cols-4`
- Images with rounded corners and hover zoom effect
- Overlay label on hover

### Specimen Cards
- Dark card background with teal border accent
- Image on top, text below
- Tag badges in violet

### Section Dividers
- Subtle gradient lines or spacing

## Do's
- Use `data-strk-img` and `data-strk-bg` for all images
- Keep text always readable: white/slate-100 on dark backgrounds
- Use teal/cyan for interactive elements
- Add hover transitions: `transition-all duration-300`

## Don'ts
- No light backgrounds (white/gray) — this is a dark-theme site
- No low-contrast text combinations
- No hardcoded image URLs
- No magic pixel values — use Tailwind spacing scale
