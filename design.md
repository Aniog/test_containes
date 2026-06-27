# Velmora Fine Jewelry — Visual Design System

## Brand essence
Quiet luxury. Warm, editorial, premium demi-fine jewelry. Restrained, considered, never loud or discount-looking. Pieces are treasures — the site should feel like opening a velvet jewelry box.

## Color palette (commit to ONE direction: warm ivory + antique gold + deep cocoa)
Use these named tokens only. Never hardcode hex in components — reference `bg-ivory`, `text-cocoa`, etc.

| Token | Hex | Role | Use |
|---|---|---|---|
| `ivory` | `#F8F3EB` | Primary light background | Page canvas, product card surfaces |
| `cream` | `#EFE7DA` | Slightly deeper light | Section dividers, card hover surfaces |
| `gold` | `#B68B4A` | Primary accent (antique gold) | CTAs, active states, dividers on dark, hover underlines |
| `gold-light` | `#D4B481` | Soft champagne | Hover gold, subtle accents |
| `gold-deep` | `#8C6A33` | Pressed gold | Button hover backgrounds |
| `cocoa` | `#1A1410` | Deep warm near-black | Dark sections, hero, footer, text on light |
| `cocoa-soft` | `#2A211B` | Slightly lifted dark | Card on dark, dividers on dark |
| `ink` | `#1F1A15` | Primary text on light | Body, headings on light |
| `ink-muted` | `#6B5F4F` | Secondary text on light | Captions, helper, metadata |
| `bone` | `#F2EAD8` | Primary text on dark | Body, headings on dark |
| `bone-muted` | `#A89A82` | Secondary text on dark | Captions, helper on dark |
| `hairline` | `#D9CFBD` | Hairline on light | 1px dividers on light |
| `hairline-dark` | `#3A2F25` | Hairline on dark | 1px dividers on dark |
| `surface` | `#FBF8F2` | Brightest canvas | Hero overlays, very light cards |

Rules:
- Never use pure white (`#FFFFFF`) or pure black (`#000000`). Always use ivory / bone / cocoa / ink.
- Never combine gold text on ivory background (low contrast). Use `cocoa` for body text on ivory.
- For the "premium" feel, lean on `cocoa` for text and `ivory`/`surface` for backgrounds in light sections; invert for hero/footer.

## Typography

| Role | Family | Weight | Tracking | Example |
|---|---|---|---|---|
| Display / hero headlines | Cormorant Garamond | 400 (regular) | tight | `font-serif font-normal text-6xl leading-[1.05]` |
| Section headlines | Cormorant Garamond | 400 | tight | `font-serif text-4xl md:text-5xl` |
| Product name | Cormorant Garamond | 500 | wider, UPPERCASE | `font-serif uppercase tracking-[0.18em] text-lg` |
| Eyebrow / overline | Inter | 500 | widest, UPPERCASE, small | `text-[11px] uppercase tracking-[0.32em] font-medium` |
| Body | Inter | 400 | normal | `text-sm md:text-base leading-relaxed` |
| Button label | Inter | 500 | wider UPPERCASE | `text-xs uppercase tracking-[0.22em] font-medium` |
| Caption | Inter | 400 | normal | `text-xs` |

Font loading: Google Fonts — Cormorant Garamond (300, 400, 500, 600) + Inter (300, 400, 500, 600, 700).

## Spacing & layout
- Generous whitespace. Section vertical padding: `py-20 md:py-32` (80–128px).
- Container: `max-w-[1280px] mx-auto px-6 md:px-10`.
- Grid gaps for product grids: `gap-8 md:gap-10`.
- Editorial split: 5/7 or 7/5 image/text columns on `md:`; stack on mobile.
- Never use a sidebar layout for content-heavy sections; sidebars only for filters (Shop page) or as decorative offset images.

## Hairlines & dividers
- `border-hairline` (on light) / `border-hairline-dark` (on dark) for 1px section dividers.
- Decorative section dividers: short 40-60px gold line `bg-gold h-px w-12`.
- Avoid heavy borders. Always `border-hairline` (1px) on cards.

