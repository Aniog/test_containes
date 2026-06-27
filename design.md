# Strikingly Generators Hub Page - Design Guidelines

## Typography
- **Headings**: Brandon Grotesque, weight 700, ALL UPPERCASE, line-height 1.2
  - Fallback: Josefin Sans (Google Fonts), weight 700
  - Secondary fallback: Poppins (Google Fonts), weight 700
  - Do NOT use Inter or system-default sans for headings
- **Body**: Open Sans, weight 400, 14px base, line-height 1.5
- **Buttons**: Same heading font, weight 700, uppercase

### Font Sizes
- H1: 40-48px desktop, 28-32px mobile
- H2: 26-32px desktop
- Body: 14px base

## Colors
- **Brand purple**: `#8159BB` (badges, accents)
- **AI gradient**: linear-gradient from `#7671FF` (blue-AI) to `#CB0C9F` (pink-AI)
  - Use only for primary CTAs and second line of H1
- **Body text**: `#636972`
- **Headings**: `#4B5056` (section headings), `#2E2E2F` (hero H1 line 1)
- **Card border**: `#C6C9CD`
- **Subtle divider**: `#E2E4E7`
- **Light background**: `#F4F6F8`
- **White**: `#FFFFFF` (default page background)

## Buttons
- Standard: 36px height, 4px border-radius, 14px heading font uppercase, 9px 15px padding
- Big variant: 44px height
- Primary (AI gradient fill): white text (`#FFFFFF`)
- Ghost: transparent background, 1px brand-purple border, brand-purple text

## Cards
- White background
- 1px `#C6C9CD` border
- 3px border-radius
- 20px padding
- Hover: subtle elevation (small box-shadow), 1px brand-purple border
- No scale or rotation transforms on hover

## Tags (Category Badges)
- 11px heading font uppercase
- 2px 6px padding
- 3px border-radius
- Ghost style: brand-purple text, 1px brand-purple border, no fill

## Spacing
- All margins/paddings in multiples of 10px (5px allowed for tight pairs)
- 20px between blocks
- 40px between sections
- Hero: 60-80px top and bottom
- 10px between adjacent buttons
- Max content width: 1200px, centered

## Do's and Don'ts
- DO use semantic HTML (`<nav>`, `<main>`, `<section>`, `<article>`, `<footer>`)
- DO use CSS logical properties for RTL support
- DO include BreadcrumbList JSON-LD in head
- DON'T use fake social proof (testimonials, ratings, customer counts)
- DON'T embed forms for site name or description
- DON'T use any schema other than BreadcrumbList
- DON'T include pagination
- DO ensure all cards are visible in initial HTML (no JS required)