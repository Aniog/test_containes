# Design System

## Visual Style
Clean, modern SaaS landing page aesthetic. Light background with a blue-indigo primary accent. Professional and trustworthy feel.

## Colors
- Background: white (`bg-white`, `bg-background`)
- Foreground text: dark navy (`text-foreground`, `text-slate-900`)
- Primary accent: indigo-blue (`bg-primary`, `text-primary`) — maps to `hsl(231 89% 64%)` → Tailwind `brand-500` (#4f6ef7)
- Muted text: slate-500 (`text-muted-foreground`)
- Borders: light slate (`border-border`, `border-slate-200`)
- Hero gradient: `from-brand-50 via-white to-white`
- Section alternating: white and `bg-slate-50`

## Typography
- Font: Inter (Google Fonts)
- Hero heading: `text-4xl md:text-6xl font-extrabold tracking-tight text-slate-900`
- Section heading: `text-3xl font-bold text-slate-900`
- Body: `text-base text-slate-600 leading-relaxed`
- Label: `text-sm font-medium text-slate-700`
- Caption/muted: `text-sm text-muted-foreground`

## Spacing
- Section padding: `py-20 px-4`
- Card padding: `p-6` or `p-8`
- Form gap: `gap-4` or `gap-6`
- Container max width: `max-w-6xl mx-auto`

## Borders & Shadows
- Cards: `rounded-xl border border-border shadow-sm`
- Inputs: `rounded-md border border-input`
- Buttons: `rounded-md`
- Elevated cards: `shadow-md`

## Components
- Buttons: primary uses `bg-primary text-primary-foreground hover:bg-brand-600`
- Inputs: `bg-white border border-input focus:ring-2 focus:ring-primary`
- Badges: `bg-primary/10 text-primary text-xs font-semibold px-2.5 py-0.5 rounded-full`
- Nav: sticky top, white bg, subtle border-bottom, `shadow-sm`

## Do's
- Use consistent 8px spacing grid via Tailwind
- Keep text contrast high — dark text on light backgrounds
- Use `text-slate-900` for headings, `text-slate-600` for body
- Use `text-primary` for links and accents

## Don'ts
- No dark backgrounds on the main page
- No low-contrast text (e.g. gray on gray)
- No magic hex values — use Tailwind named colors or CSS variables
