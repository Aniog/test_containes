# Velmora Fine Jewelry — Visual System

Quiet luxury, warm, editorial. Premium demi-fine jewelry — never loud, never discount-looking.

## Color Palette (single source of truth)

Commit to ONE direction: warm cream / deep espresso with a refined muted gold accent.

| Token          | Hex       | Role                                                           |
| -------------- | --------- | -------------------------------------------------------------- |
| `cream`        | `#F4EFE7` | Page background (warm off-white)                               |
| `paper`        | `#FBF7F1` | Cards / lighter sections                                       |
| `ink`          | `#1B1714` | Primary text & dark surface (warm near-black)                  |
| `ink-soft`     | `#2C241E` | Dark surface variant                                           |
| `muted`        | `#6E6258` | Secondary text (warm taupe)                                    |
| `muted-soft`   | `#8A7E73` | Tertiary text                                                  |
| `gold`         | `#B08A52` | Accent — refined muted gold (use sparingly)                    |
| `gold-soft`    | `#D9B98A` | Hover / lighter gold                                           |
| `gold-deep`    | `#8E6E3E` | Pressed / deeper gold                                          |
| `hairline`     | `#E4DBCC` | Thin dividers on cream surfaces                                |
| `hairline-dark`| `#2E2620` | Thin dividers on dark surfaces                                 |

Rules:
- Light sections always use `ink` text on `cream`/`paper` (high contrast, AAA).
- Dark sections always use `cream`/`paper` text on `ink` (high contrast).
- Gold is for small accents only (CTA text, dots, hairlines, icons) — never for big blocks.

## Typography

- **Serif** — Cormorant Garamond, weights 400 / 500 / 600, for headings, hero copy, product names, brand wordmark.
- **Sans** — Inter, weights 300 / 400 / 500 / 600, for body, UI, nav, buttons, captions.
- **Product names** — UPPERCASE, letter-spacing `0.18em`, serif, medium weight.
- **Nav links** — UPPERCASE, letter-spacing `0.18em`, sans, 11–12px.
- **Body** — 14–16px, line-height 1.6, sans.
- **Display headlines** — clamp(2.5rem, 5vw, 4.5rem), serif, weight 500.

## Layout

- Generous whitespace; section vertical padding `py-20` to `py-32` (desktop), `py-14` mobile.
- Hairline dividers 1px, never thicker.
- Image-forward: large editorial imagery dominates.
- Rounded corners minimal: `rounded-none` for containers, `rounded-full` for pills only.

## Buttons

- **Primary (dark)**: solid `ink` background, `cream` text, uppercase, wide tracking, no radius, hover → `ink-soft`.
- **Accent (gold)**: solid `gold` background, `cream` text, uppercase, wide tracking, hover → `gold-deep`.
- **Outline (dark on cream)**: transparent bg, 1px `ink` border, `ink` text, hover → fill `ink`, text `cream`.
- **Outline (gold)**: transparent bg, 1px `gold` border, `gold` text, hover → fill `gold`, text `cream`.
- All buttons: `px-8 py-4`, `text-[11px]` (uppercase tracking `0.2em`), subtle 300ms transitions.

## Cards / Product Cards

- Background: `paper` on `cream` page, or transparent on `cream`.
- Subtle hover: image zoom 1.04 over 700ms, second image fade in.
- Add to cart: appears on hover as a thin accent strip on the image bottom (NOT a giant button that screams "discount").

## Shadows

- Avoid heavy drop shadows. Use soft, large-radius, low-opacity:
  - `shadow-[0_30px_60px_-30px_rgba(27,23,20,0.25)]` for elevated product cards on hover.
- Default cards: border or hairline, no shadow.

## Motion

- Subtle, 300–700ms ease-out.
- Hover transitions on all interactive elements.
- No bouncy springs. Restrained.
- Scroll-in fade-up for sections (CSS only, using `@keyframes` + `animation-timeline: view()` where supported, with fallback).

## Do's and Don'ts

- DO use generous whitespace.
- DO commit to serif headlines.
- DO keep gold small.
- DON'T use bright primary colors (no blue, no green, no red).
- DON'T use more than 2 typefaces in one place.
- DON'T use rounded buttons.
- DON'T use busy gradients.
- DON'T use emoji.

## Mobile

- Stack single column.
- Hamburger menu instead of center links.
- Sticky cart pill in mobile bottom bar (optional).
- Hero copy smaller but still editorial.
