# Velmora Fine Jewelry — Visual Design System

## Brand Mood
Quiet luxury, warm, editorial. Premium demi-fine jewelry — never loud, never discount-looking.
Reference: Mejuri, Aurate, VRAI, Soho House editorial.

## Color Palette (commit fully — do not deviate)
- `espresso` `#1A1410` — primary deep base, hero, footer, dark sections (warm, not pure black; flatters gold)
- `cocoa` `#2A1F18` — secondary deep base, cards on dark
- `cream` `#F5EFE6` — primary light surface, body sections
- `ivory` `#FAF6F0` — lightest surface, subtle alt sections
- `blush` `#EFE3D3` — warm beige alt background
- `champagne` `#C9A876` — primary accent (warm muted gold, used sparingly for CTAs, links, dividers on hover)
- `champagne-deep` `#A88B5C` — accent hover/active
- `gold-metallic` `linear-gradient(135deg, #E8C892 0%, #C9A876 50%, #A88B5C 100%)` — metallic feel for special marks only
- `ink` `#2A1F18` — primary body text on light
- `ink-soft` `#5C4A3E` — secondary text on light
- `mute` `#8A7E72` — tertiary/disabled on light
- `bone` `#F5EFE6` — primary text on dark
- `bone-soft` `#C9BFB1` — secondary text on dark
- `hairline-light` `rgba(42, 31, 24, 0.12)` — dividers on cream
- `hairline-dark` `rgba(245, 239, 230, 0.16)` — dividers on espresso

## Typography
- **Headings / product names (display)**: Cormorant Garamond — serif, editorial, elegant
  - Sizes: `text-5xl` (hero), `text-4xl` (section h), `text-3xl` (card h), `text-2xl` (small)
  - Always use `font-light` or `font-normal` weight — never bold for serif (looks cheap)
  - Tight leading: `leading-tight` to `leading-[1.1]`
- **Product card names (UI micro)**: Inter, UPPERCASE, `tracking-[0.18em]`, `text-[11px]` or `text-xs`, `font-medium`
- **Body / UI**: Inter — `font-normal`, `text-base` (16px) or `text-sm` (14px), `leading-relaxed`
- **Eyebrow / labels**: Inter UPPERCASE `tracking-[0.25em]`, `text-[10px]`, `font-medium`, `text-ink-soft` or `text-bone-soft`

## Spacing
- Sections: `py-20 md:py-32` (80–128px vertical breathing room)
- Container: `max-w-[1440px] mx-auto px-6 md:px-10`
- Grid gap: `gap-6 md:gap-10` (24–40px)
- Card padding: `p-6 md:p-8`

## Visual Elements
- **Hairline dividers**: 1px solid hairline-light or hairline-dark. No thick rules.
- **Buttons (primary)**: solid `bg-espresso` text-cream, hovers to `bg-cocoa`. No drop shadow. Optional thin champagne underline accent on hover.
- **Buttons (accent)**: `bg-champagne` text-espresso, hover `bg-champagne-deep`. For hero CTA and "Add to Cart".
- **Buttons (ghost)**: 1px border `border-ink`, transparent bg, hover fills `bg-ink` text-cream.
- **Inputs**: 1px hairline border, no rounded corners (use `rounded-none`), focus ring uses champagne.
- **Shadows**: avoid heavy shadows. Use only `shadow-[0_1px_2px_rgba(0,0,0,0.04)]` if needed.
- **Hover transitions**: `transition-colors duration-300 ease-out` for color, `transition-transform duration-500 ease-out` for image swaps.
- **Image hover**: subtle scale `group-hover:scale-[1.03]` with overflow hidden on parent.
- **Corners**: `rounded-none` everywhere for editorial feel. Exception: small chips/badges may use `rounded-full`.

## Do's
- Generous whitespace
- Large editorial imagery (full-bleed hero)
- Thin 1px dividers, no thick borders
- Champagne accent used sparingly
- UPPERCASE tracking-wide for product names
- Serif headlines; never bold serif
- Smooth 300–500ms transitions

## Don'ts
- No bright primaries (no red, no neon)
- No rounded-2xl blobs
- No drop shadows on cards
- No bold weights on serif
- No emoji icons; use Lucide line icons at `strokeWidth={1.25}`
- No "discount" red sale tags or strikethroughs
- No busy multi-color gradients
