# SSourcing China - Design System

## Overview
Professional B2B website for a China-based sourcing agent. Clean, trustworthy, international aesthetic with a focus on reliability and expertise.

## Color Palette

| Token | Value | Usage |
|-------|-------|-------|
| Primary | #1A365D | Headers, nav, primary buttons, footer |
| Primary Dark | #0F2240 | Hover states, deep accents |
| Accent | #C27A3E | CTA buttons, highlights, trust badges |
| Accent Light | #F5EDE3 | Light accent backgrounds |
| Surface | #FFFFFF | Card backgrounds, content areas |
| Background | #F8F9FA | Page background, sections |
| Text Primary | #1E293B | Body text, headings |
| Text Secondary | #64748B | Subtitles, captions, meta |
| Text Light | #94A3B8 | Placeholders, disabled |
| Border | #E2E8F0 | Dividers, card borders |
| Success | #059669 | Positive indicators |
| Warning | #D97706 | Alert badges |

## Typography

| Element | Font | Size | Weight | Line Height | Letter Spacing |
|---------|------|------|--------|-------------|----------------|
| H1 (Hero) | Inter | 48px / 3rem | 700 | 1.1 | -0.02em |
| H2 (Section) | Inter | 36px / 2.25rem | 700 | 1.2 | -0.01em |
| H3 (Card) | Inter | 24px / 1.5rem | 600 | 1.3 | 0 |
| H4 | Inter | 18px / 1.125rem | 600 | 1.4 | 0 |
| Body | Inter | 16px / 1rem | 400 | 1.6 | 0 |
| Small | Inter | 14px / 0.875rem | 400 | 1.5 | 0 |
| Caption | Inter | 12px / 0.75rem | 500 | 1.5 | 0.02em |
| Nav Link | Inter | 14px / 0.875rem | 500 | 1 | 0 |

## Spacing Scale

| Token | Value | Usage |
|-------|-------|-------|
| xs | 4px | Icon gaps, tight spacing |
| sm | 8px | Small gaps |
| md | 16px | Default component padding |
| lg | 24px | Card padding, section gaps |
| xl | 32px | Section internal spacing |
| 2xl | 48px | Between major elements |
| 3xl | 64px | Section vertical padding |
| 4xl | 96px | Hero/large section spacing |

## Component Styles

### Primary Button (CTA)
- Background: #C27A3E
- Text: #FFFFFF, font-weight 600, 14px
- Padding: 14px 32px
- Border-radius: 6px
- Hover: #A8642E, slight scale(1.02)
- Active: #8F5A28

### Secondary Button
- Background: transparent
- Border: 2px solid #1A365D
- Text: #1A365D, font-weight 600
- Hover: #1A365D background, white text

### Card
- Background: #FFFFFF
- Border: 1px solid #E2E8F0
- Border-radius: 8px
- Padding: 24px
- Shadow: 0 1px 3px rgba(0,0,0,0.08)
- Hover: shadow increases, border-color shifts to #C27A3E

### Section
- Background: alternating #FFFFFF and #F8F9FA
- Padding: 64px vertical, responsive horizontal
- Max-width: 1280px, centered

## Layout Patterns

### Header
- Fixed top, z-index: 50
- Height: 72px
- Background: #FFFFFF with subtle bottom border
- Logo left, nav center, CTA right
- Mobile: hamburger menu

### Hero Section
- Background: #1A365D with overlay image
- Min-height: 600px (desktop), 500px (mobile)
- Content: left-aligned, max-width 640px
- H1 + subtitle + CTA button
- Stats bar below hero content

### Footer
- Background: #1A365D
- Text: #E2E8F0
- 4-column layout: Brand, Services, Pages, Contact
- Bottom bar: copyright + social

## Responsive Breakpoints

| Name | Width | Key Changes |
|------|-------|-------------|
| Mobile | < 640px | Single column, stacked nav, reduced padding |
| Tablet | 640-1023px | 2-column grids, hamburger nav |
| Desktop | 1024px+ | Full layout, horizontal nav, multi-column |

## Do's and Don'ts

- DO use generous whitespace between sections
- DO keep text left-aligned for readability
- DO use the accent color sparingly for CTAs and highlights only
- DON'T use more than 2 font weights on a single card
- DON'T use dark backgrounds for body content sections
- DON'T crowd elements - this is B2B, not e-commerce
