# Velmora Fine Jewelry — Design System

## Mood
Quiet luxury. Warm, editorial, unhurried. Premium demi-fine jewelry — never loud, never discount-looking, never generic e-commerce. Generous whitespace, hairline dividers, large serif headlines, restrained gold accent.

## Color Palette (named Tailwind colors — no magic hex codes in markup)

| Token | Hex | Usage |
|---|---|---|
| `ink` | #211A14 | Primary text, footer background, dark surfaces |
| `ink-soft` | #4A4036 | Secondary text |
| `espresso` | #33281F | Alt dark sections |
| `cream` | #FAF6EF | Primary page background |
| `sand` | #F1E9DC | Alt section background, filter sidebar |
| `stone` | #E4D9C6 | Borders, hairline dividers |
| `taupe` | #8A7A66 | Muted captions, metadata |
| `gold` | #A67C37 | Primary accent: buttons, links on hover, active states |
| `gold-deep` | #8A6728 | Accent hover |
| `gold-tint` | #EAE0CC | Subtle accent backgrounds, badges |

Contrast: `ink` on `cream` = ~14:1 (AAA). `gold-deep` on `cream` = ~4.6:1 (AA for large/bold). Body text always `ink` or `ink-soft`, never lighter than `taupe` (4.5:1 on cream).

## Typography
- **Serif (headings, product names, prices, logo):** Cormorant Garamond (`font-serif`), weights 400–600.
- **Sans (body, UI, buttons, nav):** Manrope (`font-sans`), weights 400–600.
- Product names: UPPERCASE, tracking-[0.18em]–tracking-[0.22em], serif, weight 500.
- Eyebrow labels: sans, uppercase, text-[11px], tracking-[0.28em], `text-taupe` or `text-gold`.
- Body: 15–16px, leading-relaxed (1.7), `text-ink-soft`.
- Hero headline: text-5xl → md:text-7xl, serif, weight 400–500, tight leading.
- Section headlines: text-3xl → md:text-4xl, serif, weight 500.

## Spacing & Layout
- Container: `max-w-7xl mx-auto px-5 sm:px-8 lg:px-12`.
- Section padding: `py-16 md:py-24 lg:py-28`.
- Grid gaps: `gap-6 md:gap-8`.
- Generous internal whitespace: cards breathe, no cramped rows.

## Surfaces & Dividers
- Hairline dividers: `border-t border-stone` (1px, warm neutral).
- Cards: no heavy borders; images on `sand` background, text below on `cream`.
- Shadows: soft only — `shadow-[0_20px_50px_-20px_rgba(33,26,20,0.25)]` for drawers/modals; products use no shadow, rely on whitespace.

## Buttons
- **Primary (accent):** solid `bg-gold`, `text-cream`, uppercase sans text-[12px] tracking-[0.2em], px-8 py-4, hover `bg-gold-deep`, transition-colors duration-300. No rounded corners (sharp, editorial) or at most rounded-none.
- **Secondary (outline):** `border border-ink text-ink`, transparent bg, hover `bg-ink text-cream`.
- **Ghost/link:** underline offset-4, `decoration-gold`, hover `text-gold`.
- Focus states: `focus-visible:ring-1 focus-visible:ring-gold focus-visible:ring-offset-2`.

## Motion
- Transitions: 300–500ms, ease-out. `transition-all duration-500 ease-out`.
- Hover on product cards: second image fades in (opacity 0→100, duration-700), image scales subtly (scale-105).
- Reveal on scroll: fade + translate-y-4 → 0.
- Nothing bounces. Nothing fast. Calm.

## Imagery
- Warm-lit gold jewelry, dark/neutral backgrounds, editorial close-ups.
- Product images: ratio 4x5-ish (use 3x4), centered on `sand` backdrop.
- Hero: full-bleed background image, dark gradient overlay bottom for text legibility.
- UGC row: vertical 9x16 cards.

## Do's / Don'ts
- DO use hairlines and whitespace to separate, not boxes.
- DO keep accent gold restrained — buttons, stars, small labels only.
- DO keep all text high-contrast: ink on cream, cream on ink/espresso.
- DON'T use pure black (#000) or pure white (#fff) — warm the palette.
- DON'T use sale badges, red, or loud promotional colors.
- DON'T stack single-column on desktop; multi-column grids on md+.
- DON'T use rounded-full pills except small variant swatches.
