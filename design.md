# Velmora Fine Jewelry — Design System

## Brand Identity
Quiet luxury, warm, editorial. Premium demi-fine jewelry. No loud colors, no discount vibes, no generic e-commerce.

## Color Palette
| Token | Hex | Usage |
|-------|-----|-------|
| background | #FAF8F5 | Page background |
| foreground | #1C1917 | Primary text |
| accent | #C9A96E | Gold accent — CTAs, highlights, stars |
| accent-hover | #B8956A | Accent hover state |
| muted | #78716C | Secondary text |
| muted-light | #A8A29E | Placeholder, disabled text |
| border | #E7E5E4 | Hairline dividers, card borders |
| card | #FFFFFF | Card backgrounds |
| dark-bg | #2C2420 | Dark section backgrounds (newsletter, footer) |
| dark-fg | #FAF8F5 | Text on dark backgrounds |

## Typography
- **Headings / Logo / Product names**: Cormorant Garamond (serif), weight 400–600
  - H1: 48–64px, line-height 1.1
  - H2: 32–40px, line-height 1.2
  - Product names: 14px, uppercase, letter-spacing 0.15em, weight 500
- **Body / UI / Nav**: Inter (sans-serif), weight 400–500
  - Body: 16px, line-height 1.6
  - Small: 12–13px, line-height 1.5
  - Nav links: 14px, weight 500

## Spacing
- Generous whitespace. Section padding: 80–120px vertical on desktop, 48–64px on mobile.
- Container max-width: 1280px, centered.
- Grid gaps: 24–32px.

## Components
- **Buttons**: 
  - Primary: solid accent (#C9A96E), white text, no border-radius or 2px, padding 14px 32px, uppercase tracking-wide.
  - Secondary/Outline: 1px border accent, accent text, transparent bg.
  - Hover: scale(1.02), background shifts to accent-hover.
- **Cards**: white bg, no border or 1px border (#E7E5E4), subtle shadow on hover.
- **Dividers**: 1px hairline #E7E5E4.
- **Input**: 1px border #E7E5E4, bg white, focus ring accent.

## Animations
- Hover transitions: 0.3s ease-out
- Cart drawer: slide-in from right 0.35s cubic-bezier(0.25, 0.8, 0.25, 1)
- Fade in on scroll: opacity 0→1, translateY(20px)→0, 0.6s ease-out
- Image hover: scale(1.03) on product images

## Responsive
- Mobile-first. Breakpoints: sm 640px, md 768px, lg 1024px, xl 1280px.
- Single column on mobile, 2-col on sm, 3-col on md, 4-5 col on lg.
- Nav collapses to hamburger on mobile.
