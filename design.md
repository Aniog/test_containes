# Design Guidelines: ARTITECT MACHINERY

## Visual Style: Elegant but User Friendly

### Typography
- **Headings**: Strong, bold sans-serif. 'Inter' or 'Montserrat' are preferred.
  - Desktop: `text-5xl font-extrabold tracking-tight`
  - Mobile: `text-3xl font-bold`
- **Body**: Clean, readable sans-serif.
  - `text-base leading-relaxed text-slate-600`

### Color Palette
- **Primary**: Deep Industrial Blue (`#1e293b`) - Tailwind `slate-800`
- **Secondary**: Steel Gray (`#64748b`) - Tailwind `slate-500`
- **Accent**: Precision Orange/Gold (`#f59e0b`) - Tailwind `amber-500` (Used for CTAs and highlights)
- **Background**: Light Gray / White (`#f8fafc`) - Tailwind `slate-50`

### Spacing & Layout
- Global Padding: `px-4 sm:px-6 lg:px-8`
- Section Padding: `py-12 sm:py-24`
- Card Border Radius: `rounded-xl`
- Shadows: `shadow-sm` for cards, `shadow-lg` for active elements.

### Components
- **Buttons**:
  - Primary: `bg-slate-900 text-white hover:bg-slate-800 rounded-lg px-6 py-3 font-medium transition-all`
  - Secondary: `bg-white text-slate-900 border border-slate-200 hover:bg-slate-50 rounded-lg px-6 py-3 font-medium transition-all`
- **Inputs**: `border-slate-200 focus:ring-2 focus:ring-slate-900 rounded-lg`

### Do's
- Use high-quality industrial imagery.
- Space out content for elegance.
- Use clear, descriptive labels for technical products.
- Maintain high contrast for readability.

### Don'ts
- Use overly bright or neon colors.
- Crowded layouts.
- Comic fonts or informal styles.
- Invisible text (ensure contrast).
