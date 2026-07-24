# Velmora Fine Jewelry - Design System

## Visual Identity
- **Mood**: Quiet luxury, warm, editorial.
- **Color Palette**:
  - `primary`: #2D2926 (Charcoal Black - for strong contrast)
  - `secondary`: #F7F5F2 (Soft Stone - background)
  - `accent`: #BFA181 (Warm Gold - metallic accent)
  - `muted`: #706F6C (Warm Grey - secondary text)
  - `white`: #FFFFFF
- **Typography**:
  - `serif`: 'Cormorant Garamond', serif (Headings) - `font-serif`
  - `sans`: 'Manrope', sans-serif (Body & UI) - `font-sans`
- **Spacing**: Generous whitespace, 1px hairline dividers.
- **Transitions**: Subtle hover effects (opacity, slight scale).

## Tailwind Classes
- **Heading**: `font-serif uppercase tracking-[0.2em]`
- **Body**: `font-sans text-muted-foreground`
- **Button (Solid)**: `bg-primary text-white px-8 py-3 font-sans tracking-widest uppercase text-xs hover:bg-opacity-90 transition-all`
- **Button (Outline)**: `border border-primary text-primary px-8 py-3 font-sans tracking-widest uppercase text-xs hover:bg-primary hover:text-white transition-all`

## Do's
- Use large editorial imagery.
- Maintain wide letter spacing for uppercase text.
- Use thin dividers (`border-t border-black/10`).

## Don'ts
- No loud or bright colors.
- No heavy shadows.
- No rounded corners on buttons (keep them sharp/classic).
