# Design Strategy: Velmora Fine Jewelry

## Visual Mood
Quiet luxury, warm, editorial, and sophisticated. The design avoids the "discount e-commerce" look in favor of a high-end boutique feel. Generous whitespace, fine lines (hairline dividers), and large-scale imagery are key.

## Color Palette
- **Background (Primary):** `#FDFCF8` (Ecru / Cream) - A warm, off-white base that feels more premium than pure white.
- **Foreground (Primary):** `#1A1A1A` (Deep Charcoal) - For high-contrast, elegant typography.
- **Accent (Gold):** `#C5A059` (Muted Gold) - Used sparingly for buttons, icons, or subtle highlights.
- **Muted / Secondary:** `#717171` - For less important UI elements and secondary text.
- **Divider:** `#E5E5E5` - Very thin (1px) lines for clear but subtle separation.

## Typography
- **Headings & Product Names:** `Cormorant Garamond` (Serif). Elegant, timeless. Product names should be UPPERCASE with `tracking-widest` (letter-spacing).
- **Body & UI:** `Inter` (Sans-serif). Clean, legible, modern.
- **Buttons:** Sans-serif, bold, uppercase for a high-end feel.

## UI Components (Tailwind Classes)
- **Container:** `max-w-7xl mx-auto px-4 sm:px-6 lg:px-8`
- **Buttons (Primary):** `bg-[#1A1A1A] text-white px-8 py-3 tracking-widest text-xs font-semibold hover:bg-opacity-90 transition-all duration-300`
- **Buttons (Outline):** `border border-[#1A1A1A] text-[#1A1A1A] px-8 py-3 tracking-widest text-xs font-semibold hover:bg-[#1A1A1A] hover:text-white transition-all duration-300`
- **Inputs:** `bg-transparent border-b border-[#E5E5E5] focus:border-[#C5A059] outline-none py-2 transition-all duration-300`
- **Dividers:** `h-[1px] bg-[#E5E5E5] w-full`

## Do's and Don'ts
### Do:
- Use large editorial imagery.
- Maintain consistent letter spacing for uppercase text.
- Use subtle animations (framer-motion).
- Keep the design mobile-first.
- Use `data-strk-img` and `data-strk-bg` for stock images.

### Don't:
- Use aggressive shadows or gradients.
- Use loud accent colors (e.g., bright red or blue).
- Overcrowd the sections; favor white space.
- Use generic sans-serif for headlines.
