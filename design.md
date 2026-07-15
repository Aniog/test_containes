# Velmora Fine Jewelry Design System

## Visual direction
Velmora uses a quiet-luxury editorial aesthetic with a deep espresso base, warm champagne-gold accents, and soft ivory surfaces. The brand should feel premium, warm, restrained, and feminine without looking flashy or discount-led.

## Color system
Use named Tailwind colors only.

- Background base: `bg-velmora-ink` for dark editorial hero and footer surfaces
- Elevated dark surface: `bg-velmora-panel`
- Soft light surface: `bg-velmora-ivory`
- Warm accent: `bg-velmora-gold`
- Warm accent hover: `bg-velmora-gold-deep`
- Hairline border: `border-velmora-line`
- Main text on light: `text-velmora-ink`
- Main text on dark: `text-velmora-ivory`
- Secondary text on light: `text-velmora-mist`
- Secondary text on dark: `text-velmora-cloud`

Suggested values to map in Tailwind config:
- velmora-ink: `#1f1715`
- velmora-panel: `#2b211f`
- velmora-ivory: `#f6f0ea`
- velmora-sand: `#e8ddd2`
- velmora-gold: `#b68a52`
- velmora-gold-deep: `#9d7443`
- velmora-line: `#d8cabd`
- velmora-mist: `#6d5c55`
- velmora-cloud: `#d8c9bc`

## Typography
- Headings and product names: `Cormorant Garamond`, elegant and editorial
- Body and UI: `Inter`
- Product names should appear in uppercase with wide tracking such as `tracking-[0.32em]` only where needed in CSS or component classes. Prefer Tailwind scale values like `tracking-[0.28em]` sparingly and consistently.

## Layout and spacing
- Generous whitespace with section padding like `py-16 md:py-24`
- Max content width: `max-w-7xl`
- Use thin borders and restrained shadows
- Cards should feel airy and premium, never crowded

## Components
- Buttons: rounded-full, refined padding, subtle transitions, premium contrast
- Dividers: thin and understated using `border-velmora-line/60`
- Product cards: image-first, clean metadata, hover reveal for secondary image and CTA
- Inputs: ivory or transparent surfaces with explicit readable text and border states

## Do
- Keep contrast strong and text explicitly readable on every surface
- Use editorial image compositions with warm gold jewelry on dark or neutral backgrounds
- Maintain consistent serif/sans pairing across the entire site
- Use subtle animation only

## Don’t
- Do not use bright sale colors, neon accents, or discount-style badges
- Do not mix multiple color directions
- Do not use heavy shadows or bulky UI chrome
- Do not leave important text color implicit on custom backgrounds
