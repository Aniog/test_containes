# ARTITECT MACHINERY — Design System

## Brand Personality
Premium industrial machinery manufacturer. Elegant yet approachable.
The aesthetic blends deep engineered confidence with the warmth of fine metalwork.

## Color Tokens (Tailwind v4 `@theme`)
- `navy-950` `#0B1220` — primary deep, used for hero, dark sections, headings on light
- `navy-900` `#101A2E` — slightly lifted navy
- `steel-800` `#1E3A5F` — section accents, secondary CTAs
- `steel-600` `#3D5A80` — hover states, links
- `steel-200` `#CBD5E1` — soft borders on dark
- `copper-500` `#B8754A` — primary accent (warm metallic, the brand signature)
- `copper-600` `#A36238` — copper hover
- `copper-100` `#F1E2D3` — copper tinted background
- `ink-900` `#0F172A` — body text on light
- `ink-700` `#334155` — secondary body
- `ink-500` `#64748B` — tertiary / muted text
- `paper-50` `#F8F6F2` — warm off-white page surface
- `paper-100` `#EFEBE3` — card surface / tinted sections
- `paper-200` `#E2DCCD` — dividers
- `mist-100` `#E8ECF2` — cool section background
- `white` `#FFFFFF`

## Typography
- Headings: `Manrope` (300–800), tight tracking on large display, generous letter-spacing on small caps.
- Body: `Inter` (300–700), relaxed line-height 1.6.
- Use `font-display` utility for headings; `font-sans` for body.

## Spacing & Layout
- Base unit: 4px. Sections use 96–128px vertical padding on desktop, 64px on mobile.
- Container max width 1280px (Tailwind `max-w-7xl`).
- Generous whitespace. No tight, cramped compositions.

## Shape & Elevation
- Card radius: `rounded-2xl` (16px). Buttons `rounded-full` or `rounded-xl`.
- Shadows: layered, soft, neutral. Never harsh black drop shadows.
  - `shadow-sm`, `shadow-md`, `shadow-lg` only with `shadow-slate-900/5` or `shadow-slate-900/10`.
- Borders: 1px, low-opacity steel (`border-steel-200/60`) or `border-ink-900/10`.

## Visual Motifs
- Subtle gradient mesh in hero (navy → steel with a copper glow).
- Hairline rules and grid lines suggest precision engineering.
- Faint metallic diagonal stripes in section dividers.
- Lucide icons throughout (industrial set: Cpu, Settings2, Ruler, ShieldCheck, Wrench, Factory, Layers, ArrowRight, ChevronRight, Check, etc.).

## Do
- Use the warm copper accent sparingly — buttons, key icons, underlines.
- Pair deep navy with paper-50 to create elegant contrast.
- Lead with strong, confident headings; short paragraphs underneath.
- Hover states should feel mechanical: subtle lift, copper underline, never bouncy.

## Don't
- No rainbow gradients or playful illustrations.
- No more than 2 accent colors in any single view.
- No pure black text — always tinted with slate/ink.
- No emoji. Use Lucide icons.
- No small illegible text. Minimum body 15px; minimum muted text 13px with explicit readable color.