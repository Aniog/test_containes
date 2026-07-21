# Velmora Fine Jewelry - Design System

## Visual Identity
- Mood: quiet luxury, warm, editorial. Premium demi-fine jewelry.
- NOT loud, NOT discount-looking, NOT generic e-commerce.

## Color Palette
- Background (cream): `#faf8f5` — main page background
- Background secondary (warm beige): `#f3f0eb` — section backgrounds, card backgrounds
- Text primary (dark charcoal): `#2c2825` — headings, primary text, buttons
- Text muted (warm gray): `#6b6560` — body text, descriptions
- Text light (light gray): `#9a9490` — secondary text, placeholders
- Accent gold: `#b8860b` — hover states, links, accent elements
- Accent gold hover: `#996f0a` — deeper gold for active states
- Gold light: `#d4a853` — stars, icons, decorative elements
- Gold lighter: `#e8d5a3` — subtle gold accents, hero text
- Border: `#e8e4df` — dividers, card borders
- Border light: `#f0ece7` — subtle borders
- Dark: `#2c2825` — same as text primary, used for buttons and dark sections
- Warm gray: `#8a8279` — additional neutral tone

## Typography
- Headings: Cormorant Garamond (serif), weight 400, uppercase, letter-spacing 0.08em
- Large headings: Cormorant Garamond, weight 300, letter-spacing 0.04em
- Product names: Cormorant Garamond, weight 500, uppercase, letter-spacing 0.12em
- Body text: Inter (sans-serif), weight 400, line-height 1.7
- UI text: Inter, weight 500, uppercase, letter-spacing 0.15em, size 0.75rem (12px)

## Spacing
- Section padding: py-16 sm:py-24 (64px mobile, 96px desktop)
- Container max-width: max-w-7xl (80rem / 1280px)
- Container padding: px-4 sm:px-6 lg:px-8
- Card gaps: gap-4 sm:gap-6 lg:gap-8
- Component gaps: gap-2, gap-3, gap-4, gap-6, gap-8

## Borders & Dividers
- Hairline dividers: 1px solid #e8e4df
- Card borders: 1px solid #e8e4df
- Input borders: 1px solid #e8e4df, focus: border #d4a853

## Buttons
- Primary: bg-[#2c2825], text white, hover bg-[#b8860b], padding 0.875rem 2.5rem
- Outline: transparent bg, border 1px solid #2c2825, hover bg-[#2c2825] text white
- All buttons: text-xs, tracking-[0.15em], uppercase, font-medium

## Shadows
- Soft shadows only, used sparingly
- Navbar on scroll: shadow-sm
- No heavy drop shadows on cards

## Animations
- Fade in: 0.6s ease-out
- Slide up: 0.5s ease-out, translateY(20px) to 0
- Scale in: 0.3s ease-out, scale(0.95) to 1
- Hover transitions: 0.3s ease for colors, 0.5-0.7s for image transforms
- Image hover scale: 1.05 or 1.10

## Responsive Breakpoints
- Mobile first approach
- sm: 640px — tablets
- md: 768px — small laptops
- lg: 1024px — desktops

## Do's
- Use generous whitespace
- Use large editorial imagery
- Use thin hairline dividers
- Use restrained accent color (gold)
- Use subtle hover transitions
- Use soft shadows sparingly
- Keep product names in UPPERCASE with wide letter-spacing
- Maintain consistent warm, cream-toned palette

## Don'ts
- Don't use loud or bright colors
- Don't use discount-looking elements (sale badges with red, strikethrough prices)
- Don't use generic e-commerce patterns (cluttered layouts, too many CTAs)
- Don't use heavy drop shadows
- Don't use harsh borders
- Don't mix font families beyond Cormorant Garamond and Inter
- Don't use hex codes directly in JSX — use Tailwind arbitrary values or CSS variables
- Don't use blue, red, or green as primary colors
