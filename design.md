# ARTITECT MACHINERY — Design System

## Brand Identity
- **Brand Name:** ARTITECT MACHINERY
- **Tagline:** Precision Engineered. Perfectly Formed.
- **Tone:** Elegant, professional, trustworthy, industrial precision with approachable clarity

## Color Palette
All hex values are registered as named Tailwind colors in `tailwind.config.js`.

| Name         | Hex       | Tailwind Class         | Usage                              |
|--------------|-----------|------------------------|------------------------------------|
| `steel`      | `#1C2B3A` | `bg-steel`             | Primary dark navy — headers, hero  |
| `iron`       | `#2E4057` | `bg-iron`              | Secondary dark — cards, sections   |
| `silver`     | `#8FA3B1` | `text-silver`          | Muted text, borders                |
| `gold`       | `#C9A84C` | `text-gold`            | Accent — CTAs, highlights, icons   |
| `goldLight`  | `#E8C97A` | `text-gold-light`      | Hover states for gold elements     |
| `offwhite`   | `#F4F1EC` | `bg-offwhite`          | Light section backgrounds          |
| `chalk`      | `#FAFAF8` | `bg-chalk`             | Page background, cards             |
| `charcoal`   | `#3D3D3D` | `text-charcoal`        | Body text on light backgrounds     |
| `mist`       | `#E8EDF2` | `bg-mist`              | Subtle section dividers            |

## Typography
- **Primary Font:** Playfair Display (headings — elegant serif)
- **Secondary Font:** Inter (body, UI — clean sans-serif)
- **Loaded via:** Google Fonts in `index.html`

### Scale
- Hero H1: `text-5xl md:text-7xl font-playfair font-bold`
- Section H2: `text-3xl md:text-4xl font-playfair font-semibold`
- Card H3: `text-xl font-playfair font-semibold`
- Body: `text-base font-inter text-charcoal`
- Caption/Label: `text-sm font-inter text-silver uppercase tracking-widest`

## Spacing
- Section padding: `py-20 md:py-28`
- Container max-width: `max-w-7xl mx-auto px-6 md:px-12`
- Card padding: `p-8`
- Gap between grid items: `gap-8`

## Borders & Shadows
- Card border: `border border-mist`
- Subtle shadow: `shadow-md`
- Elevated shadow: `shadow-xl`
- Rounded corners: `rounded-2xl` for cards, `rounded-full` for pills/badges

## Buttons
- **Primary CTA:** `bg-gold text-steel font-semibold px-8 py-3 rounded-full hover:bg-goldLight transition-all`
- **Secondary/Outline:** `border-2 border-gold text-gold px-8 py-3 rounded-full hover:bg-gold hover:text-steel transition-all`
- **Ghost/Nav:** `text-silver hover:text-gold transition-colors`

## Component Patterns
- Navigation: sticky top, dark `bg-steel`, logo left, links right, gold CTA button
- Hero: full-viewport, dark overlay on background image, centered text, two CTAs
- Section headers: centered label (uppercase, gold, small) + large serif heading + short description
- Product cards: white card, image top, content below, gold accent on hover
- Feature icons: gold icon in a dark circle, label below
- Footer: dark `bg-steel`, multi-column links, gold brand name

## Do's
- Use Playfair Display for all headings to maintain elegance
- Use gold accents sparingly for maximum impact
- Maintain generous whitespace between sections
- Use subtle animations (fade-in, slide-up) for scroll reveals
- Keep CTAs clear and action-oriented

## Don'ts
- Don't use bright/neon colors — keep palette restrained
- Don't crowd sections — whitespace is part of the design
- Don't use more than 2 font families
- Don't use low-contrast text (e.g. silver on white for body copy)
