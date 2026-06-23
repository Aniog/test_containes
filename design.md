# Visual Style Guide - SSourcing China

## Core Principles
- **Professional & Trustworthy**: Focus on clean layouts, structured information, and high-quality imagery that reflects professional sourcing, logistics, and quality control.
- **International B2B**: Aim for a corporate yet accessible look that appeals to global buyers (Europe, North America, Australia).
- **Practical & Clear**: Use clear typography, ample whitespace, and intuitive navigation. No exaggerated marketing claims.

## Color Palette
| Color | Tailwind Class | Hex | Usage |
|-------|----------------|-----|-------|
| Primary (Navy) | `bg-slate-900` | `#0f172a` | Headers, primary buttons, footers, deep backgrounds |
| Secondary (Amber) | `bg-amber-600` | `#d97706` | Call to action (CTA) buttons, highlights, accents |
| Accent (Slate) | `text-slate-600` | `#475569` | Subtext, secondary info, icons |
| Background (Off-white) | `bg-slate-50` | `#f8fafc` | Main page backgrounds, section breaks |
| White | `bg-white` | `#ffffff` | Cards, content sections |
| Success | `text-emerald-600` | `#059669` | Verification points, success messages |

## Typography
- **Font Family**: 'Inter', sans-serif (Google Fonts)
- **Headings**: Semi-bold to Bold (`font-semibold` to `font-bold`), Slate-900.
- **Body**: Regular (`font-normal`), Slate-700 for readability.
- **Sizes**:
  - H1: `text-4xl md:text-5xl lg:text-6xl`
  - H2: `text-3xl md:text-4xl`
  - H3: `text-xl md:text-2xl`
  - Body: `text-base`
  - Small: `text-sm`

## Components & Elements
- **Buttons**:
  - Primary: `bg-amber-600 hover:bg-amber-700 text-white font-semibold py-3 px-8 rounded-md transition-colors`
  - Secondary: `bg-white border border-slate-200 text-slate-900 hover:bg-slate-50 font-semibold py-3 px-8 rounded-md transition-colors`
- **Cards**: `bg-white rounded-lg border border-slate-100 shadow-sm p-6 hover:shadow-md transition-shadow`
- **Sections**: Use `py-16 md:py-24` for vertical spacing between sections.
- **Navigation**: Sticky header with white background and subtle shadow.

## Imagery (data-strk-img)
- Use realistic visuals for:
  - Factory floors (Production)
  - Quality inspection (QC)
  - Logistics/Warehousing (Shipping)
  - Professional office/consulting (Sourcing)
- Image ratios: `16x9` for heroes, `3x2` or `4x3` for features/cards.

## Do's & Don'ts
- **Do**: Use high-contrast text.
- **Do**: Use professional icons (Lucide-react).
- **Do**: maintain consistent padding and margins.
- **Don't**: Use overly bright or "neon" colors.
- **Don't**: Overcrowd sections with too much text.
- **Don't**: Use standard stock images that look too "fake" or generic.
