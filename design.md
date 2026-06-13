# ARTITECT MACHINERY - Design Guidelines

## Brand Identity
- **Brand Name**: ARTITECT MACHINERY
- **Industry**: Industrial machinery / metal folding equipment
- **Style**: Elegant but user-friendly — sophisticated industrial design with clean, approachable UI

## Typography
- **Headings**: Playfair Display (serif) — conveys elegance and craftsmanship
  - `font-family: 'Playfair Display', serif`
  - H1: text-5xl md:text-6xl font-bold
  - H2: text-3xl md:text-4xl font-semibold
  - H3: text-xl md:text-2xl font-semibold
- **Body**: Inter (sans-serif) — clean, modern, highly readable
  - `font-family: 'Inter', sans-serif`
  - Body: text-base leading-relaxed
  - Small: text-sm

## Color Palette
- **Primary Dark (Navy)**: #1B2A4A — headers, nav, primary backgrounds
- **Primary Accent (Gold)**: #C8973E — CTAs, highlights, accents
- **Secondary Dark (Charcoal)**: #2D3748 — text, secondary elements
- **Light Background**: #F7F5F2 — warm off-white for sections
- **White**: #FFFFFF — cards, clean areas
- **Muted Text**: #6B7280 — secondary text
- **Light Gold**: #F5ECD7 — subtle gold tint backgrounds
- **Border**: #E2E0DB — subtle warm borders

## Tailwind Custom Colors
- `navy`: #1B2A4A
- `gold`: #C8973E
- `charcoal`: #2D3748
- `warmwhite`: #F7F5F2
- `lightgold`: #F5ECD7
- `warmborder`: #E2E0DB

## Spacing & Layout
- Section padding: py-20 md:py-28
- Container: max-w-7xl mx-auto px-4 sm:px-6 lg:px-8
- Card padding: p-6 md:p-8
- Gap between elements: gap-6 md:gap-8

## Visual Style
- Clean, spacious layouts with generous whitespace
- Subtle shadows: shadow-sm to shadow-md
- Rounded corners: rounded-lg for cards, rounded-full for buttons
- Gold accent lines and borders for elegance
- High-quality industrial imagery
- Smooth hover transitions

## Buttons
- Primary: bg-gold text-white hover:bg-gold/90 rounded-full px-8 py-3
- Secondary: border-2 border-navy text-navy hover:bg-navy hover:text-white rounded-full px-8 py-3
- Ghost: text-gold hover:text-gold/80 underline

## Cards
- bg-white rounded-lg shadow-sm border border-warmborder
- Hover: shadow-md transition-shadow

## Do's
- Use warm, sophisticated color palette
- Maintain generous whitespace
- Use Playfair Display for headings only
- Keep navigation simple and clear
- Use gold accents sparingly for emphasis
- Ensure high contrast for readability

## Don'ts
- Don't use bright or neon colors
- Don't overcrowd sections
- Don't use more than 2 font families
- Don't use heavy shadows or gradients
- Don't use pure black (#000) for text — use charcoal instead
