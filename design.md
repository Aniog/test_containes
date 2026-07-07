# Velmora Fine Jewelry — Design System

## Mood
Quiet luxury, warm, editorial. Premium demi-fine gold jewelry. NOT loud, NOT discount-looking, NOT generic e-commerce.

## Color Palette
- **Base / Ink** (warm espresso-charcoal): `ink-900 #13100b` → `ink-50 #f6f4f1`. Used for text, dark sections, footer.
- **Accent / Gold** (warm metallic): `gold-500 #c08f2a` primary accent, `gold-400 #d4a843` highlights, `gold-700 #7e5818` deep. Used for CTAs, hairlines, hover states, price.
- **Neutral / Cream** (editorial): `cream-50 #fdfcfa` page background, `cream-100 #faf7f2`, `cream-200 #f3ede3` cards/sections.
- Page background: `cream-50`. Text: `ink-800`. Muted text: `ink-500`.

## Typography
- **Headings & product names**: Cormorant Garamond (serif). Product names UPPERCASE with `tracking-widest2` (0.25em) letter-spacing.
- **Body & UI**: Inter (sans-serif). Labels/buttons uppercase, `tracking-widest2`, `text-xs`/`text-sm`.
- Hero headline: serif, large, `font-light`/`font-normal`, generous line-height.

## Spacing & Layout
- Generous whitespace. Section padding `py-20 md:py-28`.
- Max content width `max-w-7xl mx-auto px-6 md:px-10`.
- Thin hairline dividers: `border-ink-200/40` or `border-ink-800/20` on dark.

## Components
- **Buttons**: solid gold (`bg-gold-500 text-cream-50 hover:bg-gold-600`) or outlined (`border border-ink-800 text-ink-800 hover:bg-ink-800 hover:text-cream-50`). Rounded-none or rounded-sm. Uppercase, tracking-widest, text-xs/sm, py-3 px-8.
- **Cards**: `bg-cream-50`, subtle hover lift, image hover reveals second image. Soft shadow on hover only.
- **Pills (variant selector)**: `border border-ink-300`, active = `border-gold-500 bg-gold-50 text-ink-900`.

## Do's
- Use serif for all headings and product names.
- Keep accent gold restrained — CTAs, prices, hairlines, small details.
- Strong contrast: dark text on cream, cream text on ink.
- Subtle transitions (duration-300, ease-out).

## Don'ts
- No bright/saturated colors. No pure black or pure white.
- No rounded-full buttons. No heavy shadows. No gradients except subtle.
- No generic e-commerce clutter.
