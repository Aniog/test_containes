# Visual Design Guide

## Style direction
Create a calm, professional landing page for a modern service business. The page should feel trustworthy, clear, and easy to act on, with a bright card-based layout and strong contrast.

## Typography
- Use Inter as the primary font family through the HTML font embed.
- Headings should be bold and tight, using Tailwind classes such as `font-bold`, `tracking-tight`, and responsive sizes like `text-4xl md:text-6xl`.
- Body text should be comfortable and readable with `text-base`, `text-lg`, and `leading-7`.

## Colors
Use named Tailwind colors only. Custom named tokens are defined in `tailwind.config.js`:
- `slate-900` for primary headings and dark surfaces.
- `blue-600` for primary buttons and highlights.
- `cyan-500` for soft accent details.
- `blue-50` for light page backgrounds.
- `amber-50` for warm card surfaces.
- `slate-800` for standard readable text.
- `slate-600` for secondary readable text.

## Layout and spacing
- Use generous whitespace with `py-16`, `py-20`, `px-6`, `gap-8`, and `rounded-3xl`.
- Keep desktop layouts balanced with responsive two-column grids such as `lg:grid-cols-2`.
- Mobile layouts should stack naturally and maintain comfortable touch targets.

## Components
- Cards should use `bg-white` or `bg-amber-50`, clear text colors, rounded corners, borders, and subtle shadows.
- Buttons should have explicit foreground and background colors.
- Inputs should have visible labels, readable placeholders, and strong focus rings.
- Status badges should always include explicit readable foreground colors.

## Do's
- Use clear contrast for every text element.
- Keep forms simple and labels visible.
- Show saved contact submissions in an obvious review area.
- Make calls to action easy to find.

## Don'ts
- Do not use low-contrast muted text.
- Do not use arbitrary hex values or magic pixel values in Tailwind classes.
- Do not create crowded mobile layouts.
