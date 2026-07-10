# ARTITECT MACHINERY — Design System

## Brand Identity
Industrial precision meets refined elegance. The brand communicates trust, quality, and technical mastery in sheet metal fabrication machinery.

## Color Palette
- **Primary (Deep Navy):** `#0F1C2E` — main backgrounds, headers
- **Secondary (Steel Blue):** `#1E3A5F` — section backgrounds, cards
- **Accent (Amber Gold):** `#C8922A` — CTAs, highlights, active states
- **Accent Light (Gold):** `#E8B84B` — hover states, icons
- **Surface (Dark Slate):** `#162032` — card backgrounds
- **Border:** `#2A4060` — subtle borders
- **Text Primary:** `#F0F4F8` — headings on dark backgrounds
- **Text Secondary:** `#94A3B8` — body text, captions
- **Text Dark:** `#1A2332` — text on light backgrounds
- **White:** `#FFFFFF`

Tailwind config names: `navy`, `steel`, `gold`, `gold-light`, `surface`, `border-steel`

## Typography
- **Font:** Inter (Google Fonts)
- **Headings:** font-bold or font-extrabold, tracking-tight
- **Body:** font-normal, leading-relaxed
- **Labels/Caps:** font-semibold, tracking-widest, uppercase, text-xs

### Scale
- Hero title: `text-5xl md:text-7xl`
- Section title: `text-3xl md:text-4xl`
- Card title: `text-xl md:text-2xl`
- Body: `text-base`
- Caption: `text-sm`

## Spacing
- Section padding: `py-20 md:py-28`
- Container: `max-w-7xl mx-auto px-6 md:px-12`
- Card padding: `p-8`
- Gap between cards: `gap-6 md:gap-8`

## Components

### Buttons
- **Primary:** `bg-gold text-navy font-semibold px-8 py-3 rounded-sm hover:bg-gold-light transition-all`
- **Outline:** `border border-gold text-gold px-8 py-3 rounded-sm hover:bg-gold hover:text-navy transition-all`
- No rounded-full; use `rounded-sm` for industrial feel

### Cards
- Background: `bg-surface border border-border-steel`
- Hover: subtle `border-gold` highlight
- Padding: `p-8`

### Section Dividers
- Thin gold line: `border-t border-gold/30`

## Visual Style
- Dark industrial theme with gold accents
- Clean grid layouts, no clutter
- Subtle gradients from `navy` to `steel`
- Thin gold accent lines for section separators
- Icons: Lucide React, stroke-width 1.5, gold color
- Images: full-bleed hero, contained product shots

## Do's
- Use gold sparingly as a true accent
- Maintain generous whitespace
- Use uppercase tracking-widest for section labels
- Keep card borders subtle, highlight on hover

## Don'ts
- No bright/neon colors
- No rounded-full buttons
- No cluttered layouts
- No light backgrounds except for contrast sections
