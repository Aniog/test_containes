# Velmora Fine Jewelry Design System

## Brand Personality
- **Tone**: Quiet Luxury, Editorial, Warm, Refined.
- **Audience**: Women 25-45, gifting & self-purchase.
- **Price Point**: Premium-but-accessible ($30-$120).

## Color Palette
- **Primary (Cream/Off-White)**: `#FDFBF7` (Background)
- **Secondary (Charcoal/Stone)**: `#1A1A1A` (Text, Primary UI)
- **Accent (Warm Gold)**: `#B59A6D` (CTA, Borders, Accents)
- **Muted (Soft Beige)**: `#F2ECE4` (Hover states, light sections)
- **Text Primary**: `#1A1A1A`
- **Text Secondary**: `#4A4A4A`

## Typography
- **Headings**: Cormorant Garamond (Serif)
  - Usage: Product names, Page titles, Section headers.
  - Style: Elegant, sometimes uppercase with wide spacing.
- **Body & UI**: Inter (Sans-serif)
  - Usage: Descriptions, Navigation, Buttons, Form fields.
  - Style: Clean, readable.

## UI Elements
- **Borders**: Thin hairline dividers (0.5px or 1px) in `Accent` or `Secondary` (low opacity).
- **Buttons**:
  - Primary: Solid Charcoal background with Cream text.
  - Secondary: Outlined Charcoal or Accent.
  - Transition: Soft fade/transform on hover.
- **Shadows**: Very soft, minimal shadows (level 1-2 only on modals/drawers).
- **Images**: Large, editorial-style imagery with fixed aspect ratios (mainly 3:2, 4:5, 1:1, and 9:16 for UGC).

## Spacing & Layout
- **Grid**: Standard 12-column grid.
- **Whitespace**: Generous, allowing elements to breathe.
- **Container**: Max-width 1440px with generous side padding (40px desktop, 20px mobile).

## Tailwind Extensions (Suggested for config)
```js
{
  colors: {
    'velmora-bg': '#FDFBF7',
    'velmora-text': '#1A1A1A',
    'velmora-muted': '#4A4A4A',
    'velmora-accent': '#B59A6D',
    'velmora-beige': '#F2ECE4',
  },
  fontFamily: {
    serif: ['Cormorant Garamond', 'serif'],
    sans: ['Inter', 'sans-serif'],
  }
}
```
