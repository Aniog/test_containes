# ARTITECT MACHINERY Design System

## Brand direction
ARTITECT MACHINERY should feel elegant, precise, and trustworthy. The visual language should combine industrial confidence with approachable clarity.

## Typography
- Body text: clean sans-serif for easy reading. Example Tailwind: `font-sans text-base leading-7`
- Headlines: refined serif or high-contrast display style for premium sections. Example Tailwind: `font-display tracking-tight`
- Use strong hierarchy with large hero headlines, compact section labels, and readable paragraph widths.

## Color system
Use Tailwind palette colors only.
- Primary background: `bg-slate-950`
- Secondary surface: `bg-slate-900`
- Elevated card surface: `bg-slate-900/70`
- Soft section background: `bg-stone-50`
- Brand accent: `text-amber-400`, `bg-amber-400`
- Supporting accent: `text-cyan-300`, `bg-cyan-300`
- Primary text on dark: `text-white`
- Secondary text on dark: `text-slate-300`
- Primary text on light: `text-slate-900`
- Secondary text on light: `text-slate-600`
- Borders: `border-white/10` on dark and `border-slate-200` on light

## Layout and spacing
- Use wide desktop sections with centered content. Example Tailwind: `mx-auto max-w-7xl px-6 lg:px-8`
- Use generous vertical rhythm. Example Tailwind: `py-16 lg:py-24`
- Keep text blocks readable with width limits such as `max-w-2xl` or `max-w-3xl`
- Use card grids for product categories and selling points. Example Tailwind: `grid gap-6 lg:grid-cols-3`

## Components
- Hero sections should feel premium, with layered dark surfaces, clear CTA buttons, and concise proof points.
- Product cards should show a short title, clear explanation, and practical tags.
- Stat blocks should be simple, bold, and easy to scan.
- CTA sections should feel direct and helpful, not aggressive.

## Do
- Combine premium typography with clear functional messaging.
- Keep contrast strong and readable on every surface.
- Use rounded corners, subtle borders, and soft shadows for polish.
- Make mobile layouts stacked and spacious while keeping desktop layouts multi-column.

## Don't
- Do not use bright playful colors.
- Do not overcrowd sections with too much copy.
- Do not use low-contrast gray text on dark panels.
- Do not use arbitrary hex values in Tailwind class strings.
