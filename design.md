# ARTITECT MACHINERY — Design Guide

## Brand Identity
Premium industrial machinery brand. Elegant, refined, trustworthy. Clean lines, generous whitespace, subtle sophistication.

## Typography
- **Font Family:** Inter (Google Fonts, already embedded)
- **Headings:** font-bold, tracking-tight
- **Body:** font-normal, leading-relaxed
- **Sizes:** h1 (text-5xl md:text-6xl), h2 (text-3xl md:text-4xl), h3 (text-xl md:text-2xl), body (text-base md:text-lg)

## Colors (Tailwind named colors)
- **primary:** #1a1f2e (deep navy — headers, footer, buttons)
- **primary-foreground:** #faf8f5
- **accent:** #c9a96e (warm brass/gold — highlights, CTAs, icons)
- **accent-foreground:** #1a1f2e
- **muted:** #f5f3ef (warm light background)
- **muted-foreground:** #6b7280
- **card:** #ffffff
- **card-foreground:** #1a1f2e
- **border:** #e5e0d8

## Spacing
- Section padding: py-20 md:py-28
- Container: max-w-7xl mx-auto px-6 md:px-10
- Card padding: p-6 md:p-8
- Gap between cards: gap-6 md:gap-8

## Visual Style
- Clean, minimalist layouts with ample whitespace
- Subtle shadows: shadow-sm (cards), shadow-lg (hero elements)
- Rounded corners: rounded-lg (cards), rounded-md (buttons)
- Thin borders: border border-border
- Smooth transitions: transition-all duration-300
- Icon usage: Lucide React icons in accent color for visual interest
- Do: Use warm neutral backgrounds, generous padding, clear hierarchy
- Don't: Use harsh shadows, bright colors, cluttered layouts, dark-on-dark text

## Example Tailwind Patterns
- Card: bg-card text-card-foreground rounded-lg shadow-sm border border-border p-6
- Primary button: bg-primary text-primary-foreground hover:bg-primary/90 px-6 py-3 rounded-md font-medium transition-all
- Accent button: bg-accent text-accent-foreground hover:bg-accent/90 px-6 py-3 rounded-md font-medium transition-all
- Section title: text-3xl md:text-4xl font-bold text-primary tracking-tight
- Section subtitle: text-muted-foreground text-lg max-w-2xl
