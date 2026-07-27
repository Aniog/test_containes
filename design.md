# SSourcing China — Design System

A professional B2B sourcing-agent website. Clean, trustworthy, international, practical.

## Brand
- Company: SSourcing China
- Audience: overseas buyers (importers, Amazon/e-commerce sellers, brands, distributors)
- Goal: generate qualified sourcing inquiries
- Tone: professional, clear, practical, no exaggerated claims

## Typography
- Font family: Inter (Google Fonts), weights 300–800
- Headings: 600–800 weight, tight tracking
- Body: 400 weight, relaxed line-height
- Example classes: `font-sans`, `text-4xl font-bold tracking-tight`

## Color Palette (Tailwind tokens)
- Primary (deep navy/indigo — trust): `#0f2a4a` → `primary`
- Primary accent (steel blue): `#1d5fa8` → `primary-accent`
- Action / CTA (confident amber): `#e8833a` → `action`
- Action dark hover: `#cf6f25` → `action-dark`
- Ink (near-black text): `#0f1b2d` → `ink`
- Slate body text: `#3b4a5c` → `slate-body`
- Surface (page bg): `#f5f7fa` → `surface`
- Card bg: `#ffffff`
- Border: `#e2e8f0` → `border-base`
- Muted: `#64748b` → `muted`

Use semantic pairs: `text-ink bg-surface`, `text-slate-body`, `text-white bg-primary`.

## Spacing & Layout
- Max content width: `max-w-7xl` (1280px), centered with `px-4 sm:px-6 lg:px-8`
- Section vertical padding: `py-16 lg:py-24`
- Card radius: `rounded-xl` / `rounded-2xl`
- Card border: `border border-border-base`
- Card shadow: `shadow-sm` default, `shadow-lg` on hover

## Visual Style
- Clean white cards on light surface background
- Generous whitespace, clear hierarchy
- Subtle borders, minimal shadows
- Navy primary with amber CTA buttons for contrast
- Realistic factory / QC / shipping / warehouse imagery via strk-img system
- Iconography: Lucide React, line icons, primary or muted color

## Do's
- Use semantic color tokens, not raw hex in JSX
- Keep contrast high: dark text on light surfaces, white text on navy/amber
- Responsive: multi-column on desktop, stacked on mobile
- Use consistent section headers with eyebrow label + title + subtitle

## Don'ts
- No invisible or low-contrast text
- No arbitrary pixel values or magic hex codes in class strings
- No exaggerated marketing claims ("#1", "guaranteed", "best in world")
- No mobile-style single-column stacking on desktop
