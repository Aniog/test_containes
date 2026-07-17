# Velmora Fine Jewelry — Design System

## Mood
Quiet luxury, warm, editorial. Premium demi-fine jewelry. NOT loud, NOT discount-looking.

## Color Palette
- **Background (cream):** `#FAF7F2` — warm off-white, flatters gold
- **Foreground (charcoal):** `#1A1A1A` — near-black for body text
- **Accent (deep champagne gold):** `#B8860B` — warm metallic gold for CTAs, highlights
- **Accent hover:** `#9A7209` — darker gold on interaction
- **Muted:** `#F5F0E8` — slightly darker cream for sections
- **Muted foreground:** `#6B6358` — warm gray for secondary text
- **Border:** `#E8E0D4` — warm hairline dividers
- **Card:** `#FFFFFF` — pure white for product cards

Tailwind config names: `cream`, `charcoal`, `gold`, `gold-dark`, `muted`, `muted-fg`, `border-warm`, `card`

## Typography
- **Headings / Product names:** `Cormorant Garamond` (serif), weight 300–600
- **Body / UI:** `Inter` (sans-serif), weight 300–500
- Product names: UPPERCASE, letter-spacing `0.15em`
- Section headings: serif, normal case or uppercase depending on context

## Spacing & Layout
- Generous whitespace: sections use `py-20` to `py-28`
- Max content width: `max-w-7xl` (1280px)
- Product grid gap: `gap-6` to `gap-8`
- Thin hairline dividers: `border-b border-border-warm`

## Components
- **Buttons:** Solid gold background with cream text (primary), or outlined with gold border (secondary). Rounded `rounded-none` or `rounded-sm` for editorial feel. Uppercase, letter-spacing `0.1em`, font-weight 500.
- **Cards:** White background, no border or very subtle border, soft shadow on hover (`shadow-sm` → `shadow-md`). Transition `duration-300`.
- **Hover states:** Subtle scale (`scale-[1.02]`), opacity shifts, underline reveals.

## Do's
- Use generous padding and margin
- Keep imagery large and editorial
- Use serif for emotional/brand text, sans for functional UI
- Maintain warm tones throughout
- Use thin 1px dividers sparingly

## Don'ts
- No bright/neon colors
- No heavy drop shadows
- No rounded-full buttons (too casual)
- No dense layouts — always breathe
- No generic blue links
- No dark mode (this is a warm, light brand)
