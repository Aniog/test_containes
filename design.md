# Small Hours — Design System

## Brand Identity
Small Hours is a quiet luxury jewelry brand. The visual language is intimate, editorial, and timeless. Every design decision should feel considered and unhurried.

**References:** Aesop, Toteme, Kinfolk, Mejuri

---

## Color Palette

| Name       | Hex       | Tailwind Token | Usage                          |
|------------|-----------|----------------|--------------------------------|
| Cream      | `#F5F0EB` | `bg-cream`     | Primary background             |
| Ink        | `#1A1A1A` | `text-ink`     | Primary text, buttons          |
| Gold       | `#C5A57A` | `text-gold`    | Accents, hover states, badges  |
| Muted      | `#6B6B6B` | `text-muted`   | Secondary text, labels         |
| Cream Dark | `#EDE8E2` | `bg-cream-dark`| Borders, dividers              |

**Do:** Use cream as the universal background. Use ink for all primary text. Use gold sparingly for accents and hover states only.
**Don't:** Use white backgrounds. Don't use bright colors. Don't use black (#000) — use ink (#1A1A1A).

---

## Typography

### Display / Logo
- Font: `Cormorant Garamond`, serif
- Weight: 300–400
- Letter spacing: `0.2em`
- Usage: Logo, hero headings, product titles

```
style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 300 }}
```

### Headings (H1–H3)
- Font: `Cormorant Garamond` or `Playfair Display`
- Weight: 300–400
- Size: `text-4xl` to `text-6xl`
- No bold headings

### Body Text
- Font: `Inter`, `Helvetica Neue`, sans-serif
- Weight: 300–400
- Size: `text-sm` to `text-base`
- Line height: relaxed (`leading-relaxed`)

### Labels & Tags
- Class: `.label-caps`
- Font: Inter
- Size: 10px
- Letter spacing: `0.2em`
- Transform: uppercase
- Color: `text-muted`

```jsx
<p className="label-caps text-muted">NEW ARRIVAL</p>
```

---

## Spacing

- Section padding: `py-20 md:py-32`
- Container max-width: `max-w-7xl mx-auto px-6 md:px-10`
- Generous whitespace is intentional — do not compress sections
- Card gaps: `gap-6 md:gap-8`

---

## Buttons

### Primary Button
```jsx
<button className="bg-ink text-cream px-10 py-4 label-caps text-xs tracking-widest hover:bg-gold hover:text-ink transition-colors duration-300">
  ADD TO BAG
</button>
```
- No border radius
- No box shadow
- Hover: gold background, ink text

### Secondary Button
```jsx
<button className="border border-ink text-ink px-10 py-3 label-caps text-xs tracking-widest hover:bg-gold hover:border-gold hover:text-ink transition-colors duration-300">
  VIEW COLLECTION
</button>
```

---

## Forms

### Input Fields
- Bottom border only — no box
- No border radius
- Gold focus state

```jsx
<input className="w-full bg-transparent border-0 border-b border-ink/20 pb-2 text-ink placeholder:text-muted/50 focus:outline-none focus:border-gold transition-colors duration-300 text-sm" />
```

### Labels
```jsx
<label className="label-caps text-muted block">Email</label>
```

---

## Animations

### Page Transition
- Class: `.page-enter`
- Opacity fade + subtle translateY
- Duration: 0.4s

### Scroll Reveal
- Class: `.reveal` (initial state: opacity 0)
- Add `.visible` via IntersectionObserver to trigger
- Animation: `revealUp` — opacity 0→1, translateY 24px→0
- Duration: 0.7s

### Image Hover
- Class: `.img-hover`
- Scale: 1.02
- Duration: 0.6s ease

### Typewriter
- Class: `.typewriter-cursor` for blinking cursor
- Implemented in `HomeHero.jsx`

---

## Images

- All images use the `@strikingly/sdk` ImageHelper system
- No white-background product shots
- Lifestyle photography: bedroom, vanity, morning light, candlelight
- Warm, film-inspired tones
- Aspect ratios: `3x4` for portraits, `16x9` for heroes, `4x3` for cards

---

## Cards

### Product Card
- No border
- No shadow
- Lifestyle image only
- Name + price revealed on hover (desktop) or always visible (mobile)
- No "Add to Cart" on hover

### Journal Card
- Large image
- Serif headline
- Small caps date + category

---

## Navigation

- Fixed header
- Transparent on homepage hero
- Cream background after scroll
- Logo centered
- Left: Collections, Story, Journal
- Right: Wishlist, Account, Cart

---

## Do's and Don'ts

**Do:**
- Use generous whitespace
- Use serif fonts for headings and display text
- Use film-inspired, warm lifestyle photography
- Keep copy poetic and personal
- Use gold only as an accent

**Don't:**
- Use white backgrounds
- Use border radius on buttons
- Use bright notification badges
- Use marketing jargon ("premium", "luxury", "elevate")
- Use white-background product photography
- Use heavy drop shadows
- Use more than 2 font families
