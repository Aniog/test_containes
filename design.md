# Velmora Fine Jewelry - Design System

## Visual Identity
**Mood**: Quiet luxury, warm, editorial, premium demi-fine.
**Typography**:
- Headings & Product Names: `Cormorant Garamond` (Serif)
- Body & UI: `Inter` or `Manrope` (Sans-serif)
- Product names are often UPPERCASE with wide letter-spacing (`tracking-widest`).

## Color Palette
- **Primary (Background)**: `#FCFAF7` (Velvety Cream / Off-white)
- **Secondary (Accents)**: `#1A1A1A` (Deep Obsidian / Black for contrast)
- **Accent (Metallic/Warm)**: `#D4AF37` (Soft Gold accent - use sparingly)
- **Muted**: `#E5E7EB` (Subtle hairlines)
- **Text (Primary)**: `#1A1A1A`
- **Text (Secondary/Muted)**: `#6B7280`

## Components Style
- **Buttons**: Pill-shaped or sharp rectangular based on context. High contrast.
- **Inputs**: Minimalist, thin borders.
- **Cards**: Generous whitespace, no borders, soft shadows or flat editorial style.
- **Dividers**: 1px hairline (`border-t border-gray-100`).

## Tailwind Implementation Examples
- Heading: `font-serif text-3xl md:text-5xl uppercase tracking-widest text-neutral-900`
- Body: `font-sans text-neutral-600 leading-relaxed`
- CTA Button: `bg-neutral-900 text-white px-8 py-3 hover:bg-neutral-800 transition-all duration-300`
- Section Spacer: `py-16 md:py-24`
