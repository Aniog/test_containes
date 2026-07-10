# Design System

## Philosophy
Extremely minimal and clean. Plain white backgrounds, no decorative elements, generous whitespace.

## Colors
- Background: `bg-white` (#ffffff)
- Primary text: `text-gray-900` (#111827)
- Secondary text: `text-gray-500` (#6b7280)
- Muted / labels: `text-gray-600` (#4b5563)
- Subtle accents: `text-gray-400` (#9ca3af)
- Borders: `border-gray-100` (#f3f4f6) for structural, `border-gray-200` (#e5e7eb) for inputs
- Button: `bg-gray-900` with `text-white`; hover `bg-gray-700`
- Error: `text-red-500`

## Typography
- Font: Inter (Google Fonts)
- Headings: `font-semibold tracking-tight`, sizes `text-4xl` / `text-5xl`
- Body: `text-base text-gray-500`
- Labels: `text-sm text-gray-600`
- Eyebrow: `text-xs uppercase tracking-widest text-gray-400`
- Footer: `text-xs text-gray-400`

## Spacing
- Section vertical padding: `py-24`
- Form gap between fields: `gap-5`
- Input padding: `px-3 py-2.5`

## Borders & Radius
- Inputs and buttons: `rounded` (4px)
- Structural dividers: `border-b border-gray-100` / `border-t border-gray-100`

## Inputs
- Border: `border border-gray-200`
- Focus: `focus:border-gray-400` (no ring, just border color shift)
- Placeholder: `placeholder-gray-300`
- Background: always `bg-white`

## Buttons
- Primary: `bg-gray-900 text-white rounded py-2.5 text-sm font-medium`
- Hover: `hover:bg-gray-700`
- Disabled: `opacity-50 cursor-not-allowed`

## Do's
- Use lots of whitespace
- Keep text hierarchy clear with size and weight only
- Use gray scale exclusively — no accent colors except error red

## Don'ts
- No shadows, gradients, or decorative backgrounds
- No colored buttons or links
- No dark mode overrides
