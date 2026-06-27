# Velmora Fine Jewelry — Design System

## Visual Identity
- **Mood**: Quiet luxury, warm, editorial. Premium demi-fine jewelry — NOT loud, NOT discount-looking.
- **Direction**: Deep warm base + warm metallic gold accents. Soft, sophisticated, and timeless.

## Color Palette

| Token | Value | Usage |
|---|---|---|
| `bg-primary` | `#0F0D0B` | Main background — deep warm black |
| `bg-secondary` | `#1A1714` | Card backgrounds, elevated surfaces |
| `bg-tertiary` | `#252119` | Hover states, subtle elevation |
| `surface` | `#2C2720` | Input backgrounds, wells |
| `gold` | `#C9A96E` | Primary accent — warm gold |
| `gold-light` | `#D4BA8A` | Hover gold, lighter accent |
| `gold-dark` | `#A8894F` | Active/pressed gold |
| `text-primary` | `#F5F0E8` | Main body text — warm white |
| `text-secondary` | `#A89F91` | Muted text, captions |
| `text-tertiary` | `#6B6358` | Disabled, placeholders |
| `border` | `#3A342C` | Hairline dividers, borders |
| `border-light` | `#4A4238` | Lighter borders on hover |
| `cream` | `#F5F0E8` | Light section backgrounds |
| `cream-dark` | `#E8DFD0` | Slightly darker cream variant |

## Typography

- **Headings / Product Names**: `Cormorant Garamond`, serif. Uppercase with wide letter-spacing for product names.
- **Body / UI**: `Inter`, sans-serif. Clean and legible.

### Scale
- Hero headline: `text-5xl md:text-7xl` Cormorant Garamond 300
- Section headings: `text-3xl md:text-4xl` Cormorant Garamond 400
- Product names: `text-lg md:text-xl` Cormorant Garamond 500, uppercase, tracking-[0.15em]
- Body: `text-sm md:text-base` Inter 400
- Small/caption: `text-xs` Inter 400, text-secondary
- Nav links: `text-xs` Inter 500, uppercase, tracking-[0.2em]

## Spacing & Layout
- Generous whitespace. Sections: `py-20 md:py-28`
- Container max-width: `max-w-7xl` with `px-5 md:px-8`
- Product grid gap: `gap-6 md:gap-8`
- Hairline dividers: `border-t border-[#3A342C]`

## Components

### Buttons
- **Primary (accent)**: `bg-[#C9A96E] text-[#0F0D0B]` — solid gold button, Inter 500, uppercase, tracking-wider, rounded-none, hover:bg-[#D4BA8A]
- **Secondary (outlined)**: `border border-[#C9A96E] text-[#C9A96E]` — outlined gold, hover:bg-[#C9A96E] hover:text-[#0F0D0B]
- **Ghost**: `text-[#C9A96E]` underline on hover

### Cards
- Product cards: bg-secondary, no border-radius (sharp corners for editorial feel), overflow-hidden
- Hover: subtle scale on image (1.03), second image reveal, shadow

### Inputs
- bg-transparent, border-b border-[#3A342C], text-primary, focus:border-[#C9A96E]

### Accordions
- Border-bottom divider, Cormorant Garamond heading, Inter body text

## Animations
- Subtle, smooth transitions: `transition-all duration-300 ease-out`
- Image hover: scale 1.03 over 500ms
- Nav: transparent to solid bg on scroll (backdrop-blur)
- Cart drawer: slide in from right

## Do's
- Use generous whitespace between sections
- Keep product names in uppercase Cormorant Garamond with wide tracking
- Use gold (#C9A96E) sparingly as accent — buttons, links, highlights
- Ensure strong contrast: warm white (#F5F0E8) on dark (#0F0D0B) backgrounds
- Use thin hairline dividers between sections

## Don'ts
- Don't use bright or saturated colors
- Don't use rounded corners on cards or buttons (editorial, sharp aesthetic)
- Don't use heavy shadows — keep subtle
- Don't mix warm and cool tones
- Don't use generic e-commerce patterns (starbursts, badges, loud CTAs)
