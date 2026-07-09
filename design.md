# Velmora Fine Jewelry Design System

## Brand direction
Velmora Fine Jewelry uses a quiet-luxury editorial aesthetic with warm gold accents and a deep espresso base. The feeling should be calm, elevated, intimate, and premium without looking flashy or discount-driven.

## Typography
- Headings and product names: Cormorant Garamond
- Body, navigation, buttons, filters, and UI text: Inter
- Product names should be uppercase with generous tracking.

## Color palette
Add these as named colors through Tailwind config.
- `espresso`: `#211914`
- `truffle`: `#342821`
- `ivory`: `#f6f1ea`
- `champagne`: `#dcc7a1`
- `gold`: `#b98a4a`
- `rose-clay`: `#c9b2a5`
- `mist`: `#e5ddd4`
- `ink-soft`: `#5c5048`

## Surfaces and text
- Main page background: `bg-ivory`
- Dark editorial sections: `bg-espresso text-ivory`
- Cards: `bg-white/80 text-espresso`
- Secondary text: `text-ink-soft`
- Dividers: `border-champagne/30`

## Borders and effects
- Use thin borders: `border border-champagne/30`
- Use subtle shadows: `shadow-[0_16px_60px_rgba(33,25,20,0.08)]`
- Use rounded corners sparingly: `rounded-2xl` for cards, `rounded-full` for pills and buttons when appropriate.

## Spacing
- Prefer generous vertical rhythm: `py-16 md:py-24`
- Constrain content with `max-w-7xl mx-auto px-4 sm:px-6 lg:px-8`
- Use airy gaps such as `gap-6`, `gap-8`, `gap-10`, `gap-12`

## Buttons
- Primary CTA: `bg-gold text-ivory hover:bg-truffle`
- Secondary CTA: `border border-champagne text-espresso hover:bg-champagne/15`
- Avoid loud gradients, neon colors, and oversized pills.

## Imagery
- Use warm-lit close-ups, gold jewelry on skin, dark neutral stone, silk, and soft studio backdrops.
- Keep image presentation editorial with cropped compositions and minimal decorative overlays.

## Do
- Keep a consistent dark-meets-warm-neutral palette
- Use high contrast text on every section
- Let whitespace and typography create the premium feeling
- Use subtle motion and restrained micro-interactions

## Don’t
- Do not use discount badges, bright sale colors, or cluttered layouts
- Do not mix multiple visual directions
- Do not leave important text colors implicit on custom backgrounds
- Do not use generic marketplace styling
