# ARTITECT MACHINERY — Design System

## Brand Essence
Elegant industrial. Premium machinery brand that feels both refined and approachable. Think: the confidence of a heritage machine shop, the calm of a contemporary design studio.

## Color Palette
All hex codes are mapped to named Tailwind tokens in `tailwind.config.js` — do not use raw hex in JSX.

- `ink` (#0E1A2B) — primary deep navy, headlines, dark surfaces
- `ink-soft` (#1B2A40) — secondary dark surface
- `ink-muted` (#475569) — body text on light surfaces
- `brass` (#B08D57) — primary accent (warm metallic)
- `brass-soft` (#C9A876) — hover/secondary accent
- `brass-deep` (#8C6E3E) — pressed/active accent
- `cream` (#F7F3EC) — page background (warm off-white)
- `cream-soft` (#FBF8F3) — alternating section background
- `surface` (#FFFFFF) — card background
- `border` (#E5DDD0) — hairline borders, dividers
- `muted` (#6B6358) — meta text, captions

## Typography
- **Display (headings, brand):** "Cormorant Garamond" — serif, elegant, confident. Weights 400/500/600.
- **Body / UI:** "Inter" — clean, friendly, modern. Weights 300/400/500/600/700.
- Brand name "ARTITECT MACHINERY" uses Cormorant Garamond, letter-spacing widened, uppercase.

### Type scale (Tailwind)
- Hero headline: `text-5xl md:text-7xl` Cormorant, `font-light`
- Section title: `text-4xl md:text-5xl` Cormorant, `font-normal`
- Card title: `text-xl md:text-2xl` Inter, `font-semibold`
- Body: `text-base` Inter, `font-normal`, `leading-relaxed`
- Eyebrow/label: `text-xs` Inter, `font-medium`, uppercase, `tracking-[0.18em]`
- Caption: `text-sm` Inter, `font-normal`, text `muted`

## Spacing & Layout
- Page max width: 1200px (`max-w-7xl` works as well)
- Section vertical padding: `py-20 md:py-28` (generous, elegant)
- Container horizontal padding: `px-6 md:px-10`
- Card padding: `p-8` for standard, `p-10` for feature
- Gap between cards: `gap-6 md:gap-8`

## Shapes & Borders
- Buttons: `rounded-none` (sharp, industrial) — small `rounded-sm` only for tags/badges
- Cards: `rounded-sm` (2-4px) with 1px `border` in `border` color
- Images: full bleed, slight `rounded-sm`, no aggressive rounding
- Hairline divider: 1px `border-border` or a 1px `bg-border` line

## Shadows
- Subtle only: `shadow-sm` for resting cards, `shadow-md` on hover
- Never use heavy drop shadows

## Iconography
- Lucide React. Stroke width 1.5 for elegance. Size 20–24 in body, 28–32 in feature callouts.

## Imagery
- Stock images of sheet metal, machinery, fabrication work, factories, industrial engineers.
- Use `data-strk-img` system. Keep ratios 16x9 for hero, 4x3 or 3x2 for product cards, 3x4 for portrait applications.

## Motion
- Subtle hover transitions: `transition-all duration-300 ease-out`
- Cards lift on hover: `hover:-translate-y-1`
- Accent underline on link hover
- No bouncy or playful springs

## Voice & Tone
- Confident, technical, considered. Not flashy. Not cute.
- Sentences are short, declarative. Em-dashes allowed.
- Avoid superlatives. Use specifics.

## Do
- Use serif (Cormorant) for the brand name and hero/section titles
- Use Inter for everything else
- Generous whitespace, let content breathe
- Pair a brass accent against ink for CTAs
- 1px hairlines, sharp corners (or very slight rounding)
- Always show a clear focal point in imagery

## Don't
- Don't use rounded-2xl or pill shapes for primary buttons
- Don't use neon or saturated colors
- Don't use multiple accent colors — brass is the single accent
- Don't use heavy gradients
- Don't use playful emoji or hand-drawn icons
- Don't center-align body text — left-align paragraphs

## Components
- `Container`: `max-w-7xl mx-auto px-6 md:px-10`
- `Section`: `py-20 md:py-28`
- `Eyebrow`: `text-xs uppercase tracking-[0.18em] text-brass font-medium`
- `Button` variants: `primary` (ink bg, cream text, brass underline on hover), `secondary` (border ink, ink text, fills on hover), `ghost` (no border, hover underline)
