# SSourcing China Design Guide

## Brand direction
SSourcing China should feel practical, international, and dependable. The site is built for overseas importers who need clear next steps rather than flashy marketing language.

## Typography
- Primary font: Inter
- Heading style: semibold to bold, compact tracking, dark ink color
- Body style: medium line-height, neutral readable gray
- Example Tailwind classes: `font-sans`, `text-brand-ink`, `text-brand-slate`, `tracking-tight`, `leading-7`

## Color system
Use named Tailwind colors from the project config.
- `brand-ink`: primary heading and dark surface color
- `brand-slate`: secondary text color
- `brand-muted`: helper text color
- `brand-line`: borders and dividers
- `brand-surface`: soft section background
- `brand-sky`: pale accent background
- `brand-blue`: primary CTA and link color
- `brand-teal`: process and operations accent color
- `brand-gold`: subtle highlight for trust and premium detail

## Layout and spacing
- Use generous white space and consistent containers
- Prefer `max-w-7xl` for main sections and `max-w-3xl` to `max-w-4xl` for reading-heavy content
- Section rhythm should typically use `py-16 md:py-20`
- Card spacing should feel open, with `rounded-3xl`, `border`, `p-6 md:p-8`

## Surfaces
- Main page background: white
- Alternate sections: `bg-brand-surface`
- Premium highlight blocks: `bg-brand-ink` with `text-white`
- Cards: white with subtle border and soft shadow

## Buttons
- Primary CTA: `bg-brand-blue text-white hover:bg-brand-blue-strong`
- Secondary CTA: white background with dark text and visible border
- Buttons should be rounded pill shapes with medium-large padding

## Imagery
- Use realistic sourcing, inspection, supplier, production, and shipping visuals
- Favor operational scenes over abstract marketing images
- Images should support credibility and process clarity

## Do
- Keep copy concrete and B2B-oriented
- Use concise proof points and practical service language
- Make all important text highly readable with explicit foreground colors
- Maintain clean alignment and strong visual hierarchy

## Don’t
- Do not use exaggerated promises or vague superlatives
- Do not use saturated gradients or startup-style neon effects
- Do not place light gray text on white surfaces
- Do not overcrowd sections or stack desktop content into a mobile-style single column unless required
