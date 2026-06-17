# ARTITECT MACHINERY — Design System

A refined industrial brand language for a maker of double-folding machines and sheet-metal folders. Elegant, confident, and easy for engineers and procurement managers to navigate.

## Mood
- Premium engineering, calm precision, architectural minimalism.
- Lots of whitespace, subtle hairlines, restrained accents.
- Photography is dark, moody, with crisp metallic highlights.

## Color Palette

| Token        | Hex      | Tailwind class examples                      | Use                                |
| ------------ | -------- | -------------------------------------------- | ---------------------------------- |
| ink          | #0E141B  | `bg-[#0E141B]` `text-[#0E141B]`              | Primary text, dark sections        |
| graphite     | #1B2430  | `bg-[#1B2430]`                                | Footer / deep panels               |
| steel        | #4B5563  | `text-slate-600` (close)                     | Body text on light                 |
| mist         | #E6E9EE  | `bg-[#E6E9EE]`                                | Section dividers, soft surfaces    |
| paper        | #F5F6F8  | `bg-[#F5F6F8]`                                | Default page background            |
| white        | #FFFFFF  | `bg-white`                                    | Cards                              |
| brass (accent)| #B89968  | `text-[#B89968]` `bg-[#B89968]`              | Accent only — links, underlines, CTA highlights |
| brass-deep  | #8E7448  | `text-[#8E7448]`                              | Hover state for brass              |

Do:
- Pair `bg-[#0E141B]` with `text-white/90`.
- Pair `bg-[#F5F6F8]` with `text-[#0E141B]`.
- Use `text-[#B89968]` sparingly, for emphasis only.

Don't:
- Don't use brass on large solid blocks; it should feel like fine metal trim.
- Don't put light-gray text (`text-slate-400`) on light backgrounds.

## Typography
- Headings: `Cormorant Garamond` (serif, 300/500). Loaded via Google Fonts in `index.html`.
- Body / UI: `Inter` (sans, 300/400/500/600).
- Eyebrows / labels: Inter, `uppercase tracking-[0.2em] text-xs font-medium`.
- H1 hero: `text-5xl md:text-7xl font-light leading-[1.05]`.
- H2 section: `text-3xl md:text-5xl font-light leading-tight`.
- H3 card: `text-xl md:text-2xl font-medium`.
- Body: `text-base md:text-lg leading-relaxed text-slate-600`.

## Layout
- Page max width: `max-w-7xl mx-auto px-6 md:px-10`.
- Section vertical padding: `py-20 md:py-28`.
- Grid gaps: `gap-8 md:gap-12`.
- Hairline rules: `border-t border-[#0E141B]/10`.

## Components
- Buttons primary: `bg-[#0E141B] text-white hover:bg-[#1B2430] rounded-none px-6 py-3 text-sm tracking-wider uppercase`.
- Buttons ghost: `border border-[#0E141B]/30 text-[#0E141B] hover:border-[#0E141B] rounded-none px-6 py-3 text-sm tracking-wider uppercase`.
- Cards: `bg-white border border-[#0E141B]/10 p-8` (no shadow, no large radius).
- Inputs: `border-b border-[#0E141B]/30 bg-transparent py-3 focus:border-[#B89968] outline-none`.
- Use `rounded-none` or very small radius (`rounded-sm`) only — keep the architectural feel.

## Imagery
- Hero / product backgrounds: dark industrial photography of folding machines, brushed metal, factory floors.
- Use `data-strk-bg` and `data-strk-img` with descriptive nearby text.
- Aspect ratios: hero `16x9`, product card `4x3`, gallery `3x2`.

## Motion
- Subtle: opacity + 8–12px translate on scroll.
- Hover: 200ms ease, color and underline shifts only.

## Don'ts
- No drop shadows on cards.
- No gradients except a single subtle vertical fade on hero overlay.
- No emoji in UI copy.
- No bright pure red/blue/green accents — only ink, paper, and brass.
