# Design System — Green Plants Shop

## Brand Identity
A fresh, natural, and welcoming plant shop. The visual style is clean and organic, evoking nature, growth, and calm.

## Color Palette
All colors are defined as Tailwind custom tokens in `tailwind.config.js`.

| Token | Hex | Usage |
|---|---|---|
| `brand-green` | `#2D6A4F` | Primary brand color, buttons, accents |
| `brand-green-light` | `#52B788` | Hover states, highlights |
| `brand-green-pale` | `#D8F3DC` | Backgrounds, cards, badges |
| `brand-cream` | `#F9F5F0` | Page background, section backgrounds |
| `brand-brown` | `#6B4226` | Earthy accents, borders |
| `brand-text` | `#1B2D1F` | Primary text |
| `brand-muted` | `#5A7A62` | Secondary/muted text |

## Typography
- Font: **Lato** (Google Fonts) — weights 300, 400, 700, 900
- Headings: `font-bold` or `font-black`, `tracking-tight`
- Body: `font-normal`, `leading-relaxed`
- Small/muted: `text-brand-muted text-sm`

## Spacing & Layout
- Max content width: `max-w-6xl mx-auto`
- Section padding: `py-16 px-6` (desktop), `py-10 px-4` (mobile)
- Card padding: `p-6`
- Border radius: `rounded-2xl` for cards, `rounded-full` for badges/buttons

## Buttons
- Primary: `bg-brand-green text-white rounded-full px-6 py-3 font-semibold hover:bg-brand-green-light transition`
- Secondary/outline: `border-2 border-brand-green text-brand-green rounded-full px-6 py-3 font-semibold hover:bg-brand-green-pale transition`

## Cards
- Background: `bg-white` or `bg-brand-green-pale`
- Shadow: `shadow-md`
- Radius: `rounded-2xl`
- Text: always `text-brand-text` on light backgrounds

## Do's
- Use generous whitespace between sections
- Keep text clearly readable — dark text on light backgrounds
- Use `brand-green` for all interactive elements
- Use `brand-cream` as the default page background

## Don'ts
- Never use dark backgrounds with dark text
- Avoid pure black (`#000`) — use `brand-text` instead
- Don't use more than 2 accent colors per section
