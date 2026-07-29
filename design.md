# SSourcing China - Design System

## Overview
Professional B2B sourcing agent website. Clean, trustworthy, international style. Goal: generate qualified sourcing inquiries.

## Colors
- Primary: `#0f4c81` (Trust Blue) - nav, buttons, headings, links
- Primary Dark: `#0a3a63` - hover states
- Secondary: `#f59e0b` (Amber) - CTAs, accents, highlights
- Secondary Dark: `#d97706` - CTA hover
- Background: `#ffffff` - main page background
- Surface: `#f8fafc` - sections alternating bg
- Surface Dark: `#f1f5f9` - cards, forms
- Text Primary: `#1e293b` - body text, headings
- Text Secondary: `#64748b` - captions, descriptions
- Text Muted: `#94a3b8` - placeholders, disabled
- Border: `#e2e8f0` - dividers, card borders
- Success: `#10b981` - trust indicators
- Error: `#ef4444` - form errors

## Typography
- Font Family: Inter, system-ui, sans-serif
- H1: 48px / 700 weight / line-height 1.1 / tracking -0.02em
- H2: 36px / 700 weight / line-height 1.2 / tracking -0.01em
- H3: 24px / 600 weight / line-height 1.3
- H4: 20px / 600 weight / line-height 1.4
- Body: 16px / 400 weight / line-height 1.6
- Small: 14px / 400 weight / line-height 1.5
- Caption: 12px / 500 weight / uppercase / tracking 0.05em

## Spacing
- Section padding: py-20 (80px) desktop, py-12 (48px) mobile
- Container max-width: 1280px (max-w-7xl), centered
- Content gap: gap-8 (32px) between major elements
- Card padding: p-6 (24px)
- Button padding: px-6 py-3 (24px x 12px)

## Components

### Buttons
- Primary: bg-primary text-white px-6 py-3 rounded-md font-semibold hover:bg-primary-dark transition
- Secondary: bg-secondary text-white px-6 py-3 rounded-md font-semibold hover:bg-secondary-dark transition
- Outline: border-2 border-primary text-primary px-6 py-3 rounded-md font-semibold hover:bg-primary hover:text-white transition

### Cards
- bg-white rounded-lg shadow-sm border border-border p-6
- Hover: shadow-md transition

### Forms
- Input: bg-white border border-border rounded-md px-4 py-3 w-full focus:ring-2 focus:ring-primary focus:border-transparent
- Label: text-sm font-medium text-text-primary mb-1 block

## Layout
- Sticky header with white bg and subtle shadow
- Full-width sections with contained content
- Footer with dark bg, 4-column layout

## Animations
- Subtle fade-in on scroll for sections
- Button hover: scale(1.02) + shadow
- Card hover: translateY(-4px) + shadow-md

## Do's and Don'ts
- DO use plenty of white space
- DO use the stock image system for factory/QC/shipping visuals
- DON'T use bright flashy colors
- DON'T use rounded-full buttons (use rounded-md)
- DON'T overcrowd sections
