# MicroCosmos Design System

## Concept
A dark, immersive, science-meets-wonder aesthetic. The site explores the microscopic world — cells, organisms, crystals, and natural patterns invisible to the naked eye. The visual language is deep, rich, and awe-inspiring.

## Color Palette
- Background: `bg-[#050a0f]` — near-black deep ocean/space
- Surface: `bg-[#0d1a24]` — dark navy card backgrounds
- Surface elevated: `bg-[#112233]`
- Accent primary: `text-teal-400` / `bg-teal-400` — bioluminescent teal
- Accent secondary: `text-cyan-300` / `bg-cyan-300`
- Accent highlight: `text-emerald-400`
- Text primary: `text-white`
- Text secondary: `text-slate-300`
- Text muted: `text-slate-500`
- Border: `border-teal-900/40`
- Gradient hero: `from-[#050a0f] via-[#0a1628] to-[#050a0f]`

## Typography
- Font: Inter (loaded via Google Fonts in index.html)
- Hero heading: `text-5xl md:text-7xl font-black tracking-tight`
- Section heading: `text-3xl md:text-4xl font-bold`
- Card title: `text-xl font-semibold`
- Body: `text-base text-slate-300 leading-relaxed`
- Caption: `text-sm text-slate-500`
- Label/tag: `text-xs font-semibold uppercase tracking-widest`

## Spacing
- Section padding: `py-20 md:py-28`
- Container: `max-w-7xl mx-auto px-4 md:px-8`
- Card gap: `gap-6 md:gap-8`

## Borders & Shadows
- Card border: `border border-teal-900/40 rounded-2xl`
- Glow effect: `shadow-[0_0_40px_rgba(20,184,166,0.15)]`
- Image overlay: gradient from transparent to `#050a0f`

## Components
- **NavBar**: sticky top, blurred dark background, teal accent links
- **Hero**: full-viewport, large background image, centered text, animated subtitle
- **Section**: alternating image-text layouts
- **ImageGrid**: masonry-style or uniform grid of microscopy images
- **FeatureCard**: dark card with icon, title, description
- **QuoteBlock**: large italic quote with teal accent bar
- **Footer**: minimal, dark, centered

## Do's
- Use `backdrop-blur` for nav and overlays
- Use `rounded-2xl` or `rounded-3xl` for cards and images
- Use teal/cyan gradients for text highlights (`bg-clip-text text-transparent`)
- Use subtle `hover:scale-105 transition-transform` on image cards
- Ensure all text has sufficient contrast against dark backgrounds

## Don'ts
- No white or light backgrounds
- No bright primary colors (red, yellow, orange)
- No sharp corners on cards
- No small or cramped image layouts — images should breathe
