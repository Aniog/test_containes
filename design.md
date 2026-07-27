# SSourcing China — Design System

## Brand Identity
Professional, trustworthy, and international B2B sourcing agent based in China. The visual language should feel clean, organized, and business-ready for overseas buyers.

## Color Palette

| Token | Value | Usage |
|-------|-------|-------|
| `--color-primary` | `#0f3d7a` | Primary brand navy — headings, key CTAs, trust badges |
| `--color-primary-dark` | `#0a2a56` | Hover states, footer |
| `--color-accent` | `#e67e22` | Accent orange — CTA buttons, highlights, urgency |
| `--color-accent-dark` | `#c86a17` | Accent hover |
| `--color-surface` | `#ffffff` | Cards, content backgrounds |
| `--color-background` | `#f5f7fa` | Page background |
| `--color-muted` | `#6b7a90` | Secondary text, captions |
| `--color-border` | `#dde3eb` | Borders, dividers |
| `--color-foreground` | `#0f172a` | Body text, headings |

## Typography
- Font family: Inter (Google Fonts)
- Headings: font-weight 700–800, tight line-height (1.1–1.2)
- Body: font-weight 400–500, line-height 1.6
- Small/captions: text-sm text-muted

## Spacing & Layout
- Page max-width: 1280px (max-w-7xl)
- Section padding: py-16 md:py-24
- Container padding: px-4 sm:px-6 lg:px-8
- Card radius: rounded-xl (12px)
- Button radius: rounded-lg (8px)
- Grid gaps: gap-6 to gap-8

## Components

### Buttons
- Primary CTA: `bg-accent text-white font-semibold px-6 py-3 rounded-lg hover:bg-accent-dark`
- Secondary/outline: `border-2 border-primary text-primary hover:bg-primary hover:text-white`
- Ghost/link: `text-primary font-medium hover:text-primary-dark`

### Cards
- White surface with subtle shadow: `bg-white rounded-xl shadow-sm border border-border p-6`
- Hover lift: `hover:shadow-md transition-shadow`

### Forms
- Inputs: `w-full rounded-lg border-border px-4 py-3 focus:border-primary focus:ring-primary`
- Labels: `text-sm font-medium text-foreground mb-1`

## Visual Style Do's
- Use plenty of white space
- Use navy for trust, orange only for primary CTAs
- Keep layouts grid-based and aligned
- Use realistic factory, QC, logistics imagery via stock-image system
- Ensure all text has strong contrast

## Visual Style Don'ts
- Avoid neon or overly saturated colors
- Avoid cluttering cards with too many elements
- Avoid generic filler text; keep copy practical and specific
- Never use low-contrast text on light backgrounds
