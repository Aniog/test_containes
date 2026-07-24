# Velmora — Design Direction

## Mood
Quiet luxury, warm, editorial. Premium demi-fine jewelry — not loud, not discount-looking, not generic e-commerce. The page should feel like opening a fashion magazine: confident, restrained, beautifully lit.

## Color Palette (commit fully — no other accent colors)
- **bone** `#F5F0E8` — primary warm off-white surface
- **cream** `#FAF6EF` — secondary surface (cards, sections)
- **ink** `#1F1A14` — primary text, deep warm near-black (never pure #000)
- **cocoa** `#6B5C4F` — secondary text
- **gold** `#B08A4A` — primary accent (warm brushed gold, not brassy)
- **gold-deep** `#8A6A35` — hover/active accent
- **gold-light** `#D9B97A` — soft highlight
- **rose** `#C9A38A` — soft blush, used sparingly (UGC cards)

Contrast: ink on bone ≈ 14:1 (AAA). All UI text must be on bone/cream/ink, never on a transparent background where contrast is uncertain.

## Typography
- **Headings, product names, hero, section titles**: `Cormorant Garamond` (serif). Use light/regular weights for headlines (300–400), regular for body accents.
- **UI, body, buttons, captions, prices**: `Inter` (sans-serif).
- Product names: **UPPERCASE, letter-spacing 0.18em (tracking-wide-3)**.
- Section titles (small caps style): UPPERCASE, letter-spacing 0.25em (tracking-wide-4), 11–12px, font-weight 500.

## Layout Principles
- Generous whitespace. Section padding: 80–120px vertical on desktop, 56–72px on mobile.
- Hairline dividers: `1px solid rgba(31, 26, 20, 0.12)`. Never use thick borders.
- Max content width: ~1440px. Max text width: 65ch.
- Mobile-first. Single column on mobile, multi-column on `md:`.

## Buttons
- **Primary**: solid `ink` background, `bone` text, uppercase, letter-spacing 0.18em, 11–12px, padding 16px 32px. Hover: subtle background lightening or hairline gold underline. Subtle 200ms ease.
- **Secondary / ghost**: transparent background, 1px solid `ink`, ink text. Hover: ink fill, bone text.
- **Pill (variants)**: hairline border, uppercase label, 11px. Active: ink fill, bone text.
- All buttons: no border-radius larger than 2px (premium, not pillowy). Use `rounded-none` or `rounded-sm`.

## Imagery
- Warm gold jewelry on warm dark/cream backgrounds.
- All product imagery is provided as bespoke SVG illustrations (see `src/components/decor`) to look intentional and on-brand even before real photography is supplied.
- A single subtle drop shadow on product cards, never a hard outline.

## Motion
- Hover transitions: 300–500ms, `cubic-bezier(0.22, 1, 0.36, 1)`.
- Reveal on scroll: opacity + 16px translateY, 700–900ms.
- Cart drawer: 350ms slide-in from right.
- No bouncing, no spinning, no glitter. Quiet and confident.

## Do
- Use Cormorant Garamond for any "moment" copy: hero, section titles, product names, story copy.
- Use Inter for any "work" copy: nav links, buttons, prices, form fields, captions.
- Pair `bone` background with `ink` text by default. Use `ink` background with `bone` text only for hero, footer, and the editorial split section.

## Don't
- No bright primary colors (red, blue, green). Only the gold/blush accents.
- No emoji in copy.
- No "SALE" or "%" off badges — undermines premium positioning.
- No drop shadows heavier than `shadow-soft`. Avoid hard outlines.
- No italic on body copy. Italic only for editorial pull-quotes in serif.
- No more than one accent color per section.
