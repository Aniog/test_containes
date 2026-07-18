# Visual Style Guide - Business Dashboard

## Typography
- **Primary Font**: Inter (Google Fonts)
- **Headings**: Semi-bold (600) or Bold (700) for hierarchy. `tracking-tight` for a modern look.
- **Body**: Regular (400) for readability. `text-slate-600` for secondary text.

## Color Palette
- **Primary**: Slate (`text-slate-900`, `bg-slate-900`)
- **Accent**: Indigo (`text-indigo-600`, `bg-indigo-600`)
- **Background**: Light gray/white (`bg-slate-50`, `bg-white`)
- **Borders**: Subtle gray (`border-slate-200`)
- **Status Colors**:
  - Success: Emerald (`text-emerald-600`, `bg-emerald-50`)
  - Warning: Amber (`text-amber-600`, `bg-amber-50`)
  - Error: Rose (`text-rose-600`, `bg-rose-50`)

## Components
- **Cards**: `bg-white`, `rounded-xl`, `border border-slate-200`, `shadow-sm`
- **Buttons**:
    - Primary: `bg-indigo-600 text-white hover:bg-indigo-700 transition-colors`
    - Secondary: `bg-white text-slate-900 border border-slate-200 hover:bg-slate-50 transition-colors`
- **Inputs**: `border-slate-200 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 rounded-lg`

## Spacing & Layout
- **Containers**: `max-w-7xl mx-auto px-4 sm:px-6 lg:px-8`
- **Section Spacing**: `py-12` or `my-12`
- **Card Padding**: `p-6`

## Do's and Don'ts
### Do's
- Use consistent padding and margins.
- Ensure high contrast for readability.
- Use Lucide icons for visual context.
- Implement responsive grids (1 col mobile, 2-3 col desktop).

### Don'ts
- Don't use harsh black (#000) for text; use `slate-900`.
- Don't use tight spacing; allow content to breathe.
- Don't use magic numbers for colors or spacing; stick to Tailwind tokens.
