# Strikingly Generators Hub - Design Specification

## Brand Tokens

### Fonts
- **Headings**: Brandon Grotesque, weight 700, ALL UPPERCASE, line-height 1.2
  - Fallback: Josefin Sans (Google Fonts, weight 700)
  - Secondary fallback: Poppins (Google Fonts)
- **Body**: Open Sans, weight 400, 14px base, line-height 1.5
- **Buttons**: Same as heading font, weight 700, uppercase

### Font Sizes
- H1: 40-48px desktop, 28-32px mobile
- H2: 26-32px desktop
- H3: 20-24px
- Body: 14px base

### Colors
- Brand purple: `#8159BB`
- AI gradient: `linear-gradient(90deg, #7671FF, #CB0C9F)`
- Body text: `#636972`
- Hero H1 line 1: `#2E2E2F`
- Section headings: `#4B5056`
- Card border: `#C6C9CD`
- Subtle divider: `#E2E4E7`
- Light background: `#F4F6F8`
- White: `#FFFFFF`

### Buttons
- Standard: 36px height, 4px border-radius, 14px heading font uppercase, 9x15px padding
- Big variant: 44px height
- Primary: AI gradient fill, white text
- Ghost: transparent background, 1px brand-purple border, brand-purple text

### Cards
- White background, 1px `#C6C9CD` border, 3px border-radius, 20px padding
- Hover: subtle elevation (box-shadow), 1px brand-purple border

### Tags (Category Badges)
- 11px heading font uppercase, 2x6px padding, 3px border-radius
- Ghost style: brand-purple text, 1px brand-purple border, no fill

### Spacing
- All margins/paddings in multiples of 10px (5px for tight pairs)
- 20px between blocks
- 40px between sections
- Hero: 60-80px top/bottom
- 10px between adjacent buttons
- Max content width: 1200px, centered

## Component Structure

### Section 0: Top Bar
- Logo "Strikingly AI" on left
- White background, thin bottom border
- No nav links

### Section 1: Breadcrumb
- Semantic `<nav aria-label="Breadcrumb">`
- "Strikingly" (link to /) > "AI Generators" (current, plain text)
- Small body-gray text

### Section 2: Hero
- Two columns desktop, stacked mobile
- Left: H1 (2 lines), subheadline, 2 CTAs
- Right: Purple line-art SVG illustration
- H1 line 1: dark gray uppercase
- H1 line 2: AI gradient background-clip text, uppercase

### Section 3: Featured Generators
- 3x3 grid (9 tiles)
- Each tile: bold name, one-line description, ghost category tag
- Whole tile links to /generators/{slug}

### Section 4: Browse by Category
- 6 cards in 3-column grid
- Each card: small illustration, name (uppercase), description, right-arrow icon
- Links to /generators#{category-slug}

### Section 5: All Generators Directory
- Search input with magnifying glass icon
- 6 categorized subsections with h3 headings
- Cards with thumbnail, name, description
- "Show all" toggle with CSS height transition

### Section 6: How It Works
- 3 numbered steps, horizontal on desktop

### Section 7: Why Strikingly
- 3-up grid with icons, bold claims, body sentences

### Section 8: FAQ
- Accordion, first question expanded
- aria-expanded, aria-controls

### Section 9: Closing CTA
- Centered, white background
- Headline, sub, gradient CTA button

### Section 10: Footer
- Logo, 4 columns of links, copyright

## Accessibility Requirements
- All interactive controls keyboard usable
- Visible focus states
- aria-expanded on accordions and toggles
- aria-hidden on decorative SVGs
- WCAG AA contrast (4.5:1 normal, 3:1 large)
- White text on AI gradient passes

## Performance Requirements
- Vanilla JS only (search, Show all, FAQ)
- Inline SVG illustrations
- Explicit width/height on images
- Target CLS < 0.1, INP < 200ms