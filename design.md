# Velmora Fine Jewelry — Visual Design System

A quiet-luxury, warm editorial palette for a demi-fine gold jewelry storefront. Imagery is the hero; the UI stays restrained, generous, and timeless.

## Palette (committed)

Named colors (added to Tailwind theme via `@theme` in `index.css`):

- `ivory`   `#F7F3EC` — primary page background (warm off-white)
- `bone`    `#EFE8DC` — secondary surface / soft cards
- `onyx`    `#1C1A17` — text on light, footer / dark sections
- `espresso` `#2A2622` — primary body text on light
- `taupe`   `#857B6E` — muted text, helper copy
- `hairline` `#E8E0D2` — thin dividers, input borders
- `gold`    `#B8935A` — primary accent (warm metallic gold)
- `gold-deep` `#9A7A45` — accent hover / pressed
- `champagne` `#D4B585` — accent on dark surfaces

Do:
- Use `bg-ivory text-espresso` for default page surface.
- Use `bg-onyx text-ivory` for footer + dark editorial blocks.
- Use `text-gold` and `border-gold` for primary CTAs and key accents only.
- Use `border-hairline` for dividers and input borders.

Don't:
- Never put body text on gold backgrounds — use onyx or ivory inverse.
- Never use pure black (`#000`) — always `onyx` / `espresso`.
- No rainbow gradients, no shiny CSS gradients. One restrained accent only.

## Typography

Loaded via Google Fonts in `index.html`:

- Headings + product names: **Cormorant Garamond** (300, 400, 500, 600)
- Body + UI: **Inter** (300, 400, 500, 600, 700)

Type classes:
- Display / hero headline: `font-serif font-light text-5xl md:text-7xl tracking-tight leading-[1.05]`
- Section headline: `font-serif font-light text-3xl md:text-5xl tracking-tight`
- Eyebrow / small caps label: `font-sans uppercase tracking-[0.28em] text-xs text-taupe`
- Product name: `font-serif uppercase tracking-[0.18em] text-sm md:text-base`
- Body: `font-sans text-base text-espresso/85 leading-relaxed`
- Price: `font-sans tracking-wide text-sm md:text-base text-espresso`

Do: use serif for emotional headlines, sans for UI/buttons/forms.
Don't: bold serifs (keep serif at 300–500 weight, never 700+).

## Spacing & layout

- Container max width: `max-w-[1280px]` with `px-6 md:px-10`.
- Section vertical padding: `py-20 md:py-28`.
- Generous whitespace between sections; let imagery breathe.
- Grid gaps: `gap-6 md:gap-10` for product grids.
- Hairline dividers (`border-hairline`) replace heavy borders.

## Components

Buttons:
- Primary: `bg-onyx text-ivory hover:bg-espresso px-7 py-3.5 text-xs uppercase tracking-[0.22em] font-sans`
- Accent: `bg-gold text-onyx hover:bg-gold-deep hover:text-ivory ...`
- Outline: `border border-onyx text-onyx hover:bg-onyx hover:text-ivory ...`
- Transitions: `transition-colors duration-300 ease-out`
- No rounded corners > `rounded-none` or very subtle `rounded-sm` only.

Cards (product):
- No heavy shadows. Image on `bg-bone` with soft hover lift.
- Hover: swap to second image (opacity crossfade 400ms), reveal "Add to Cart" pill.

Inputs:
- `bg-transparent border-b border-hairline focus:border-onyx px-0 py-3` (editorial underline style)
- Or for the newsletter on dark: `bg-transparent border-b border-ivory/40 text-ivory placeholder:text-ivory/50`

Iconography: Lucide React, stroke 1.25–1.5, size 18–22px in nav.

## Motion
- All transitions `duration-300 ease-out`.
- Hover image swap fade 400ms.
- Sticky nav transitions background `bg-transparent` → `bg-ivory/95 backdrop-blur` on scroll.
- No bouncy, no flashy. Subtle only.

## Imagery
- Warm-lit gold jewelry on dark velvet, linen, or skin tones.
- Editorial close-ups, model shots, flat-lays.
- Use `data-strk-img` + `data-strk-bg` with contextual text references.
- Ratios: hero 16x9, product cards 3x4, category tiles 3x4, reels 9x16.

## Accessibility
- All text on ivory must be `espresso` or `onyx` (>= 7:1).
- Gold text only on onyx/espresso backgrounds. Never gold-on-ivory body text.
- Focus rings: `focus-visible:outline-2 focus-visible:outline-gold focus-visible:outline-offset-2`.
