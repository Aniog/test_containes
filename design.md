# Velmora Fine Jewelry Design System

## Mood & Tone
Quiet luxury, warm, editorial. Premium demi-fine jewelry.
The vibe is elegant, not loud, not discount-looking, not generic e-commerce.

## Typography
- **Headings & Product Names:** Cormorant Garamond (or Playfair Display) - Serif, elegant
  - Use `font-serif` mapped to 'Cormorant Garamond' in Tailwind
  - Product names in `uppercase tracking-widest`
- **Body & UI:** Inter / Manrope - Clean sans-serif
  - Use `font-sans` mapped to 'Manrope' or 'Inter'

## Color Palette
- **Base/Background:** Soft neutral/editorial. #FAFAFA (off-white, very light warm gray)
- **Text:** Deep brown/black or charcoal for contrast. #1C1917 (neutral-900)
- **Accent/Brand:** Warm gold/champagne. #D4AF37 (metallic gold representation) or a deeper warm brown #57402C.
- **Secondary Backgrounds:** Soft beige or pale stone. #F2EEEA

### Tailwind Colors
```css
@theme {
  --color-sand-50: #FCFAF8;
  --color-sand-100: #F2EEEA;
  --color-sand-900: #1C1917;
  --color-gold-500: #D4AF37;
  --color-gold-600: #C19B2E;
  --color-gold-900: #57402C;
  --font-serif: "Cormorant Garamond", ui-serif, Georgia, Cambria, "Times New Roman", Times, serif;
  --font-sans: "Inter", "Manrope", ui-sans-serif, system-ui, sans-serif;
}
```

## Styling
- Generous whitespace (`py-24`, `gap-16`)
- Large editorial imagery
- Thin hairline dividers (`border-sand-100` or `border-neutral-200`)
- Restrained accent color
- Subtle hover transitions, soft shadows
- Buttons: Premium feel, solid or outlined. High padding (`px-8 py-3`).
