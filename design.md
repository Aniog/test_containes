# SSourcing China — Design System

## Brand Voice
Professional, clear, practical. International B2B. No exaggerated claims. Trustworthy and concrete.

## Typography
- Primary font: Inter (Google Fonts), 400/500/600/700/800.
- Headings: tracking-tight, font-semibold or font-bold.
- Body: text-slate-600 / text-slate-700. Line-height relaxed.
- Hero h1: text-4xl md:text-5xl lg:text-6xl font-bold.
- Section h2: text-3xl md:text-4xl font-bold.
- Card h3: text-lg md:text-xl font-semibold.

## Colors (Tailwind named)
- brand (deep navy, primary): #0B2545
- brand-700: #13315C
- brand-500: #1E4F87
- accent (signal teal/cyan for trust): #0E7C86
- accent-500: #14B8A6 (use sparingly for CTAs/icons)
- ink: #0F172A (slate-900)
- body: #334155 (slate-700)
- muted: #64748B (slate-500)
- surface: #FFFFFF
- subtle: #F8FAFC (slate-50)
- border: #E2E8F0 (slate-200)
- success: #16A34A
- warning: #D97706

Always set explicit text colors on colored surfaces. On `bg-brand` use `text-white`. On `bg-subtle` use `text-slate-900`.

## Spacing & Layout
- Container: `mx-auto max-w-7xl px-4 sm:px-6 lg:px-8`.
- Section vertical padding: `py-16 md:py-24`.
- Card padding: `p-6 md:p-8`.
- Gap between cards: `gap-6 md:gap-8`.

## Components
- Buttons:
  - Primary: `bg-brand text-white hover:bg-brand-700 rounded-md px-5 py-3 font-medium shadow-sm`
  - Accent CTA: `bg-accent text-white hover:bg-accent/90 rounded-md px-6 py-3 font-semibold`
  - Outline: `border border-slate-300 text-slate-800 hover:bg-slate-50 rounded-md px-5 py-3`
- Cards: `bg-white border border-slate-200 rounded-xl shadow-sm hover:shadow-md transition`.
- Inputs: `w-full rounded-md border border-slate-300 bg-white px-3 py-2 text-slate-900 placeholder:text-slate-400 focus:border-brand focus:ring-2 focus:ring-brand/20 outline-none`.
- Badges: `inline-flex items-center rounded-full bg-brand/10 text-brand text-xs font-medium px-2.5 py-1`.

## Imagery
Use stock image tagging system. Realistic factory floors, QC inspectors with clipboards, shipping containers, port cranes, sample products. Ratios 16x9 or 3x2 for hero/blog, 4x3 for cards, 1x1 for icons/logos.

## Don'ts
- Don't use neon colors or gradients heavier than subtle navy-to-blue.
- Don't use light gray text on white (must be at least slate-500).
- Don't show invisible text or low-contrast text.
- Don't use mobile-stacked single column on desktop. Use multi-column grids `md:grid-cols-2 lg:grid-cols-3` etc.
- Don't make exaggerated claims ("#1", "guaranteed cheapest"). Use measured, factual language.

## Do's
- Use checkmark icons (Lucide CheckCircle2) for trust points.
- Use number badges for process steps.
- Use consistent border-radius (md: 0.375rem, xl: 0.75rem).
- Always include alt text and proper semantic HTML.
