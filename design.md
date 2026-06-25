# SSourcing China - B2B Website Design Guidelines

## Visual Style Goal
Clean, trustworthy, international, transparent, and strictly professional B2B. No exaggerated graphics or overly playful elements. Realistic visualizations (simulated with standard sizing) of factories, logistics, and quality control.

## Colors
- **Primary**: Deep Trusted Navy (e.g., `#1e3a8a`, equivalent to Tailwind `blue-900`)
- **Secondary**: Active Sourcing Blue (e.g., `#2563eb`, Tailwind `blue-600`)
- **Accent/Action**: Conversion Orange/Amber (e.g., `#ea580c` Tailwind `orange-600` or `#d97706` Tailwind `amber-600`) - Used sparingly for "Get a Quote" CTAs.
- **Backgrounds**: 
  - Main background: `#ffffff` (White - Tailwind `bg-white`)
  - Off-white/Gray sections: `#f8fafc` (Tailwind `slate-50`) or `#f1f5f9` (Tailwind `slate-100`) for alternating sections.
- **Text**:
  - Headings: `#0f172a` (Tailwind `slate-900`)
  - Body text: `#334155` (Tailwind `slate-700`)
  - Muted/Secondary text: `#64748b` (Tailwind `slate-500`)

## Typography
- **Heading Font**: Inter (weight `600` to `800`) or standard systemic sans-serif. Use tight tracking (`tracking-tight`) for large headlines.
- **Body Font**: Inter (weight `400`). Line height should be generous (`leading-relaxed`) for readability on long content.

## Borders, Shadows, and Radii
- **Rounding**: Small rounding (Tailwind `rounded` or `rounded-md`, ~4px-6px). Avoid heavily rounded/pill shapes except for buttons. B2B implies sharp, structured framing.
- **Shadows**: Subtle, crisp shadows (Tailwind `shadow-sm`, `shadow-md` for hovered cards). Avoid diffuse, glowing shadows.
- **Borders**: Thin, definitive borders (Tailwind `border`, `border-slate-200`) separating technical details or data tables.

## Spacing and Layout
- **Containers**: Max width `max-w-7xl` centered (`mx-auto`) to give plenty of breathing room.
- **Section Padding**: `py-16` or `py-24` (`md:py-20`, `lg:py-32`) to separate concerns cleanly.
- **Layouts**: Standard column grids (2-col or 3-col grids for features, standard left-right splits for images vs text). Always adapt grids for mobile.

## Do's
- Emphasize numbers (years experience, supplier network size, inspection rate).
- Always ensure text contrast ratios are WCAG compliant (dark text on light background; white text on dark primary backgrounds).
- Use `data-strk-img` and `data-strk-bg` extensively with contextually specific IDs for factory inspections and shipping logistics visuals.
- Utilize clean icons from Lucide to represent Services (ShieldCheck for QC, Ship for shipping, Factory for supplier sourcing).

## Don'ts
- No neon colors, cartoonish graphics, or overly soft pastel palettes outside of structural grays.
- Avoid centered text for long paragraphs; stick to left alignment for ease of reading.
- No tiny light-gray text on white backgrounds. Keep essential info readable.
