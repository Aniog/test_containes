# ARTITECT MACHINERY - Design Guidelines

## Brand Identity
- **Brand Name**: ARTITECT MACHINERY
- **Industry**: Industrial metal folding machinery
- **Style**: Elegant but user-friendly — premium industrial feel with approachable design

## Color Palette

### Primary Colors
- **Navy Dark** (#0B1426): Main background, hero sections, footer
- **Navy Medium** (#132042): Card backgrounds, secondary sections
- **Navy Light** (#1B2D5A): Hover states, borders

### Accent Colors
- **Gold** (#C8A45C): Primary accent, CTAs, highlights, icons
- **Gold Light** (#D4B876): Hover states for gold elements
- **Gold Dark** (#A88940): Active/pressed states

### Neutral Colors
- **White** (#FFFFFF): Primary text on dark backgrounds
- **Gray Light** (#E8ECF1): Section backgrounds (alternating)
- **Gray Medium** (#94A3B8): Secondary text, muted labels
- **Gray Dark** (#475569): Body text on light backgrounds
- **Slate** (#1E293B): Text on light backgrounds

## Typography
- **Font Family**: Inter (Google Fonts)
- **Headings**: font-weight 700-800, tracking tight
- **Body**: font-weight 400, line-height 1.6
- **H1**: text-5xl md:text-6xl lg:text-7xl
- **H2**: text-3xl md:text-4xl lg:text-5xl
- **H3**: text-xl md:text-2xl
- **Body**: text-base md:text-lg

## Spacing
- Section padding: py-20 md:py-28
- Container max-width: max-w-7xl mx-auto px-4 sm:px-6 lg:px-8
- Card padding: p-6 md:p-8
- Element gaps: gap-6 md:gap-8

## Visual Elements
- **Borders**: Subtle, 1px, using navy-light or gray-light
- **Shadows**: Subtle shadows on cards (shadow-lg with low opacity)
- **Border Radius**: Rounded-lg (8px) for cards, rounded-full for buttons
- **Icons**: Lucide React icons, gold colored for emphasis
- **Images**: Use data-strk-img for stock imagery of industrial machinery

## Component Styles

### Buttons
- **Primary**: bg-gold text-navy-dark font-semibold px-8 py-3 rounded-full hover:bg-gold-light
- **Secondary**: border-2 border-gold text-gold px-8 py-3 rounded-full hover:bg-gold hover:text-navy-dark
- **Ghost**: text-white hover:text-gold

### Cards
- bg-navy-medium border border-navy-light rounded-lg p-6
- On light sections: bg-white border border-gray-200 rounded-lg p-6 shadow-sm

### Navigation
- Fixed top, transparent on hero, solid navy on scroll
- Logo left, nav links center/right, CTA button right

## Do's
- Use generous whitespace for elegance
- Use gold accents sparingly for premium feel
- Ensure high contrast between text and backgrounds
- Use smooth transitions (transition-all duration-300)
- Keep layouts clean and unstructured — let content breathe

## Don'ts
- Don't use bright or neon colors
- Don't overcrowd sections with too many elements
- Don't use low-contrast text (gray on gray)
- Don't use more than 2 font weights per section
- Don't use heavy box shadows or thick borders
