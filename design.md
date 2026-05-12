# Fruit Tea Brand — Design System

## Brand Identity
Fresh, natural, joyful. A fruit tea brand that feels handcrafted and vibrant.

## Typography
- **Headings**: Playfair Display (serif) — elegant, warm, premium feel
  - Hero H1: `text-5xl md:text-7xl font-bold`
  - Section H2: `text-3xl md:text-4xl font-bold`
  - Card H3: `text-xl font-semibold`
- **Body**: Lato (sans-serif) — clean, readable
  - Body: `text-base font-normal`
  - Small/caption: `text-sm`

## Color Palette
All hex values are registered as named Tailwind colors.

| Name       | Hex       | Usage                              |
|------------|-----------|------------------------------------|
| `cream`    | `#FFFBF4` | Page background                    |
| `petal`    | `#FDE8D8` | Soft section backgrounds, cards    |
| `coral`    | `#E8614A` | Primary CTA buttons, accents       |
| `coral-dark`| `#C94A35`| Button hover state                 |
| `leaf`     | `#4A7C59` | Secondary accents, badges          |
| `leaf-light`| `#EAF4EC`| Light green backgrounds            |
| `charcoal` | `#2C2C2C` | Primary text                       |
| `muted`    | `#7A7A7A` | Secondary/caption text             |
| `border`   | `#EDE8E0` | Dividers, card borders             |

## Spacing & Layout
- Max content width: `max-w-6xl mx-auto`
- Section padding: `py-20 px-6 md:px-12`
- Card padding: `p-6 md:p-8`
- Border radius: `rounded-2xl` for cards, `rounded-full` for pills/badges

## Component Styles

### Buttons
- Primary: `bg-coral text-white px-8 py-3 rounded-full font-semibold hover:bg-coral-dark transition-colors`
- Secondary/outline: `border-2 border-coral text-coral px-8 py-3 rounded-full font-semibold hover:bg-coral hover:text-white transition-colors`

### Cards
- `bg-white rounded-2xl shadow-sm border border-border p-6 hover:shadow-md transition-shadow`

### Badges/Tags
- `bg-leaf-light text-leaf text-xs font-semibold px-3 py-1 rounded-full`

### Navigation
- Sticky, white background with subtle shadow on scroll
- Logo in Playfair Display, coral color
- Nav links in charcoal, hover coral

## Do's
- Use generous whitespace between sections
- Use soft gradients from cream to petal for section backgrounds
- Keep imagery warm and fruit-forward
- Use rounded shapes throughout (pills, rounded cards)
- Maintain high contrast: charcoal text on cream/white backgrounds

## Don'ts
- Don't use dark backgrounds (this is a light, airy brand)
- Don't use harsh borders — prefer soft shadows
- Don't mix too many accent colors — stick to coral + leaf
- Don't use small font sizes for body text (min 16px)
