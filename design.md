# SSourcing China - Design System

## Overview
Professional B2B website for a China-based sourcing agent. Clean, trustworthy, international feel.

## Color Palette
- **Primary**: `#1B4D72` — Deep trust blue. Used for CTAs, primary buttons, active nav states.
- **Primary Dark**: `#133C5A` — Hover states for primary.
- **Secondary**: `#2A9D8F` — Teal accent for highlights, badges, secondary actions.
- **Secondary Dark**: `#21867A` — Hover states for secondary.
- **Background**: `#FFFFFF` — Main page background.
- **Surface**: `#F7F9FB` — Subtle sections, cards, alternating backgrounds.
- **Surface Dark**: `#EEF1F5` — Borders, dividers, subtle contrast areas.
- **Text Primary**: `#0F172A` — Headlines, body text on light.
- **Text Secondary**: `#475569` — Descriptions, captions, muted text.
- **Text Light**: `#94A3B8` — Placeholders, disabled states.
- **Success**: `#16A34A` — Positive indicators.
- **Warning**: `#D97706` — Caution indicators.
- **Error**: `#DC2626` — Error states.
- **Border**: `#E2E8F0` — Input borders, card borders.

## Typography
- **Font Family**: Inter, system-ui, sans-serif
- **H1**: 48px / 56px line-height, font-weight 700
- **H2**: 36px / 44px line-height, font-weight 700
- **H3**: 24px / 32px line-height, font-weight 600
- **H4**: 20px / 28px line-height, font-weight 600
- **Body**: 16px / 24px line-height, font-weight 400
- **Body Small**: 14px / 20px line-height, font-weight 400
- **Caption**: 12px / 16px line-height, font-weight 500, uppercase, letter-spacing 0.05em

## Spacing
- Section vertical padding: `py-20` (80px) desktop, `py-12` (48px) mobile
- Container max-width: `max-w-7xl` (1280px)
- Content max-width for text-heavy areas: `max-w-3xl`
- Card gap: `gap-6` (24px)
- Component internal padding: `p-6` to `p-8`

## Border Radius
- Buttons: `rounded-md` (6px)
- Cards: `rounded-lg` (8px)
- Inputs: `rounded-md` (6px)
- Badges: `rounded-full`

## Shadows
- Card shadow: `shadow-sm`
- Elevated card: `shadow-md`
- Sticky nav: `shadow-sm`

## Buttons
- **Primary**: bg-primary text-white px-6 py-3 rounded-md font-medium hover:bg-primary-dark transition
- **Secondary / Outline**: border border-primary text-primary px-6 py-3 rounded-md font-medium hover:bg-primary hover:text-white transition
- **Ghost**: text-primary hover:bg-surface transition

## Do's and Don'ts
- DO use the deep blue (#1B4D72) sparingly — let it anchor CTAs and key headings.
- DO use plenty of white space to convey professionalism.
- DO use teal for trust badges and secondary emphasis.
- DON'T use bright reds or oranges as primary colors.
- DON'T use decorative borders or heavy drop shadows.
- DON'T use gradients on buttons — keep them flat and solid.
- DON'T use casual or playful fonts.

## Navigation
- Fixed top nav, white background with shadow-sm on scroll
- Logo left, nav links center/right, CTA button right
- Mobile: hamburger menu with slide-down panel

## Footer
- Dark background (#0F172A), light text
- 4-column layout: Company, Services, Resources, Contact
- Social icons, copyright, legal links at bottom
