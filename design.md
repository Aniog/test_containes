# Velmora Fine Jewelry — Visual Style

Mood: quiet luxury, warm, editorial. Premium demi-fine jewelry. Never loud, never discount-looking, never generic e-commerce.

## Color palette (one confident direction: warm ivory base + deep espresso + burnished gold)

All colors are registered as named Tailwind colors in `tailwind.config.js`. Never use raw hex codes in class strings.

- `ivory` (#FAF7F2) — primary page background. Warm, soft, editorial.
- `cream` (#F3EDE3) — alternating section background, subtle fills.
- `sand` (#E9E0D2) — deeper neutral fill, image placeholder tones, hover states.
- `espresso` (#2B2118) — primary text, footer background, solid buttons. Deep warm brown, softer than pure black.
- `cocoa` (#6B5D4F) — secondary text, muted labels. Always on light backgrounds.
- `bronze` (#A97B2F) — primary accent: CTAs, star ratings, active states, thin rules. Burnished antique gold (accessible on ivory).
- `gold-soft` (#C9A227) — brighter gold used ONLY for small decorative details on dark backgrounds (e.g. footer accents), never for body text on light.
- `line` (#E3DACB) — hairline dividers and borders.
- On `espresso` surfaces, text is `ivory` / `sand`-toned (`#D8CDBC`).

## Typography

- Headings, logo, product names: **Cormorant Garamond** (serif), loaded in `index.html`. Tailwind: `font-serif`.
- Body and UI: **Inter** (sans-serif). Tailwind: `font-sans`.
- Product names and kickers: UPPERCASE with wide tracking (`tracking-[0.18em]`–`tracking-[0.3em]`).
- Section kickers: `text-xs uppercase tracking-[0.3em] text-bronze`.
- Headline sizes: hero `text-5xl md:text-7xl`, section titles `text-3xl md:text-5xl`, serif with `leading-[1.05]`.

## Spacing & layout

- Generous whitespace: sections use `py-20 md:py-28`.
- Content container: `mx-auto max-w-7xl px-5 md:px-10`.
- Hairline dividers: `border-t border-line` (1px, warm).
- Cards: no heavy shadows. Soft `shadow-[0_18px_40px_-24px_rgba(43,33,24,0.35)]` on hover only.

## Buttons

- Primary: solid `bg-espresso text-ivory` OR `bg-bronze text-ivory`, `uppercase tracking-[0.2em] text-xs`, generous padding `px-8 py-4`, no rounded corners (`rounded-none`), hover deepens.
- Secondary: outlined `border border-espresso text-espresso`, hover fills.
- On dark surfaces: outlined `border-ivory/60 text-ivory`.

## Motion

- Subtle only: `transition-all duration-500` on hovers; images `scale-[1.03]` on card hover; fade-up reveal on scroll (`animate-[fadeUp_0.7s_ease_both]` via utility class `reveal`).
- No bouncy easing, no parallax gimmicks.

## Do / Don't

- Do: large editorial imagery, thin dividers, single accent color used sparingly, uppercase serif product names.
- Don't: bright saturated colors, gradients, pill-shaped buttons, discount badges in red, heavy drop shadows, more than 2 font families.
