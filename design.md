# SSourcing China — Design System

A clean, trustworthy, international B2B style. Inspired by industrial trade and modern SaaS sites. Calm and credible — never flashy.

## Tone
Professional, clear, practical. No exaggeration, no superlatives.

## Color Palette

Primary navy — institutional, trustworthy
- `bg-[#0b2545]` brand-navy
- `text-[#0b2545]`

Accent red — Chinese export trust, used sparingly for CTAs and small highlights
- `bg-[#c2364b]` brand-red
- `hover:bg-[#a82c3f]`

Neutrals
- Page background: `bg-white`
- Soft background: `bg-slate-50`
- Section alternate: `bg-[#f5f7fa]`
- Borders / dividers: `border-slate-200`
- Body text: `text-slate-700`
- Muted text: `text-slate-500`
- Heading text: `text-slate-900` or `text-[#0b2545]`

Trust accents
- Subtle gold: `text-amber-500` for star ratings and tiny stats
- Success: `text-emerald-600`

## Typography
- Font: Inter (Google Fonts), with system fallback
- Body: `text-[15px] md:text-base leading-relaxed text-slate-700`
- H1: `text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight text-[#0b2545]`
- H2: `text-3xl md:text-4xl font-semibold tracking-tight text-slate-900`
- H3: `text-xl md:text-2xl font-semibold text-slate-900`
- Eyebrow / kicker: `text-xs font-semibold uppercase tracking-[0.18em] text-[#c2364b]`
- Numbers / stats: `font-semibold text-[#0b2545]`

## Spacing & Layout
- Container: `mx-auto max-w-7xl px-4 sm:px-6 lg:px-8`
- Section vertical padding: `py-16 md:py-24`
- Grid gaps: `gap-6 md:gap-8`
- Cards: `rounded-xl border border-slate-200 bg-white p-6 md:p-8 shadow-sm`
- Soft hover: `transition hover:shadow-md hover:-translate-y-0.5`

## Buttons
- Primary: `inline-flex items-center gap-2 rounded-md bg-[#c2364b] px-5 py-3 text-sm font-semibold text-white hover:bg-[#a82c3f] transition`
- Secondary: `inline-flex items-center gap-2 rounded-md border border-slate-300 bg-white px-5 py-3 text-sm font-semibold text-slate-900 hover:bg-slate-50 transition`
- Ghost on dark: `inline-flex items-center gap-2 rounded-md border border-white/30 bg-transparent px-5 py-3 text-sm font-semibold text-white hover:bg-white/10 transition`

## Forms
- Input: `w-full rounded-md border border-slate-300 bg-white px-4 py-3 text-sm text-slate-900 placeholder:text-slate-400 focus:border-[#0b2545] focus:outline-none focus:ring-2 focus:ring-[#0b2545]/20`
- Label: `block text-sm font-medium text-slate-800 mb-1.5`
- Helper: `text-xs text-slate-500`
- Error: `text-sm text-rose-600`

## Images
- Realistic, on-the-ground photos: factories, container ports, QC inspectors, production lines, shipping containers.
- Use `data-strk-img` and `data-strk-bg` tagging.
- Avoid abstract stock illustrations.

## Don'ts
- No bright gradients, no glassmorphism, no purple/pink palette.
- No emoji as visual decoration.
- No light-on-light or dark-on-dark text. Always check contrast.
- No exaggerated claims ("best in the world", "#1"). Use specific facts and numbers.
