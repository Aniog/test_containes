# Sprite Brand Design System

## Brand Identity
Sprite is a crisp, refreshing lemon-lime soda. The visual identity is bold, clean, and energetic — centered on bright greens, whites, and cool accents.

## Color Palette
- **Primary Green**: `#00A651` (Tailwind: use custom `sprite-green`)
- **Lime Green**: `#7DC242` (Tailwind: use custom `sprite-lime`)
- **Dark Green**: `#006633` (Tailwind: use custom `sprite-dark`)
- **White**: `#FFFFFF`
- **Off-White / Light**: `#F4FBF0`
- **Charcoal**: `#1A1A1A` (for dark text)
- **Gray Text**: `#555555`

Add to tailwind.config.js:
```js
colors: {
  'sprite-green': '#00A651',
  'sprite-lime': '#7DC242',
  'sprite-dark': '#006633',
  'sprite-light': '#F4FBF0',
}
```

## Typography
- **Font**: "Poppins" (Google Fonts) — bold, modern, energetic
- **Headings**: font-black or font-extrabold, uppercase for hero titles
- **Body**: font-normal, text-gray-700
- **Sizes**: hero h1 `text-6xl md:text-8xl`, section h2 `text-4xl md:text-5xl`, body `text-lg`

## Spacing & Layout
- Section padding: `py-20 px-6`
- Max content width: `max-w-6xl mx-auto`
- Card border radius: `rounded-2xl` or `rounded-3xl`
- Generous whitespace between sections

## Borders & Shadows
- Cards: `shadow-xl rounded-3xl`
- Buttons: `rounded-full` pill shape
- No harsh borders; use shadows for depth

## Buttons
- Primary: `bg-sprite-green text-white rounded-full px-8 py-3 font-bold hover:bg-sprite-dark transition`
- Secondary: `border-2 border-sprite-green text-sprite-green rounded-full px-8 py-3 font-bold hover:bg-sprite-green hover:text-white transition`

## Do's
- Use bold, uppercase text for section headings
- Use green gradients for hero and accent sections
- Use white cards on green backgrounds and green cards on white backgrounds
- Keep layouts clean with lots of breathing room
- Use bubbles/circles as decorative elements

## Don'ts
- Don't use dark backgrounds except for contrast sections
- Don't use serif fonts
- Don't crowd elements — Sprite is about freshness and openness
- Don't use low-contrast text combinations
