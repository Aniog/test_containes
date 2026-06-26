# ARTITECT MACHINERY - Design System

## Overview
An elegant, user-friendly industrial machinery company website. Clean lines, professional typography, and a warm metallic accent color evoke precision engineering and trustworthiness.

## Color Palette
- **Primary (Brand)**: `#0B1D36` - Deep navy/charcoal, used for headings and dark sections
- **Accent**: `#C9A84C` - Warm gold/brass, used for CTAs, highlights, and decorative elements
- **Background (Light)**: `#F8F9FA` - Clean off-white for page backgrounds
- **Background (Dark)**: `#0B1D36` - Deep navy for footer and hero overlay
- **Surface**: `#FFFFFF` - Pure white for cards and content areas
- **Text Primary**: `#1A1A1A` - Near black for body text on light backgrounds
- **Text Secondary**: `#6B7280` - Medium gray for secondary text
- **Text on Dark**: `#FFFFFF` - White text on dark backgrounds
- **Text Muted**: `#9CA3AF` - Light gray for captions and placeholders
- **Border**: `#E5E7EB` - Light border for cards and dividers
- **Accent Hover**: `#B8983D` - Darker gold for hover states

## Typography
- **Font Family**: Inter (Google Fonts) - weights 300, 400, 500, 600, 700, 800
- **Headings**: Bold weight (700-800), tight letter-spacing (-0.02em)
- **H1**: 48px / 56px line-height (desktop), 36px / 42px (mobile)
- **H2**: 36px / 44px line-height (desktop), 28px / 34px (mobile)
- **H3**: 24px / 32px line-height
- **Body**: 16px / 26px line-height, regular weight (400)
- **Small/Caption**: 14px / 20px line-height
- **Nav Links**: 14px / 20px, medium weight (500), uppercase, letter-spacing 0.05em

## Spacing
- **Page Padding**: 80px top/bottom for major sections (desktop), 48px (mobile)
- **Container Max Width**: 1280px
- **Container Padding**: 24px horizontal (mobile), 48px (desktop)
- **Card Padding**: 32px
- **Grid Gap**: 32px
- **Section Gap**: 96px between major sections

## Components

### Buttons
- **Primary**: Background `#C9A84C`, text `#0B1D36`, padding 14px 32px, font-weight 600, uppercase, letter-spacing 0.05em. Hover: background `#B8983D`, subtle scale(1.02).
- **Secondary/Outline**: Border 2px `#0B1D36`, text `#0B1D36`, background transparent. Hover: background `#0B1D36`, text `#FFFFFF`.

### Cards
- Background `#FFFFFF`, border-radius 8px, border 1px `#E5E7EB`
- Subtle shadow: `0 1px 3px rgba(0,0,0,0.08)`
- Hover: shadow `0 8px 24px rgba(0,0,0,0.12)`, translateY(-4px)

### Navigation
- Transparent on hero, transitions to white background on scroll
- Fixed top, z-index 50, height 72px
- Logo left, nav links center-right, CTA button far right
- Mobile: hamburger menu

## Layout Patterns
- Single-page scrolling layout with anchor navigation
- Hero: Full viewport height with dark overlay, centered text
- Products: 3-column grid on desktop, 1-column on mobile
- About: Two-column layout (text left, image right)
- Contact: Two-column layout (form left, info right)
- Footer: Dark background, multi-column links

## Do's
- Use generous whitespace between sections
- Use the gold accent sparingly for maximum impact
- Use high-quality images of machinery with the stock image system
- Ensure all text has strong contrast against backgrounds
- Use uppercase for nav links, buttons, and small labels

## Don'ts
- Don't use more than one accent color
- Don't crowd content - let it breathe
- Don't use gradients except for subtle hero overlays
- Don't use pure black (`#000000`) for text
