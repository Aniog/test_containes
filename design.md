# Velmora Fine Jewelry — Visual Design System

## Direction
"Quiet luxury, warm and editorial." A warm ivory paper background with deep
espresso-brown ink, and a single restrained antique-gold metallic accent.
Gold jewelry photographs beautifully against warm neutrals; the palette must
never compete with the product. Nothing loud, nothing discount-looking.

## Color palette (Tailwind semantic tokens — never use raw hex in components)
| Token            | Value     | Usage |
|------------------|-----------|-------|
| `background`     | `#FAF7F1` | Warm ivory page background |
| `surface`        | `#F3EDE2` | Slightly deeper warm cream (cards, image backdrops, alt sections) |
| `foreground`     | `#211913` | Deep espresso — primary text |
| `muted-foreground` | `#7A6C5D` | Warm taupe — secondary text, captions |
| `accent`         | `#A2804A` | Antique gold — CTAs, stars, small labels, hover states |
| `accent-deep`    | `#6E5327` | Dark gold — CTA hover, text-on-light accent |
| `accent-foreground` | `#FBF7EF` | Text placed on accent blocks |
| `line`           | `#E3D9C8` | Hairline dividers and card borders |
| `ink`            | `#1B1410` | Near-black espresso — newsletter/footer blocks |

## Typography
- Headings, logo, product names: **Cormorant Garamond** (serif), weights 400–600.
  Product names & small editorial labels are UPPERCASE with wide tracking
  (`tracking-[0.18em]`–`tracking-[0.3em]`), often in the sans font at xs size.
- Body & UI: **Inter** (sans), 400–500.
- Eyebrow/labels: Inter, `text-[11px] uppercase tracking-[0.28em] text-accent-deep`.

## Spacing & layout
- Generous whitespace: sections use `py-16 md:py-24 lg:py-32`.
- Container: `mx-auto max-w-7xl px-5 md:px-8`.
- Hairline dividers: `border-t border-line` — prefer borders over shadows.
- Shadows: only very soft, e.g. `shadow-[0_18px_50px_-24px_rgba(33,25,19,0.25)]`.

## Components
- Buttons: rectangular (no pill), `uppercase tracking-[0.18em] text-xs`,
  solid = `bg-accent text-accent-foreground hover:bg-accent-deep`,
  outline = `border border-foreground/30 hover:border-foreground`.
- Product cards: no visible card chrome — image on `bg-surface`, name centered,
  serif uppercase; price in sans. Hover: second image cross-fades, quick-add bar slides up.
- Inputs: transparent background, `border-b border-line`, serif or sans sm,
  focus swaps border to accent. No heavy boxed inputs.
- Stars: lucide `Star` filled `fill-accent text-accent`.

## Motion
- Subtle only: `transition-all duration-500 ease-out`, image `scale-[1.03]` on hover,
  fade/slide-up reveals (`animate-fade-up` keyframe), drawer transitions 500ms.
- No bouncy easing, no parallax gimmicks.

## Imagery
- Warm-lit gold jewelry photography on neutral/dark warm backdrops.
- Editorial crops: 4x5 portraits for products, 9x16 for UGC reels, wide for hero.
- All stock imagery loads through the `data-strk-img` / `data-strk-bg` system
  with queries referencing nearby heading/description element ids.

## Do / Don't
- Do: ivory + espresso + antique gold, hairlines, uppercase micro-labels, serif italics for accents.
- Don't: pure white/black, bright saturated colors, gradients, pill buttons, heavy drop shadows, dense layouts, discount badges (only a small "Bestseller" tag in accent).
