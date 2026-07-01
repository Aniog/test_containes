# Visual Style Design

## Typography
- **Primary Font**: 'Inter', sans-serif (Standard Google Font)
- **Headings**: Semi-bold to Bold (font-semibold, font-bold), slate-900
- **Body Text**: Regular (font-normal), slate-600, line-height-relaxed

## Colors
- **Primary**: Indigo-600 (#4f46e5)
- **Secondary**: Slate-600 (#475569)
- **Accent**: Emerald-500 (#10b981)
- **Background**: White (#ffffff) or Slate-50 (#f8fafc)
- **Border**: Slate-200 (#e2e8f0)
- **Error**: Red-500 (#ef4444)
- **Success**: Green-500 (#22c55e)

## Spacing & Layout
- **Containers**: max-w-7xl mx-auto px-4 sm:px-6 lg:px-8
- **Section Spacing**: py-12 md:py-24
- **Gap**: Gap-4 for small elements, Gap-8 for grid layouts
- **Border Radius**: Rounded-lg (8px) or Rounded-xl (12px)
- **Shadows**: Shadow-sm for cards, Shadow-md for hover states

## Components Style (Tailwind Classes)
- **Buttons**:
  - Primary: `bg-indigo-600 text-white hover:bg-indigo-700 px-4 py-2 rounded-md transition-colors font-medium`
  - Secondary: `bg-white text-slate-900 border border-slate-200 hover:bg-slate-50 px-4 py-2 rounded-md transition-colors font-medium`
- **Cards**: `bg-white border border-slate-200 rounded-xl shadow-sm overflow-hidden`
- **Inputs**: `w-full px-3 py-2 border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent`

## Do's and Don'ts
- **Do**: Use semantic HTML, maintain high contrast for accessibility, use consistent spacing.
- **Don't**: Use arbitrary hex codes for primary styles, hardcode font sizes, or use low-contrast text.
