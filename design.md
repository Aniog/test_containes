# SSourcing China - Design System

## Brand Identity
SSourcing China is a B2B China sourcing agent for international buyers. The visual language must feel:
- **Trustworthy** (deep blues, structured layouts)
- **International** (clean typography, English-first copy)
- **Practical** (no exaggerated gradients, no glitter, no stock "AI" tropes)
- **Professional** (B2B, not B2C)

## Color Palette
- **Primary (Navy Blue)**: `#0B2545` — primary brand, headers, footer
- **Primary Hover**: `#133b6f`
- **Accent (Warm Red / CTAs)**: `#D62828` — primary CTA buttons
- **Accent Hover**: `#B11F1F`
- **Secondary Accent (Gold/Copper)**: `#C9A227` — trust badges, check icons
- **Background Default**: `#FFFFFF`
- **Background Muted**: `#F4F6F9` (page sections)
- **Background Soft**: `#EDF1F7` (subtle cards)
- **Border Default**: `#E2E8F0`
- **Text Primary**: `#0F172A`
- **Text Secondary**: `#475569`
- **Text Muted**: `#64748B`
- **Success**: `#16A34A`
- **Warning**: `#D97706`

Tailwind classes:
- `bg-[#0B2545]`, `bg-[#D62828]`, `bg-[#F4F6F9]`, `text-[#0F172A]`, etc.

## Typography
- **Font family**: Inter (already loaded via Google Fonts)
- **Headings**: font-bold, tight tracking, sizes via `text-3xl` through `text-5xl`
- **Body**: `text-base` (16px) with `leading-relaxed`
- **Small / captions**: `text-sm` `text-[#64748B]`
- **Eyebrow labels**: `uppercase tracking-wider text-xs font-semibold text-[#D62828]`

## Spacing
- Page max width: `max-w-7xl mx-auto px-4 sm:px-6 lg:px-8`
- Section vertical padding: `py-16 md:py-24`
- Card padding: `p-6 md:p-8`
- Gap between cards in a grid: `gap-6 md:gap-8`

## Borders & Shadows
- Borders: `border border-[#E2E8F0]`
- Card radius: `rounded-xl`
- Buttons: `rounded-md`
- Shadow on cards: `shadow-sm hover:shadow-md transition-shadow`
- Shadow on header (sticky): `shadow-sm`

## Buttons
- **Primary (CTA)**: `bg-[#D62828] text-white hover:bg-[#B11F1F] px-6 py-3 rounded-md font-semibold`
- **Secondary (outline)**: `border border-[#0B2545] text-[#0B2545] hover:bg-[#0B2545] hover:text-white px-6 py-3 rounded-md font-semibold`
- **Ghost (text link)**: `text-[#0B2545] hover:text-[#133b6f] font-semibold`

## Components Patterns
- **Section header**: eyebrow + h2 + subtitle, all centered or left-aligned
- **Card**: white bg, subtle border, optional hover shadow
- **Stat block**: large number + small label
- **Step block**: number circle + title + description
- **Icon container**: small rounded square with light navy background and navy icon

## Imagery Guidelines
- Use stock images via `data-strk-img` / `data-strk-bg` tags
- Subject matter should be: factory floors, port shipping containers, QC inspection, supplier meetings, product warehouses, China skylines
- Aspect ratios: hero `16x9`, case study `3x2`, product category `4x3`
- Always provide a `data-strk-img-id` with a stable, unique suffix

## Do's
- Use clear, plain English copy
- Show real-looking factory, shipping, and QC visuals
- Emphasize trust signals (years in business, suppliers verified, on-time delivery stats)
- Use icons from lucide-react to add clarity without visual noise
- Keep sections well-spaced and not crowded

## Don'ts
- No "AI generated gradient" aesthetic
- No emoji in headings or copy
- No exaggerated stats without context (e.g., "100% perfect" is unrealistic)
- No dark mode for the whole site — keep it light, professional
- No "we are the best in China" type language
