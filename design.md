# Strikingly Design System

## Typography

### Heading Font
- **Primary**: Brandon Grotesque, weight 700, ALL UPPERCASE, line-height 1.2
- **Fallback 1**: Josefin Sans (Google Fonts, weight 700)
- **Fallback 2**: Poppins (Google Fonts)
- **Do NOT use**: Inter or system-default sans for headings

### Body Font
- **Primary**: Open Sans (Google Fonts), weight 400, 14px base, line-height 1.5

### Font Sizes
- H1: 40–48px desktop, 28–32px mobile
- H2: 26–32px desktop
- Body: 14px base
- Buttons: heading font, weight 700, uppercase

### Tailwind heading classes
```
font-['Josefin_Sans',Poppins,sans-serif] font-bold uppercase tracking-wide leading-tight
```

---

## Colors

| Token | Hex | Usage |
|---|---|---|
| `brand-purple` | `#8159BB` | Badges, accents, ghost borders |
| `ai-from` | `#7671FF` | AI gradient start (blue) |
| `ai-to` | `#CB0C9F` | AI gradient end (pink) |
| `body-text` | `#636972` | Body copy, subheadings |
| `heading-dark` | `#2E2E2F` | Hero H1 line 1 |
| `heading-section` | `#4B5056` | Section headings |
| `card-border` | `#C6C9CD` | Card borders |
| `divider` | `#E2E4E7` | Subtle dividers |
| `bg-light` | `#F4F6F8` | Light section backgrounds |
| `white` | `#FFFFFF` | Default page background |

### AI Gradient
```css
background: linear-gradient(to right, #7671FF, #CB0C9F);
```
Use ONLY for: primary CTAs, H1 line 2 gradient text.
Do NOT use on section backgrounds or headers.

---

## Buttons

### Standard
- Height: 36px
- Border-radius: 4px
- Font: heading font, 14px, uppercase, weight 700
- Padding: 9px 15px

### Large (Big variant)
- Height: 44px

### AI Gradient Fill (Primary CTA)
```
background: linear-gradient(to right, #7671FF, #CB0C9F)
color: #FFFFFF  ← ALWAYS white text on gradient
border: none
```

### Ghost
```
background: transparent
border: 1px solid #8159BB
color: #8159BB
```

### Focus state
```
outline: 2px solid #8159BB
outline-offset: 2px
```

---

## Cards

```css
background: #FFFFFF;
border: 1px solid #C6C9CD;
border-radius: 3px;
padding: 20px;
```

### Hover state
```css
box-shadow: 0 4px 12px rgba(0,0,0,0.10);
border-color: #8159BB;
```
No scale or rotation transforms on hover.

---

## Tags / Category Badges

```css
font-family: heading font;
font-size: 11px;
font-weight: 700;
text-transform: uppercase;
padding: 2px 6px;
border-radius: 3px;
/* Ghost style */
color: #8159BB;
border: 1px solid #8159BB;
background: transparent;
```

---

## Spacing

All margins/paddings in multiples of 10px (5px allowed for tight pairs).
- Between blocks: 20px
- Between sections: 40px
- Hero top/bottom: 60–80px
- Between adjacent buttons: 10px
- Max content width: 1200px, centered

---

## Do's and Don'ts

### Do
- Use white text on all gradient/solid-color filled buttons
- Use `#4B5056` for section headings
- Use `#2E2E2F` for hero H1 line 1
- Use `#636972` for body text
- Use CSS logical properties (`margin-inline-start`) for RTL readiness
- Use semantic HTML: `<nav>`, `<main>`, `<section>`, `<article>`, `<footer>`
- One `<h1>` per page; `<h2>` per major section; `<h3>` for subsections

### Don't
- Don't use `#000000` black
- Don't splash the AI gradient on backgrounds or section headers
- Don't use scale/rotation transforms on card hover
- Don't use dark text on gradient fills
- Don't use Inter for headings
- Don't add fake social proof (ratings, testimonials, customer counts)