## Buttons
Two main variants, both premium feel:

1. **Primary (gold solid)** — `bg-gold text-cocoa hover:bg-gold-deep hover:text-ivory`. 
   - Shape: `h-12 px-8 rounded-none text-xs uppercase tracking-[0.22em] font-medium transition-colors duration-300`.
   - Used for primary CTAs (Add to Cart, Shop the Collection, Subscribe).
2. **Secondary (outline on dark / ghost on light)** — `border border-current text-current hover:bg-current hover:text-cocoa` (or inverse).
   - Same height/letter-spacing.

3. **Quiet text link** — `underline underline-offset-4 decoration-1 hover:text-gold transition-colors`. Used for "Our Story", "View all".

Do NOT use:
- Rounded buttons (always `rounded-none`).
- Drop shadows on buttons.
- Colorful or bright CTAs.

## Cards & images
- Product cards: no visible border by default. Image fills card; on hover, fade to second image and reveal a small "Quick Add" pill on the bottom-right.
- Card image aspect: `aspect-[3/4]` for product (portrait).
- Category tiles: `aspect-[4/5]`. Image darkens to ~60% on hover while a centered serif label fades in.
- UGC reel cards: `aspect-[9/16]` vertical.
- Brand story image: `aspect-[4/5]` on desktop, `aspect-[4/5]` on mobile too (no extreme crops).
- Hero image: full-bleed, `aspect-[16/9]` desktop, `aspect-[4/5]` mobile, with dark gradient overlay.

## Shadows & depth
- Use sparingly. Soft shadow on product card hover: `shadow-[0_24px_60px_-30px_rgba(26,20,16,0.35)]`.
- Floating elements (cart drawer, sticky header after scroll) get `shadow-[0_8px_30px_-12px_rgba(26,20,16,0.18)]`.
- No drop shadows on text or icons.

## Motion
- Default transition: `transition-colors duration-300 ease-out` for hover states.
- Image crossfade on product card: `duration-500 ease-out`.
- Cart drawer slide: `duration-400 ease-out`.
- Subtle fade-in on scroll for sections: opacity 0→1, translateY 12px→0, 600ms.
- Never use bouncy/spring easings. Never use rotation on hovers.

## Icons
- Lucide React. Stroke width 1.25 for premium feel. Size 18 for nav, 16 for inline.
- Color: `currentColor` — inherit text color.

## Backgrounds
- Light sections: `bg-ivory` (or `bg-surface` for slightly brighter).
- Dark/moody sections (hero, UGC overlay areas, footer, newsletter): `bg-cocoa`.
- Accent block (newsletter): `bg-gold text-cocoa`.

## Newsletter accent block
- Full-width, `bg-gold text-cocoa`, with email input on the right.
- Input: no border, just underline on the input. Button: solid `bg-cocoa text-bone` inverted.

## Cart drawer (Sheet)
- Slides from right, full-height, `w-full sm:max-w-md`.
- Background `bg-ivory`, header `border-b border-hairline`.
- Item rows: 80px square image + name + qty stepper + price.
- Footer: subtotal + "Checkout" primary button.

## Do's
- Use `font-serif` for all product names and headlines.
- Use UPPERCASE + wide tracking for product names, eyebrows, button labels.
- Keep one accent (gold) per viewport in dominant use; never compete with it.
- Pair warm text colors (never pure neutral grays).
- Generous whitespace, never cram.
- Mobile-first, always check at 375px.

## Don'ts
- No emojis, no bright red sale tags, no "🔥" badges.
- No bright colors, no neon, no gradients other than dark-to-transparent on hero image.
- No "Buy 1 get 1 free" / "Huge Sale" / percentage off badges — this brand does not discount.
- No bouncy animations, no rotation, no scale > 1.02.
- No drop shadows on text.
- No `rounded-2xl` or large rounded corners on cards (use `rounded-none` or `rounded-sm`).
- No pure white or pure black backgrounds.
