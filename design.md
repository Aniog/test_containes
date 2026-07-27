# SSourcing China — Design Style Guide

## Brand Identity
- **Name**: SSourcing China
- **Tagline**: China Sourcing Agent for Global Buyers
- **Tone**: Professional, clear, practical, trustworthy. No exaggerated claims.

## Color Palette
- **Primary (Navy Blue)**: `#1e3a5f` — Headers, nav, trust sections, footer. Tailwind: `primary`
- **Primary Light**: `#2c5282` — Hover states, secondary headings. Tailwind: `primary-light`
- **Accent (Amber/Gold)**: `#d97706` — CTA buttons, highlights, icons. Tailwind: `accent`
- **Accent Light**: `#f59e0b` — Hover on accent buttons. Tailwind: `accent-light`
- **Neutral Dark**: `#1f2937` — Body text. Tailwind: `neutral-dark`
- **Neutral Mid**: `#6b7280` — Secondary text, captions. Tailwind: `neutral-mid`
- **Neutral Light**: `#f3f4f6` — Section backgrounds, cards. Tailwind: `neutral-light`
- **White**: `#ffffff` — Main background, card backgrounds. Tailwind: `white`
- **Success Green**: `#059669` — Trust badges, checkmarks. Tailwind: `success`

## Typography
- **Font Family**: Inter (Google Fonts)
- **Headings**: Inter, weight 700–800, navy blue color
- **Body**: Inter, weight 400–500, neutral-dark color
- **Sizes**: h1=3rem, h2=2.25rem, h3=1.5rem, body=1rem, small=0.875rem

## Layout & Spacing
- **Max content width**: 1200px (max-w-7xl)
- **Section padding**: py-16 md:py-24
- **Card padding**: p-6 md:p-8
- **Grid gaps**: gap-6 md:gap-8
- **Border radius**: rounded-lg for cards, rounded-xl for hero, rounded-md for buttons

## Visual Style
- Clean, minimal, international B2B aesthetic
- White/light backgrounds with navy sections for contrast
- Cards with subtle shadows (shadow-md) and light borders
- Icons from Lucide React, amber accent color
- Stock images: factory floors, QC inspection, shipping containers, warehouse logistics
- No decorative gradients or flashy animations

## Buttons
- **Primary CTA**: Amber background (`bg-accent`), white text, rounded-md, px-6 py-3, font-semibold
- **Secondary**: Navy background (`bg-primary`), white text, same sizing
- **Outline**: Border navy/amber, transparent bg, colored text

## Cards
- White background, shadow-md, rounded-lg, p-6
- Icon + title + description pattern
- Hover: shadow-lg transition

## Navigation
- Sticky top nav, white bg, navy text
- Logo left, links center/right
- Mobile: hamburger menu with slide-down

## Footer
- Navy background, white text
- 4-column layout: About, Services, Quick Links, Contact
- Copyright bar at bottom

## Do's
- Use navy + amber consistently
- Keep sections well-spaced and uncluttered
- Use realistic factory/QC/shipping imagery
- Ensure all text is clearly readable (high contrast)
- Mobile-first responsive design

## Don'ts
- Don't use light text on light backgrounds
- Don't use exaggerated marketing language
- Don't add decorative gradients or flashy effects
- Don't hardcode arbitrary hex colors outside this palette
- Don't use single-column stacking on desktop views
