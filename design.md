# SSourcing China — Design System

## Overview
A professional, trustworthy B2B website for a China-based sourcing agent. The design is clean, international, and practical. No exaggerated claims. The goal is to generate qualified sourcing inquiries.

## Color Palette

| Token | Hex | Usage |
|-------|-----|-------|
| Primary | #0F4C75 | Headings, nav active states, primary buttons, key accents |
| Primary Dark | #0A344D | Hover states, darker accents |
| Secondary | #3282B8 | Links, secondary buttons, icons |
| Accent | #FF6B35 | CTAs, highlights, badges |
| Background | #F7F9FB | Page background |
| Surface | #FFFFFF | Cards, sections, nav background |
| Text Primary | #1A202C | Body text, headings |
| Text Secondary | #4A5568 | Descriptions, meta text |
| Text Muted | #718096 | Captions, placeholders |
| Border | #E2E8F0 | Dividers, card borders |
| Success | #38A169 | Success states, trust badges |

## Typography

| Element | Font | Weight | Size | Line Height |
|---------|------|--------|------|-------------|
| H1 (Hero) | Inter | 800 | 48px / 3rem | 1.1 |
| H2 (Section) | Inter | 700 | 36px / 2.25rem | 1.2 |
| H3 (Card Title) | Inter | 600 | 24px / 1.5rem | 1.3 |
| H4 (Subsection) | Inter | 600 | 20px / 1.25rem | 1.4 |
| Body | Inter | 400 | 16px / 1rem | 1.7 |
| Body Small | Inter | 400 | 14px / 0.875rem | 1.6 |
| Caption | Inter | 500 | 12px / 0.75rem | 1.5 |

## Spacing

- Section padding: py-20 (80px vertical)
- Container max-width: max-w-7xl (1280px), centered
- Card padding: p-8 (32px)
- Grid gaps: gap-8 (32px)
- Element spacing: space-y-4 to space-y-6

## Border Radius

- Buttons: rounded-lg (8px)
- Cards: rounded-xl (12px)
- Badges: rounded-full
- Images: rounded-lg (8px)

## Shadows

| Token | Value | Usage |
|-------|-------|-------|
| sm | 0 1px 2px rgba(0,0,0,0.05) | Subtle borders |
| md | 0 4px 6px -1px rgba(0,0,0,0.1) | Cards |
| lg | 0 10px 15px -3px rgba(0,0,0,0.1) | Elevated cards |
| xl | 0 20px 25px -5px rgba(0,0,0,0.1) | Modals, hero overlays |

## Buttons

| Variant | Background | Text | Border | Hover |
|---------|------------|------|--------|-------|
| Primary | #FF6B35 | #FFFFFF | none | darken 10% |
| Secondary | #0F4C75 | #FFFFFF | none | darken 10% |
| Outline | transparent | #0F4C75 | 2px #0F4C75 | fill bg |
| Ghost | transparent | #3282B8 | none | underline |

## Layout Patterns

- **Hero**: Full-width, min-height 600px, left text + right image or centered text over background
- **Feature Grid**: 3-column grid on desktop, 1-column on mobile
- **Process Steps**: Numbered timeline, alternating or vertical
- **Testimonials**: Card carousel or grid
- **CTA Banner**: Full-width colored background with centered text + button
- **FAQ**: Accordion with smooth expand/collapse

## Do's and Don'ts

- DO use plenty of whitespace
- DO use the primary blue for trust signals
- DO use accent orange sparingly for CTAs only
- DO keep text readable with high contrast
- DO use realistic factory/QC/shipping imagery
- DON'T use flashy animations
- DON'T use gradient backgrounds (except subtle overlays)
- DON'T use more than 2 colors in any single component
- DON'T crowd content — B2B buyers scan, they don't read walls of text
