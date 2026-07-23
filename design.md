# Velmora Fine Jewelry — Design Specification

## Visual Identity
- **Mood**: Quiet luxury, warm, editorial. Premium demi-fine jewelry — NOT loud, NOT discount-looking, NOT generic e-commerce.
- **Direction**: Deep refined base + warm metallic accents. A dark, rich palette that makes gold jewelry glow against it.

## Color Palette

### Primary Colors
- **Deep Charcoal (base)**: `#1C1C1E` — main background, nav, footer. Rich and warm, not cold black.
- **Warm Cream (text)**: `#F5F0EB` — primary text color on dark backgrounds. Soft, warm white.
- **Gold Accent**: `#C9A96E` — accent color for buttons, links, highlights, decorative elements. Warm gold, not brassy.
- **Muted Gold**: `#A68B4B` — hover state for gold accent, secondary accents.

### Secondary Colors
- **Soft Ivory**: `#EDE8E0` — card backgrounds on dark pages, light section backgrounds.
- **Medium Warm Gray**: `#8A8580` — secondary text, muted labels, borders.
- **Light Warm Gray**: `#B5AFA8` — placeholder text, disabled states.
- **Dark Warm Gray**: `#2A2A2C` — subtle dark surfaces, card backgrounds on dark sections.
- **Rose Gold**: `#D4A574` — occasional accent for special elements.

### Semantic Tokens
- `foreground` → `#F5F0EB` (warm cream)
- `background` → `#1C1C1E` (deep charcoal)
- `card` → `#2A2A2C` (dark warm gray)
- `card-foreground` → `#F5F0EB` (warm cream)
- `primary` → `#C9A96E` (gold accent)
- `primary-foreground` → `#1C1C1E` (deep charcoal)
- `muted` → `#2A2A2C` (dark warm gray)
- `muted-foreground` → `#8A8580` (medium warm gray)
- `border` → `#3A3A3C` (subtle warm border)
- `accent` → `#EDE8E0` (soft ivory)

## Typography

### Fonts
- **Headings / Product Names**: Cormorant Garamond (serif) — elegant, refined, editorial feel.
- **Body / UI**: Inter (sans-serif) — clean, modern, highly readable.

### Font Loading
- Google Fonts embed in `index.html`:
  - Cormorant Garamond: weights 300, 400, 500, 600, 700
  - Inter: weights 300, 400, 500, 600, 700

### Type Scale & Rules
- **Product names**: UPPERCASE, `tracking-[0.2em]`, `font-serif`, `font-light` (300) or `font-normal` (400)
- **Section headings**: `font-serif`, `font-light`, large sizes (2rem–3.5rem)
- **Body text**: `font-sans`, `font-normal`, `text-sm` to `text-base`
- **Labels / UI**: `font-sans`, `font-medium`, `text-xs` to `text-sm`, uppercase with wide tracking for nav links
- **Prices**: `font-sans`, `font-medium`, `text-lg`

### Tailwind Classes for Typography
- Headings: `font-serif font-light text-foreground`
- Product names: `font-serif font-light uppercase tracking-[0.2em] text-foreground`
- Body: `font-sans font-normal text-muted-foreground`
- Nav links: `font-sans font-medium uppercase tracking-[0.15em] text-xs text-foreground`

## Spacing & Layout
- **Generous whitespace**: sections have `py-20 md:py-28` padding.
- **Container**: `max-w-7xl mx-auto px-4 md:px-6 lg:px-8`
- **Hairline dividers**: `border-t border-border` (1px, warm gray)
- **Card padding**: `p-6` to `p-8`
- **Grid gaps**: `gap-6 md:gap-8`

## Component Styles

### Buttons
- **Primary CTA**: Solid gold accent background (`bg-primary text-primary-foreground`), `font-sans font-medium uppercase tracking-[0.15em] text-sm`, `px-8 py-3`, rounded-none or `rounded-sm`, hover: `bg-muted-gold`.
- **Secondary / Outline**: `border border-primary text-primary`, same typography, hover: `bg-primary text-primary-foreground`.
- **Ghost**: `text-foreground hover:text-primary`, no border, no background.

### Cards
- **Product cards**: Dark background (`bg-card`), subtle border or shadow, hover: slight lift + second image reveal.
- **Category tiles**: Full-bleed image, label overlay on hover with gold accent.
- **UGC cards**: Vertical 9:16 ratio, soft serif caption overlay at bottom.

### Navigation
- **Sticky nav**: Transparent over hero (`bg-transparent`), solid on scroll (`bg-background/95 backdrop-blur-sm`). Hairline bottom border on scroll.
- **Logo**: Serif, uppercase, `tracking-[0.3em]`, `text-xl`.
- **Links**: Sans-serif, uppercase, `tracking-[0.15em]`, `text-xs`.

### Accordions
- Thin border, serif heading, clean expand/collapse with subtle animation.

### Cart Drawer
- Slide-in from right, dark background, gold accent buttons, product thumbnails.

## Animations & Transitions
- **Hover transitions**: `transition-all duration-300 ease-out`
- **Image reveals**: `opacity-0 → opacity-100` on hover, `duration-500`
- **Nav scroll**: Smooth background transition, `duration-300`
- **Cart drawer**: Slide-in `transform translate-x-full → translate-x-0`, `duration-300`
- **Subtle shadows**: `shadow-sm` on cards, `shadow-md` on hover

## Do's
- Use generous whitespace between sections
- Keep product names in uppercase serif with wide tracking
- Use gold accent sparingly — for CTAs, highlights, and decorative elements
- Ensure all text has strong contrast against its background
- Use hairline dividers between sections
- Keep hover transitions smooth and subtle

## Don'ts
- Don't use bright/saturated colors — everything should feel muted and refined
- Don't use rounded buttons (max `rounded-sm`, prefer sharp corners)
- Don't use heavy shadows or bold borders
- Don't mix too many font styles — stick to serif headings + sans body
- Don't use generic e-commerce patterns (no sale badges, no loud CTAs)
- Don't leave text unreadable against dark backgrounds
