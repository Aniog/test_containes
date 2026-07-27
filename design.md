# SSourcing China - Design System

## Brand Identity
- Professional B2B sourcing agent website
- Clean, trustworthy, international feel
- Target: overseas buyers looking for China sourcing support

## Colors
- **Primary**: Deep navy blue (`navy` - #1e3a5f) — trust, professionalism
- **Primary Light**: (`navy-light` - #2d5a8e) — hover states
- **Accent**: Warm orange (`accent` - #e86c2e) — CTAs, highlights
- **Accent Hover**: (`accent-hover` - #d45a1e) — button hover
- **Background**: White (`#ffffff`) for main content
- **Surface**: Light gray (`surface` - #f8f9fb) — alternating sections
- **Border**: (`border` - #e2e8f0) — subtle dividers
- **Text Primary**: Dark charcoal (`text-primary` - #1a2332)
- **Text Secondary**: Medium gray (`text-secondary` - #5a6a7e)
- **Text Muted**: Light gray (`text-muted` - #8a9bb0)
- **Success**: Green (`success` - #22a366)

## Typography
- Font: Inter (Google Fonts)
- Headings: font-bold, tracking-tight
  - H1: text-4xl md:text-5xl lg:text-6xl
  - H2: text-3xl md:text-4xl
  - H3: text-xl md:text-2xl
  - H4: text-lg font-semibold
- Body: text-base (16px), text-text-secondary
- Small: text-sm, text-text-muted

## Spacing
- Section padding: py-16 md:py-24
- Container: max-w-7xl mx-auto px-4 sm:px-6 lg:px-8
- Card padding: p-6 md:p-8
- Gap between cards: gap-6 md:gap-8

## Components
- **Buttons**:
  - Primary: bg-accent text-white rounded-lg px-6 py-3 font-semibold hover:bg-accent-hover transition-colors
  - Secondary: border-2 border-navy text-navy rounded-lg px-6 py-3 font-semibold hover:bg-navy hover:text-white transition-colors
- **Cards**: bg-white rounded-xl shadow-sm border border-border p-6 hover:shadow-md transition-shadow
- **Section headings**: Centered, with subtitle below in text-text-secondary
- **Navigation**: Fixed top, bg-white/95 backdrop-blur-sm shadow-sm

## Do's
- Use consistent spacing with Tailwind scale
- Use named colors from tailwind config
- Keep sections alternating white/surface backgrounds
- Use Lucide icons consistently at w-5 h-5 or w-6 h-6
- Maintain clear visual hierarchy

## Don'ts
- No hardcoded hex values in JSX
- No dark mode (B2B site, light only)
- No overly rounded corners (max rounded-xl)
- No excessive animations
- No text that blends into background
