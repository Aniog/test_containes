# SSourcing China — Design Guide

A clean, trustworthy, international B2B website for a China-based sourcing agent.

## Brand Tone
- Professional, clear, practical. Avoid hype, exclamation marks, or marketing puffery.
- Confident but factual. Use concrete numbers and concrete deliverables.

## Color Palette
Use these as Tailwind arbitrary values or semantic tokens. Primary brand color is a deep, corporate navy with a single accent.

- Navy 900 `#0B2545` — primary text on light, header bg, dark sections
- Navy 700 `#13315C` — secondary dark
- Navy 500 `#1F4E79` — link/hover accents
- Steel 100 `#EEF2F7` — section backgrounds, soft surfaces
- Steel 200 `#D9E2EC` — borders, dividers
- Slate 600 `#475569` — body text on light
- Slate 500 `#64748B` — muted text, captions
- Accent `#C8102E` — CTA red used sparingly (China-export reference, signal color)
- Accent hover `#A30D26`
- White `#FFFFFF`
- Success `#0F766E` (teal-700) for trust badges
- Warning `#B45309` (amber-700) for "problems we solve"

Example Tailwind classes:
- Headings: `text-[#0B2545]`
- Body: `text-[#475569]`
- Muted: `text-[#64748B]`
- Section bg light: `bg-[#EEF2F7]`
- Dividers: `border-[#D9E2EC]`
- Primary CTA: `bg-[#C8102E] hover:bg-[#A30D26] text-white`
- Secondary CTA: `bg-[#0B2545] hover:bg-[#13315C] text-white`
- Outline CTA on dark: `border border-white/30 text-white hover:bg-white/10`

## Typography
- Font family: Inter (Google Fonts), with system fallback.
- Headings: semibold (600) to bold (700), tight tracking.
- Body: 16px base, line-height 1.6, weight 400.
- Hero h1: `text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight`
- Section h2: `text-3xl md:text-4xl font-bold`
- Subheadings: `text-xl md:text-2xl font-semibold`
- Eyebrow: `text-sm font-semibold uppercase tracking-[0.15em] text-[#1F4E79]`

## Spacing & Layout
- Container: `max-w-7xl mx-auto px-4 sm:px-6 lg:px-8`
- Section vertical padding: `py-16 md:py-24`
- Card padding: `p-6 md:p-8`
- Grid gaps: `gap-6 md:gap-8`
- Hero min height: `min-h-[560px] md:min-h-[640px]`

## Borders, Radius & Shadow
- Radius small: `rounded-md` (cards, inputs)
- Radius medium: `rounded-xl` (feature cards, images)
- Radius pill: `rounded-full` (badges, buttons optional)
- Borders: `border border-[#D9E2EC]`
- Shadow: `shadow-sm` default, `shadow-md` on hover. Avoid heavy glow.

## Imagery
- Realistic factory floors, QC inspectors with checklists, shipping containers, cargo ports, product samples on tables, packaging lines.
- Always reference neighboring text via `data-strk-img` interpolation.
- Ratios: hero `16x9`, cards `4x3` or `3x2`, portraits `1x1`.

## Components
- Header: white bg, navy text, sticky, subtle bottom border. CTA button on the right.
- Footer: navy bg, white text, 4 columns, fine print at bottom.
- Cards: white bg, soft border, hover lift via shadow.
- Buttons:
  - Primary: red accent for inquiry CTA.
  - Secondary: navy filled.
  - Ghost: text with arrow.
- Forms: labels above inputs, focus ring navy, inline error in red.

## Do's
- Use real numbers and concrete process steps.
- Keep contrast strong: dark text on light, white text on navy/red.
- Use semantic section headings (eyebrow + h2 + supporting paragraph).
- Use lucide-react icons at `w-5 h-5` for inline, `w-6 h-6` for feature cards.

## Don'ts
- No purple/pink gradients, no neon, no glassmorphism.
- No low-contrast gray-on-gray text.
- No emoji in marketing copy.
- No hardcoded image URLs from Unsplash/Pexels. Use the stock image tagging system.
- No exaggerated claims like "the best", "world-class", "guaranteed lowest price".
