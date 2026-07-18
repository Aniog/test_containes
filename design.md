# Velmora Fine Jewelry Design System

## Brand mood
Quiet luxury, warm, editorial, feminine, premium-but-accessible. The storefront should feel refined and giftable, never loud, flashy, or discount-driven.

## Visual direction
Commit to a deep espresso editorial base with warm champagne-gold accents and soft ivory surfaces.

### Core palette
- Background base: espresso / ink brown for hero, footer, overlays.
- Surface: warm ivory and soft pearl neutrals for cards and body sections.
- Accent: muted champagne gold for buttons, highlights, icons, borders.
- Text primary: deep cocoa / near-black on light surfaces.
- Text inverse: soft ivory on dark surfaces.
- Divider: subtle warm taupe hairline.

### Tailwind translation
Use semantic classes through Tailwind arbitrary values sparingly only where needed. Prefer these examples consistently:
- Page background: `bg-stone-50`
- Dark editorial sections: `bg-stone-950`
- Elevated cards: `bg-white/80` or `bg-stone-100`
- Primary text: `text-stone-900`
- Muted text: `text-stone-600`
- Inverse text: `text-stone-100`
- Dividers: `border-stone-200/80` on light and `border-stone-700/60` on dark
- Accent gold: `bg-amber-200`, `text-amber-200`, `border-amber-200/80`
- Premium hover gold: `bg-amber-100`, `text-amber-100`

## Typography
- Headings and product names: Cormorant Garamond
- Body, UI, labels: Inter
- Product names should be uppercase with wide tracking.
- Large display headlines should use generous line-height and elegant spacing.

### Tailwind translation
- Display serif: `font-[\"Cormorant_Garamond\",serif]`
- Body sans: `font-sans`
- Product names: `uppercase tracking-[0.28em]`
- Section labels: `uppercase tracking-[0.3em] text-xs`

## Layout and spacing
- Favor large whitespace and breathing room.
- Desktop sections should feel editorial, not cramped.
- Use max-width containers around `max-w-7xl` with generous horizontal padding.
- Default section padding: `py-16 md:py-24`
- Use thin dividers and subtle shadows.

## Components
### Buttons
- Primary button: dark base with warm gold text or warm gold base with dark text depending on section contrast.
- Shape: pill or softly rounded rectangle.
- Use refined hover states, not aggressive animations.
- Example classes: `rounded-full px-6 py-3 text-sm uppercase tracking-[0.24em] transition duration-300`

### Product cards
- Clean ivory card surface.
- Large imagery.
- Hairline border or faint shadow.
- Product title in serif uppercase tracking.
- Price and metadata in restrained sans-serif.

### Navigation
- Transparent over hero, then solid ivory with subtle blur and border when scrolled.
- Logo in serif uppercase with generous tracking.

### Inputs
- Use light surfaces with dark readable text.
- Borders should be warm neutral, never low-contrast.

## Imagery
- Use warm gold jewelry imagery on dark espresso or soft neutral backgrounds.
- Mix editorial close-ups with polished studio product photography.
- UGC/reel row should feel like premium social storytelling, not casual collage.

## Motion
- Smooth, subtle transitions only.
- Image hover zoom should be minimal.
- Drawer and dropdown motion should feel soft and premium.

## Do
- Keep contrast strong and text explicitly readable.
- Use restrained gold accents.
- Preserve generous whitespace.
- Maintain consistent serif/sans pairing.

## Don’t
- Don’t use bright yellow gold, neon beige, or harsh black/white extremes.
- Don’t use discount sale badges, loud gradients, or cluttered cards.
- Don’t stack desktop layouts into mobile-style single columns unless required by width.
- Don’t leave text color implicit on custom surfaces.
