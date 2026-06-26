# Design Guidelines - SSourcing China

## Visual Style
Clean, professional, and trustworthy B2B aesthetic. Focus on clarity and reliability.

## Typography
- **Font Family**: 'Inter', system-ui, sans-serif
- **Headings**: Semi-bold to Bold (font-weight: 600-700)
- **Body**: Regular (font-weight: 400)
- **Scale**: 
  - H1: text-4xl lg:text-5xl
  - H2: text-3xl lg:text-4xl
  - H3: text-2xl
  - Body: text-base

## Colors
- **Primary**: Brand Blue (hex: #0F4C81) - Represents trust and professionalism.
- **Secondary**: Slate Gray (hex: #475569) - For text and borders.
- **Accent**: Safety Orange (hex: #F97316) - Used sparingly for CTAs and highlights.
- **Background**: White (#FFFFFF) and Light Gray (#F8FAFC) for sectional contrast.

## Layout
- **Containers**: max-w-7xl mx-auto px-4 sm:px-6 lg:px-8
- **Spacing**: Use standard Tailwind spacing (p-4, m-4, gap-4). Section padding: py-16 lg:py-24.
- **Cards**: Bordered with soft shadows (shadow-sm) and rounded corners (rounded-lg).

## UI Components (shadcn/ui)
- Button: Primary (Brand Blue), Outline, Ghost.
- Form: Simple, labeled inputs with clear focus states.
- Icons: Lucide React for consistent iconography.

## Images
- Use realistic sourcing/QC/office visuals via `data-strk-img`.
- Ratios: 16:9 for hero, 4:3 or 1:1 for feature/product thumbnails.
- Widths: 600 for cards, 1200 for heroes.
