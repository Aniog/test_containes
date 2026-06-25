# ARTITECT MACHINERY - Design System

## Brand Identity
- **Brand Name:** ARTITECT MACHINERY
- **Tone:** Elegant, professional, trustworthy, user-friendly
- **Industry:** Industrial sheet metal folding machines

## Color Palette
- **Primary (Navy):** `--color-primary: #1a2744` — deep navy for headers, nav, key text
- **Primary Light:** `--color-primary-light: #2d3f5e` — hover states, secondary surfaces
- **Accent (Amber/Gold):** `--color-accent: #c8963e` — CTAs, highlights, brand accents
- **Accent Light:** `--color-accent-light: #daa84e` — hover on accent elements
- **Surface:** `--color-surface: #ffffff` — cards, content areas
- **Background:** `--color-bg: #f8f9fb` — page background
- **Background Alt:** `--color-bg-alt: #eef1f5` — alternating sections
- **Text Primary:** `--color-text: #1a2744` — headings, body text
- **Text Secondary:** `--color-text-muted: #5a6a7e` — descriptions, captions
- **Text on Dark:** `--color-text-light: #f8f9fb` — text on dark backgrounds
- **Border:** `--color-border: #e2e6ec` — subtle borders

## Typography
- **Font Family:** Inter (Google Font)
- **Headings:** font-weight 700, tracking tight (`tracking-tight`)
- **Subheadings:** font-weight 600
- **Body:** font-weight 400, text base size
- **Small/Caption:** font-weight 400, text-sm, text-muted color

## Spacing
- Section padding: `py-20 lg:py-28`
- Container max-width: `max-w-7xl mx-auto px-6 lg:px-8`
- Card padding: `p-6 lg:p-8`
- Gap between grid items: `gap-6 lg:gap-8`

## Borders & Shadows
- Card border: `border border-[var(--color-border)]`
- Card shadow: `shadow-sm` or `shadow-md` on hover
- Border radius: `rounded-xl` for cards, `rounded-lg` for buttons

## Buttons
- Primary: bg-accent text-white rounded-lg px-6 py-3 font-semibold hover:bg-accent-light transition
- Secondary: border-2 border-primary text-primary rounded-lg px-6 py-3 font-semibold hover:bg-primary hover:text-white transition
- Ghost: text-accent font-semibold hover:underline

## Do's
- Use generous whitespace between sections
- Keep text concise and scannable
- Use subtle animations (transition-all duration-300)
- Maintain consistent vertical rhythm
- Use icons from Lucide React for visual clarity

## Don'ts
- No harsh neon colors
- No cluttered layouts
- No more than 3 font weights on a single page
- No magic hex values outside the defined palette
- No heavy drop shadows
