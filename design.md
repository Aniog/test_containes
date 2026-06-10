# SSourcing China — Design System

A clean, trustworthy, international B2B visual style. Conservative, professional, practical. No exaggerated visuals.

## Brand colors
- Primary navy: `#0B2545` — used for headers, primary text, primary buttons. Tailwind: `bg-[#0B2545]`, `text-[#0B2545]`.
- Deep blue accent: `#13315C` — secondary surfaces.
- Action blue: `#1E6091` — links, secondary CTAs.
- Accent gold/amber: `#C9A227` — sparingly for CTA highlights, badges, underline accents.
- Neutral background: `#F6F8FB` — page background.
- Card surface: `#FFFFFF`.
- Soft border: `#E4E9F0`.
- Body text: `#1F2937` (slate-800). Muted text: `#475569` (slate-600). Helper text: `#64748B` (slate-500).

Add to Tailwind config under `extend.colors` as named tokens: `navy`, `navy-deep`, `blue-action`, `gold`, `bg-soft`, `border-soft`.

## Typography
- Body: Inter, sans-serif.
- Headings: Inter, weight 600–700, tight tracking.
- Sizes:
  - h1: `text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight`
  - h2: `text-3xl md:text-4xl font-semibold tracking-tight`
  - h3: `text-xl md:text-2xl font-semibold`
  - body: `text-base leading-relaxed`
  - small/eyebrow: `text-sm uppercase tracking-widest font-medium`

## Layout
- Page max-width: `max-w-7xl mx-auto px-6 lg:px-8`.
- Section vertical spacing: `py-16 md:py-24`.
- Cards: `rounded-xl border border-[#E4E9F0] bg-white shadow-sm`.
- Hover on interactive cards: `hover:shadow-md transition-shadow`.

## Buttons
- Primary: `bg-[#0B2545] hover:bg-[#13315C] text-white px-6 py-3 rounded-md font-medium`.
- Accent CTA: `bg-[#C9A227] hover:bg-[#b08e1f] text-[#0B2545] px-6 py-3 rounded-md font-semibold`.
- Secondary/outline: `border border-[#0B2545] text-[#0B2545] hover:bg-[#0B2545] hover:text-white`.

## Imagery
- Realistic factory floors, QC inspection stations, container shipping/port scenes, product samples.
- Wide aspect ratios for hero (16x9), 3x2 for cards.
- Avoid stock-y handshake clichés.

## Iconography
- Use lucide-react. Stroke 1.5–2. Color the stroke with `text-[#1E6091]` or `text-[#0B2545]`.

## Do
- Keep contrast strong. Body text dark on light surfaces.
- Use plenty of whitespace.
- Use the gold accent sparingly, only for primary CTA or key highlight.
- Use subtle dividers and 1px borders, not heavy shadows.

## Don't
- No gradients across full sections.
- No neon colors.
- No drop shadows on text.
- No inline hex codes outside this token set; if a new color is needed, add it here first.
