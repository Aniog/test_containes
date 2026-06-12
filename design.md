# ARTITECT MACHINERY — Visual Design System

A refined, elegant industrial brand for premium sheet metal folding machinery.
The site should feel like a high-end European engineering brand: precise,
confident, calm, and quietly luxurious — yet very easy for first-time visitors
to navigate.

## Brand Personality
- Elegant, precise, professional, trustworthy.
- Industrial heritage meets modern minimalism.
- "Quiet luxury" rather than loud or flashy.

## Color Palette (Tailwind named tokens)
Use these named colors via `tailwind.config.js` `theme.extend.colors`:

- `ink` — `#0E1116` — primary text, dark hero, footer background
- `graphite` — `#1F242C` — alternate dark surface
- `steel` — `#5B6573` — secondary text, muted icons
- `mist` — `#E6E8EC` — subtle borders, dividers
- `bone` — `#F4F2EE` — page background (warm off-white)
- `paper` — `#FFFFFF` — card surface
- `gold` — `#B89766` — primary accent (warm brushed brass)
- `gold-deep` — `#8A6E48` — accent hover / strong accent
- `signal` — `#B23A2A` — error/destructive (sparingly)

Do's:
- Pair `ink` text on `bone` or `paper` backgrounds (high contrast).
- Use `gold` only as an accent (buttons, hairlines, key numbers, hover states).
- Use thin 1px `mist` borders to define cards rather than heavy shadows.

Don'ts:
- Never use `gold` as a large background behind body text — contrast suffers.
- Never use `steel` text on `mist` background — it disappears.
- No saturated blues, greens, or neon colors. This is a calm, neutral brand.

## Typography
- Display / Headings: **Playfair Display** (serif), weights 500 / 600 / 700.
  - Use for H1, H2, hero numerals, model names.
  - Letter-spacing slightly tight on big headings: `tracking-tight`.
- Body / UI: **Inter** (sans), weights 300 / 400 / 500 / 600.
  - Use for paragraphs, navigation, buttons, labels.
- Eyebrow / micro: Inter uppercase, `text-xs tracking-[0.2em] font-medium text-steel`.

Sizes (Tailwind):
- H1 hero: `text-5xl md:text-6xl lg:text-7xl font-serif font-medium tracking-tight`
- H2 section: `text-3xl md:text-4xl font-serif font-medium tracking-tight`
- H3 card: `text-xl md:text-2xl font-serif font-medium`
- Body: `text-base md:text-[17px] leading-relaxed text-steel`
- Eyebrow: `text-xs uppercase tracking-[0.2em] text-steel`

## Layout & Spacing
- Max content width: `max-w-7xl mx-auto`.
- Generous side padding: `px-6 md:px-10 lg:px-16`.
- Generous vertical rhythm between sections: `py-20 md:py-28`.
- Grid gaps: `gap-8 md:gap-12`.

## Components
- Buttons:
  - Primary: `bg-ink text-bone hover:bg-graphite px-6 py-3 rounded-none text-sm tracking-wide uppercase font-medium`
  - Accent: `bg-gold text-ink hover:bg-gold-deep hover:text-bone ...`
  - Ghost: `border border-ink text-ink hover:bg-ink hover:text-bone ...`
  - All buttons are square-cornered (`rounded-none`) for an industrial feel.
- Cards:
  - `bg-paper border border-mist` (no heavy shadow).
  - On hover: `hover:border-gold transition-colors duration-300`.
- Dividers: 1px `border-mist`, or a 1px gold `bg-gold w-12 h-px` accent line.
- Inputs: `border-b border-ink bg-transparent focus:border-gold` — minimalist underline style.

## Imagery
- Use stock-image tagging system (`data-strk-img` / `data-strk-bg`).
- Subjects: industrial workshops, sheet metal folding machines, factory floor, engineer hands at controls, close-ups of brushed steel.
- Prefer 16x9 hero, 4x3 product cards, 3x2 lifestyle.
- Always provide stable text reference IDs as required.

## Motion
- Subtle: `transition-colors duration-300`, `transition-transform duration-500`.
- Slight image zoom on hover for product cards: `group-hover:scale-[1.03]`.
- No bouncy or playful easing.

## Accessibility / Visibility
- Always set explicit text color on a custom background.
- Body text uses `text-ink` or `text-steel` on light surfaces.
- On `ink` / `graphite` dark sections, use `text-bone` for body and `text-mist` for muted.
- Never rely on inherited color in cards, footers, dark hero overlays.
