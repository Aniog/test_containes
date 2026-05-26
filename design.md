# MicroCosmos Design System

## Visual Identity
A dark, immersive scientific aesthetic inspired by microscopy imagery — deep blacks and navy blues contrasted with vivid bioluminescent greens, teals, and purples. The overall feel is mysterious, scientific, and awe-inspiring.

## Color Palette
- Background (primary): `#050d1a` — near-black deep navy
- Background (secondary): `#0a1628` — dark navy
- Background (card): `#0f1f38` — dark blue-navy
- Accent (primary): `#00e5c8` — bioluminescent teal/cyan (`text-[#00e5c8]`)
- Accent (secondary): `#7c3aed` — deep violet (`text-violet-600`)
- Accent (highlight): `#22d3ee` — cyan (`text-cyan-400`)
- Text (primary): `#f0f9ff` — near-white (`text-sky-50`)
- Text (secondary): `#94a3b8` — muted slate (`text-slate-400`)
- Border: `#1e3a5f` — dark blue border (`border-[#1e3a5f]`)

## Typography
- Font: Inter (Google Fonts)
- Headings: `font-bold tracking-tight` with large sizes (`text-5xl`, `text-4xl`, `text-3xl`)
- Section labels: `text-xs font-semibold uppercase tracking-widest text-[#00e5c8]`
- Body: `text-base leading-relaxed text-slate-300`
- Captions: `text-sm text-slate-400`

## Spacing & Layout
- Max content width: `max-w-7xl mx-auto`
- Section padding: `py-20 px-6` or `py-24 px-6`
- Card padding: `p-6` or `p-8`
- Grid gaps: `gap-6` or `gap-8`

## Components

### Hero
- Full-viewport height (`min-h-screen`)
- Dark overlay on background image (`bg-black/60`)
- Centered text with large headline and subtitle
- Subtle gradient overlay at bottom

### Cards
- Background: `bg-[#0f1f38]`
- Border: `border border-[#1e3a5f]`
- Rounded: `rounded-2xl`
- Hover: `hover:border-[#00e5c8] transition-colors`
- Image on top, text below

### Section Dividers
- Thin horizontal rule: `border-t border-[#1e3a5f]`

### Badges / Labels
- `bg-[#00e5c8]/10 text-[#00e5c8] text-xs font-semibold px-3 py-1 rounded-full`

## Do's
- Use dark backgrounds throughout — never white or light gray
- Use teal/cyan accents for interactive elements and highlights
- Use large, full-bleed images in hero and gallery sections
- Maintain generous whitespace between sections
- Use grid layouts for image galleries (3-4 columns on desktop, 1-2 on mobile)

## Don'ts
- Don't use white or light backgrounds
- Don't use low-contrast text on dark backgrounds
- Don't use more than 2 accent colors per section
- Don't use small images — prefer large, impactful visuals
