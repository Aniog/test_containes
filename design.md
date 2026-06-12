# Strikingly Generators Hub — Design System

## Brand Tokens

### Colors
- `brand-purple: #8159BB` — badges, accents, ghost button borders
- `ai-blue: #7671FF` — AI gradient start
- `ai-pink: #CB0C9F` — AI gradient end
- `body-text: #636972` — body copy, subheadings
- `heading: #4B5056` — section headings (h2, h3)
- `hero-heading: #2E2E2F` — hero h1 line 1
- `card-border: #C6C9CD` — card borders
- `divider: #E2E4E7` — subtle dividers
- `light-bg: #F4F6F8` — alternate section backgrounds
- `white: #FFFFFF` — default page background

### AI Gradient
`linear-gradient(to right, #7671FF, #CB0C9F)`
- Use ONLY for: primary CTA button fills, H1 line 2 gradient text
- Do NOT use on section backgrounds or headers

### Typography
- **Headings**: Josefin Sans 700, ALL CAPS, line-height 1.2
  - Fallback: Poppins 700, then sans-serif
  - H1: 40–48px desktop, 28–32px mobile
  - H2: 26–32px desktop
  - H3: 18–22px
- **Body**: Open Sans 400, 14px base, line-height 1.5
- **Buttons**: Josefin Sans 700, uppercase

### Buttons
- **Primary (gradient)**: AI gradient fill, white text, 44px height (big), 4px radius, 9px 15px padding
  - Tailwind: `btn-primary` custom class
- **Ghost**: transparent bg, 1px brand-purple border, brand-purple text
  - Tailwind: `btn-ghost` custom class
- Standard height: 36px; Big variant: 44px
- All filled buttons: white text only — never dark text on gradient/solid fill

### Cards
- White bg, 1px `#C6C9CD` border, 3px radius, 20px padding
- Hover: box-shadow elevation, 1px brand-purple border
- No scale/rotation transforms on hover
- Tailwind: `generator-card` custom class

### Category Tags
- 11px Josefin Sans uppercase, 2px 6px padding, 3px radius
- Ghost style: brand-purple text, 1px brand-purple border, no fill
- Tailwind: `category-tag` custom class

### Spacing
- All margins/paddings in multiples of 10px (5px allowed for tight pairs)
- 20px between blocks
- 40px between sections
- Hero: 60–80px top/bottom
- Max content width: 1200px, centered

## Do's
- Use `font-heading` for all headings and buttons
- Use `font-body` for all body text
- Use `text-body-text` for body copy
- Use `text-heading` for section headings
- Use `text-hero-heading` for hero H1 line 1
- Use `bg-light-bg` for alternate section backgrounds
- Use `border-card-border` for card borders
- Use `text-brand-purple` for accents and ghost button text
- Use CSS logical properties (`ms-`, `me-`) for RTL readiness

## Don'ts
- Don't use Inter or system-default sans for headings
- Don't use dark text on gradient or solid-color button fills
- Don't splash the AI gradient on backgrounds or section headers
- Don't use `#000000` anywhere
- Don't use `margin-left`/`margin-right` — use `ms-`/`me-` instead
- Don't add fake social proof (ratings, testimonials, customer counts)
