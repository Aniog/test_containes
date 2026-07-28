# SSourcing China - Design System

## Brand Overview
A professional B2B sourcing agent website for global buyers. Trustworthy, international, clear, and practical. No exaggerated claims.

## Color Palette
- Primary: `#1e40af` (Trust Blue) - used for primary buttons, links, headings accents
- Primary Dark: `#1e3a8a` - hover states, footer background
- Primary Light: `#dbeafe` - subtle backgrounds, badges
- Secondary: `#0f766e` (Teal) - secondary accents, success states
- Neutral-900: `#111827` - primary text, headings
- Neutral-700: `#374151` - body text
- Neutral-500: `#6b7280` - muted text, captions
- Neutral-200: `#e5e7eb` - borders, dividers
- Neutral-100: `#f3f4f6` - section backgrounds
- Neutral-50: `#f9fafb` - page background
- White: `#ffffff` - cards, hero text on dark
- Accent Orange: `#ea580c` - CTAs, highlighted badges (used sparingly)

## Typography
- Font Family: Inter, system-ui, sans-serif
- H1: 48px / 56px line-height, font-weight 700 (mobile: 36px / 44px)
- H2: 36px / 44px line-height, font-weight 700 (mobile: 28px / 36px)
- H3: 24px / 32px line-height, font-weight 600
- H4: 20px / 28px line-height, font-weight 600
- Body: 16px / 26px line-height, font-weight 400
- Small: 14px / 22px line-height
- Caption: 12px / 18px line-height

## Spacing
- Section padding: py-20 (80px) desktop, py-14 (56px) mobile
- Container: max-w-7xl mx-auto px-4 sm:px-6 lg:px-8
- Card padding: p-6 to p-8
- Grid gaps: gap-6 to gap-8
- Component spacing: space-y-6

## Components
### Buttons
- Primary: bg-primary text-white hover:bg-primary-dark px-6 py-3 rounded-lg font-medium
- Secondary/Outline: border border-primary text-primary hover:bg-primary-light px-6 py-3 rounded-lg
- CTA button uses accent orange: bg-orange-600 hover:bg-orange-700 text-white

### Cards
- White background, rounded-xl, shadow-sm, border border-neutral-200
- Hover: subtle shadow-md transition

### Forms
- Input: rounded-lg border-neutral-300 focus:border-primary focus:ring-primary
- Labels: text-sm font-medium text-neutral-700

### Badges
- Rounded-full, px-3 py-1, text-xs font-medium
- Primary light badge: bg-blue-100 text-blue-800

## Visual Style Do's
- Clean white cards on light gray backgrounds
- Professional factory/supplier/QC/shipping imagery
- Clear hierarchy with generous whitespace
- Consistent blue + teal accents
- Realistic business imagery only

## Visual Style Don'ts
- No flashy gradients
- No exaggerated claims or hype
- No low-contrast text
- No cluttered layouts
- No decorative emojis

## Image Guidelines
- Use data-strk-img and data-strk-bg attributes
- Ratios: 16x9 for hero, 4x3 for cards, 1x1 for icons/avatars
- Reference nearby text IDs for contextual stock images
- Placeholder SVG for all content images
