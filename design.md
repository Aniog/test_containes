# 罗科百道机械智造有限公司 — Design System

## Brand Identity
Industrial precision meets modern engineering. The visual language conveys strength, reliability, and technological advancement.

## Color Palette
- **Primary Blue**: `#0A1628` — deep navy, used for hero backgrounds and primary sections
- **Accent Blue**: `#1E5FA8` — corporate blue, used for CTAs, highlights, borders
- **Bright Accent**: `#2E9CDB` — sky blue, used for hover states, icons, active elements
- **Gold Accent**: `#C8922A` — warm gold, used for key highlights and decorative lines
- **Light Gray**: `#F4F6F9` — section backgrounds
- **Mid Gray**: `#8A9BB0` — secondary text, captions
- **White**: `#FFFFFF` — primary text on dark backgrounds, card backgrounds
- **Dark Text**: `#1A2332` — body text on light backgrounds

Add to tailwind config as named colors:
- `navy`: `#0A1628`
- `corp-blue`: `#1E5FA8`
- `sky-blue`: `#2E9CDB`
- `gold`: `#C8922A`
- `light-gray`: `#F4F6F9`
- `mid-gray`: `#8A9BB0`
- `dark-text`: `#1A2332`

## Typography
- **Font**: Noto Sans SC (Chinese) + Inter (Latin/Numbers) from Google Fonts
- **Hero Title**: `text-5xl lg:text-7xl font-bold tracking-tight text-white`
- **Section Title**: `text-3xl lg:text-4xl font-bold text-dark-text`
- **Subtitle**: `text-lg lg:text-xl text-mid-gray`
- **Body**: `text-base text-dark-text leading-relaxed`
- **Caption**: `text-sm text-mid-gray`
- **Label/Tag**: `text-xs font-semibold uppercase tracking-widest`

## Spacing
- Section padding: `py-20 lg:py-28`
- Container: `max-w-7xl mx-auto px-6 lg:px-12`
- Card gap: `gap-8`
- Component inner padding: `p-8`

## Borders & Shadows
- Card border: `border border-gray-200`
- Card shadow: `shadow-lg hover:shadow-xl transition-shadow`
- Accent line: `border-l-4 border-gold` or `border-b-2 border-corp-blue`
- Rounded: `rounded-2xl` for cards, `rounded-full` for badges/icons

## Buttons
- Primary: `bg-corp-blue hover:bg-sky-blue text-white font-semibold px-8 py-3 rounded-lg transition-colors`
- Outline: `border-2 border-white text-white hover:bg-white hover:text-navy px-8 py-3 rounded-lg transition-colors`

## Do's
- Use full-bleed hero with dark overlay on background image
- Use gold accent lines to separate section titles from content
- Use icon + text pairs for feature lists
- Use grid layouts (2-col, 3-col, 4-col) for desktop; single column for mobile
- Maintain high contrast: white text on dark backgrounds, dark text on light backgrounds

## Don'ts
- Don't use light text on light backgrounds
- Don't use more than 3 font weights per section
- Don't use rounded corners larger than `rounded-2xl` on cards
- Don't use pure black (`#000`) — use `#1A2332` instead
