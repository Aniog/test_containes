# Velmora Fine Jewelry — Design System

## Brand Direction
Quiet luxury. Warm, editorial, premium-but-accessible. Inspired by high-end jewelry editorial photography — think Vogue, Net-a-Porter. NOT loud, NOT discount, NOT generic e-commerce.

## Color Palette

### Named Colors (defined in tailwind.config.js)
- `velmora-ink`: #1A1714 — Deep warm near-black. Primary text, nav background (solid state).
- `velmora-cream`: #FAF7F2 — Warm ivory. Primary page background.
- `velmora-gold`: #C9A96E — Warm antique gold. Primary accent. Buttons, highlights, borders.
- `velmora-gold-light`: #E8D5B0 — Pale gold. Hover states, subtle fills.
- `velmora-muted`: #8C7B6B — Warm taupe. Secondary text, captions, metadata.
- `velmora-stone`: #F0EBE3 — Warm light stone. Card backgrounds, section alternates.
- `velmora-charcoal`: #3D3530 — Dark warm brown. Subheadings, secondary dark text.

## Typography

### Fonts
- **Serif (headings, product names, editorial)**: Cormorant Garamond — loaded via Google Fonts
- **Sans-serif (body, UI, labels)**: Inter — loaded via Google Fonts

### Scale
- Hero headline: `font-cormorant text-6xl md:text-8xl font-light tracking-wide text-velmora-ink`
- Section heading: `font-cormorant text-4xl md:text-5xl font-light tracking-wide text-velmora-ink`
- Product name: `font-cormorant text-2xl font-medium tracking-[0.15em] uppercase text-velmora-ink`
- Body: `font-inter text-base text-velmora-charcoal leading-relaxed`
- Caption/label: `font-inter text-xs tracking-[0.12em] uppercase text-velmora-muted`
- Price: `font-inter text-lg font-medium text-velmora-ink`

## Spacing & Layout
- Max content width: `max-w-7xl mx-auto px-4 md:px-8 lg:px-12`
- Section vertical padding: `py-20 md:py-28`
- Card gap: `gap-6 md:gap-8`
- Generous whitespace is a design feature — do not crowd elements.

## Borders & Dividers
- Hairline dividers: `border-velmora-gold/20` or `border-velmora-muted/20`
- Card borders: `border border-velmora-gold/15`
- Rounded corners: `rounded-none` for editorial feel, `rounded-sm` for subtle softness on small elements

## Shadows
- Subtle card shadow: `shadow-[0_2px_20px_rgba(26,23,20,0.06)]`
- Hover lift: `hover:shadow-[0_8px_40px_rgba(26,23,20,0.12)]`

## Buttons
- Primary (solid): `bg-velmora-ink text-velmora-cream px-8 py-3 tracking-[0.12em] uppercase text-sm font-inter hover:bg-velmora-charcoal transition-colors`
- Accent (gold outline): `border border-velmora-gold text-velmora-gold px-8 py-3 tracking-[0.12em] uppercase text-sm font-inter hover:bg-velmora-gold hover:text-velmora-ink transition-colors`
- Ghost: `text-velmora-ink underline-offset-4 hover:underline text-sm tracking-wide`

## Animations
- Transitions: `transition-all duration-300 ease-out`
- Hover image scale: `hover:scale-105 transition-transform duration-500`
- Fade in: use opacity transitions, not jarring jumps

## Do's
- Use Cormorant Garamond for all editorial/product text
- Wide letter-spacing on product names and labels
- Warm gold (#C9A96E) as the single accent color
- Generous padding and whitespace
- Hairline borders, not thick borders
- Subtle hover states

## Don'ts
- No bright/saturated colors
- No thick borders or heavy shadows
- No generic sans-serif headings
- No crowded layouts
- No discount-looking elements (no red sale badges, no flashing)
- No hardcoded hex values in JSX — use Tailwind named colors
