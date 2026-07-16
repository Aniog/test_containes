# Design Guidelines - Velmora Fine Jewelry

## Visual Identity
- **Mood**: Quiet luxury, warm, editorial, premium demi-fine jewelry.
- **Palette**:
  - Primary: `#1A1A1A` (Deep Off-Black) - `text-stone-900`
  - Background: `#FDFCFB` (Warm White) - `bg-stone-50`
  - Accent: `#C5A059` (Soft Gold) - `text-amber-700`
  - Neutral: `#E5E5E5` (Light Grey) - `border-stone-200`
- **Typography**:
  - Headings/Product Names: `Cormorant Garamond` (Serif). Product names in UPPERCASE with wide letter-spacing.
  - Body/UI: `Inter` (Sans-serif).
- **Styling**:
  - Thin hairline dividers (`border-stone-200`).
  - Generous whitespace.
  - Large editorial imagery.
  - Subtle hover transitions (`transition-all duration-300`).
  - Soft shadows (`shadow-sm`).
  - Buttons: Solid accent (`bg-stone-900 text-white`) or outlined accent (`border border-stone-900 text-stone-900`).

## Tailwind Classes Examples
- **Heading**: `font-serif tracking-widest uppercase`
- **Body**: `font-sans leading-relaxed text-stone-600`
- **Button**: `px-8 py-3 bg-stone-900 text-white hover:bg-stone-800 transition-colors uppercase tracking-widest text-sm`
- **Section**: `py-20 px-6 max-w-7xl mx-auto`
