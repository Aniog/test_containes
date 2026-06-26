# Design Guidelines - SSourcing China

## Visual Style
SSourcing China is a professional B2B sourcing agency. The design should be clean, trustworthy, and international. It should feel robust and reliable.

## Typography
- Main Font: 'Inter', system-ui, sans-serif. Use for all body text and headings.
- Headings: Bold, clean, professional.
  - H1: `text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight`
  - H2: `text-3xl md:text-4xl font-bold tracking-tight`
  - H3: `text-2xl font-semibold`

## Colors
- Primary: Deep Blue/Navy (#1e3a8a - Tailwind `blue-900`) - Represents trust and stability.
- Secondary: Professional Gray (#4b5563 - Tailwind `gray-600`) - For text and accents.
- Accent: Trust Gold (#d97706 - Tailwind `amber-600`) - For CTAs and highlights.
- Background: Pure White (#ffffff) and Light Gray (#f9fafb - Tailwind `gray-50`) for section variations.

## Spacing & Layout
- Use generous white space to maintain a clean look.
- Container: `max-w-7xl mx-auto px-4 sm:px-6 lg:px-8`
- Section Padding: `py-16 md:py-24`

## Components
- Cards: Subtle shadows (`shadow-sm` or `shadow-md`), rounded corners (`rounded-lg`).
- Buttons: Rounded (`rounded-md`), consistent padding (`px-6 py-3`), clear hover states.
- Icons: Use Lucide React icons for a modern, clean look.

## Images
- Use realistic, international B2B themed images: modern factories, quality control scenes, shipping containers, professional meetings.
- Always use the `data-strk-img` system for stock images.
