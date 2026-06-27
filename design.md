# Design Guidelines - Velmora Fine Jewelry

## Visual Style: Quiet Luxury, Warm, Editorial

### Typography
- **Headings & Product Names**: Cormorant Garamond (Serif)
  - Style: Elegant, uppercase for product names with wide letter-spacing (`tracking-[0.2em]`).
  - Tailwind: `font-serif`, `tracking-widest`, `uppercase`.
- **Body & UI**: Inter / Manrope (Sans-serif)
  - Style: Clean, readable.
  - Tailwind: `font-sans`.

### Color Palette
- **Primary**: #F9F7F2 (Sand/Cream) - Soft, warm neutral for backgrounds.
- **Secondary**: #1A1A1A (Carbon) - Deep refined base for text and dark sections.
- **Accent**: #D4AF37 (Gold) - Warm metallic for CTA buttons and highlights.
- **Muted**: #E5E1D8 (Soft Grey/Beige) - For borders and secondary backgrounds.

### Layout & Spacing
- **Whitespace**: Generous. Use `py-20`, `px-6`, `gap-12`.
- **Dividers**: Thin hairline dividers. `border-b border-black/5`.
- **Imagery**: Large editorial imagery, full-bleed where possible.

### Components
- **Buttons**: 
  - Solid Accent: `bg-[#D4AF37] text-white hover:bg-[#C4A027] transition-colors px-8 py-3 uppercase tracking-wider text-sm`.
  - Outlined: `border border-black/10 hover:border-black transition-colors px-8 py-3 uppercase tracking-wider text-sm`.
- **Cards**: Minimal, hover effect to swap images.
- **Transitions**: Soft, subtle animations using framer-motion.
- **Shadows**: Very soft, almost imperceptible. `shadow-sm`.

### Do's & Don'ts
- **DO**: Use large, high-quality images of gold jewelry.
- **DO**: Keep typography centered and balanced.
- **DON'T**: Use loud colors or heavy gradients.
- **DON'T**: Crowded layouts with too many elements.
- **DON'T**: Use generic system fonts.
