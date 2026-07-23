# Velmora Fine Jewelry — Design System

## Mood
Quiet luxury, warm, editorial. Premium demi-fine jewelry. NOT loud, NOT discount-looking.

## Color Palette
- **Background (cream):** `#FAF7F2` — warm off-white for page backgrounds
- **Surface (ivory):** `#F5F0E8` — slightly deeper warm tone for cards/sections
- **Foreground (charcoal):** `#1A1A1A` — near-black for primary text
- **Muted text:** `#6B6358` — warm gray-brown for secondary text
- **Accent (gold):** `#B8860B` — dark goldenrod for CTAs, links, highlights
- **Accent hover:** `#9A7209` — deeper gold on hover
- **Accent light:** `#D4A843` — lighter gold for decorative elements
- **Border:** `#E8E2D9` — warm hairline dividers
- **Dark section:** `#2C2520` — deep warm brown for contrast sections (newsletter, footer)
- **Dark section text:** `#FAF7F2` — cream text on dark backgrounds

## Typography
- **Headings / Product names:** `Cormorant Garamond`, serif — elegant, editorial
- **Body / UI:** `Inter`, sans-serif — clean, modern, readable
- **Product names:** UPPERCASE, letter-spacing: 0.12em
- **Section headings:** Normal case or uppercase depending on context

### Scale (Tailwind)
- Hero headline: `text-5xl md:text-7xl font-light`
- Section title: `text-3xl md:text-4xl font-light`
- Product name: `text-sm uppercase tracking-widest`
- Body: `text-base` (16px)
- Small/caption: `text-sm` or `text-xs`

## Spacing
- Generous whitespace: sections use `py-16 md:py-24`
- Cards: `p-0` (image bleeds) or `p-6` for text areas
- Grid gaps: `gap-6 md:gap-8`

## Components
- **Buttons:** Solid accent bg with cream text, or outlined with accent border. Rounded: `rounded-none` (sharp edges for luxury). Padding: `px-8 py-3`. Uppercase tracking-wide text-sm.
- **Cards:** No border-radius, subtle shadow or border. Hover: slight scale or shadow increase.
- **Dividers:** 1px `border-border` color, full-width or contained.
- **Inputs:** Border-bottom only or thin full border, warm tones.

## Do's
- Use generous whitespace
- Keep imagery large and editorial
- Use thin hairline dividers
- Subtle hover transitions (opacity, translateY, scale)
- Soft shadows only where needed
- Maintain warm, golden tone throughout

## Don'ts
- No rounded corners on buttons/cards (luxury = sharp)
- No bright/neon colors
- No heavy drop shadows
- No cluttered layouts
- No generic e-commerce feel
- No discount badges or sale stickers
