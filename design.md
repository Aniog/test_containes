# ACID-WAVE Design System

## Brand Identity
ACID-WAVE is an experimental digital art collective. The visual language is aggressive, glitchy, and psychedelic — inspired by acid house, rave culture, and digital distortion.

## Color Palette
- **Acid Green**: `#CCFF00` — primary accent, used for headlines, highlights, borders
- **Deep Violet**: `#1A0033` — primary background
- **Void Black**: `#0A0010` — deepest background, overlays
- **Electric Purple**: `#7B00FF` — secondary accent
- **Hot Magenta**: `#FF00CC` — tertiary accent, glitch color
- **Off-White**: `#F0F0F0` — body text on dark backgrounds

Tailwind custom colors (added to config):
- `acid: '#CCFF00'`
- `violet-deep: '#1A0033'`
- `void: '#0A0010'`
- `electric: '#7B00FF'`
- `magenta: '#FF00CC'`

## Typography
- **Display / Headlines**: "Space Grotesk" — extra bold (800), stretched with `letter-spacing: -0.02em`, `transform: scaleX(1.1)` for aggressive look
- **Body**: "Space Mono" — monospace, creates a technical/digital feel
- **Accent / Labels**: "Space Grotesk" — uppercase, wide letter-spacing

### Tailwind Typography Classes
- `font-display` → Space Grotesk
- `font-mono` → Space Mono
- Headline: `text-8xl font-black tracking-tighter uppercase`
- Subheading: `text-2xl font-bold tracking-widest uppercase`
- Body: `font-mono text-base leading-relaxed`

## Spacing
- Sections: `py-24 px-8` on desktop, `py-16 px-4` on mobile
- Cards: `p-6` with `gap-4`
- Tight: `gap-2`, `p-2`

## Borders & Shadows
- Accent border: `border border-acid` or `border-2 border-acid`
- Glow effect: `shadow-[0_0_20px_#CCFF00]` for acid green glow
- Glitch shadow: `shadow-[4px_4px_0_#FF00CC,-4px_-4px_0_#7B00FF]`

## Visual Effects
- **Glitch filter**: CSS `hue-rotate`, `contrast`, `brightness` animations
- **Duotone**: SVG `feColorMatrix` filter — violet + acid green
- **Backdrop blur**: `backdrop-blur-sm` with color overlays
- **Marquee**: CSS `animation: marquee linear infinite`

## Navigation
- Positioned at the **bottom** of the screen, fixed
- Diagonal text labels rotated `-45deg` or displayed vertically
- Background: semi-transparent void black with acid green border-top
- Active state: acid green text with glow

## Do's
- Use acid green for ALL interactive elements and key headlines
- Stretch/scale type horizontally for impact
- Layer elements with z-index for depth
- Use CSS animations liberally (glitch, pulse, flicker)
- Mix monospace and display fonts for contrast

## Don'ts
- No light backgrounds (everything is dark)
- No rounded corners on primary elements (sharp edges only)
- No soft shadows (use hard offset shadows or glows)
- No centered body text (left-align or full-width)
- No pastel or muted colors
