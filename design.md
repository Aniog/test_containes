# Global Style Design

## Typography
- **Font Family**: Inter, system-ui, sans-serif
- **Base Size**: 16px
- **Headings**: Semibold (600) or Bold (700)
- **Body**: Regular (400)

## Colors
- **Primary**: Slate 900 (`#0f172a`)
- **Primary Foreground**: Slate 50 (`#f8fafc`)
- **Background**: White (`#ffffff`)
- **Foreground**: Slate 950 (`#020617`)
- **Muted**: Slate 500 (`#64748b`)
- **Muted Background**: Slate 100 (`#f1f5f9`)
- **Border**: Slate 200 (`#e2e8f0`)
- **Accent**: Indigo 600 (`#4f46e5`)
- **Destructive**: Red 600 (`#dc2626`)
- **Success**: Emerald 600 (`#059669`)

## Spacing
- **Gap**: 1rem (16px)
- **Padding**: 1.5rem (24px) for cards, 1rem (16px) for mobile
- **Radius**: Large (0.5rem / 8px)

## Components
- **Buttons**:
  - `bg-slate-900 text-slate-50 hover:bg-slate-800 disabled:opacity-50`
- **Cards**:
  - `bg-white border border-slate-200 rounded-lg shadow-sm`
- **Inputs**:
  - `border border-slate-200 rounded-md px-3 py-2 focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none transition-all`
- **Empty States**:
  - `flex flex-col items-center justify-center p-8 text-slate-500`

## Do's
- Use explicit foreground colors for all backgrounds.
- Maintain high contrast for accessibility.
- Use rounded corners consistently.
- Implement responsive padding.

## Don'ts
- Use invisible text (matching background).
- Use low-contrast color combinations.
- Hardcode hex codes in components; use Tailwind semantic classes.
