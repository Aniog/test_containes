# F1 Website Design System

## Brand Identity
Formula 1 inspired — fast, bold, high-contrast, premium.

## Color Palette
- **Background primary**: `#0a0a0a` (near-black)
- **Background secondary**: `#111111`
- **Background card**: `#1a1a1a`
- **F1 Red**: `#e10600` — primary accent, CTAs, highlights
- **F1 Red dark**: `#b30500` — hover states
- **White**: `#ffffff` — primary text on dark
- **Gray light**: `#d1d5db` — secondary text
- **Gray muted**: `#6b7280` — tertiary text, borders
- **Gold**: `#f59e0b` — championship / podium highlights

Tailwind custom colors (add to @theme in index.css):
- `f1-red: #e10600`
- `f1-red-dark: #b30500`
- `f1-gold: #f59e0b`
- `f1-bg: #0a0a0a`
- `f1-card: #1a1a1a`

## Typography
- **Font**: "Titillium Web" (Google Fonts) — the official F1 font feel
- **Headings**: font-bold, uppercase, tracking-wider
- **Hero title**: text-6xl md:text-8xl font-black uppercase tracking-tight
- **Section title**: text-4xl md:text-5xl font-bold uppercase tracking-wide
- **Card title**: text-xl font-bold uppercase
- **Body**: text-base text-gray-300 leading-relaxed

## Spacing
- Section padding: `py-20 px-4 md:px-8`
- Card padding: `p-6`
- Gap between cards: `gap-6`

## Borders & Shadows
- Card border: `border border-white/10`
- Red accent line: `border-l-4 border-f1-red`
- Card hover: `hover:border-f1-red/50 transition-colors`
- Shadow: `shadow-2xl`

## Components

### Navbar
- Fixed top, dark background with blur
- F1 logo / wordmark on left
- Nav links on right (desktop), hamburger on mobile
- Red underline on active/hover

### Hero
- Full viewport height
- Dark overlay on background image
- Large bold title with red accent word
- Subtitle and CTA button
- Animated speed lines or gradient overlay

### Section Cards
- Dark card background `#1a1a1a`
- Subtle border `border-white/10`
- Red top accent bar on hover
- Image on top, content below

### Buttons
- Primary: `bg-f1-red text-white px-6 py-3 font-bold uppercase tracking-wider hover:bg-f1-red-dark`
- Secondary: `border border-white/30 text-white px-6 py-3 font-bold uppercase tracking-wider hover:border-f1-red`

## Do's
- Use uppercase for all headings and labels
- Use red sparingly as a true accent color
- Keep backgrounds very dark for drama
- Use wide letter-spacing on headings
- Add subtle red left-border accents on stats/quotes

## Don'ts
- Don't use light backgrounds
- Don't use more than 2 accent colors
- Don't use rounded-full on large elements (keep sharp/angular)
- Don't use thin fonts — always bold or black weight
