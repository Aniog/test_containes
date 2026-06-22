# MicroCosmos Design Guide

## Theme
A dark, immersive, science-inspired design that evokes the mystery of the microscopic world.

## Colors
- **Background**: Deep dark navy/black (`bg-slate-950`, `bg-slate-900`)
- **Primary accent**: Emerald/teal (`text-emerald-400`, `bg-emerald-500`)
- **Secondary accent**: Violet/purple (`text-violet-400`, `bg-violet-500`)
- **Text primary**: White (`text-white`)
- **Text secondary**: Slate light (`text-slate-300`, `text-slate-400`)
- **Card backgrounds**: Semi-transparent dark (`bg-slate-800/50`, `bg-white/5`)
- **Borders**: Subtle glow (`border-emerald-500/20`, `border-violet-500/20`)

## Typography
- **Font**: Inter (Google Fonts)
- **Headings**: `font-bold`, large sizes (`text-4xl` to `text-6xl`), tracking tight
- **Body**: `text-base` or `text-lg`, `text-slate-300`
- **Captions**: `text-sm`, `text-slate-400`

## Spacing
- Sections: `py-20` to `py-28`
- Container: `max-w-7xl mx-auto px-4 sm:px-6 lg:px-8`
- Cards: `p-6` with `rounded-2xl`
- Grid gaps: `gap-6` to `gap-8`

## Visual Style
- Rounded corners on cards and images: `rounded-2xl`, `rounded-xl`
- Subtle backdrop blur on overlays: `backdrop-blur-sm`
- Gradient overlays on hero: `bg-gradient-to-b from-transparent to-slate-950`
- Hover effects: scale transforms `hover:scale-105`, opacity transitions
- Image aspect ratios maintained with `object-cover`

## Do's
- Use generous whitespace between sections
- Apply subtle gradients for depth
- Use emerald/violet accents sparingly for highlights
- Keep text highly readable against dark backgrounds
- Use smooth transitions on interactive elements

## Don'ts
- Don't use pure black backgrounds (use slate-950 instead)
- Don't use light backgrounds for main sections
- Don't use low-contrast text combinations
- Don't overcrowd sections with too many elements
- Don't use sharp corners on visual elements
