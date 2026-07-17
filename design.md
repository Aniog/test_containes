# Velmora Fine Jewelry Design System

## Brand direction
Velmora should feel like a modern fine-jewelry editorial: quiet luxury, warm, intimate, and premium without feeling flashy or discount-led. The storefront should flatter gold jewelry with deep, refined neutrals and soft metallic highlights.

## Color palette
Use one consistent direction sitewide:
- Background: deep espresso `brand-noir` for hero, footer, and high-emotion sections. Example Tailwind: `bg-brand-noir`.
- Surface: warm ivory `brand-ivory` for the main page background. Example: `bg-brand-ivory`.
- Elevated surface: soft champagne `brand-champagne`. Example: `bg-brand-champagne`.
- Accent: muted antique gold `brand-gold`. Example: `bg-brand-gold`, `text-brand-gold`, `border-brand-gold/40`.
- Primary text on light surfaces: `brand-ink`. Example: `text-brand-ink`.
- Secondary text: `brand-mist`. Example: `text-brand-mist`.
- Text on dark surfaces: `brand-cream`. Example: `text-brand-cream`.
- Divider lines: `brand-line`. Example: `border-brand-line`.

## Typography
- Headings, section titles, editorial pull quotes, and product names: Cormorant Garamond. Example Tailwind pairing: `font-display tracking-[0.18em]` for product titles.
- Body text, navigation, labels, buttons, filters, inputs: Inter.
- Product names should be uppercase with generous letter-spacing.

## Spacing and layout
- Prefer generous vertical rhythm: `py-16 md:py-24 lg:py-28` for major sections.
- Keep content widths elegant and breathable using `max-w-7xl` and narrower text columns like `max-w-2xl`.
- Use thin borders and subtle shadows instead of heavy cards.

## Components
- Buttons: premium and restrained. Primary button uses `bg-brand-gold text-brand-noir hover:bg-brand-gold-soft`. Secondary button uses transparent or ivory background with fine border.
- Product cards: image first, lots of breathing room, thin dividers, soft shadow on hover.
- Navigation: transparent over dark hero, turns solid ivory with shadow after scroll.
- Inputs: soft ivory or champagne surfaces with explicit dark text for readability.

## Motion
- Keep transitions subtle: `duration-300 ease-out`.
- Hover effects should be limited to slight image scaling, opacity changes, underline or arrow movement.

## Do
- Keep text contrast strong and explicit on every surface.
- Use editorial spacing and restrained metallic accents.
- Let imagery breathe.

## Don't
- Do not use bright sale colors, loud gradients, neon tones, or crowded promo blocks.
- Do not use pure black-and-gold casino styling.
- Do not stack desktop sections like a cramped mobile feed.
