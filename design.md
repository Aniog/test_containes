# Visual Style for ARTITECT MACHINERY

## Typography
- **Global Font**: 'Inter', sans-serif. Used for its clean, geometric, and modern aesthetic.
- **Headings**: Use bold weights (`font-bold`) to command presence. Often uppercase with wide tracking (`uppercase tracking-widest`) for an elegant industrial look.
- **Body Text**: Readable sizes with good line height (`leading-relaxed`), generally `text-slate-600` or `text-slate-400` depending on the background.

## Colors
The color palette reflects an industrial, premium, and reliable brand.
- **Primary / Backgrounds**: Deep Slate `slate-900` (#0f172a). Represents heavy machinery, iron, and solidity.
- **Secondary Backgrounds**: Light Slate `slate-50` (#f8fafc). Used for clear, elegant contrast on content pages.
- **Accent**: Vibrant Blue `blue-600` (#2563eb) and `blue-400` (#60a5fa). Represents modern technology, precision, electricity, and user-friendly interfaces.
- **Text on dark**: `white` or `slate-300`/`slate-400`.
- **Text on light**: `slate-900` or `slate-600`.

## Layout & Spacing
- **Container**: Max width constrained using `max-w-7xl` with auto margins for centering.
- **Spacing**: Generous padding (`py-24`, `p-8`) to maintain an "elegant" uncluttered feel, despite the heavy machinery subject matter.
- **Borders & Shadows**: Subtle borders (`border-slate-100` on light, `border-slate-800` on dark) and minimal shadows (`shadow-sm`, `shadow-xl`) to give depth without overcomplicating.

## Elements
- **Buttons / Calls to Action**: Solid blocks of color with uppercase text and wide tracking. Often accompanied by an icon like an arrow. E.g., `bg-blue-600 text-white uppercase tracking-widest`.
- **Images**: aspect-ratio controlled (e.g., `aspect-[4/3]`) with overlay gradients (`bg-gradient-to-t`) and scale-on-hover effects to feel dynamic and premium.
- **Icons**: Clean line icons (Lucide React) combined with small tinted background squares to draw attention.

## Do's and Don'ts
- **Do**: Maintain high contrast between text and background.
- **Do**: Use uppercase tracking for small subheadings and tags to convey a "blueprint/engineering" feel.
- **Don't**: Clutter the UI. Let the imagery of the machines and the clean text do the talking.
- **Don't**: Use overly rounded corners. Keep `rounded-none` or very small default rounded corners for an industrial edge.