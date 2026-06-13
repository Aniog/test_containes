# Strikingly Generators Hub Design System

## Purpose
This project should visually match Strikingly marketing pages while supporting a static, SEO-friendly generators hub.

## Typography
- Heading font: Brandon Grotesque when available; otherwise use `Josefin Sans`, then `Poppins`, then sans-serif.
- Body font: `Open Sans`, sans-serif.
- Headings are uppercase, bold, tight line-height (`1.2`).
- Body text uses 14px base size and `1.5` line-height.

## Color Tokens
- Brand purple: `#8159BB`
- AI gradient start: `#7671FF`
- AI gradient end: `#CB0C9F`
- Body text: `#636972`
- Section heading text: `#4B5056`
- Hero heading dark text: `#2E2E2F`
- Card border: `#C6C9CD`
- Divider: `#E2E4E7`
- Light surface: `#F4F6F8`
- White surface: `#FFFFFF`

## Components
- Buttons: 4px radius, uppercase heading font, strong contrast, filled buttons always use white text.
- Cards: white background, 1px border, 3px radius, 20px padding, subtle lift on hover, no scaling.
- Tags: uppercase heading font, 11px, ghost style with brand purple border and text.
- Inputs: white background, subtle border, clear focus ring in brand purple.

## Layout
- Max content width: 1200px.
- Section spacing: 40px minimum between major sections.
- Block spacing: 20px between related elements.
- Hero spacing: 60px to 80px top and bottom.
- Use responsive multi-column layouts on desktop and stacked layouts on mobile.

## Do
- Keep all important text explicitly readable against its background.
- Use white or very light surfaces with restrained accents.
- Use gradient only for the hero accent text and primary CTAs.
- Preserve semantic HTML and accessible focus states.

## Don't
- Do not use low-contrast text.
- Do not add fake testimonials, ratings, or inflated counters.
- Do not use tinted section backgrounds beyond the subtle hero wash.
- Do not rely on JavaScript for core content visibility.
