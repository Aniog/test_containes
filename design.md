# Design System for SSourcing China

## Visual Style
- **Tone**: Professional, Clean, Trustworthy, International B2B, Practical.
- **Core Concept**: "China Sourcing Agent for Global Buyers" – No exaggerated claims. Solid proof.

## Typography
- **Primary Font**: Inter (Clean, modern sans-serif). Webfont applied globally.
- **Headings**: Strong weight (e.g., `font-bold`, `font-semibold`), dark slate colors to emphasize reliability and seriousness.
- **Body**: Highly readable, `text-slate-600` or `text-slate-700`, typical size `text-base` for general text.

## Color Palette
- **Primary / Brand**: Blue tones indicating trust, corporate nature, and logistics/operations.
  - Primary: `bg-blue-600`, text: `text-blue-600`
  - Hover states: `hover:bg-blue-700`
- **Secondary / Accents**: Subtle grays or cool slates.
  - Backgrounds for alternating sections: `bg-slate-50` or `bg-gray-50`.
  - Borders: `border-slate-200`
- **Foreground / Text**:
  - Dark/Primary Text: `text-slate-900`
  - Subtle/Secondary Text: `text-slate-500`

## Components & Layouts
- **Buttons**:
  - Primary CTA: `bg-blue-600 text-white rounded-md px-6 py-3 font-medium hover:bg-blue-700 transition-colors`.
  - Secondary CTA: `bg-white text-slate-800 border-2 border-slate-200 rounded-md px-6 py-3 font-medium hover:border-slate-300 transition-colors`.
- **Cards (Services, Process, Trust Points)**:
  - White background, subtle shadow (`shadow-sm` or `shadow-md`), rounded corners (`rounded-lg`), subtle border (`border border-slate-100`).
- **Icons**:
  - Consistent sizing (e.g. `w-8 h-8`, `w-12 h-12`).
  - Colors matching brand or context. (e.g., `text-blue-600` for primary icons).
- **Navigation/Footer**:
  - Navigation: Clean white background, sticky to top, distinct link hover effects (e.g., text color darken).
  - Footer: Dark background (`bg-slate-900`), white text, structured layout.

## Do's and Don'ts
- **DO** ensure high contrast for all text (e.g., avoid light gray on white).
- **DO** use generous padding around sections (e.g., `py-16 md:py-24`).
- **DO** ensure all stock images used fit the "industrial/factory/logistics/business" B2B theme realistically.
- **DON'T** use highly stylized, cartoony illustrations or loud, chaotic colors. Keep it corporate.
- **DON'T** hardcode arbitrary pixels; use tailwind classes exclusively.
