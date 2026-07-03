# Velmora Fine Jewelry — Visual Style Guide

## Brand Mood
Quiet luxury, warm, editorial. Premium demi-fine jewelry — never loud, never discount-looking, never generic. Think Aesop meets Mejuri meets editorial magazine.

## Color System
Single, confident direction: **deep warm noir + warm gold accents**.
The dark warm base flatters gold jewelry (gold pops on dark) and reads as editorial/premium. We do not mix a light/dark theme — we commit to the dark editorial palette sitewide.

```
--bg-base       #0E0D0B   /* page background — deep warm black */
--bg-surface    #15120F   /* cards / panels */
--bg-elevated   #1C1814   /* hover / elevated cards */
--bg-input      #1A1612   /* input fields */

--ink-primary   #F5EFE6   /* primary text — warm cream */
--ink-secondary #B5AB9C   /* secondary text — muted warm */
--ink-muted     #8A7E6F   /* tertiary / helper text */
--ink-on-accent #15120F   /* text on gold buttons */

--accent        #C9A876   /* primary gold — refined, warm */
--accent-light  #DCBE93   /* gold hover state */
--accent-deep   #A88858   /* gold pressed / focus ring */
--accent-soft   #2A2218   /* gold-tinted background */

--border        #2A2520   /* hairline dividers */
--border-strong #3A332C   /* emphasized borders */
--danger        #C96B5C   /* error / remove (warm clay) */
--success       #6E8B6A   /* success (sage) */
```

## Typography
- **Headings / product names / logo:** Cormorant Garamond (300, 400, 500) — high-contrast serif
- **Body / UI / buttons:** Inter (300, 400, 500, 600)
- **Product names in product cards:** Inter, UPPERCASE, letter-spacing 0.18em, weight 500

Font sizes (mobile-first, scale up at md+):
- Display:   48px / 64px
- H1:        36px / 52px
- H2:        28px / 40px
- H3:        20px / 24px
- Body:      15px / 16px
- Small:     13px / 14px
- Eyebrow:   11px / 12px, uppercase, letter-spacing 0.22em

## Spacing
- Generous whitespace. Section vertical padding: 80px mobile, 128px desktop.
- Container max width: 1440px; inner padding: 24px mobile, 48px desktop.

## Hairlines
Use 1px solid var(--border) for section dividers. Never use heavy borders.

## Buttons
Three styles:
1. **Primary:** solid gold `bg-accent text-ink-on-accent`, hover `bg-accent-light`, no border-radius (square 0), letter-spacing 0.18em, uppercase, 13px.
2. **Secondary:** 1px gold border, transparent bg, gold text, hover fills with `bg-accent-soft`.
3. **Ghost:** text-only with underline-on-hover, 13px uppercase tracked.

No rounded buttons. All buttons have padding 18px 32px desktop, 16px 24px mobile.

## Cards
- Background `bg-surface` or transparent over `bg-base`.
- No border. Use the image itself and whitespace.
- Subtle hover: image scale 1.03, fade to second image if available, or show overlay action.

## Shadows
Almost never. When needed: `0 30px 60px -30px rgba(0,0,0,0.6)` (soft, low spread).

## Animations
- Transitions: 300ms ease for hover, 500ms ease-out for image fade/crossfade.
- No bouncing. No playful motion. Quiet, considered.
- Scroll-reveal: simple opacity + small y-translate, 600ms.

## Do
- Use a single accent (gold). Do not add more colors.
- Use serif for emotional/editorial moments, sans for utility.
- Keep line-height generous (1.6 body, 1.15 display).
- Pair every strong image with generous padding around it.

## Don't
- No gradients on text or backgrounds (except hero overlays).
- No bright colors, no neon, no discount red.
- No drop shadows on cards.
- No emoji.
- No icons inside the main heading area (use Lucide only in nav/UI/buttons).
- No "SALE" badges or promotional stickers.
