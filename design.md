# Strikingly Generators Hub Page - Design Specification

## Brand Tokens

### Fonts
- **Headings**: Brandon Grotesque, weight 700, ALL UPPERCASE, line-height 1.2
  - Fallback: Josefin Sans (Google Fonts), weight 700
  - Secondary fallback: Poppins (Google Fonts), weight 700
- **Body**: Open Sans, weight 400, 14px base, line-height 1.5
- **Buttons**: Same as heading font, weight 700, uppercase

### Font Sizes
- H1: 40-48px desktop, 28-32px mobile
- H2: 26-32px desktop
- Body: 14px base

### Colors
- Brand purple: `#8159BB`
- AI gradient: linear-gradient from `#7671FF` to `#CB0C9F`
- Body text: `#636972`
- Headings (section): `#4B5056`
- Hero H1 line 1: `#2E2E2F`
- Card border: `#C6C9CD`
- Subtle divider: `#E2E4E7`
- Light background: `#F4F6F8`
- White: `#FFFFFF`

### Buttons
- Standard: 36px height, 4px border-radius, 14px heading font uppercase, 9x15px padding
- Big variant: 44px height
- Filled buttons: AI gradient fill with white text (`#FFFFFF`)
- Ghost button: transparent background, 1px brand-purple border, brand-purple text

### Cards
- White background, 1px `#C6C9CD` border, 3px border-radius, 20px padding
- Hover: subtle elevation lift (small box-shadow), 1px brand-purple border

### Tags (Category Badges)
- 11px heading font uppercase, 2x6px padding, 3px border-radius
- Ghost style: brand-purple text, 1px brand-purple border, no fill

### Spacing
- All margins/paddings in multiples of 10px (5px for tight pairs)
- 20px between blocks
- 40px between sections
- Hero: 60-80px top and bottom
- 10px between adjacent buttons
- Max content width: 1200px, centered

## Page Structure

1. **Top Bar**: Logo left, white bg, thin bottom border
2. **Breadcrumb**: Semantic nav with BreadcrumbList JSON-LD
3. **Hero**: Two columns, gradient H1, two CTAs, SVG illustration
4. **Featured Generators**: 3x3 grid, 9 cards with category tags
5. **Browse by Category**: 6 cards linking to hash anchors
6. **All Generators**: Search input, 6 category subsections with 8-12 cards each
7. **How It Works**: 3 numbered steps
8. **Why Strikingly**: 3-up grid with icons
9. **FAQ**: Accordion with 6 questions
10. **Closing CTA**: Centered, gradient button
11. **Footer**: Logo, 4 columns, copyright

## Accessibility Requirements
- All interactive controls keyboard usable
- Visible focus states
- aria-expanded/aria-controls on accordions and toggles
- Decorative SVGs with aria-hidden
- WCAG AA contrast (4.5:1 normal, 3:1 large text)

## Performance Requirements
- Vanilla JS only (search, show all, FAQ)
- Inline SVG illustrations
- Explicit width/height on images
- All content server-rendered (view-source shows all cards)