# Strikingly Generators Hub Page - Design Specification

## Brand Tokens

### Fonts
- **Headings**: Josefin Sans (Google Fonts), weight 700, ALL UPPERCASE, line-height 1.2
  - Fallback: Poppins, then system sans-serif
- **Body**: Open Sans (Google Fonts), weight 400, 14px base, line-height 1.5
- **Buttons**: Same as headings font, weight 700, uppercase

### Font Sizes
- H1: 40-48px desktop, 28-32px mobile
- H2: 26-32px desktop
- H3: 18-22px
- Body: 14px base
- Small/tag: 11px

### Colors
- Brand purple: `#8159BB` (badges, accents)
- AI gradient: `linear-gradient(90deg, #7671FF 0%, #CB0C9F 100%)`
- Body text: `#636972`
- Headings (section): `#4B5056`
- Headings (hero H1 line 1): `#2E2E2F`
- Card border: `#C6C9CD`
- Subtle divider: `#E2E4E7`
- Light background: `#F4F6F8`
- White: `#FFFFFF` (default page background)

### Buttons
- Standard: 36px height, 4px border-radius, 14px uppercase, 9px 15px padding
- Big variant: 44px height
- Primary CTA: AI gradient fill, white text
- Ghost button: transparent background, 1px brand-purple border, brand-purple text

### Cards
- White background
- 1px `#C6C9CD` border
- 3px border-radius
- 20px padding
- Hover: subtle elevation (box-shadow), 1px brand-purple border
- No scale or rotation transforms on hover

### Tags (category badges)
- 11px uppercase
- 2px 6px padding
- 3px border-radius
- Ghost style: brand-purple text, 1px brand-purple border, no fill

### Spacing
- All margins/paddings in multiples of 10px (5px for tight pairs)
- 20px between blocks
- 40px between sections
- 60-80px hero top/bottom
- 10px between adjacent buttons
- Max content width: 1200px, centered

## Component Specifications

### Section 0: Top Bar
- Strikingly AI logo on left
- White background, thin bottom border
- No nav links beyond logo

### Section 1: Breadcrumb
- Semantic `<nav aria-label="Breadcrumb">` with ordered list
- Format: "Strikingly" (link to `/`) > "AI Generators" (plain text)
- Small body-gray text, no card or background

### Section 2: Hero
- Two columns desktop, stacked mobile
- Left: H1 (2 lines), subheadline, 2 CTA buttons
- Right: Inline SVG illustration (soft purple line-art website mockup)
- H1 line 1: dark gray uppercase
- H1 line 2: AI gradient background-clip text, uppercase

### Section 3: Featured Generators
- 3x3 grid (3-col desktop, 2-col tablet, 1-col mobile)
- Each tile: bold name, one-line description, ghost category tag
- Whole tile is link to `/generators/{slug}`

### Section 4: Browse by Category
- 6 cards in 3-column grid
- Each card: small category illustration, name (uppercase), one-line description, right-arrow icon
- Links to `/generators#{category-slug}`

### Section 5: All Generators Directory
- Search input with magnifying glass icon
- Six categorized subsections with `<h3>` headings
- Cards with category illustration, name, description
- "Show all" toggle for each subsection

### Section 6: How It Works
- 3 numbered steps horizontal layout
- Each step: numbered purple circle, uppercase title, body sentence

### Section 7: Why Strikingly
- 3-up grid
- Each cell: line icon, bold uppercase claim, body sentence

### Section 8: FAQ
- Accordion with first question expanded
- Use `aria-expanded` and `aria-controls`

### Section 9: Closing CTA
- Centered, white background
- Headline, sub, gradient CTA button

### Section 10: Footer
- Logo, 4 columns of links, copyright
- Real Strikingly URLs only

## Accessibility Requirements
- All interactive controls keyboard usable
- Visible focus states
- `aria-expanded` and `aria-controls` on accordions
- Decorative SVGs with `aria-hidden="true"`
- Card links have unique descriptive names
- WCAG AA contrast compliance

## Performance Requirements
- Vanilla JS only (search, accordions, show all)
- Inline SVG or CSS for illustrations
- Explicit width/height on images
- Target CLS < 0.1, INP < 200ms
