# Design Guidelines - ARTITECT MACHINERY

## Visual Style: Elegant & User-Friendly
The industrial nature of folding machines requires a sense of precision and reliability, while the "elegant" request suggests a clean, high-end aesthetic.

### Typography
- **Primary Font**: Inter (Already specified in system instructions)
- **Heading Style**: Bold, precise, slightly tracked out for a modern industrial feel.
  - Tailwind: `font-bold tracking-tight text-slate-900`
- **Body Style**: Clean, readable, with generous line height.
  - Tailwind: `text-slate-600 leading-relaxed`

### Color Palette
- **Primary (Industrial Blue/Black)**: Deep, professional blue-grey.
  - Tailwind: `bg-slate-900`, `text-slate-900`, `border-slate-200`
- **Accent (Precision Gold/Yellow)**: A sophisticated gold or muted yellow to signify quality and "artistry" (ARTITECT).
  - Tailwind: `bg-amber-500`, `text-amber-500`
- **Background**: 
  - Main: `bg-white`
  - Subtle Sections: `bg-slate-50`
- **Text**: `text-slate-900` (headings), `text-slate-600` (body)

### UI Elements
- **Cards**: Minimalist with subtle borders and very soft shadows.
  - Tailwind: `bg-white border border-slate-200 rounded-xl shadow-sm hover:shadow-md transition-shadow`
- **Buttons**:
  - Primary: `bg-slate-900 text-white px-6 py-3 rounded-lg font-medium hover:bg-slate-800 transition-colors`
  - Secondary: `border border-slate-200 text-slate-900 px-6 py-3 rounded-lg font-medium hover:bg-slate-50 transition-colors`
- **Navigation**: Sticky, transparent-to-white backdrop-blur.

### Spacing
- Generous whitespace to highlight product precision. 
- Standard section padding: `py-16 md:py-24`

### Imagery
- High-quality photography of machines and sheet metal results.
- Focus on close-ups of precise folds and engineering details.
