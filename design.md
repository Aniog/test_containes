# SSourcing China — Design System

## Overview
A professional, trustworthy B2B website for a China-based sourcing agent. Clean, international aesthetic with a navy-blue brand identity conveying reliability and expertise.

## Colors
- Primary: `#0f2a5e` — Deep navy blue (brand color, headings, nav)
- Primary Light: `#1a3a7a` — Slightly lighter navy for hover states
- Accent: `#e63946` — Professional red for CTAs, emphasis
- Accent Hover: `#c1121f` — Darker red on hover
- Background: `#ffffff` — White for main content areas
- Surface: `#f6f8fb` — Very light blue-gray for alternating sections
- Text Primary: `#1e293b` — Slate 800 for body text
- Text Secondary: `#64748b` — Slate 500 for captions, metadata
- Text Muted: `#94a3b8` — Slate 400 for placeholders
- Border: `#e2e8f0` — Slate 200 for dividers, card borders
- Dark Background: `#0a192f` — Deep navy for footer

## Typography
- Font: Inter (Google Fonts), weight 300–800
- Headings: 600–800 weight, tight letter-spacing (-0.02em)
- Body: 400 weight, 1.65 line-height
- Small/Caption: 12–14px, 500 weight
- Hero H1: 48–56px (desktop), 32–40px (mobile)
- Section H2: 32–40px (desktop), 24–28px (mobile)
- Card titles: 18–20px, 600 weight

## Spacing
- Section vertical padding: 80–120px desktop, 48–64px mobile
- Container max-width: 1280px
- Container horizontal padding: 16px mobile, 24px tablet, 32px desktop, 48px xl
- Card padding: 24–32px
- Grid gaps: 24–32px
- Component margins: 16px, 24px, 32px, 48px

## Component Styles
- Buttons: rounded-md (6px), font-weight 600, px-6 py-3
  - Primary: bg-accent text-white hover:bg-accent-hover
  - Secondary: bg-primary text-white hover:bg-primary-light
  - Outline: border-2 border-primary text-primary hover:bg-primary hover:text-white
- Cards: bg-white, rounded-lg, shadow-sm (border border-slate-100), hover:shadow-md transition
- Inputs: rounded-md, border border-slate-300, focus:border-primary focus:ring-2 focus:ring-primary/20
- Badges: rounded-full, px-3 py-1, text-sm, font-medium

## Visual Effects
- Smooth scroll behavior
- Subtle fade-in on scroll for sections
- Card hover: translateY(-2px) + shadow increase
- Button hover: scale(1.02) subtle
- Hero overlay: linear gradient from rgba(15,42,94,0.85) to rgba(15,42,94,0.6)

## Do's and Don'ts
- DO use plenty of white space for a clean B2B feel
- DO use navy blue as the dominant color, red only for CTAs
- DO use realistic, professional imagery (factories, QC, shipping)
- DON'T use bright flashy colors or gradients
- DON'T use playful or casual fonts
- DON'T overcrowd sections — B2B needs clarity
