# Strikingly Generators Hub — Design System

## Typography

### Heading Font
- **Primary**: Brandon Grotesque (commercial, weight 700)
- **Fallback**: Josefin Sans (Google Fonts, weight 700, geometric sans-serif)
- **Secondary fallback**: Poppins (Google Fonts)
- **Style**: ALL UPPERCASE, line-height 1.2
- **Tailwind**: `font-heading` custom class, or `font-['Josefin_Sans']`

### Body Font
- **Font**: Open Sans (Google Fonts, weight 400/600)
- **Base size**: 14px, line-height 1.5
- **Tailwind**: `font-body text-sm leading-relaxed`

### Scale
| Element | Desktop | Mobile |
|---------|---------|--------|
| H1 | 40–48px | 28–32px |
| H2 | 26–32px | 22–26px |
| H3 | 18–20px | 16–18px |
| Body | 14px | 14px |
| Button | 14px uppercase | 14px uppercase |
| Tag | 11px uppercase | 11px uppercase |

---

## Colors

| Token | Hex | Usage |
|-------|-----|-------|
| `brand-purple` | `#8159BB` | Badges, accents, ghost borders, breadcrumb |
| `brand-ai-from` | `#7671FF` | AI gradient start |
| `brand-ai-to` | `#CB0C9F` | AI gradient end |
| `strk-body-text` | `#636972` | All body copy |
| `strk-heading` | `#4B5056` | Section headings (H2, H3) |
| `strk-hero-heading` | `#2E2E2F` | Hero H1 line 1 |
| `strk-card-border` | `#C6C9CD` | Card borders (default) |
| `strk-divider` | `#E2E4E7` | Horizontal rules, subtle separators |
| `strk-bg-light` | `#F4F6F8` | Alternate section backgrounds |
| White | `#FFFFFF` | Default page background, button text |

### AI Gradient
`linear-gradient(to right, #7671FF, #CB0C9F)`
- Use ONLY for: primary CTA buttons, H1 line 2 gradient text
- Do NOT use on section backgrounds or headers

---

## Buttons

### Primary (AI Gradient Fill)
```
bg-ai-gradient text-white font-heading uppercase tracking-wide
rounded-btn px-[15px] py-[9px] text-sm h-9 (36px standard) or h-11 (44px big)
```
- Always white text on gradient fill
- Example: `START BUILDING - IT'S FREE`

### Ghost (Brand Purple)
```
border border-brand-purple text-brand-purple font-heading uppercase tracking-wide
rounded-btn px-[15px] py-[9px] text-sm h-9 bg-transparent
```
- Example: `BROWSE GENERATORS`

### Do's
- White text on all filled buttons
- 10px gap between adjacent buttons
- 4px border-radius

### Don'ts
- No dark text on gradient fill
- No scale/rotation on hover

---

## Cards

```
bg-white border border-strk-card-border rounded-card p-5
```
- Hover: `border-brand-purple shadow-[0_4px_16px_rgba(129,89,187,0.12)]`
- No scale or rotation transforms
- 3px border-radius
- 20px padding

---

## Tags / Category Badges

```
text-[11px] font-heading uppercase tracking-wide
border border-brand-purple text-brand-purple rounded-tag px-1.5 py-0.5
```
- Ghost style only (no fill)
- Used in Featured Generators grid (mixed-category context)
- NOT used inside single-category subsections

---

## Spacing

- All margins/paddings: multiples of 10px (5px allowed for tight pairs)
- Between blocks: 20px
- Between sections: 40px
- Hero padding: 60–80px top/bottom
- Between adjacent buttons: 10px
- Max content width: 1200px, centered

---

## Layout

- Desktop: 1440px design width, max-content 1200px centered
- Mobile: 375px minimum, no horizontal scroll
- Grids: 3-col desktop → 2-col tablet (768px) → 1-col mobile (640px)
- Responsive via Tailwind: `grid-cols-1 sm:grid-cols-2 lg:grid-cols-3`

---

## Illustrations / Icons

- All inline SVG, `aria-hidden="true"` on decorative elements
- Lucide React for UI icons (search, arrow, chevron, etc.)
- Category thumbnails: simple line-art SVG, brand-purple stroke

---

## Do's and Don'ts

### Do's
- Use `font-heading` for all headings and button labels
- Use `text-ai-gradient` only for H1 line 2 and primary CTAs
- Use semantic HTML: `<nav>`, `<main>`, `<section>`, `<article>`, `<footer>`
- Ensure 4.5:1 contrast for body text, 3:1 for large text
- Use CSS logical properties where practical (`margin-inline-start`)

### Don'ts
- Don't use `#000000` black anywhere
- Don't splash the AI gradient on backgrounds or section headers
- Don't add fake testimonials, star ratings, or customer counts
- Don't use `href="#"` placeholder links in footer
- Don't use dark text on gradient or solid-color button fills
- Don't add category tags inside single-category subsections
