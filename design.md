# SSourcing China — Visual Design Guide

A clean, trustworthy, international B2B aesthetic. Inspired by global trade and logistics brands. Conservative palette, generous spacing, strong typography hierarchy, and realistic factory/QC/shipping imagery.

## Brand Tone
- Professional, clear, practical.
- Avoid hype words and excessive gradients.
- Visuals: factories, inspection floors, shipping ports, containers, QC checklists, supplier handshakes.

## Color Palette
- Primary deep navy: `#0B2545` (Tailwind: `bg-[#0B2545]`, `text-[#0B2545]`)
- Primary accent (action blue): `#1B6FB8` (`bg-[#1B6FB8]`, `text-[#1B6FB8]`)
- Hover accent: `#155A96`
- Neutral text: `#0F172A` (slate-900)
- Body text: `#334155` (slate-700)
- Muted text: `#64748B` (slate-500)
- Hairline border: `#E2E8F0` (slate-200)
- Soft background: `#F8FAFC` (slate-50)
- Card background: `#FFFFFF`
- Success accent: `#0F8A6A`
- Warm accent (for highlights only): `#E0A458`

Do NOT use bright purple, neon, or pastel candy colors. Stick to navy + blue + neutral grays + white.

## Typography
- Primary font: Inter (Google Fonts), weights 400 / 500 / 600 / 700.
- Headings: `font-semibold` to `font-bold`, tight `tracking-tight`.
- Body: `text-slate-700 leading-relaxed`.
- Hero H1: `text-4xl md:text-6xl font-bold tracking-tight`.
- Section H2: `text-3xl md:text-4xl font-bold tracking-tight`.
- Sub-heading H3: `text-xl md:text-2xl font-semibold`.
- Eyebrow label: `text-xs font-semibold uppercase tracking-[0.18em] text-[#1B6FB8]`.

## Layout
- Max content width: `max-w-7xl mx-auto px-6 lg:px-10`.
- Section vertical rhythm: `py-20 md:py-28`.
- Grid gaps: `gap-6` to `gap-10`.
- Cards: `rounded-xl border border-slate-200 bg-white p-6 md:p-8 shadow-sm hover:shadow-md transition-shadow`.
- Avoid heavy drop shadows. Prefer subtle `shadow-sm`.

## Buttons
- Primary: `inline-flex items-center gap-2 rounded-md bg-[#1B6FB8] px-6 py-3 text-sm font-semibold text-white hover:bg-[#155A96] transition-colors`.
- Secondary: `inline-flex items-center gap-2 rounded-md border border-slate-300 bg-white px-6 py-3 text-sm font-semibold text-slate-900 hover:border-slate-400 hover:bg-slate-50 transition-colors`.
- Ghost link: `inline-flex items-center gap-1 text-sm font-semibold text-[#1B6FB8] hover:text-[#155A96]`.

## Imagery
- Use real-looking factory, QC, container, port imagery.
- Hero overlays: dark navy gradient `from-[#0B2545]/85 to-[#0B2545]/55` to ensure white text remains readable.
- Image ratios: hero `16x9`, cards `4x3` or `3x2`, portraits `1x1`.

## Do / Don't
- DO use generous whitespace.
- DO keep colors restrained.
- DO use lucide-react icons in `text-[#1B6FB8]` or `text-slate-700`.
- DON'T use emojis.
- DON'T use light gray text on white that is hard to read.
- DON'T claim "best" or "#1" — keep language factual.
- DON'T use multi-color gradients.

## Components Conventions
- Nav: white background, hairline bottom border, sticky.
- Footer: deep navy background `#0B2545` with white/slate-300 text.
- Forms: white card on slate-50 background; labels `text-sm font-medium text-slate-900`; inputs `rounded-md border border-slate-300 focus:border-[#1B6FB8] focus:ring-1 focus:ring-[#1B6FB8]`.
