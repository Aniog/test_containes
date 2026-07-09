# Velmora Fine Jewelry — Design System

## Visual Identity
- **Mood:** Quiet luxury, warm, editorial. Premium demi-fine gold jewelry.
- **Not:** Loud, discount-looking, generic e-commerce.

## Color Palette
| Token | Hex | Usage |
|-------|-----|-------|
| cream | #FAF7F2 | Page background |
| sand | #F0EBE3 | Cards, subtle dividers |
| gold | #C8A96E | Primary accent, buttons, links |
| gold-light | #D4BC8B | Hover states |
| gold-dark | #A88A4D | Active states |
| charcoal | #2C2C2C | Secondary text |
| ink | #1A1A1A | Primary text |
| stone | #6B6B6B | Muted text |
| pearl | #F5F2ED | Alt background |
| rose | #E8D5D0 | Subtle accent (newsletter, badges) |

## Typography
- **Headings / Product Names:** Playfair Display (serif), uppercase, wide letter-spacing
- **Body / UI:** Inter (sans-serif), clean and readable
- Product names: `font-serif text-sm tracking-wider uppercase`
- Hero headlines: `font-serif text-4xl md:text-6xl lg:text-7xl`
- Section titles: `font-serif text-2xl md:text-3xl tracking-wide`

## Spacing
- Generous whitespace: section padding `px-6 md:px-12 lg:px-20`
- Vertical rhythm: `py-16 md:py-24` for major sections
- Cards: `p-6` internal padding

## Components
- **Buttons:** Solid gold (`btn-primary`) or outlined gold (`btn-outline`). No rounded-full; use subtle rounded.
- **Dividers:** Thin `hairline` (border-t border-velmora-sand/50)
- **Cards:** White/cream background, subtle shadow on hover
- **Shadows:** `shadow-sm` default, `shadow-md` on hover

## Do's
- Use cream (#FAF7F2) as primary background
- Use gold (#C8A96E) sparingly as accent
- Generous whitespace between sections
- Product names in uppercase serif with wide tracking
- Thin hairlines for dividers, never heavy borders

## Don'ts
- No bright/neon colors
- No heavy box shadows
- No rounded-full buttons
- No discount badges or sale stickers
- No dark mode (light-only luxury feel)