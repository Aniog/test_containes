# Velmora Fine Jewelry — Design System

## Mood
Quiet luxury. Warm, editorial, refined. Premium demi-fine gold jewelry. Never loud, never discount-looking, never generic e-commerce. Generous whitespace, large imagery, hairline dividers, restrained accents.

## Color Palette (one direction: warm editorial ivory + deep espresso + gold)
All colors are named Tailwind tokens (configured in `tailwind.config.js`). Never hardcode hex values in class strings.

| Token | Hex | Usage |
|---|---|---|
| `ivory` | #F6F1E8 | Primary page background (warm ivory) |
| `cream` | #FCF9F3 | Card / raised surface background |
| `sand` | #EBE2D2 | Subtle alternate section background |
| `ink` | #1E1913 | Primary text, footer background (deep warm espresso) |
| `espresso` | #2B241C | Slightly softer dark surface |
| `gold` | #A98436 | Primary accent — CTAs, stars, active states, fine details |
| `gold-deep` | #8C6D2A | Accent hover state |
| `gold-soft` | #C9A961 | Secondary metallic accent, dividers on dark, badges |
| `bronze` | #6B5B3E | Muted warm text on light backgrounds (secondary copy) |
| `taupe` | #8A7E6B | Tertiary / meta text |
| `line` | #E2D9C8 | Hairline borders on light surfaces |
| `line-dark` | #453B2E | Hairline borders on dark surfaces |

Contrast rules:
- Body text on ivory/cream: `ink` or `bronze` only.
- Text on ink/espresso: `ivory`, `sand`, or `gold-soft`.
- Accent `gold` is used for buttons (with ivory/white text), icons, stars — never for long paragraphs on light backgrounds (use `gold-deep` for small accent text).

## Typography
- Headings, logo, product names: **Cormorant Garamond** (serif), loaded in `index.html`.
  - Tailwind: `font-serif`.
  - Product names: UPPERCASE with wide tracking: `uppercase tracking-[0.18em] text-sm`.
  - Hero/display headings: `font-serif font-medium`, large sizes, tight leading.
- Body, UI, buttons, prices: **Manrope**, `font-sans`.
- Eyebrow labels: `font-sans text-[11px] uppercase tracking-[0.3em] text-gold-deep`.
- Buttons: `text-[11px] font-semibold uppercase tracking-[0.25em]`.

## Spacing & Layout
- Page sections: `py-16 md:py-24`, container `max-w-7xl mx-auto px-5 md:px-8`.
- Generous vertical rhythm; never crowd cards.
- Hairline dividers: `border-t border-line` (light) or `border-line-dark` (dark).

## Components
- **Primary button**: solid gold — `bg-gold text-ivory hover:bg-gold-deep`, no radius (`rounded-none`), padding `px-8 py-4`, uppercase tracking.
- **Secondary button**: outlined — `border border-ink text-ink hover:bg-ink hover:text-ivory`, `rounded-none`.
- **On-dark button**: `border border-gold-soft text-gold-soft hover:bg-gold-soft hover:text-ink`.
- **Cards**: `bg-cream border border-line`, no shadow at rest; hover: soft shadow `shadow-[0_20px_50px_-24px_rgba(30,25,19,0.35)]` + image zoom.
- **Pills / variant selectors**: `rounded-full border border-line`, active: `border-gold bg-gold/10 text-ink`.
- **Inputs**: `bg-transparent border-b border-line focus:border-gold outline-none`, serif or sans per context.
- **Badges**: `bg-gold text-ivory text-[10px] uppercase tracking-[0.2em] px-2.5 py-1`.

## Motion
- Subtle only: `transition-all duration-300 ease-out`, image hover zoom `group-hover:scale-105 duration-700`.
- Fade/slide reveals via IntersectionObserver-based `Reveal` component (translate-y 6 → 0, opacity 0 → 1, 700ms).
- Cart drawer: slide-in from right, 400ms, with soft overlay.
- No bouncy/spring animations. Respect `prefers-reduced-motion`.

## Imagery
- Warm-lit gold jewelry on models, dark/neutral editorial backgrounds.
- Use the `data-strk-img` / `data-strk-bg` stock system with queries interpolated from nearby text IDs.
- Product images: 4x5-ish crops (`3x4` ratio), UGC reels `9x16`, hero `16x9`, categories `3x4`, story `4x3`.

## Do's
- Do keep lots of whitespace and thin dividers.
- Do use serif for anything emotional/brand; sans for functional UI.
- Do keep gold as a restrained accent (buttons, stars, fine rules, icons).
- Do ensure all text is clearly readable (ink on ivory, ivory on ink).

## Don'ts
- Don't use bright/saturated colors, gradients, or loud sale badges (one subtle "Bestseller" badge max).
- Don't use rounded corners on buttons/cards — sharp, editorial edges (pills excepted).
- Don't use heavy drop shadows — only the soft card hover shadow.
- Don't hardcode hex values or arbitrary pixel values in components.
