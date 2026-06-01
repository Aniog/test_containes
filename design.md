# Design System — Steam Games Site

## Theme
Dark, immersive gaming aesthetic inspired by Steam's UI. Deep navy/dark backgrounds with vibrant blue and teal accents.

## Colors
- Background primary: `#0f1923` (very dark navy) — `bg-[#0f1923]`
- Background secondary: `#1b2838` (Steam dark blue) — `bg-[#1b2838]`
- Background card: `#16202d` — `bg-[#16202d]`
- Accent blue: `#1a9fff` — `text-[#1a9fff]`, `bg-[#1a9fff]`
- Accent teal: `#66c0f4` — `text-[#66c0f4]`
- Accent green (sale/positive): `#4caf50` — `text-green-500`
- Text primary: `#c6d4df` — `text-[#c6d4df]`
- Text muted: `#8f98a0` — `text-[#8f98a0]`
- Text white: `#ffffff` — `text-white`
- Border: `#2a475e` — `border-[#2a475e]`

## Typography
- Font: Inter (loaded via Google Fonts in index.html)
- Hero heading: `text-5xl md:text-7xl font-black tracking-tight text-white`
- Section heading: `text-3xl md:text-4xl font-bold text-white`
- Card title: `text-lg font-semibold text-white`
- Body: `text-base text-[#c6d4df]`
- Muted: `text-sm text-[#8f98a0]`

## Spacing
- Section padding: `py-20 px-4 md:px-8`
- Card padding: `p-4 md:p-6`
- Gap between cards: `gap-4 md:gap-6`

## Borders & Shadows
- Card border: `border border-[#2a475e]`
- Card radius: `rounded-xl`
- Card hover: `hover:border-[#1a9fff] transition-all duration-300`
- Shadow: `shadow-lg shadow-black/40`

## Buttons
- Primary: `bg-[#1a9fff] hover:bg-[#1b8fe0] text-white font-semibold px-6 py-3 rounded-lg transition`
- Secondary: `border border-[#2a475e] hover:border-[#1a9fff] text-[#c6d4df] px-6 py-3 rounded-lg transition`

## Do's
- Always use dark backgrounds for all sections
- Use `text-white` for headings, `text-[#c6d4df]` for body text
- Use blue/teal accents for interactive elements and highlights
- Use subtle gradients for hero sections
- Cards should have visible borders and hover effects

## Don'ts
- Never use white or light backgrounds
- Never use dark text on dark backgrounds
- Avoid overly bright neon colors — keep it professional and sleek
