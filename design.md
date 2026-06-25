# SSourcing China — Visual Design System

A clean, trustworthy, international B2B aesthetic. Inspired by industrial trade platforms (think Alibaba meets a modern SaaS site). Calm, professional, evidence-driven. No exaggerated marketing flourishes.

## Brand Palette

Primary brand color is a deep navy blue (trust, logistics, international shipping). Accent is a confident industrial red-orange (China sourcing, action, energy). Surfaces are off-white and soft slate.

- Brand Navy: `#0B2545` → Tailwind: `bg-[#0B2545]`, `text-[#0B2545]`
- Brand Navy Dark: `#081A33`
- Brand Accent (red-orange): `#E63946` → Tailwind: `bg-[#E63946]`, `text-[#E63946]`
- Brand Accent Dark: `#C42E3A`
- Ink (body text): `#1F2937` (slate-800)
- Muted ink: `#475569` (slate-600)
- Subtle ink: `#64748B` (slate-500)
- Surface (page bg): `#FFFFFF`
- Surface Alt: `#F8FAFC` (slate-50)
- Surface Card: `#FFFFFF` with border `#E2E8F0` (slate-200)
- Hairline border: `#E5E7EB` (gray-200)
- Success: `#16A34A` (green-600)

## Typography

- Body and headings: Inter (loaded via Google Fonts in index.html)
- Headings: tracking-tight, font-semibold or font-bold
- Body: text-slate-700, leading-relaxed
- Eyebrow (small uppercase label): `text-xs font-semibold uppercase tracking-[0.18em] text-[#E63946]`

Sizes:
- Hero H1: `text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight`
- Section H2: `text-3xl md:text-4xl font-bold tracking-tight`
- Card H3: `text-lg md:text-xl font-semibold`
- Body: `text-base text-slate-700 leading-relaxed`
- Small/meta: `text-sm text-slate-500`

## Layout

- Max content width: `max-w-7xl mx-auto px-4 sm:px-6 lg:px-8`
- Section vertical spacing: `py-16 md:py-24`
- Grid gutters: `gap-6 md:gap-8`
- Cards: `rounded-xl border border-slate-200 bg-white shadow-sm hover:shadow-md transition`
- Inputs: `rounded-md border border-slate-300 bg-white px-3 py-2.5 text-slate-900 focus:border-[#0B2545] focus:ring-2 focus:ring-[#0B2545]/20 outline-none`

## Buttons

- Primary CTA: `inline-flex items-center gap-2 bg-[#E63946] hover:bg-[#C42E3A] text-white font-semibold px-6 py-3 rounded-md transition`
- Secondary: `inline-flex items-center gap-2 bg-white text-[#0B2545] border border-[#0B2545]/15 hover:border-[#0B2545]/40 font-semibold px-6 py-3 rounded-md transition`
- Ghost on dark: `inline-flex items-center gap-2 text-white/90 hover:text-white font-medium`

## Imagery

- Use real factory/QC/shipping context. Approved ratios: 16x9 for hero, 4x3 for service tiles, 3x2 for case studies, 1x1 for portraits, 16x9 for blog covers.
- All photos must reference nearby text via `data-strk-img`.
- Avoid stock photos with cartoonish or AI-generated feel. Prefer container ports, factory floors, inspection scenes, product packaging.

## Do's

- Do use plenty of whitespace between sections.
- Do use icon + text pairs for benefits (Lucide icons).
- Do show evidence: numbers, process steps, photos.
- Do keep claims practical and measurable.

## Don'ts

- Don't use neon gradients or 3D effects.
- Don't use generic motivational stock photography.
- Don't put light text on light background or dark on dark.
- Don't exaggerate ("world's #1", "guaranteed lowest", etc).
- Don't use emojis in body content.
