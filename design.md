# Design System for SSourcing China

## Typography
Main Font: Inter (Google Font)
Use clear, sans-serif typography for a professional B2B look.
- Headings: `font-bold tracking-tight text-slate-900`
- Body Text: `text-slate-600 leading-relaxed text-base md:text-lg`

## Colors
A trustworthy, international business color palette.
- Primary (Trust/Action): A strong blue. e.g. Tailwind `blue-600` for default, `blue-700` for hover. Hex: `#2563EB`
- Secondary (Accent): A secondary color like `teal-500` or `cyan-600` for highlights if needed.
- Backgrounds: 
  - Main background: `bg-slate-50` or `bg-white` 
  - Alternating section backgrounds: `bg-slate-100` OR `bg-slate-900` for dark footer/hero overlay.
- Text: 
  - Main Text: `text-slate-900` 
  - Muted Text: `text-slate-500` or `text-slate-600`

## Components & Visual Style
- Clean lines, minimal shadows, slight rounded corners `rounded-md` or `rounded-lg`.
- Buttons: 
  - Primary: `bg-blue-600 text-white hover:bg-blue-700 shadow-sm border border-transparent`
  - Secondary/Outline: `bg-transparent text-blue-600 border border-blue-600 hover:bg-blue-50`
- Cards: `bg-white shadow-sm border border-slate-200 rounded-lg p-6` (Use for services, products, case studies)

## Icons
Use clear, solid or outline icons from `lucide-react` (e.g., CheckCircle, MapPin, Globe, ShieldCheck).

## Layout & Spacing
- Use large whitespace to ensure it looks clean and modern.
- Sections: `py-16 md:py-24`
- Grid gaps: `gap-8` or `gap-12`
- Container: `container mx-auto px-4 md:px-6`
