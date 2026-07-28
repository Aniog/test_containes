# SSourcing China — Design System

## Brand Identity
- Name: SSourcing China
- Tagline: China Sourcing Agent for Global Buyers
- Positioning: Professional, trustworthy, international B2B sourcing agent

## Color Palette

### Primary
- Primary Blue: `#0f4c81` — Trust, professionalism, reliability. Used for headings, primary buttons, links.
- Primary Blue Dark: `#0a3a63` — Hover states, emphasis.
- Primary Blue Light: `#e8f0f8` — Subtle backgrounds, badges.

### Secondary / Accent
- Accent Orange: `#e67e22` — CTAs, highlights, important badges. Warm, action-oriented.
- Accent Orange Dark: `#d35400` — CTA hover states.

### Neutrals
- White: `#ffffff` — Page backgrounds, cards.
- Off-white: `#f8f9fa` — Section backgrounds.
- Light Gray: `#e9ecef` — Borders, dividers.
- Medium Gray: `#6c757d` — Body text secondary, captions.
- Dark Gray: `#343a40` — Body text primary.
- Near Black: `#212529` — Headings.

### Semantic
- Success: `#28a745` — Checkmarks, positive indicators.
- Warning: `#ffc107` — Alerts.

## Typography
- Font Family: Inter (Google Fonts), system-ui fallback.
- H1: 48px / 700 / line-height 1.2 / color Near Black
- H2: 36px / 700 / line-height 1.3 / color Near Black
- H3: 24px / 600 / line-height 1.4 / color Near Black
- H4: 20px / 600 / line-height 1.4 / color Dark Gray
- Body: 16px / 400 / line-height 1.6 / color Dark Gray
- Small: 14px / 400 / line-height 1.5 / color Medium Gray
- Label: 12px / 600 / uppercase / letter-spacing 0.05em / color Primary Blue

## Spacing
- Section vertical padding: 80px (desktop), 48px (mobile)
- Container max-width: 1200px
- Container horizontal padding: 24px (mobile), 48px (desktop)
- Card padding: 32px
- Grid gap: 32px

## Components

### Buttons
- Primary: bg Accent Orange, text white, rounded-md, px-6 py-3, font-semibold. Hover: bg Accent Orange Dark.
- Secondary: bg transparent, border 2px Primary Blue, text Primary Blue, rounded-md, px-6 py-3. Hover: bg Primary Blue, text white.
- Ghost: bg transparent, text Primary Blue, underline on hover.

### Cards
- bg white, rounded-lg, shadow-sm, border border Light Gray. Hover: shadow-md transition.
- Padding: 32px

### Badges
- Small rounded-full pills. bg Primary Blue Light, text Primary Blue, px-3 py-1, text-xs font-semibold.

## Layout Rules
- Sections alternate between white and off-white backgrounds for visual rhythm.
- Two-column layouts on desktop (text + image or text + form), single column on mobile.
- Images use the stock image system with factory/QC/shipping keywords.
- Navigation: sticky top, white background, subtle bottom shadow.
- Footer: dark background (Dark Gray), white text, organized in columns.

## Do's
- Use generous whitespace.
- Keep copy clear and practical.
- Use icons from Lucide React to support text.
- Ensure high contrast for all text.
- Use responsive breakpoints: md (768px), lg (1024px).

## Don'ts
- Don't use exaggerated claims or hype language.
- Don't use neon or overly bright colors.
- Don't use images that look like stock photography of people shaking hands.
- Don't clutter sections — one message per section.
