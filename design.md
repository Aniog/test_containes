# Velmora Fine Jewelry — Design System

## Mood
Quiet luxury, warm, editorial. Demi-fine gold jewelry brand. NOT loud, NOT discount, NOT generic e-commerce. Think: Mejuri × Aurate × COS Editorial. Generous whitespace, restrained color, large editorial imagery, precise typography.

## Color Palette
A warm editorial neutral scheme with gold metallic accent.

- **Ivory** `#F7F3EC` — page background, cards. Tailwind: `bg-ivory`
- **Cream** `#EFE8DC` — secondary surfaces, hover. Tailwind: `bg-cream`
- **Stone** `#D9CFBE` — hairline dividers, muted surfaces. Tailwind: `bg-stone-warm` / `border-stone-warm`
- **Espresso** `#1F1A14` — primary text, dark surfaces, footer. Tailwind: `bg-espresso text-espresso`
- **Charcoal** `#3A332A` — secondary text on light, hovers
- **Mocha** `#6B5E4D` — muted/body text, captions
- **Gold** `#B8956A` — primary accent (buttons, links, prices). Tailwind: `text-gold bg-gold`
- **Gold-deep** `#8E6F44` — gold hover/active state
- **Champagne** `#E6D2B5` — soft gold tint (newsletter block, badges)

### Contrast rules
- Body text on Ivory: use `text-charcoal` (#3A332A) or `text-espresso`. Never `text-mocha` for body copy — only labels/captions.
- White text on Espresso surfaces. Gold text only on dark or ivory, never on cream.
- Buttons: solid `bg-espresso text-ivory` (primary) OR outline `border-espresso text-espresso` (secondary). Accent CTA: `bg-gold text-espresso` for special moments only.

## Typography
- **Headings & product names**: Cormorant Garamond (serif). Loaded via Google Fonts.
- **Body & UI**: Inter (sans-serif).
- **Product names**: ALWAYS uppercase, `tracking-[0.2em]`, serif, normal/medium weight.
- **Section headlines**: serif, light/regular, large (text-4xl → text-6xl), tight leading.
- **Eyebrow labels**: Inter, uppercase, `text-xs tracking-[0.3em]` muted.

### Type scale
- Hero headline: `text-5xl md:text-7xl font-serif font-light leading-[1.05]`
- Section H2: `text-3xl md:text-5xl font-serif font-light`
- Product name: `text-sm md:text-base font-serif uppercase tracking-[0.2em]`
- Body: `text-base font-sans text-charcoal leading-relaxed`
- Caption: `text-xs font-sans uppercase tracking-[0.25em] text-mocha`

## Layout
- Max content width `max-w-7xl` for grids; full-bleed for hero.
- Generous vertical rhythm: section padding `py-20 md:py-32`.
- Hairline dividers: `border-t border-stone-warm/60`.
- Grid gaps: product grid `gap-6 md:gap-10`.

## Components
- **Buttons**: pill-less, slightly rectangular, `px-8 py-3.5`, no rounded-full. Use `rounded-none` for editorial feel, OR very subtle `rounded-sm`. Smooth `transition-all duration-300`.
- **Cards**: no heavy shadow. Subtle hover lift: `hover:-translate-y-0.5`, image `group-hover:scale-105 transition-transform duration-700`.
- **Inputs**: borderless underline OR thin `border border-stone-warm`, `bg-transparent`, `focus:border-espresso`.
- **Hover transitions**: `duration-300` UI, `duration-500-700` images.

## Do
- Use a lot of whitespace.
- Pair serif + sans for elegant contrast.
- Show product names in uppercase wide-spacing.
- Use thin hairline rules between sections.
- Hover on product cards reveals second image (cross-fade).
- Soft serif italic captions over UGC reels.

## Don't
- No bright primary colors, no neon, no purple/blue.
- No pill-shaped overly-rounded buttons.
- No drop shadows that feel cheap (`shadow-2xl` everywhere).
- No discount badges, no "SALE" stickers, no countdown timers.
- No gradient backgrounds.
- No emoji in copy.
- No sans-serif headlines.

## Spacing tokens
- Section: `py-20 md:py-32`
- Section inner: `px-6 md:px-10`
- Card padding: `p-6`
- Button: `px-8 py-3.5`
