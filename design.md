# SSourcing China — Visual Design System

A clean, trustworthy, international B2B style for a China-based sourcing agent.
The mood is professional, modern, and practical — more like McKinsey/HSBC/Maersk
than a flashy SaaS startup. Avoid neon, glassmorphism, or playful gradients.

## Brand Tone
- Professional, factual, calm
- International, English-first
- Trust and operational rigor over hype
- No exaggerated claims, no emoji decoration

## Color Palette (Tailwind named colors)
Defined in `tailwind.config.js` under `theme.extend.colors`:

- `brand-navy`        #0B2545  Primary dark (headers, headings, footer)
- `brand-navy-700`    #13315C  Hover/secondary surfaces
- `brand-blue`        #1D4ED8  Primary accent (CTA, links)
- `brand-blue-600`    #2563EB  Hover for primary
- `brand-sky`         #E6EEF8  Light tinted surface
- `brand-gold`        #C9A24B  Subtle accent for trust marks
- `ink-900`           #0F172A  Body heading text
- `ink-700`           #334155  Body text
- `ink-500`           #64748B  Muted text
- `ink-200`           #E2E8F0  Borders, dividers
- `surface`           #FFFFFF  Default card background
- `surface-muted`     #F6F8FB  Section alt background

### Usage
- Page background: `bg-white` or `bg-surface-muted` (alternating sections)
- Headings: `text-brand-navy` or `text-ink-900`
- Body: `text-ink-700`
- Muted/secondary: `text-ink-500`
- Primary CTA: `bg-brand-blue text-white hover:bg-brand-blue-600`
- Secondary CTA: `border border-ink-200 text-brand-navy hover:bg-surface-muted`
- Footer: `bg-brand-navy text-white/80`

## Typography
- Global font: Inter (already loaded). Use `font-sans`.
- H1: `text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight text-brand-navy`
- H2: `text-3xl md:text-4xl font-semibold tracking-tight text-brand-navy`
- H3: `text-xl md:text-2xl font-semibold text-brand-navy`
- Body: `text-base md:text-lg text-ink-700 leading-relaxed`
- Small/meta: `text-sm text-ink-500`
- Eyebrow label: `text-xs font-semibold uppercase tracking-[0.18em] text-brand-blue`

## Layout & Spacing
- Container: `max-w-7xl mx-auto px-6 lg:px-8`
- Section vertical padding: `py-16 md:py-24`
- Card padding: `p-6 md:p-8`
- Grid gaps: `gap-6 md:gap-8`

## Components
- Cards: `bg-white border border-ink-200 rounded-xl shadow-sm hover:shadow-md transition`
- Buttons primary: `inline-flex items-center justify-center rounded-md bg-brand-blue px-5 py-3 text-sm font-semibold text-white hover:bg-brand-blue-600`
- Buttons secondary: `inline-flex items-center justify-center rounded-md border border-ink-200 bg-white px-5 py-3 text-sm font-semibold text-brand-navy hover:bg-surface-muted`
- Inputs: `w-full rounded-md border border-ink-200 bg-white px-3 py-2.5 text-ink-900 placeholder:text-ink-500 focus:outline-none focus:ring-2 focus:ring-brand-blue`
- Badges: `inline-flex items-center rounded-full bg-brand-sky px-3 py-1 text-xs font-medium text-brand-navy`

## Imagery
- Realistic factory floors, QC inspection, container shipping, port cranes
- Avoid stock photos that look overly staged or with western-only crews
- Use `data-strk-*` attributes; no hardcoded URLs

## Do / Don't
- Do: keep generous whitespace, plain backgrounds, restrained accents
- Do: ensure every text element has clear contrast (navy on white, white on navy)
- Don't: rainbow gradients, drop shadows on text, neon glows, emoji clusters
- Don't: use light gray text on light gray backgrounds
