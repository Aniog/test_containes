# MicroCosmos — Visual Design System

## Theme
A futuristic, scientific look inspired by deep-field microscopy and bioluminescence. Dark, immersive backgrounds with luminous accents in cyan, violet, and lime. Imagery feels like looking through a high-resolution microscope into an unseen universe.

## Color Palette
- Background base: near-black indigo `bg-slate-950`, `bg-[#05070f]`
- Surfaces / cards: `bg-white/5`, `bg-slate-900/60` with `backdrop-blur-md`
- Borders: `border-white/10`, `border-cyan-400/20`
- Primary accent (cyan glow): `text-cyan-400`, `bg-cyan-500`, gradient `from-cyan-400 to-sky-500`
- Secondary accent (violet): `text-violet-400`, gradient `from-fuchsia-500 to-violet-500`
- Tertiary accent (bio-green): `text-emerald-300`, gradient `from-emerald-400 to-lime-300`
- Text primary: `text-slate-100`
- Text muted: `text-slate-300`, `text-slate-400`

## Typography
- Headings: `font-serif` (Fraunces or Playfair) for an editorial / scientific journal feel; weights 500–700.
- Body: `Inter`, weights 300–500.
- Numerals / labels: `font-mono` (JetBrains Mono) used sparingly for stats and captions.
- Hero title: `text-6xl md:text-8xl` tight tracking `tracking-tight`.
- Section headings: `text-4xl md:text-5xl`.
- Body copy: `text-base md:text-lg leading-relaxed`.

## Spacing & Layout
- Section vertical padding: `py-24 md:py-32`.
- Max content width: `max-w-6xl mx-auto px-6`.
- Grid gaps: `gap-8` standard, `gap-12` for primary sections.
- Generous whitespace; no cramped rows.

## Visual Effects
- Soft radial gradients behind hero (`bg-[radial-gradient(...)]`).
- Subtle glow on cards on hover: `hover:shadow-[0_0_40px_rgba(34,211,238,0.15)]`.
- Use thin hairlines `border-white/10` rather than heavy borders.
- Rounded corners: `rounded-2xl` for cards, `rounded-full` for pills.
- Numbers and stats can have gradient text via `bg-clip-text text-transparent bg-gradient-to-r`.

## Do's
- Use Lucide icons sparsely; always with `strokeWidth={1.5}` and accent color.
- Pair imagery (microscope photos) with text in alternating layouts.
- Keep paragraphs short, 2–3 sentences.
- Maintain strong contrast: light text on dark surfaces.

## Don'ts
- No pure white backgrounds.
- No hardcoded hex magic numbers in components beyond the palette above.
- No emojis in headings or buttons.
- No low-contrast text (e.g. `text-slate-600` on `bg-slate-900`).
