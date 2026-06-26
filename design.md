# SSourcing China — Design System

Clean, trustworthy, international B2B sourcing brand. Visual style draws from logistics/freight + modern enterprise SaaS. No exaggerated claims, no flashy gradients, no playful illustrations.

## Voice & Tone
- Professional, clear, practical.
- Sentences are short. Numbers and facts come first.
- Avoid superlatives ("best", "#1"). Prefer specific verbs ("verify", "inspect", "follow").

## Color Palette
Use Tailwind utility classes only. Do not hardcode hex codes in JSX.

| Token | Class | Usage |
|---|---|---|
| Brand navy | `bg-slate-900`, `text-slate-900` | Primary brand, headings, footer |
| Deep navy ink | `text-slate-950` | High-emphasis headings on light bg |
| Steel | `bg-slate-800`, `text-slate-700` | Secondary surfaces, body text |
| Accent red | `bg-red-600`, `text-red-600`, `hover:bg-red-700` | Primary CTA only (Chinese B2B accent) |
| Accent amber | `bg-amber-500`, `text-amber-600` | Highlights, badges, ratings |
| Surface | `bg-white`, `bg-slate-50` | Page background, cards |
| Border | `border-slate-200`, `border-slate-100` | Card and section dividers |
| Muted | `text-slate-500`, `text-slate-600` | Subtext, helper text |
| Success | `text-emerald-600`, `bg-emerald-50` | QC pass states |

Do:
- Pair `bg-slate-900` with `text-white` or `text-slate-100`.
- Pair `bg-white` with `text-slate-900` (headlines) and `text-slate-600` (body).
- Use red ONLY for the main CTA button and the brand mark.

Don't:
- Use red as a background for large sections.
- Use gradients on text or buttons.
- Use low contrast text such as `text-slate-300` on `bg-white`.

## Typography
- Font family: Inter (loaded via Google Fonts in `index.html`).
- Headings: `font-semibold` or `font-bold`, tight tracking (`tracking-tight`).
- Body: `text-base leading-relaxed text-slate-600`.
- Eyebrows / labels: `text-xs uppercase tracking-[0.18em] font-semibold text-red-600`.

Scale:
- Hero h1: `text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight`
- Section h2: `text-3xl md:text-4xl font-bold tracking-tight text-slate-900`
- Card h3: `text-lg md:text-xl font-semibold text-slate-900`
- Body: `text-base text-slate-600`
- Caption: `text-sm text-slate-500`

## Spacing & Layout
- Page max width: `max-w-7xl mx-auto px-4 sm:px-6 lg:px-8`.
- Vertical section rhythm: `py-16 md:py-24`.
- Card padding: `p-6 md:p-8`.
- Grid gaps: `gap-6 md:gap-8`.

## Components
- Buttons (primary): `inline-flex items-center justify-center gap-2 rounded-md bg-red-600 px-6 py-3 text-sm font-semibold text-white hover:bg-red-700 transition-colors`.
- Buttons (secondary): `inline-flex items-center justify-center gap-2 rounded-md border border-slate-300 bg-white px-6 py-3 text-sm font-semibold text-slate-900 hover:border-slate-400 hover:bg-slate-50 transition-colors`.
- Buttons (ghost on dark): `inline-flex items-center gap-2 text-sm font-semibold text-white/90 hover:text-white`.
- Cards: `rounded-xl border border-slate-200 bg-white shadow-sm hover:shadow-md transition-shadow`.
- Inputs: `w-full rounded-md border border-slate-300 bg-white px-4 py-2.5 text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-red-500/30 focus:border-red-500`.
- Badge: `inline-flex items-center gap-1.5 rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-700`.

## Imagery
- Realistic factory floors, QC inspection close-ups, shipping containers, port cranes, warehouse pallets.
- Avoid stocky handshake imagery, abstract globes, and generic teamwork shots.
- Prefer 16x9 hero, 4x3 service cards, 3x2 case study covers.

## Iconography
- Lucide React icons only.
- Stroke 1.5, size 20–24 inside cards, 16–18 inline with text.
- Color: inherit current text color, or `text-red-600` for accent.

## Don'ts
- No emojis in marketing copy.
- No purple/violet hues.
- No rounded-full pill buttons for primary CTAs.
- No drop-shadows heavier than `shadow-md` on cards.
