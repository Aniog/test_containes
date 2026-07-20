# Velmora Fine Jewelry — Design System

## Brand
Velmora Fine Jewelry is a premium demi-fine DTC jewelry store. Mood: quiet luxury, warm, editorial.

## Color palette

| Token                  | Hex       | Usage                                                |
| ---------------------- | --------- | ---------------------------------------------------- |
| `--color-bg`           | `#FAF6F1` | Page background, warm ivory                          |
| `--color-surface`      | `#FFFFFF` | Cards, cart drawer, modals                           |
| `--color-text`         | `#2B2118` | Primary text, headings, logo                         |
| `--color-text-muted`   | `#6B5D4D` | Secondary text, captions, meta                       |
| `--color-accent`       | `#B3875F` | Buttons, links, stars, newsletter block              |
| `--color-accent-hover` | `#9A6F4B` | Button/link hover                                    |
| `--color-border`       | `#E8E0D6` | Hairline dividers, input borders                     |
| `--color-gold`         | `#C9A472` | Warm metallic highlights                             |

## Typography

- **Headings / product names:** Cormorant Garamond, serif. Elegant, high contrast.
- **Body / UI:** Manrope, sans-serif. Clean and modern.
- Product names are rendered in uppercase with wide letter-spacing (`tracking-[0.2em]`).

## Spacing & layout

- Generous whitespace. Section vertical padding: `py-16 md:py-24`.
- Max content width: `max-w-7xl mx-auto`.
- Hairline dividers: `border-b border-[#E8E0D6]`.
- Mobile-first; most traffic is mobile.

## Components

### Buttons
- **Primary accent:** solid `#B3875F` background, white text, no border-radius (square), uppercase tracking-wide, hover `#9A6F4B`.
- **Outline:** transparent background, 1px `#2B2118` border, hover fills background with `#2B2118` and text becomes `#FAF6F1`.

### Cards
- White background, subtle shadow on hover, image-first with hover secondary image.

### Inputs
- 1px border `#E8E0D6`, transparent bg, focus ring `#B3875F`.
