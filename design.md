# ARTITECT MACHINERY Design Guide

## Visual direction
Elegant, precise, and user-friendly industrial design for a premium sheet metal folding machinery brand. The site should feel trustworthy, engineered, and approachable.

## Color palette
Use named Tailwind colors from `tailwind.config.js` only.
- `artitect-ink` for main text and dark surfaces.
- `artitect-graphite` for deep section backgrounds.
- `artitect-steel` for secondary text and borders.
- `artitect-line` for soft dividers.
- `artitect-ivory` for warm page backgrounds.
- `artitect-panel` for card surfaces.
- `artitect-brass` for premium accents and primary calls to action.
- `artitect-brass-dark` for hover states.

## Typography
- Use Inter for body copy, forms, buttons, and navigation.
- Use Cormorant Garamond for elegant, editorial headline accents.
- Headlines should be confident and spacious, with tight tracking only for small labels.

## Layout and spacing
- Desktop layouts should use balanced two-column or multi-column sections, not mobile stacking.
- Mobile layouts should stack cleanly with generous spacing.
- Cards should use rounded corners, refined borders, and soft shadows.
- Keep sections airy with clear hierarchy and short readable copy.

## Components
- Buttons: rounded-full, strong contrast, clear hover states.
- Cards: `bg-artitect-panel`, `border-artitect-line`, and readable foreground text.
- Dark sections: always pair `bg-artitect-graphite` or `bg-artitect-ink` with explicit light text.
- Product badges: use warm accent backgrounds and clear dark text.

## Do's
- Use industrial imagery with nearby text-based stock image queries.
- Use concise product benefits and specifications.
- Keep all visible text high contrast.
- Make navigation and contact actions obvious.

## Don'ts
- Do not use hardcoded hex values in JSX class names.
- Do not use low-contrast gray text on light backgrounds.
- Do not crowd product cards on mobile.
- Do not make the site feel overly technical or hard to scan.
