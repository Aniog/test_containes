# Velmora — Design System

## Brand Essence
Quiet luxury, warm, editorial. Premium demi-fine jewelry — never loud, never discount-looking, never generic e-commerce. Think Aesop meets Mejuri meets a Vogue editorial spread.

## Color Palette

### Core tokens
| Token | Hex | Usage |
|---|---|---|
| `ivory` | `#FAF7F2` | Primary page background (warm cream, never stark white) |
| `champagne` | `#E8DCC4` | Soft tinted sections, secondary surface |
| `sand` | `#D9C9AE` | Muted warm accent backgrounds |
| `hairline` | `#E0D6C7` | Hairline dividers, borders, low-emphasis rules |
| `muted` | `#8A7B6E` | Subdued text, captions, metadata |
| `ink` | `#1F1815` | Primary text, deep sections background |
| `ink-soft` | `#3A2E26` | Headings on light backgrounds |
| `gold` | `#A67C3D` | Primary brand accent (restrained, not brassy) |
| `gold-deep` | `#7A5A2A` | Hover/active for gold accent |
| `gold-soft` | `#C9A876` | Lighter gold for subtle highlights |
| `blush` | `#D4A89C` | Soft warm accent for editorial pops |
| `white` | `#FFFFFF` | Card backgrounds, modal surfaces |

### Usage rules
- Body text on ivory: `ink` (#1F1815), never pure black.
- Headings: `ink-soft` (#3A2E26) on light surfaces.
- Dark sections: background `ink` (#1F1815), text `ivory` / `champagne`.
- Gold accent (#A67C3D) is reserved for CTAs, active states, brand mark, small decorative elements. Never large filled blocks.
- Hairlines: 1px solid `hairline` on light, `rgba(232,220,196,0.18)` on dark.

## Typography

### Families
- **Display / Headings / Editorial:** `Cormorant Garamond` (serif, 300/400/500/600). Generous, classical, never bold-and-shouty.
- **Body / UI / Product names:** `Inter` (sans, 300/400/500/600).

### Scale (mobile → desktop)
| Role | Mobile | Desktop | Letter-spacing |
|---|---|---|---|
| Display hero | text-5xl / 3rem | text-7xl / 4.5rem | tight |
| Section title | text-3xl / 1.875rem | text-5xl / 3rem | tight |
| Product name | text-xs | text-xs | 0.18em UPPERCASE |
| Eyebrow / kicker | text-[10px] | text-[11px] | 0.32em UPPERCASE |
| Body | text-base | text-base | normal |
| Small / caption | text-sm | text-sm | normal |

### Product names
Always rendered in Inter, weight 500, UPPERCASE, letter-spacing 0.18em, color `ink-soft`.

### Eyebrows
Inter 400, UPPERCASE, letter-spacing 0.32em, color `gold`, used above section titles.

## Spacing & Layout
- Use a `Container` with max-w-7xl, horizontal padding 24px (mobile) / 40px (desktop) / 80px (wide desktop).
- Section vertical rhythm: py-20 (mobile) / py-32 (desktop).
- Grid gaps: 24px (mobile) / 32px (desktop).
- Hairline dividers: 1px `hairline` with no padding around — they are the visual pause.

## Components
- **Buttons**:
  - Primary: bg `ink` text `ivory`, hover bg `ink-soft`, transition 300ms, px-8 py-3.5, text-xs UPPERCASE letter-spacing 0.2em.
  - Accent: bg `gold` text `white`, hover bg `gold-deep`.
  - Outline: border `ink` text `ink`, hover bg `ink` hover text `ivory`.
  - All buttons: no rounded corners (rounded-none) or 2px max. Pill variant exists only for variant selectors.
- **Cards**: bg white, no border, subtle shadow `0 1px 2px rgba(31,24,21,0.04)`, no rounded corners or 4px max.
- **Inputs**: 1px bottom border only (no full box), text-base, focus border `ink`.
- **Pills (variants)**: rounded-full, px-5 py-2, border `hairline`, active bg `ink` text `ivory`.

## Imagery
- Editorial, large, generous aspect ratios (3x4, 4x5 for product; 16x9 for hero).
- Always use the `data-strk-img` system for stock photos. Never hardcoded URLs.
- Photography tone: warm, moody, dark or neutral backgrounds, gold jewelry the hero.

## Animation
- Subtle, never bouncy. Easing: `cubic-bezier(0.4, 0, 0.2, 1)`.
- Hover transitions: 300-400ms on transform, opacity, color.
- Page entry: opacity 0 → 1, 400ms.
- Image swap on product card hover: cross-fade 300ms.

## Do's
- Generous whitespace. Let sections breathe.
- Hairlines, not heavy borders.
- Serif headlines, sans body.
- Restrained gold accent.
- Subtle, slow hover transitions.

## Don'ts
- No bright/saturated colors. No neon. No emoji.
- No drop-shadows on text.
- No rounded-full buttons (except pills).
- No discount badges, "SALE!" red text, or loud marketing copy.
- No mobile-style stacking on desktop.
- No inline styles. Tailwind utilities only.
- No magic values in class strings. Use theme tokens.
