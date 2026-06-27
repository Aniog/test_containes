# Design System — Strikingly /generators Hub

This page (and the broader /generators network) uses the design tokens below.
Always translate these into Tailwind classes or inline CSS values when building
new sections or components.

## Typography

- **Headings:** Josefin Sans (free fallback for paid Brandon Grotesque), weight 700, ALL UPPERCASE, line-height 1.2
- **Body:** Open Sans, weight 400, 14px base, line-height 1.5
- **Buttons:** same as headings (Josefin Sans), weight 700, uppercase, 14px
- **H1:** 40–48px desktop, 28–32px mobile
- **H2:** 26–32px desktop
- **Tags / badges:** 11px, uppercase, 2px vertical / 6px horizontal padding

## Colors

- Brand purple: `#8159BB`
- AI gradient: `linear-gradient(135deg, #7671FF 0%, #CB0C9F 100%)` — use ONLY for primary CTAs and the gradient line in the hero H1
- Body text: `#636972`
- Heading text: `#4B5056` (section headings), `#2E2E2F` (hero H1 line 1)
- Card border: `#C6C9CD`
- Subtle divider: `#E2E4E7`
- Light surface: `#F4F6F8`
- Page background: `#FFFFFF`

Never use `#000000`. Always use `#FFFFFF` text on AI-gradient or solid-color fills.

## Components

### Buttons

| Variant     | Height | Fill                              | Text       |
| ----------- | ------ | --------------------------------- | ---------- |
| Primary     | 36px   | AI gradient                       | `#FFFFFF`  |
| Primary big | 44px   | AI gradient                       | `#FFFFFF`  |
| Ghost       | 36px   | transparent, 1px purple border    | `#8159BB`  |

- Border radius: 4px
- Padding: 0 15px (default), 0 22px (big)

### Cards

- Background: `#FFFFFF`
- Border: 1px `#C6C9CD`
- Border radius: 3px
- Padding: 20px
- Hover: subtle box-shadow lift + 1px `#8159BB` border

### Tags (category badges)

- 11px uppercase, 2px/6px padding, 3px radius
- Ghost: 1px purple border, purple text, transparent fill

## Spacing

- All margins / paddings in 10px multiples (5px allowed for tight pairs)
- 20px between adjacent blocks
- 40px between sections
- Hero: 60–80px top and bottom
- 10px between adjacent buttons
- Max content width: 1200px, centered

## Layout

- Hero: two-column desktop (60/40), stacked mobile
- Featured grid: 3-col desktop, 2-col tablet, 1-col mobile
- Browse by Category grid: 3-col desktop, 2-col tablet, 1-col mobile
- All Generators subsections: 3-col desktop, 2-col tablet, 1-col mobile
- How It Works: 3-col desktop, stacked mobile
- Why Strikingly: 3-col desktop, stacked mobile
- FAQ: single column, accordion

## Don't

- Do NOT splash the AI gradient on section headers or backgrounds. It is reserved for primary CTAs and the hero H1 line 2.
- Do NOT use scale or rotation transforms on hover. Use only box-shadow and border-color changes.
- Do NOT invent fake social proof (star ratings, customer counts, testimonials).
- Do NOT embed the AI site builder form on this page. The builder lives at `/s/ai_site_builder`.
- Do NOT add structured data other than `BreadcrumbList`. Do NOT add FAQPage, ItemList, WebApplication.

## RTL / i18n

- Use CSS logical properties (`margin-inline-start`, `padding-inline-end`) where practical.
- All user-visible strings live in a single `strings.en` JS object. Adding `strings.es`, `strings.ja` is a one-file change.
- URL pattern `/generators` for English. Reserve `/es/generators`, `/ja/generators` for future locales.
