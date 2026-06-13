# ARTITECT MACHINERY — Design System

## Brand Identity
- **Brand Name:** ARTITECT MACHINERY
- **Tagline:** Precision Engineered. Perfectly Formed.
- **Industry:** Industrial sheet metal folding machinery
- **Tone:** Elegant, authoritative, trustworthy, user-friendly

---

## Color Palette

| Name         | Hex       | Tailwind Class         | Usage                          |
|--------------|-----------|------------------------|--------------------------------|
| Navy Deep    | #0D1B2A   | `bg-[#0D1B2A]`         | Primary dark background        |
| Steel Blue   | #1B3A5C   | `bg-[#1B3A5C]`         | Secondary dark, nav bg         |
| Copper Gold  | #C8922A   | `text-[#C8922A]`       | Accent, CTA buttons, highlights|
| Copper Light | #E8B04A   | `text-[#E8B04A]`       | Hover states, secondary accent |
| Slate Gray   | #4A5568   | `text-slate-600`       | Body text on light bg          |
| Off White    | #F7F8FA   | `bg-[#F7F8FA]`         | Light section backgrounds      |
| Pure White   | #FFFFFF   | `text-white`           | Text on dark backgrounds       |
| Border Gray  | #E2E8F0   | `border-slate-200`     | Dividers, card borders         |

**Do:** Use Navy Deep + Copper Gold as the primary brand combination.
**Don't:** Use light text on light backgrounds or dark text on dark backgrounds.

---

## Typography

- **Primary Font:** Playfair Display (headings — elegant, authoritative)
- **Secondary Font:** Inter (body, UI — clean, readable)
- **Google Fonts embed:** Both fonts loaded in index.html

### Scale
| Element     | Class                                      |
|-------------|--------------------------------------------|
| H1 Hero     | `text-5xl md:text-7xl font-playfair font-bold` |
| H2 Section  | `text-3xl md:text-4xl font-playfair font-semibold` |
| H3 Card     | `text-xl font-playfair font-semibold`      |
| Body Large  | `text-lg font-inter text-slate-600`        |
| Body        | `text-base font-inter text-slate-600`      |
| Caption     | `text-sm font-inter text-slate-500`        |

---

## Spacing & Layout

- Max content width: `max-w-7xl mx-auto`
- Section padding: `py-20 px-6 md:px-12`
- Card padding: `p-8`
- Grid gaps: `gap-8` for cards, `gap-12` for sections

---

## Components

### Buttons
- **Primary CTA:** `bg-[#C8922A] hover:bg-[#E8B04A] text-white font-semibold px-8 py-3 rounded-sm tracking-wide transition-all`
- **Secondary Outline:** `border-2 border-[#C8922A] text-[#C8922A] hover:bg-[#C8922A] hover:text-white px-8 py-3 rounded-sm tracking-wide transition-all`
- **Ghost (nav):** `text-white hover:text-[#C8922A] transition-colors`

### Cards
- Light bg: `bg-white border border-slate-200 rounded-sm shadow-sm hover:shadow-md transition-shadow`
- Dark bg: `bg-[#1B3A5C] border border-[#C8922A]/20 rounded-sm`

### Navigation
- Sticky top, dark background `bg-[#0D1B2A]`
- Logo in Playfair Display, copper accent on "ARTITECT"
- Links in white, hover copper gold

### Section Dividers
- Thin copper line: `border-t border-[#C8922A]/30`

---

## Visual Style

- **Aesthetic:** Industrial elegance — dark navy backgrounds with warm copper accents
- **Imagery:** High-quality machinery photos, metal textures, precision engineering
- **Icons:** Lucide React, stroke style, copper or white colored
- **Borders:** Subtle, `rounded-sm` (nearly square) for industrial feel
- **Shadows:** Soft, `shadow-sm` to `shadow-lg`
- **Animations:** Subtle transitions (200–300ms), no flashy effects

---

## Do's and Don'ts

**Do:**
- Use Playfair Display for all headings
- Use copper gold (#C8922A) for all interactive elements and accents
- Keep sections well-spaced with generous padding
- Use dark navy sections alternating with off-white sections

**Don't:**
- Use rounded-full buttons (too casual for industrial brand)
- Use bright/neon colors
- Crowd elements — whitespace is key to elegance
- Use more than 2 font families
