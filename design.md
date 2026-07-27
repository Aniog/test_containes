# SSourcing China Design System

## Brand direction
A clean, trustworthy B2B website for overseas buyers looking for sourcing support in China. The visual style should feel international, practical, and credible rather than flashy or salesy.

## Core goals
- Build confidence quickly
- Make services and process easy to understand
- Encourage qualified inquiry submissions
- Keep content readable for international business visitors

## Typography
- Primary font: Inter
- Use clear visual hierarchy with strong but restrained headings
- Headings should feel confident, not aggressive
- Body copy should use medium line-height and moderate widths for easy scanning

Suggested Tailwind patterns:
- Hero heading: `text-4xl font-semibold tracking-tight md:text-6xl`
- Section heading: `text-3xl font-semibold tracking-tight md:text-4xl`
- Eyebrow labels: `text-xs font-semibold uppercase tracking-[0.24em]`
- Body: `text-base leading-7`
- Small supporting copy: `text-sm leading-6`

## Color system
Use a neutral and professional palette with navy/slate foundations, white surfaces, and restrained gold/amber accents.

Suggested semantic mapping:
- Page background: warm light gray or white
- Primary surface: white
- Secondary surface: soft slate
- Main text: dark navy/slate
- Muted text: medium slate
- Primary CTA: dark navy
- Accent: amber/gold for small highlights only
- Borders: subtle slate-gray

Suggested Tailwind patterns:
- App background: `bg-slate-950` only for dark hero bands, otherwise `bg-slate-50`
- Card surface: `bg-white`
- Primary text: `text-slate-900`
- Secondary text: `text-slate-600`
- CTA background: `bg-slate-900 text-white`
- Secondary CTA: `border border-slate-300 bg-white text-slate-900`
- Accent chips/icons: `bg-amber-100 text-amber-800`
- Borders: `border-slate-200`

## Layout and spacing
- Use generous spacing and clear content blocks
- Prefer content width around `max-w-7xl`
- Use consistent section padding, usually `py-16 md:py-24`
- Cards should have comfortable padding, typically `p-6 md:p-8`
- Desktop layouts should stay multi-column where appropriate
- Mobile layouts should stack cleanly without crowding

## Components
- Navigation should be simple, professional, and always readable on light backgrounds
- Buttons should feel strong and businesslike, with rounded corners but not overly soft
- Cards should use subtle border and shadow, not heavy glow effects
- Trust indicators should use restrained badges, icons, and concise copy
- Inquiry form should look dependable and structured, with explicit labels and visible helper text

## Imagery
- Use realistic sourcing-related visuals: supplier meetings, factory floors, quality inspection, packaging, container loading, and shipping coordination
- Avoid generic lifestyle imagery
- Do not overload every section with images; use them strategically
- Prefer stock image queries that reference nearby text for relevance

## Do
- Keep contrast strong and content highly readable
- Use concise B2B copy blocks and scannable lists
- Highlight process clarity, quality control, and communication
- Emphasize practical outcomes, not hype

## Don't
- Do not use neon colors or trendy startup gradients
- Do not use exaggerated claims or overly promotional language
- Do not center every section if left-aligned reading works better
- Do not create low-contrast text on cards, badges, or forms
