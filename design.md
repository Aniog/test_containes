# Velmora Fine Jewelry Design System

## Brand direction
Velmora should feel like quiet luxury: warm, editorial, refined, and premium without feeling flashy or discount-driven. The storefront should flatter gold jewelry with soft neutrals, deep espresso text, champagne-gold accents, and generous whitespace.

## Typography
- Headings and product names: Cormorant Garamond
- Body, labels, UI, navigation: Inter
- Product names should use uppercase styling with wide tracking
- Preferred Tailwind examples:
  - Headings: `font-["Cormorant_Garamond",serif]`
  - Body: `font-["Inter",sans-serif]`
  - Product names: `uppercase tracking-[0.28em]`

## Color system
Use this single palette consistently.
- Background: warm ivory `bg-velmora-ivory`
- Elevated surface: soft pearl `bg-velmora-pearl`
- Ink / main text: deep espresso `text-velmora-ink`
- Soft text: muted taupe `text-velmora-mist`
- Accent: brushed champagne gold `bg-velmora-gold`, `text-velmora-gold`
- Accent dark: antique bronze `bg-velmora-bronze`
- Hairlines / borders: `border-velmora-line`

## Surfaces and spacing
- Use generous padding and whitespace, especially in hero, story, and editorial sections
- Favor thin borders and soft shadows over heavy cards
- Prefer rounded corners in the 2xl range for large panels, xl for smaller cards
- Keep max widths elegant and breathable, typically `max-w-7xl`

## Buttons and inputs
- Primary CTA: solid gold/bronze accent with dark readable text or deep-ink text depending on contrast
- Secondary CTA: transparent or pearl background with hairline border
- Inputs should feel refined: light background, thin border, dark readable text, clear placeholder contrast
- Preferred Tailwind examples:
  - Primary button: `bg-velmora-gold text-velmora-ink hover:bg-velmora-bronze hover:text-white`
  - Secondary button: `border border-velmora-line bg-transparent text-velmora-ink hover:bg-velmora-pearl`

## Imagery
- Use warm-lit jewelry photography
- Editorial, close-up, intimate, premium, soft-shadow imagery
- Backgrounds should be dark neutral stone, warm ivory, or soft skin tones that flatter gold jewelry
- Avoid loud colors, collage layouts, and overtly promotional imagery

## Motion
- Keep animations subtle and calm
- Favor `duration-300` to `duration-500`, gentle transforms like `hover:-translate-y-1`, and soft fades
- No flashy bouncing or exaggerated scaling

## Do
- Keep text highly legible against every background
- Use serif display type to create a premium feel
- Preserve a calm, upscale rhythm with restrained accent usage
- Let imagery and whitespace carry the luxury tone

## Don’t
- Do not use bright discount colors, heavy gradients, or loud sales styling
- Do not overcrowd sections or use dense card layouts on desktop
- Do not rely on inherited text colors inside cards, overlays, or accent surfaces
- Do not mix multiple competing color directions
