# Velmora Fine Jewelry — Visual Design System

## Direction
Quiet luxury, warm, editorial. An ivory-toned light scheme with deep espresso ink and a restrained antique-gold accent. Gold jewelry photographs beautifully against warm neutrals; the UI stays quiet so the product glows.

## Color Palette (Tailwind tokens — use these, never raw hex in components)
- `cream` (#FAF7F1): page background. Use `bg-cream`.
- `ivory` (#F4EFE6): alternating section background. Use `bg-ivory`.
- `sand` (#E9E1D3): borders, hairlines, subtle fills. Use `border-sand`, `bg-sand`.
- `ink` (#211B14): primary text / solid buttons. Use `text-ink`, `bg-ink`.
- `espresso` (#4A3F33): secondary text. Use `text-espresso`.
- `taupe` (#8A7C6B): muted text, placeholders. Use `text-taupe`.
- `gold` (#A6792E): THE accent — CTAs, links on hover, stars, keylines. Use sparingly. `bg-gold`, `text-gold`, `border-gold`.
- `gold-deep` (#8A6420): accent hover state. Use `hover:bg-gold-deep`.
- `gold-soft` (#EFE4CE): soft accent tint for badges/newsletter block. Use `bg-gold-soft`.

Contrast rules: body text is always `text-ink` or `text-espresso` on cream/ivory. On `bg-ink` sections text is `text-cream`. Never gold text below 14px on cream (use espresso); gold is for large accents, icons, borders, and buttons with white text.

## Typography
- Headings & product names: **Cormorant Garamond** (`font-serif`), weights 400–600, often `italic` for editorial accents.
- Body & UI: **Inter** (`font-sans`), 400–600.
- Product names / labels / nav links / buttons: UPPERCASE, `tracking-[0.18em]`–`tracking-[0.25em]`, `text-[11px]`–`text-xs`.
- Eyebrow labels: `text-[11px] uppercase tracking-[0.3em] text-gold`.
- Editorial headline scale: `text-4xl md:text-6xl` serif, tight leading.

## Spacing & Layout
- Section padding: `py-16 md:py-24`. Container: `max-w-7xl mx-auto px-5 md:px-8`.
- Generous whitespace; hairline dividers: `border-t border-sand`.
- Cards have no heavy chrome: image-first, thin `border-sand` borders or none, soft shadow only on hover: `hover:shadow-[0_18px_40px_-18px_rgba(33,27,20,0.25)]`.

## Components
- Primary button: `bg-gold text-white uppercase tracking-[0.2em] text-[11px] px-8 py-4 hover:bg-gold-deep transition-colors`.
- Secondary/outline button: `border border-ink text-ink hover:bg-ink hover:text-cream`.
- Pill variant selector: `rounded-full border border-sand` with active state `border-gold bg-gold-soft text-ink`.
- Inputs: `bg-white border border-sand focus:border-gold outline-none`.
- Nav: transparent over hero (text-cream) → `bg-cream/95 backdrop-blur border-b border-sand text-ink` on scroll.
- Stars: gold filled (`fill-gold text-gold`).
- Badges: `bg-gold-soft text-espresso uppercase tracking-[0.15em] text-[10px]`.

## Motion
- Subtle: `transition-all duration-500 ease-out`. Image hover: `scale-[1.04]`. Fade-up on scroll for section reveals. No bouncy or loud animations.

## Do / Don't
- DO use serif italics for emotional accents ("treasured", "everyday heirlooms").
- DO keep accent gold restrained — one focal accent per viewport.
- DON'T use pure black (#000) — use `ink`. DON'T use bright yellow golds — stay antique.
- DON'T use gradients, neon, rounded-3xl bubbles, or drop shadows on text.
