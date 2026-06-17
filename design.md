# Visual Style Guide - Strikingly AI Generators Hub

This document defines the visual style and Tailwind CSS patterns for the Strikingly AI Generators Hub page.

## Typography
- **Headings**: Josefin Sans, Weight 700, ALL UPPERCASE, line-height 1.2.
  - Tailwind: `font-heading font-bold uppercase leading-[1.2]`
- **Body**: Open Sans, Weight 400, 14px base, line-height 1.5.
  - Tailwind: `font-body font-normal text-[14px] leading-[1.5]`
- **Buttons**: Josefin Sans, Weight 700, uppercase.

## Colors
- **Brand Purple**: `#8159BB` (Tailwind: `text-brand-purple`, `border-brand-purple`)
- **AI Gradient**: `linear-gradient(from #7671FF to #CB0C9F)`
  - Tailwind: `bg-ai-gradient`
- **Body Text**: `#636972` (Tailwind: `text-body-gray`)
- **Headings**: `#4B5056` (Tailwind: `text-heading-gray`)
- **Hero H1 Line 1**: `#2E2E2F` (Tailwind: `text-h1-dark`)
- **Card Border**: `#C6C9CD` (Tailwind: `border-card-border`)
- **Subtle Divider**: `#E2E4E7` (Tailwind: `border-divider`)
- **Light Background**: `#F4F6F8` (Tailwind: `bg-light-bg`)
- **White**: `#FFFFFF` (Default background)

## UI Components

### Buttons
- **Standard**: 36px height, 4px border-radius, 14px uppercase.
  - Tailwind: `h-[36px] rounded-[4px] text-[14px] px-[15px] pt-[9px] pb-[9px] inline-flex items-center justify-center`
- **Big Variant**: 44px height.
  - Tailwind: `h-[44px]`
- **Primary (AI Gradient)**: White text, AI gradient fill.
  - Tailwind: `bg-ai-gradient text-white`
- **Secondary (Ghost)**: 1px brand-purple border, brand-purple text.
  - Tailwind: `border border-brand-purple text-brand-purple bg-transparent`

### Cards
- **Normal**: White background, 1px `#C6C9CD` border, 3px border-radius, 20px padding.
  - Tailwind: `bg-white border border-card-border rounded-card p-[20px]`
- **Hover**: Subtle elevation lift, 1px brand-purple border.
  - Tailwind: `hover:shadow-card-hover hover:border-brand-purple transition-all duration-200`

### Tags (Category Badges)
- 11px uppercase, 2x6px padding, 3px border-radius, 1px brand-purple border, brand-purple text.
  - Tailwind: `text-[11px] px-[6px] py-[2px] rounded-[3px] border border-brand-purple text-brand-purple uppercase`

## Spacing
- Multiples of 10px (5px allowed for tight pairs).
- 20px between blocks, 40px between sections.
- Hero: 60-80px top/bottom.
- Max content width: 1200px.
  - Tailwind: `max-w-[1200px] mx-auto px-[20px] md:px-[40px]`
