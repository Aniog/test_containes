# Velmora Fine Jewelry — Design System

## Brand Identity
- Mood: Quiet luxury, warm, editorial, premium demi-fine jewelry
- Target: Women 25–45, gifting & self-purchase, $30–$120

## Color Palette
All colors defined as Tailwind named tokens.

### Light / Editorial Base
| Token | Hex | Usage |
|---|---|---|
| background | #FDFBF7 | Page background, warm ivory |
| surface | #FFFFFF | Cards, modals, nav solid state |
| surface-alt | #F7F4EF | Alternate sections, subtle contrast |
| text-primary | #1C1917 | Headings, body text |
| text-secondary | #57534E | Descriptions, captions, muted |
| text-tertiary | #A8A29E | Placeholders, disabled |
| border | #E7E5E4 | Dividers, card borders, inputs |
| border-light | #F0EEEB | Hairline dividers |

### Accent — Warm Gold
| Token | Hex | Usage |
|---|---|---|
| gold | #B8860B | Primary CTA, accent highlights |
| gold-dark | #8B6914 | Hover state, emphasis |
| gold-light | #D4A843 | Soft accent, icons |
| gold-muted | #F5ECD7 | Badges, soft backgrounds |

### Utility
| Token | Hex | Usage |
|---|---|---|
| star | #D4A843 | Rating stars |
| success | #16A34A | In stock, success |
| error | #DC2626 | Errors, out of stock |

## Typography
- Headings / Logo: `Cormorant Garamond`, serif, weights 300–600
- Body / UI: `Inter`, sans-serif, weights 300–600
- Product names: `Cormorant Garamond`, uppercase, letter-spacing 0.15em
- Prices: `Inter`, weight 500

## Spacing & Layout
- Section padding: py-16 md:py-24
- Container max-width: max-w-7xl mx-auto px-4 sm:px-6 lg:px-8
- Grid gap: gap-6 md:gap-8
- Card radius: rounded-lg (8px)
- Button radius: rounded-none (sharp, luxury feel) or rounded-sm

## Components
- Buttons: solid gold bg with white text, or outlined gold. Sharp corners. Uppercase tracking-wider text-sm.
- Cards: white bg, subtle shadow, border, hover lift with shadow-lg
- Dividers: border-t border-border-light (thin hairlines)
- Input fields: rounded-none, border-border, focus:ring-gold

## Animations
- Hover transitions: transition-all duration-300 ease-in-out
- Card hover: translateY(-4px) shadow increase
- Button hover: bg darken, subtle scale
- Page transitions: fade-in

## Do's
- Use generous whitespace
- Keep backgrounds warm (no stark white or cool grays)
- Use thin hairline dividers between sections
- Product names always uppercase with wide tracking
- Gold accents only for interactive elements and highlights

## Don'ts
- No bright saturated colors
- No heavy shadows or borders
- No rounded buttons (keep sharp for luxury feel)
- No discount-looking badges or loud UI
- No generic e-commerce clutter
