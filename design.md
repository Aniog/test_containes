# ARTITECT MACHINERY Design System

## Visual direction
Elegant, user-friendly industrial design for precision sheet metal folding machinery. The site should feel premium, engineered, trustworthy, and easy to scan.

## Color palette
Use Tailwind's default semantic industrial palette instead of arbitrary hex values:
- Primary surfaces: `bg-slate-950`, `bg-slate-900`, `bg-slate-100`, `bg-white`
- Main text: `text-slate-950`, `text-slate-900`, `text-white`, `text-slate-200`
- Muted text: `text-slate-600`, `text-slate-300`
- Accent: `bg-amber-400`, `text-amber-400`, `border-amber-400`
- Supporting borders: `border-slate-200`, `border-slate-700`, `border-white/10`

## Typography
- Use Manrope from Google Fonts for the full site.
- Headings should be bold and spacious: `text-4xl md:text-6xl font-semibold tracking-tight`.
- Body copy should be readable and calm: `text-base md:text-lg leading-7`.
- Use uppercase tracking for small section labels: `text-xs font-semibold uppercase tracking-[0.3em]`.

## Layout and spacing
- Use large breathable sections: `py-16 md:py-24`.
- Use a centered container: `mx-auto max-w-7xl px-6 lg:px-8`.
- Desktop layouts should use multi-column grids; mobile should stack clearly.
- Cards should have generous padding: `p-6 md:p-8`.

## Components
- Navigation: clean, sticky-feeling top bar with strong brand mark and simple links.
- Buttons: rounded pill buttons with clear contrast. Primary uses slate/amber pairings.
- Cards: soft rounded corners, subtle borders, and readable text colors.
- Product images: use the Strikingly stock image data attributes, not hardcoded URLs.

## Do's
- Keep all text high contrast and explicit against each surface.
- Use industrial details such as spec cards, process steps, and capability badges.
- Make calls to action obvious and friendly.

## Don'ts
- Do not use low-contrast gray text on dark backgrounds.
- Do not crowd mobile screens.
- Do not use random hex codes or arbitrary decorative colors in JSX.
