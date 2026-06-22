# Visual Style Guide - MicroCosmos

## Colors
- **Backgrounds**: 
  - Primary Background: `bg-black`
  - Alternating section backgrounds: `bg-gray-50`, `bg-gray-900`
  - Cards: `bg-white`, `bg-gray-800`
  - Header: `bg-black/80` (with `backdrop-blur-sm`)
- **Text**: 
  - Primary Text: `text-white`, `text-gray-900`
  - Subtle Text: `text-gray-300`, `text-gray-600`
- **Accents**: 
  - Buttons / Accents: `bg-blue-600`, `text-blue-400`
  
## Typography
- **Font**: Inter (default sans-serif)
- **Headings**: `font-extrabold` / `font-bold` for impact, tight tracking (`tracking-tight`) for large headings.
- **Body**: Standard text size, relaxed line-heights.

## Structural Elements
- **Layout**: 
  - Max width wrapper: `max-w-7xl mx-auto px-4 sm:px-6 lg:px-8` on sections.
  - Section paddings: `py-24` generally, to give breathing room.
- **Components**:
  - Cards: Rounded corners (`rounded-2xl`), shadow (`shadow-lg`), and hover effect (`hover:shadow-xl`).
  - Images: Aspect ratio 4:3 (`aspect-[4/3]`) with zoom effect on hover (`group-hover:scale-110`).
  - Buttons: Rounded full (`rounded-full`), hover scale transform.