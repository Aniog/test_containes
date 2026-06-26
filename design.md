# 非遗文化推广网站 Design System

## Color Palette

### Primary Colors
- Deep Red (朱砂红): `#8B1A1A` — primary brand color, used for headings, accents, CTAs
- Gold (金色): `#C9A84C` — secondary accent, borders, highlights
- Ink Black (墨黑): `#1C1C1E` — body text, dark backgrounds

### Background Colors
- Cream (宣纸白): `#F8F3EA` — main page background
- Warm White: `#FDF8F0` — card backgrounds
- Light Tan: `#EDE5D4` — section alternating backgrounds

### Text Colors
- Primary Text: `#1C1C1E` — headings and body on light backgrounds
- Secondary Text: `#5C4A32` — subheadings, captions
- Muted Text: `#8C7B6B` — helper text, metadata
- Light Text: `#F8F3EA` — text on dark/red backgrounds

## Typography

### Font Families
- Headings: `"Noto Serif SC", "Source Han Serif SC", serif` — elegant Chinese serif
- Body: `"Noto Sans SC", "PingFang SC", sans-serif` — clean readable Chinese sans-serif
- Accent: `"Ma Shan Zheng", cursive` — calligraphy-style for decorative text

### Font Sizes (Tailwind)
- Hero Title: `text-5xl md:text-7xl`
- Section Title: `text-3xl md:text-4xl`
- Card Title: `text-xl md:text-2xl`
- Body: `text-base` (16px)
- Caption: `text-sm`

## Spacing
- Section padding: `py-20 md:py-28`
- Container max-width: `max-w-6xl mx-auto px-4 md:px-8`
- Card gap: `gap-6 md:gap-8`

## Borders & Decorations
- Gold border accent: `border border-[#C9A84C]`
- Red underline accent: `border-b-2 border-[#8B1A1A]`
- Rounded cards: `rounded-2xl`
- Subtle shadow: `shadow-md`

## Component Styles

### Hero Section
- Full-screen height with dark overlay on background image
- Large centered Chinese title in cream/white
- Gold subtitle line
- Red CTA button

### Section Headings
- Centered, serif font
- Red color `text-[#8B1A1A]`
- Gold decorative line below: `w-16 h-1 bg-[#C9A84C] mx-auto mt-3`

### Heritage Cards
- Cream background `bg-[#FDF8F0]`
- Gold top border `border-t-4 border-[#C9A84C]`
- Image top, content below
- Hover: subtle lift `hover:-translate-y-1 transition-transform`

### Navigation
- Sticky top, semi-transparent dark background
- Gold logo text
- White nav links

## Do's
- Use warm, earthy tones throughout
- Incorporate traditional Chinese decorative motifs (cloud patterns, lattice)
- Use serif fonts for headings to evoke classical Chinese aesthetics
- Maintain generous whitespace for an elegant feel
- Use red and gold as the primary accent combination

## Don'ts
- Don't use cold blues or greens as primary colors
- Don't use overly modern/tech aesthetics
- Don't use white backgrounds without warm tinting
- Don't use small font sizes for Chinese characters (minimum 14px)
- Don't use low-contrast text on patterned backgrounds
