# Velmora Fine Jewelry — Design System

## Mood
Quiet luxury, warm, editorial. Premium demi-fine gold jewelry. NOT loud, NOT discount-looking, NOT generic e-commerce. Generous whitespace, large editorial imagery, thin hairline dividers, restrained accent color.

## Color Palette
- **Base / ink**: deep espresso `#1c1714` (text, dark sections). Scale `ink-50` (cream) → `ink-900`.
- **Background**: warm ivory `#f7f4f1` (cream), soft sand `#efe7dc`, blush `#f3e9e0`.
- **Accent / gold**: `#b08d57` (primary accent), `gold-light #c9a877`, `gold-dark #8a6d3f`, `gold-soft #e8d9bf`.
- Use gold sparingly — buttons, links, small accents, hairline highlights. Dark sections use `ink-800/900` with cream text.

## Typography
- **Headings & product names**: Cormorant Garamond (serif), weight 500.
- **Body & UI**: Manrope (sans), weight 400/500.
- Product names: UPPERCASE with wide letter-spacing (`tracking-widest2` / `tracking-[0.2em]`).
- Eyebrow labels: UPPERCASE, `text-xs`, `tracking-widest3`, gold or muted ink.

## Spacing & Layout
- Generous vertical padding: sections `py-20 md:py-28`.
- Container: `max-w-7xl mx-auto px-5 md:px-8`.
- Hairline dividers: `border-t border-ink-200/40` or `.hairline`.

## Buttons
- **Primary (accent)**: solid `bg-ink-800 text-cream` or `bg-gold text-white`, uppercase, tracking-wide, `px-8 py-3.5`, hover slightly darker, soft transition.
- **Outlined**: `border border-ink-300 text-ink-800`, hover fills.
- Rounded: `rounded-none` or `rounded-sm` for editorial feel (sharp/premium). Use `rounded-full` only for pills/variant selectors.

## Imagery
- Warm gold jewelry on dark/neutral backgrounds. Large editorial hero. 9:16 vertical reels. Square-ish product cards (4:5).

## Do's
- Keep contrast strong: cream text on ink, ink text on cream.
- Use serif for emotional/editorial moments, sans for utility.
- Subtle hover transitions (`transition-smooth`, 300–500ms).

## Don'ts
- No bright/saturated colors. No drop shadows on text. No rounded-2xl chunky cards.
- No low-contrast muted text on light backgrounds without explicit readable color.
- No hardcoded hex outside tailwind config tokens.
