# TITAN-CORE Design System — Cyber-Industrial

## Brand Identity
TITAN-CORE is a custom hardware builder with a "Cyber-Industrial" aesthetic. The visual language combines raw industrial materials with high-tech precision.

## Color Palette
- **Charcoal** `#1A1A1B` — Primary background. Use: `bg-[#1A1A1B]`
- **Brushed Silver** `#C0C0C0` — Primary text, borders, accents. Use: `text-[#C0C0C0]`
- **Deep Charcoal** `#111112` — Darker surface. Use: `bg-[#111112]`
- **Blueprint Blue** `#1E3A5F` — Blueprint page accent. Use: `bg-[#1E3A5F]`
- **Blueprint Line** `#4A90D9` — Blueprint grid lines and schematics. Use: `text-[#4A90D9]`
- **Molten Orange** `#FF6B2B` — Forge accent, CTA highlights. Use: `text-[#FF6B2B]`
- **Steel White** `rgba(255,255,255,0.87)` — High-contrast text on dark. Use: `text-white/90`
- **Glass Border** `rgba(192,192,192,0.2)` — Frosted glass container borders. Use: `border-[#C0C0C0]/20`

## Typography
- **Font**: Orbitron (headings, display) + Inter (body)
- **Display**: `font-orbitron text-4xl md:text-6xl font-bold tracking-widest uppercase`
- **Heading**: `font-orbitron text-2xl font-semibold tracking-wider uppercase`
- **Subheading**: `font-orbitron text-lg tracking-wide`
- **Body**: `font-inter text-base text-[#C0C0C0]`
- **Caption**: `font-inter text-sm text-[#C0C0C0]/60`

## Glassmorphism Containers
The signature visual element. All content cards and panels use frosted glass.
```css
backdrop-filter: blur(20px);
background: rgba(255, 255, 255, 0.04);
border: 1px solid rgba(192, 192, 192, 0.2);
border-radius: 12px;
```
Tailwind: `backdrop-blur-xl bg-white/[0.04] border border-[#C0C0C0]/20 rounded-xl`

## Metallic Gradients
- **Silver gradient**: `bg-gradient-to-br from-[#C0C0C0] via-[#888] to-[#C0C0C0]`
- **Dark metallic**: `bg-gradient-to-b from-[#2a2a2b] to-[#1A1A1B]`
- **Blueprint overlay**: `bg-gradient-to-br from-[#1E3A5F]/80 to-[#0a1628]/90`

## Spacing & Layout
- Section padding: `py-20 px-6 md:px-12 lg:px-24`
- Card padding: `p-6 md:p-8`
- Grid gap: `gap-6 md:gap-8`
- Max content width: `max-w-7xl mx-auto`

## Borders & Dividers
- Glass border: `border border-[#C0C0C0]/20`
- Accent line: `border-t border-[#C0C0C0]/40`
- Blueprint grid: `border border-[#4A90D9]/30`

## Do's
- Always use `backdrop-blur-xl` on content containers over image backgrounds
- Use `tracking-widest uppercase` for all headings
- Apply metallic gradients to hero text and key UI elements
- Use `text-[#C0C0C0]` as default text color (never pure white on dark)
- Add subtle `shadow-lg shadow-black/50` to glass panels

## Don'ts
- Never use pure white backgrounds
- Never use colorful/playful fonts
- Never use rounded-full on large containers (prefer rounded-xl or rounded-2xl)
- Never use bright saturated colors except Molten Orange for accents
