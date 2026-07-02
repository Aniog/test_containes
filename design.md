# Velmora Fine Jewelry Design System

## Brand mood
Quiet luxury, warm, editorial, premium-but-accessible. The site should feel refined and intimate, with generous whitespace and restrained motion.

## Color direction
Use one consistent palette sitewide:
- Background: warm ivory / soft parchment
- Surface: creamy white
- Deep base: espresso brown
- Accent: muted champagne gold
- Border: translucent warm taupe hairlines
- Success/utility colors should stay subtle and elegant

Example Tailwind direction:
- Page background: `bg-stone-50`
- Main text: `text-stone-900`
- Secondary text: `text-stone-600`
- Elevated card: `bg-white`
- Dark editorial sections: `bg-stone-900 text-stone-50`
- Accent buttons/highlights: `bg-amber-700 text-stone-50`
- Accent outline: `border-amber-700 text-amber-800`
- Hairline dividers: `border-stone-200`

## Typography
- Headings, logo, and product names: Cormorant Garamond
- Body and interface text: Inter
- Product names should appear in uppercase with generous tracking, e.g. `uppercase tracking-[0.28em]`

## Spacing and layout
- Generous vertical rhythm: `py-16 md:py-24`
- Content width: `max-w-7xl mx-auto px-4 sm:px-6 lg:px-8`
- Use asymmetrical editorial layouts where helpful, but keep product shopping flows clear and practical.

## Buttons
- Premium primary button: solid warm accent with subtle lift on hover
- Secondary button: transparent or ivory surface with fine border
- Rounded-full or softly rounded corners only; avoid harsh geometry

## Cards and surfaces
- Product cards should have airy spacing, soft shadows, and readable text
- Use thin borders and gentle shadows rather than heavy contrast blocks
- Never place important text on low-contrast photo areas without an overlay

## Imagery
- Warm-lit jewelry, close crop, editorial styling, gold jewelry on skin or dark neutral backdrops
- Use large image moments balanced by calm white space
- UGC/reel strip can feel more playful, but still premium and restrained

## Motion
- Subtle only: `duration-300 ease-out`
- Use soft translate/fade/scale hover effects
- Avoid flashy parallax or overly bouncy animations

## Do
- Keep text contrast strong and explicit on every section
- Let the serif typography and imagery create the luxury feeling
- Keep forms, filters, and cart UI clean and modern

## Don't
- Do not use bright promo colors, discount badges, or loud gradients
- Do not crowd the layout with dense product information
- Do not rely on hidden/inherited text colors on images or colored surfaces
