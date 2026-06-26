# SSourcing China Design System

## Brand direction
A professional B2B sourcing website for overseas buyers who need dependable help on the ground in China. The visual style should feel calm, practical, internationally credible, and operations-focused rather than promotional.

## Typography
- Primary font: Inter
- Headings: strong, compact, confident
- Body copy: clear, medium contrast, easy to scan
- Example Tailwind usage: `font-sans`, `text-4xl md:text-5xl`, `text-base md:text-lg`, `leading-7`

## Color system
Define named theme colors in `src/index.css` and use them in Tailwind classes.

- Brand navy: primary authority color for headers, hero overlays, and dark sections
- Brand ink: secondary dark blue for headings and icons
- Brand steel: muted text and supporting UI copy
- Brand mist: light page background
- Brand line: borders and subtle dividers
- Brand gold: restrained accent for highlights and badges
- White: cards and primary surfaces

Example class usage:
- Backgrounds: `bg-brand-mist`, `bg-brand-white`, `bg-brand-navy`
- Text: `text-brand-navy`, `text-brand-ink`, `text-brand-steel`, `text-brand-white`
- Borders: `border-brand-line`
- Accents: `text-brand-gold`, `bg-brand-gold`

## Layout
- Use wide desktop layouts with `max-w-7xl`
- Keep strong section rhythm with `py-16 md:py-24`
- Use multi-column desktop sections and avoid mobile-style stacking on large screens unless content requires it
- Cards should use generous padding, soft borders, and subtle shadows
- Example Tailwind usage: `grid gap-6 lg:grid-cols-3`, `rounded-3xl`, `border`, `shadow-sm`

## Components
- Navigation should be simple, sticky, and business-like
- Buttons should be clear and substantial, with the main CTA always visible
- Cards should have readable text with explicit foreground colors
- Inquiry forms should look trustworthy and structured, not salesy
- Use realistic factory, inspection, and shipping visuals via the Strikingly image system

## Content tone
- Professional, clear, practical
- Avoid hype, exaggerated claims, and vague superlatives
- Prefer concrete operational language such as supplier verification, inspection reporting, production follow-up, and shipping coordination

## Do
- Keep text readable on every surface
- Use clear section headings and scannable bullet points
- Make CTAs visible without overpowering the page
- Emphasize process clarity and risk reduction

## Don't
- Do not use flashy gradients, neon colors, or startup-style hype
- Do not make unsupported performance claims or fake statistics
- Do not use low-contrast muted text for important information
- Do not overcrowd sections on mobile or desktop
