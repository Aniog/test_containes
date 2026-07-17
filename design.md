# ARTITECT MACHINERY — Design System

## Brand Identity
- **Brand Name:** ARTITECT MACHINERY
- **Tagline:** Precision Engineered. Perfectly Folded.
- **Tone:** Elegant, professional, trustworthy, industrial yet refined

## Color Palette

| Name         | Hex       | Tailwind Token  | Usage                          |
|--------------|-----------|-----------------|--------------------------------|
| Steel Navy   | #0D1B2A   | `steel-navy`    | Primary background, hero       |
| Iron Blue    | #1B3A5C   | `iron-blue`     | Secondary sections, cards      |
| Copper Gold  | #C8922A   | `copper-gold`   | Accent, CTAs, highlights       |
| Light Gold   | #E8B84B   | `light-gold`    | Hover states, subtle accents   |
| Slate Gray   | #4A5568   | `slate-gray`    | Body text on light backgrounds |
| Cloud White  | #F7F8FA   | `cloud-white`   | Light section backgrounds      |
| Pure White   | #FFFFFF   | white           | Text on dark, card backgrounds |
| Mid Gray     | #8A9BB0   | `mid-gray`      | Muted text, borders            |

## Typography

- **Heading Font:** Playfair Display (serif) — elegant, authoritative
- **Body Font:** Inter (sans-serif) — clean, readable
- **Heading sizes:** text-5xl / text-4xl / text-3xl / text-2xl / text-xl
- **Body:** text-base (16px), leading-relaxed
- **Uppercase labels:** text-xs tracking-widest font-semibold

## Spacing & Layout

- Max content width: `max-w-7xl mx-auto px-6 lg:px-8`
- Section padding: `py-20 lg:py-28`
- Card padding: `p-8`
- Border radius: `rounded-2xl` for cards, `rounded-full` for pills/badges
- Gaps: `gap-8` for grids, `gap-4` for inline items

## Component Styles

### Buttons
- **Primary CTA:** `bg-copper-gold text-white hover:bg-light-gold px-8 py-3 rounded-full font-semibold tracking-wide transition-all`
- **Secondary/Outline:** `border-2 border-copper-gold text-copper-gold hover:bg-copper-gold hover:text-white px-8 py-3 rounded-full font-semibold transition-all`
- **Ghost (dark bg):** `border border-white/30 text-white hover:border-copper-gold hover:text-copper-gold px-8 py-3 rounded-full transition-all`

### Cards
- Light: `bg-white rounded-2xl shadow-lg p-8 border border-gray-100`
- Dark: `bg-iron-blue rounded-2xl p-8 border border-white/10`

### Navigation
- Sticky, dark background `bg-steel-navy/95 backdrop-blur`
- Logo: Playfair Display, copper-gold accent on "ARTITECT"
- Links: text-white/80 hover:text-copper-gold

### Section Dividers
- Alternating: dark (steel-navy/iron-blue) and light (cloud-white/white) sections

## Do's
- Use Playfair Display for all headings
- Use copper-gold for all primary CTAs and key highlights
- Maintain generous whitespace
- Use subtle gradients on hero sections
- Use grid layouts (2-3 columns) on desktop, single column on mobile

## Don'ts
- Don't use bright/neon colors
- Don't use small font sizes for body text (min 16px)
- Don't crowd elements — keep breathing room
- Don't use pure black backgrounds (use steel-navy instead)
