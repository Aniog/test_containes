# SSourcing China — Design System

## Brand & Tone
- Professional B2B, international, trustworthy
- Tone: clear, practical, no exaggerated claims
- Visual language: editorial-clean, neutral palette with one deep accent

## Color Palette
- `brand-ink`     `#0E1A2B`  (deep navy — primary text & dark backgrounds)
- `brand-navy`    `#14304A`  (hero, navbar bg in dark variant)
- `brand-steel`   `#2C4258`  (secondary headings)
- `brand-accent`  `#C9302C`  (China-red accent for CTA & emphasis)
- `brand-accent-2` `#E04A2F` (accent hover)
- `brand-mist`    `#F4F6F8`  (section background)
- `brand-line`    `#E3E7EC`  (borders, dividers)
- `brand-text`    `#1B2433`  (body text)
- `brand-muted`   `#5B6878`  (secondary text, captions)
- `brand-white`   `#FFFFFF`
- `brand-success` `#1F7A4D`
- `brand-warn`    `#B7791F`

## Typography
- Font: Inter (Google Fonts, weights 300/400/500/600/700/800)
- Display: 56–72px desktop / 36–40px mobile, weight 700, line-height 1.05
- H2: 36–44px desktop / 28–32px mobile, weight 700
- H3: 22–24px, weight 600
- Body: 16–18px, weight 400, line-height 1.65
- Small/Caption: 13–14px, weight 500

## Layout & Spacing
- Container max width: 1200px, horizontal padding 24px
- Section vertical padding: 96px desktop / 64px mobile
- Card padding: 24–32px
- 8-point spacing scale: 4, 8, 12, 16, 24, 32, 48, 64, 96

## Components
- **Buttons**
  - Primary: bg `brand-accent`, text white, hover `brand-accent-2`, radius 6px, px-6 py-3, font-semibold
  - Secondary: bg `brand-ink`, text white, hover opacity-90
  - Ghost: border `brand-line`, text `brand-ink`, hover bg `brand-mist`
- **Cards**: bg white, border `brand-line`, radius 12px, subtle shadow on hover
- **Badges**: bg `brand-mist`, text `brand-ink`, radius 999px, px-3 py-1, text-xs uppercase tracking-wider
- **Section header**: small uppercase eyebrow (`brand-accent`), then H2, then lead paragraph `brand-muted`

## Iconography
- Lucide React, stroke width 1.75, size 20–28px
- Color: `brand-ink` for default, `brand-accent` for accent icons

## Imagery
- Stock images via `data-strk-img` system: factory floors, QC inspection, shipping containers, supplier meetings
- Aspect ratios: 16x9 for hero, 4x3 for cards, 3x2 for inline imagery

## Do's
- Maintain generous whitespace
- Use tabular numbers for stats and prices
- Use clear hierarchy with eyebrow + headline + lead
- Keep CTAs visible above the fold on hero and at end of every page
- Use neutral backgrounds with red accent sparingly

## Don'ts
- Don't use gradients on body backgrounds
- Don't use low-contrast text on colored backgrounds
- Don't use emoji as icons
- Don't stack more than 3 columns on desktop cards
- Don't mix more than two type weights in a single block