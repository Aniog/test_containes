# Design Tokens — Strikingly Generators Hub

## Typography

- **Headings**: Brandon Grotesque (paid) → fallback Josefin Sans (Google Fonts), weight 700, ALL UPPERCASE, line-height 1.2
- **Body**: Open Sans (Google Fonts), weight 400, 14px base, line-height 1.5
- **Buttons**: Same heading font, weight 700, uppercase

Font sizes:
- H1: 40-48px desktop → 28-32px mobile
- H2: 26-32px desktop
- Body: 14px base

## Colors

- Brand purple: `#8159BB` (badges, accents)
- AI Gradient: linear-gradient(135deg, #7671FF, #CB0C9F) — primary CTAs and H1 line 2 only
- Body text: `#636972`
- Section headings: `#4B5056`
- Hero H1 line 1: `#2E2E2F`
- Card border: `#C6C9CD`
- Subtle divider: `#E2E4E7`
- Light background: `#F4F6F8`
- Page background: `#FFFFFF`
- Buttons: white text (#FFFFFF) on gradient or solid fill
- Hero may have very faint purple-to-pink wash (low-opacity)

## Buttons

- Standard: 36px height, 4px border-radius, 9px 15px padding
- Large (hero CTA): 44px height
- Ghost: transparent bg, 1px #8159BB border, #8159BB text
- Primary/gradient: AI gradient fill, white text

## Cards

- White bg, 1px #C6C9CD border, 3px border-radius, 20px padding
- Hover: subtle box-shadow elevation, 1px #8159BB border
- No scale/rotation transforms

## Tags (category badges)

- 11px, uppercase, 2px 6px padding, 3px border-radius
- Ghost style: #8159BB text, 1px #8159BB border, no fill

## Spacing

- Margins/paddings: multiples of 10px (5px allowed for tight pairs)
- Between blocks: 20px
- Between sections: 40px
- Hero: 60-80px top and bottom
- Between adjacent buttons: 10px
- Max content width: 1200px, centered

## Layout

- Desktop-first, responsive
- 3-col grids → 2-col (tablet) → 1-col (mobile)
- CSS logical properties for RTL readiness