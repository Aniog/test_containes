# ARTITECT MACHINERY — Design System

## Brand Identity
- **Brand Name:** ARTITECT MACHINERY
- **Industry:** Industrial sheet metal folding & forming machinery
- **Tone:** Elegant, precise, professional — yet approachable and user-friendly

---

## Color Palette

| Name | Hex | Tailwind Class | Usage |
|---|---|---|---|
| Navy Deep | `#0B1C2C` | `bg-[#0B1C2C]` | Primary dark background, navbar |
| Steel Blue | `#1A3A5C` | `bg-[#1A3A5C]` | Section backgrounds, cards |
| Accent Gold | `#C9A84C` | `text-[#C9A84C]` | CTAs, highlights, brand accent |
| Light Gold | `#E8C97A` | `text-[#E8C97A]` | Hover states, subtle accents |
| Off White | `#F5F5F0` | `text-[#F5F5F0]` | Body text on dark backgrounds |
| Warm Gray | `#8A9BB0` | `text-[#8A9BB0]` | Secondary text, captions |
| Light Surface | `#F8F7F4` | `bg-[#F8F7F4]` | Light section backgrounds |
| White | `#FFFFFF` | `text-white` | Headings on dark, card text |

**Do NOT use:** low-contrast combos like light gray on white, or dark text on dark backgrounds.

---

## Typography

- **Font Family:** Inter (Google Fonts) — already loaded in index.html
- **Headings:** font-bold or font-semibold, tracking-tight
- **Body:** font-normal, leading-relaxed
- **Labels/Caps:** font-medium, tracking-widest, uppercase, text-sm

### Scale
| Element | Classes |
|---|---|
| Hero H1 | `text-5xl md:text-7xl font-bold tracking-tight` |
| Section H2 | `text-3xl md:text-4xl font-bold tracking-tight` |
| Card H3 | `text-xl font-semibold` |
| Body | `text-base leading-relaxed` |
| Caption/Label | `text-sm font-medium tracking-widest uppercase` |

---

## Spacing & Layout

- Max content width: `max-w-7xl mx-auto`
- Section padding: `py-20 px-6 md:px-12`
- Card padding: `p-6 md:p-8`
- Grid gaps: `gap-6 md:gap-8`
- Border radius: `rounded-xl` for cards, `rounded-full` for pills/badges

---

## Components

### Buttons
- **Primary CTA:** `bg-[#C9A84C] hover:bg-[#E8C97A] text-[#0B1C2C] font-semibold px-8 py-3 rounded-full transition-all`
- **Secondary/Outline:** `border border-[#C9A84C] text-[#C9A84C] hover:bg-[#C9A84C] hover:text-[#0B1C2C] px-8 py-3 rounded-full transition-all`
- **Ghost/Nav:** `text-[#F5F5F0] hover:text-[#C9A84C] transition-colors`

### Cards
- Background: `bg-[#1A3A5C]` on dark sections, `bg-white` on light sections
- Border: `border border-[#C9A84C]/20`
- Shadow: `shadow-lg`
- Hover: `hover:shadow-xl hover:-translate-y-1 transition-all duration-300`

### Navbar
- Background: `bg-[#0B1C2C]/95 backdrop-blur-sm`
- Sticky: `sticky top-0 z-50`
- Logo: Gold accent color

### Dividers / Accents
- Gold line: `border-t border-[#C9A84C]/30`
- Section label: small uppercase gold text above headings

---

## Do's and Don'ts

**Do:**
- Use gold accents sparingly for maximum impact
- Keep layouts clean with generous whitespace
- Use dark navy for hero/header sections
- Use light surface for alternating sections
- Ensure all text has strong contrast against its background

**Don't:**
- Use more than 2 accent colors per section
- Use pure black backgrounds (use navy instead)
- Use small font sizes below `text-sm`
- Stack too many elements without breathing room
