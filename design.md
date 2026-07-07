# Velmora Fine Jewelry — Design System

## Brand & Mood
Quiet luxury, warm, editorial. Premium demi-fine jewelry — never loud, never discount-looking, never generic e-commerce. We are the antidote to "noisy" Shopify stores.

## Color Palette
- **Cream Surface** `#F7F2EC` — main page background, warm off-white
- **Soft Sand** `#EFE6D9` — alt section, card hover
- **Espresso** `#1F1A14` — primary text, dark sections, footer
- **Mocha** `#5A4A3A` — secondary text on cream
- **Taupe** `#C9B89E` — hairlines, dividers, muted UI
- **Gold** `#B8915A` — primary accent: CTAs, links, active states, price highlights
- **Gold Hover** `#A47A48` — slightly darker on hover
- **Champagne** `#D4B98C` — secondary metallic highlight, subtle accents

## Typography
- **Headings & Editorial**: `Cormorant Garamond` (serif, weight 300/400/500, italic 400). Generous tracking for display sizes, slightly tighter for subheadings.
- **Product Names & UI Eyebrow**: `Cormorant Garamond` UPPERCASE, `letter-spacing: 0.18em`–`0.24em`, weight 400–500.
- **Body & UI**: `Inter` (sans-serif, 300/400/500/600). Default weight 400, weight 500 for buttons, weight 600 sparingly.
- **Editorial Captions**: Cormorant Garamond italic, 18–22px.

## Spacing & Layout
- Generous whitespace. Page max-width `1440px` with 24–48px side padding (40px+ desktop).
- Section vertical rhythm: 96–160px (desktop), 64–96px (mobile).
- 8px base grid.

## Borders & Dividers
- Hairline dividers: `1px solid #C9B89E` with `0.3` opacity (or `border-color: #E5DCC8`).
- No harsh rectangular corners on product imagery. Use `rounded-sm` (2px) on cards or none at all.
- Buttons: NO large rounded corners. Use `rounded-none` or very subtle 2px radius.

## Buttons
- **Primary (Solid Gold)**: `bg-[#B8915A] text-white hover:bg-[#A47A48]`, padding `14px 32px`, `tracking-[0.18em]`, `UPPERCASE`, no border-radius.
- **Outlined**: `border border-espresso text-espresso hover:bg-espresso hover:text-cream`. Same tracking.
- **Link/Underline**: Editorial `Cormorant italic` with thin underline that expands on hover.

## Imagery
- Warm-lit jewelry on neutral/dark backgrounds.
- Product cards: aspect `3x4` portrait, soft inner shadow possible.
- Hero: full-bleed, large display.
- Subtle duotone/vignette possible via overlay gradients.

## Iconography
- `lucide-react` thin lines. Stroke width 1.5. Size 18–22px in nav, 16–20 in UI.

## Motion
- 200–400ms transitions, ease-out. Subtle — never bouncy. Hover lift `translateY(-2px)` with shadow.
- Cart drawer: 320ms cubic-bezier(0.22, 0.61, 0.36, 1).
- Fade-in on scroll for editorial sections (IntersectionObserver).

## Do's
- Generous whitespace
- Use serif for emotion
- Show product photography large
- Hairlines, not boxes
- Gold accents only when meaningful

## Don'ts
- No bright reds, blues, or "sale" colors
- No rounded "Shopify pill" buttons
- No neon, no gradients (except subtle dark→clear vignettes)
- No emojis in UI
- No placeholder text like "Lorem"
- No more than one accent color visible at a time
