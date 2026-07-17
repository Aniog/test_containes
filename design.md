# Velmora Fine Jewelry Design System

## Visual Identity
- **Mood**: Quiet luxury, warm, editorial, premium.
- **Palette**:
    - **Primary (Deep Base)**: #1A1A1A (Rich Onyx)
    - **Background (Soft Neutral)**: #FDFCFB (Warm Alabaster)
    - **Accent (Warm Metallic)**: #C5A059 (Soft Gold)
    - **Secondary Accent**: #7D7C7A (Taupe Grey)
    - **Text**: #2D2D2D (Onyx Grey)
- **Typography**:
    - **Headings & Product Names**: "Cormorant Garamond", serif. Product names in UPPERCASE with letter-spacing (tracking-widest).
    - **Body & UI**: "Inter", sans-serif. Clean, readable, slightly generous line-height.
- **Components**:
    - **Buttons**: Pill-shaped or sharp rectangular for editorial feel. Solid #C5A059 for primary, outlined for secondary.
    - **Dividers**: 1px hairline (border-neutral-200).
    - **Imagery**: Large editorial shots, warm lighting, narrow depth of field.
    - **Shadows**: Very soft, subtle (shadow-sm).

## Tailwind Classes Mapping
- **Heading**: `font-serif tracking-tight`
- **Product Name**: `font-serif uppercase tracking-[0.2em]`
- **Body**: `font-sans text-neutral-700 leading-relaxed`
- **Primary Button**: `bg-[#C5A059] text-white hover:bg-[#B38D46] transition-colors px-8 py-3 uppercase tracking-[0.1em] text-sm`
- **Secondary Button**: `border border-[#C5A059] text-[#C5A059] hover:bg-[#FDFCFB] transition-colors px-8 py-3 uppercase tracking-[0.1em] text-sm`
- **Section**: `py-20 md:py-32 bg-[#FDFCFB]`
- **Container**: `max-w-7xl mx-auto px-4 sm:px-6 lg:px-8`

## UI Tokens
- **Hover**: 0.3s ease-in-out transitions.
- **Radius**: Minimal (rounded-sm or sharp corners).
- **Whitespace**: Generous gutters and vertical margins.
