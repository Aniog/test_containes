# ARTITECT MACHINERY Design System

## Brand direction
An elegant industrial look that feels premium, trustworthy, and easy to use. The site should balance polished presentation with clear product information.

## Color system
Use semantic colors through Tailwind utility classes instead of arbitrary one-off values.

- Page background: soft stone gradient feel using classes like `bg-stone-950`, `bg-slate-950`, `bg-stone-100`
- Surface cards: `bg-white/95`, `bg-stone-900/80`, `border-white/10`, `border-stone-200`
- Primary accent: warm brass / copper tone using classes like `bg-amber-500`, `text-amber-400`, `border-amber-400/40`
- Main text on light surfaces: `text-slate-900`
- Main text on dark surfaces: `text-white`
- Supporting text: `text-slate-600`, `text-slate-300`

## Typography
- Use Inter for all text.
- Headings should feel refined and strong: `font-semibold` to `font-bold`, tight tracking.
- Body copy should stay calm and readable with `leading-7` and `text-base` / `text-lg`.
- Small labels can use uppercase with tracking: `uppercase tracking-[0.2em]`.

## Layout and spacing
- Use spacious section padding: `px-6 py-16 md:px-10 md:py-24 xl:px-16`.
- Main content width: `max-w-7xl mx-auto`.
- Cards should use generous padding like `p-6 md:p-8`.
- Desktop layouts should remain multi-column where suitable; avoid collapsing everything into a mobile-style single narrow column on large screens.

## Components
- Buttons: rounded pill or soft rounded rectangle, e.g. `rounded-full px-6 py-3`.
- Cards: subtle borders, light blur or slight transparency, and soft shadows.
- Badges: small uppercase labels with clear contrast.
- Stats and spec blocks should use explicit text colors for readability.

## Imagery
- Use industrial machinery and precision sheet metal production visuals.
- Hero imagery should feel premium and technical.
- Product/support images should support nearby text and use the stock image system.

## Do
- Keep contrast high and text always clearly readable.
- Use clean, professional spacing and alignment.
- Keep calls to action obvious and friendly.
- Make mobile layouts comfortable while preserving stronger multi-column desktop layouts.

## Don't
- Do not use neon colors or playful visual language.
- Do not use low-contrast gray text on gray backgrounds.
- Do not hardcode random hex values in class strings.
- Do not overcrowd sections with too many decorative elements.
