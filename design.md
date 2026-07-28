# SSourcing China - Design System

## Brand Identity
- **Type**: B2B international professional services
- **Personality**: Trustworthy, practical, efficient, no-nonsense, expert
- **Industry**: China sourcing, supplier verification, quality control, logistics

## Color Palette

### Primary (Trust Blue - China + global commerce)
- **Primary**: `#0B3D91` (Deep navy blue - trust, authority, international)
- **Primary Foreground**: `#FFFFFF`
- **Primary Hover**: `#082A66`
- **Primary Light**: `#E6EEF9`

### Accent (Action / CTA - red/orange for China reference)
- **Accent**: `#D14336` (Refined red - action, energy)
- **Accent Hover**: `#B53328`
- **Accent Light**: `#FBE9E7`

### Neutrals
- **Background**: `#FFFFFF`
- **Surface (Card)**: `#FFFFFF`
- **Muted**: `#F4F6F8`
- **Muted Foreground**: `#5A6776`
- **Border**: `#E2E6EC`
- **Foreground (Text)**: `#0E1726`
- **Subtle Text**: `#475569`

### Status
- **Success**: `#16A34A`
- **Warning**: `#D97706`
- **Info**: `#0284C7`

## Typography
- **Font Family**: Inter (already loaded via Google Fonts)
- **Headings**:
  - H1: `text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight` (tight leading)
  - H2: `text-3xl md:text-4xl font-bold tracking-tight`
  - H3: `text-xl md:text-2xl font-semibold`
  - H4: `text-lg font-semibold`
- **Body**: `text-base leading-relaxed` (1.6)
- **Small**: `text-sm text-slate-600`
- **Eyebrow/Label**: `text-xs uppercase tracking-wider font-semibold text-slate-500`

## Spacing & Layout
- **Container max width**: `max-w-7xl mx-auto px-4 sm:px-6 lg:px-8`
- **Section padding**: `py-16 md:py-24`
- **Card padding**: `p-6 md:p-8`
- **Grid gaps**: `gap-6 md:gap-8`
- **Border radius**:
  - Cards: `rounded-lg` (8px)
  - Buttons: `rounded-md` (6px)
  - Badges: `rounded-full`

## Components

### Buttons
- **Primary (CTA)**: `bg-primary text-white hover:bg-primary-hover` — large size `px-6 py-3`
- **Secondary**: `bg-white border border-slate-300 text-slate-900 hover:bg-slate-50`
- **Accent (Get a Quote)**: `bg-accent text-white hover:bg-accent-hover`
- **Link**: `text-primary hover:underline`

### Cards
- `bg-white border border-slate-200 rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow`

### Badges
- `inline-flex items-center gap-1.5 rounded-full bg-primary-light text-primary px-3 py-1 text-xs font-semibold`

### Icons
- Use Lucide React, size 20-24px for section icons, 16px for inline.
- Color: `text-primary` for highlights, `text-slate-500` for neutral.

## Visual Elements
- **Photo style**: Stock photos of Chinese factories, container shipping, QC inspectors, product warehouses
- **Diagrams**: Step-by-step process flow with numbered circles
- **Stats**: Large numbers in primary color, with small labels below
- **Trust signals**: Verified supplier badges, ISO references, country flags

## Do's
- Use real-looking stock imagery for factories, containers, QC inspections
- Show concrete process steps (e.g., 1→2→3→4→5)
- Use clear hierarchical typography
- Provide multiple CTAs across each page
- Use cards and grids liberally
- Keep text concise and scannable
- Use icons for visual emphasis
- Show specific categories of products sourced

## Don'ts
- Don't use stock photos of generic office workers
- Don't use emojis as icons
- Don't use long paragraphs; break content with headings and bullets
- Don't use bright/glow gradients — keep it clean
- Don't use generic blue/indigo Tailwind defaults — use the custom brand blue
- Don't claim unverified metrics (no "10,000+ factories")
