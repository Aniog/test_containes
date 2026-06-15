# Design System: Strikingly Generators Hub

## Typography
- **Headings**: `Josefin Sans`, sans-serif. Use `font-bold uppercase tracking-tight`.
  - H1: `text-[28px] md:text-[40px] lg:text-[48px] leading-[1.2]`
  - H2: `text-[22px] md:text-[26px] lg:text-[32px] leading-[1.2]`
  - H3: `text-[18px] md:text-[20px] lg:text-[22px] leading-[1.2]`
- **Body**: `Open Sans`, sans-serif. 
  - Base: `text-[14px] leading-[1.5]`
- **Buttons**: `Josefin Sans`, `font-bold uppercase text-[14px]`.

## Colors
- **Brand Purple**: `#8159BB` (Tailwind: `brand-purple`)
- **AI Gradient**: `from-[#7671FF] to-[#CB0C9F]` (Tailwind: `ai-gradient`)
- **Text**:
  - Hero H1 Line 1 / Primary Headers: `#2E2E2F` (Tailwind: `heading-dark`)
  - Section Headings: `#4B5056` (Tailwind: `heading-gray`)
  - Body: `#636972` (Tailwind: `body-gray`)
- **UI Elements**:
  - Card Border: `#C6C9CD` (Tailwind: `card-border`)
  - Divider: `#E2E4E7` (Tailwind: `divider`)
  - Light Background: `#F4F6F8` (Tailwind: `bg-light`)
  - White: `#FFFFFF` (Page background)

## Layout & Spacing
- **Container**: `max-w-[1200px] mx-auto px-4`.
- **Vertical Spacing**:
  - Between blocks: `my-5` (20px)
  - Between sections: `my-10` (40px)
  - Hero Section: `py-[60px] md:py-[80px]`
- **Multiples of 10px**: All margins and paddings follow this rule.

## Components

### Buttons
- **Default**: `h-[36px] px-[15px] py-[9px] rounded-[4px] font-bold uppercase`
- **Large**: `h-[44px]`
- **Primary (AI Gradient)**: `bg-gradient-to-r from-[#7671FF] to-[#CB0C9F] text-white`
- **Secondary (Ghost)**: `border border-brand-purple text-brand-purple bg-transparent hover:bg-brand-purple/5 transition-colors`

### Cards
- **Base**: `bg-white border border-[#C6C9CD] rounded-[3px] p-5 transition-all`
- **Hover**: `hover:border-[#8159BB] hover:shadow-sm` (subtle lift)

### Tags (Category Badges)
- `text-[11px] font-bold uppercase px-[6px] py-[2px] rounded-[3px] border border-brand-purple text-brand-purple`

## Do's and Don'ts
- **DO**: Use semantic HTML elements (`<nav>`, `<main>`, `<section>`, `<article>`, `<footer>`).
- **DO**: Maintain multiples of 10px for spacing where possible.
- **DO**: Ensure buttons with background fill have white text.
- **DON'T**: Use black (`#000000`) for text or background.
- **DON'T**: Invent customer counts or social proof.
- **DON'T**: Embed any form inputs on this page (except the search filter).
