# Velmora Fine Jewelry Design System

## Brand direction
Velmora Fine Jewelry should feel like quiet luxury with a warm editorial mood. The site should feel premium, calm, and polished rather than promotional or discount-led.

## Palette
Use named Tailwind color tokens only.

- `velvet`: deep espresso-charcoal base for hero overlays, footer, and high-contrast surfaces
- `truffle`: rich warm brown for elevated dark cards and navigation surfaces
- `ivory`: soft editorial background for most page sections
- `porcelain`: clean light surface for cards and panels
- `champagne`: warm neutral accent surface for trust bars, story blocks, and newsletter
- `gold`: muted metallic accent for borders, buttons, icons, and ratings
- `rosewood`: restrained warm accent for hover details and editorial highlights

## Typography
- Headings and product names: `Playfair Display`, elegant serif
- Body, UI, labels, and buttons: `Inter`, clean sans-serif
- Product names should be uppercase with generous letter spacing using the `tracking-luxe` token

## Layout
- Prefer generous vertical spacing: `py-16`, `py-20`, `py-24`
- Keep content width refined with `max-w-7xl` or `max-w-6xl`
- Use thin dividers like `border-white/10`, `border-velvet/10`, `border-gold/30`
- Mobile-first layouts should stack gracefully, while desktop should feel editorial and expansive

## Surfaces
- Primary background: `bg-ivory`
- Light cards: `bg-porcelain text-velvet`
- Accent cards: `bg-champagne text-velvet`
- Dark hero/footer/nav: `bg-velvet text-ivory`

## Buttons
- Primary CTA: `bg-gold text-velvet hover:bg-rosewood hover:text-ivory`
- Secondary CTA: outlined using `border border-gold/50 text-velvet hover:bg-velvet hover:text-ivory`
- Buttons should feel slim, refined, and premium with rounded-full shapes

## Shadows and motion
- Use the named shadows from Tailwind config: `shadow-soft`, `shadow-card`, `shadow-lift`
- Hover motion should be subtle: slight image scale, opacity fades, and gentle upward translation
- Avoid aggressive animations or bouncing effects

## Imagery
- Use warm-lit editorial jewelry imagery with dark or neutral backgrounds
- Keep stock image queries specific to earrings, necklaces, huggies, gifting, and close-up styling
- UGC images should feel like polished social content rather than casual snapshots

## Do
- Keep strong contrast for all visible text
- Use whitespace generously
- Let metallic accents remain restrained
- Maintain a consistent dark-warm / champagne editorial direction throughout all pages

## Don't
- Do not use bright sale colors, loud gradients, or discount-style badges
- Do not mix cool neon tones into the palette
- Do not use generic marketplace card styling
- Do not let text inherit low-contrast colors on custom surfaces
