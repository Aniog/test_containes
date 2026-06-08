# Design Guidelines - Strikingly AI Generators Hub

## Typography

- **Headings**: `font-family: 'Josefin Sans', sans-serif;` (fallback to geometric sans-serif).
  - All headings should be **UPPERCASE**.
  - Weight: 700.
  - Line-height: 1.2.
  - Sizes:
    - H1: 40-48px (desktop), 28-32px (mobile).
    - H2: 26-32px (desktop).
- **Body**: `font-family: 'Open Sans', sans-serif;`.
  - Weight: 400.
  - Size: 14px base.
  - Line-height: 1.5.
- **Buttons**: Same as headings (Josefin Sans), weight 700, uppercase.

## Colors

- **Brand Purple**: `#8159BB`
- **AI Gradient**: `linear-gradient(to right, #7671FF, #CB0C9F)`
- **Body Text**: `#636972`
- **Headings (Section)**: `#4B5056`
- **Hero H1 Line 1**: `#2E2E2F`
- **Card Border**: `#C6C9CD`
- **Subtle Divider**: `#E2E4E7`
- **Light Background**: `#F4F6F8`
- **White (Default BG)**: `#FFFFFF`
- **Note**: Avoid `#000000`.

## Components

### Buttons
- Height: 36px (standard), 44px (large).
- Border Radius: 4px.
- Padding: 9px 15px.
- **Primary (AI Gradient)**: White text (`#FFFFFF`), gradient fill.
- **Secondary (Ghost)**: Transparent background, 1px `#8159BB` border, `#8159BB` text.

### Cards
- Background: `#FFFFFF`.
- Border: 1px solid `#C6C9CD`.
- Border Radius: 3px.
- Padding: 20px.
- **Hover**: Subtle elevation lift (box-shadow), 1px `#8159BB` border.

### Tags (Category Badges)
- Font: Heading font, 11px, uppercase.
- Padding: 2px 6px.
- Border Radius: 3px.
- Ghost style: `#8159BB` text, 1px `#8159BB` border, no fill.

## Layout & Spacing
- Max content width: 1200px (centered).
- Spacing unit: Multiples of 10px (5px allowed for tight pairs).
- Between blocks: 20px.
- Between sections: 40px.
- Hero padding: 60-80px (top/bottom).
- Between adjacent buttons: 10px.
