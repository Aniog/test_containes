# Velmora Fine Jewelry — Design System

## Color Palette
- **Background (cream):** `cream` → `#FAF7F2` — warm off-white for page backgrounds
- **Background (dark):** `charcoal` → `#1A1A1A` — deep near-black for hero overlays, footer
- **Text primary:** `ink` → `#2C2420` — warm dark brown for body text
- **Text secondary:** `stone` → `#7A6F66` — muted warm gray for captions
- **Accent (gold):** `gold` → `#B8860B` — warm dark gold for CTAs, accents
- **Accent hover:** `gold-dark` → `#96690A` — deeper gold for hover states
- **Accent light:** `gold-light` → `#D4A843` — lighter gold for subtle highlights
- **Border:** `sand` → `#E8E0D6` — warm light border/divider color
- **Surface:** `linen` → `#F5F0EA` — slightly darker cream for cards/sections

## Typography
- **Headings / Product names:** `font-serif` → Cormorant Garamond (weights 400, 500, 600, 700)
- **Body / UI:** `font-sans` → Inter (weights 300, 400, 500, 600)
- **Product names:** UPPERCASE, letter-spacing `0.15em`
- **Section headings:** Serif, normal case or uppercase depending on context

## Spacing & Layout
- Generous whitespace: sections use `py-20` to `py-28`
- Max content width: `max-w-7xl` (1280px)
- Grid gaps: `gap-6` to `gap-8`
- Card padding: `p-6` to `p-8`

## Borders & Dividers
- Hairline dividers: `border-sand` with `border-t`
- Card borders: `border border-sand`
- Border radius: minimal — `rounded-none` or `rounded-sm` for premium feel

## Buttons
- Primary: `bg-gold text-white` with `hover:bg-gold-dark`, no border-radius or very subtle
- Secondary/outlined: `border border-gold text-gold` with `hover:bg-gold hover:text-white`
- Padding: `px-8 py-3` for standard, `px-10 py-4` for hero CTA
- Text: uppercase, letter-spacing `0.1em`, font-sans weight 500

## Shadows & Effects
- Soft shadows: `shadow-sm` or custom `0 2px 8px rgba(0,0,0,0.04)`
- Hover transitions: `transition-all duration-300 ease-in-out`
- Image hover: subtle scale `hover:scale-105` with overflow hidden

## Do's
- Use generous whitespace between sections
- Keep imagery large and editorial
- Use serif for emotional/brand text, sans for functional UI
- Maintain warm, golden tone throughout
- Use thin hairline dividers sparingly

## Don'ts
- No rounded corners on product cards (keep sharp/editorial)
- No bright/saturated colors outside the gold accent
- No heavy drop shadows
- No discount-style badges or loud sale graphics
- No generic e-commerce blue/green color schemes
