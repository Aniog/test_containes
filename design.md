# Velmora Fine Jewelry — Visual Design System

## Brand Mood
Quiet luxury. Warm editorial. Premium demi-fine. NOT loud, NOT generic e-commerce, NOT discount-looking.

## Color Palette (commit to this — warm cream + deep ink + brushed gold)

| Token | Hex | Tailwind class | Usage |
|---|---|---|---|
| Cream (canvas) | `#FAF7F2` | `bg-cream` | Page background |
| White surface | `#FFFFFF` | `bg-surface` | Cards, navbar on scroll, cart drawer |
| Ink (primary text) | `#1A1614` | `text-ink` | Headlines, primary text |
| Charcoal | `#4A423F` | `text-charcoal` | Body text |
| Muted | `#8A7F76` | `text-muted` | Secondary text, captions, helper |
| Hairline | `#E8E0D5` | `border-hairline` | Dividers, card borders |
| Gold (accent) | `#B89B6E` | `bg-gold` / `text-gold` | CTA buttons, accent rules |
| Gold light | `#D4B98C` | `bg-gold-light` | Button hover gradient |
| Soft gold | `#F0E8D8` | `bg-soft-gold` | Subtle accent backgrounds, badges |
| Sand | `#EFE8DC` | `bg-sand` | Testimonial cards, alt section |
| Sage whisper | `#9AA89A` | `text-sage` | Optional accent for UGC overlay |

WCAG: Ink (#1A1614) on Cream (#FAF7F2) ≈ 14.6:1 ✓ AAA. White on Gold (#B89B6E) ≈ 2.8:1 — use Gold only with Ink text. Ink on Gold (#B89B6E) ≈ 6.8:1 ✓ AA.

## Typography

- **Headings / serif:** Cormorant Garamond (weights 300, 400, 500, 600). Use for all editorial text: hero, brand, product names on PDP, section titles, testimonial quotes.
- **Body / UI:** Inter (weights 300, 400, 500, 600, 700). Use for body, UI labels, nav, buttons, form fields.
- **Product names:** UPPERCASE with `letter-spacing: 0.18em` and font-weight 500. Serif (Cormorant), but tracked wide.
- **UI labels:** Inter, UPPERCASE, `letter-spacing: 0.12em`, font-weight 500.
- **Editorial accents:** Cormorant italic for "Quietly crafted", "Treasured", etc.

Font sizes are scaled editorial — large hero h1 (clamp 3rem → 6rem), generous line-height (1.05–1.2 for headings, 1.6 for body).

## Spacing & Layout

- Use generous whitespace. Section vertical padding: `py-20 md:py-32 lg:py-40`.
- Container max-width: `max-w-[1440px]`, padded `px-6 md:px-10 lg:px-16`.
- Product grid: 2 cols mobile, 3 tablet, 5 desktop for bestsellers; 2 mobile / 3 desktop for shop.

## Hairlines & Borders

- Borders: `1px solid #E8E0D5` (hairline) for cards, navbar, dividers.
- Subtle dividers: thin lines `border-t border-hairline` between sections inside cards or footer columns.
- No heavy box-shadows. Use `shadow-[0_4px_24px_-12px_rgba(26,22,20,0.08)]` max — very subtle warm shadow.

## Buttons

Three flavors:
1. **Primary (Gold)**: `bg-ink text-cream hover:bg-charcoal` or `bg-gold text-ink hover:bg-gold-light`. Pill or small radius (`rounded-sm`). Padding `px-7 py-3.5`. Tracking wide, uppercase, font-medium 12px.
2. **Outline (Ink)**: `border border-ink text-ink hover:bg-ink hover:text-cream`.
3. **Ghost**: `text-ink hover:text-charcoal`, underline on hover.

## Imagery Tone

Warm-lit close-ups of gold jewelry on neutral skin or dark warm backgrounds. Editorial — not catalog. Use stock-image tagging system (data-strk-img) with specific queries referencing nearby text.

## Motion

- 200ms ease-out for hover color/border transitions.
- 400–600ms ease-out for fades/slide-ins on scroll.
- No bouncy/spring. Subtle. Premium.

## DO
- Use serif headlines with generous tracking for section titles.
- Add hairline rules under section titles for editorial feel.
- Keep CTAs consistent: one primary action per view, ink-colored with gold accent option.
- Show prices in clean Inter; never compete with product name typography.

## DON'T
- No bright primary colors, no gradients with multiple stops, no neon.
- No emoji, no decorative SVGs that aren't editorial.
- No drop-shadows under images; let warm photography speak.
- No loud sale badges; if showing "new" use subtle gold dot + caption.
- No generic stock-photo smiles; editorial portrait tone only.