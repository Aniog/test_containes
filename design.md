# Design Guidelines - MicroCosmos

## Visual Style
The MicroCosmos website should evoke a sense of wonder, discovery, and microscopic detail. The design will use a dark, sophisticated theme to make the vibrant microscopic images stand out.

## Typography
- **Heading Font**: 'Inter', sans-serif (800 weight for hero, 700 for section titles)
- **Body Font**: 'Inter', sans-serif (400 weight for readability)
- **Example Tailwind Classes**: `font-extrabold tracking-tight`, `font-semibold`, `text-muted-foreground leading-relaxed`

## Colors
- **Background**: Deep Slate / Black (`bg-slate-950`)
- **Foreground**: Off-white (`text-slate-50`)
- **Accent**: Emerald / Cyan for scientific/biological feel (`text-emerald-400`, `bg-emerald-500`)
- **Muted**: Slate Gray (`text-slate-400`)

## Layout
- **Container**: Max-width `max-w-7xl` with responsive padding.
- **Spacing**: Generous use of white space (or rather, "dark space") to focus on content. `py-20` for sections.
- **Grid**: Responsive grids for gallery sections (`grid-cols-1 md:grid-cols-2 lg:grid-cols-3`).

## Do's
- Use high-quality stock images of microscopic life (cells, bacteria, tardigrades, etc.).
- Use smooth transitions and hover effects on images.
- Keep text concise and informative.
- Use explicit foreground colors for readability.

## Don'ts
- Don't use bright, distracting backgrounds behind text.
- Don't clutter the interface; let the images breathe.
- Don't use low-contrast text.
