# Strikingly Generators Hub — Design System

## Fonts
- **Headings**: Josefin Sans (Google Fonts, weight 700, ALL CAPS, line-height 1.2)
  - Fallback chain: `'Josefin Sans', 'Poppins', sans-serif`
  - Do NOT use Inter or system-default sans for headings
- **Body**: Open Sans (Google Fonts, weight 400, 14px base, line-height 1.5)
- **Buttons**: Same heading font, weight 700, uppercase

### Type Scale
- H1 desktop: 40–48px | mobile: 28–32px
- H2 desktop: 26–32px
- H3: 18–22px
- Body: 14px
- Tags/badges: 11px

## Colors
| Token | Hex | Usage |
|---|---|---|
| `--clr-brand-purple` | `#8159BB` | Badges, accents, ghost borders |
| `--clr-ai-start` | `#7671FF` | AI gradient start (blue) |
| `--clr-ai-end` | `#CB0C9F` | AI gradient end (pink) |
| `--clr-body` | `#636972` | Body text |
| `--clr-heading` | `#4B5056` | Section headings |
| `--clr-hero-h1` | `#2E2E2F` | Hero H1 line 1 |
| `--clr-card-border` | `#C6C9CD` | Card borders |
| `--clr-divider` | `#E2E4E7` | Subtle dividers |
| `--clr-bg-light` | `#F4F6F8` | Light section backgrounds |
| `--clr-white` | `#FFFFFF` | Default page background |

### AI Gradient
`linear-gradient(to right, #7671FF, #CB0C9F)`
- Use ONLY for: primary CTAs, H1 line 2 gradient text
- Do NOT use on section backgrounds or headers

## Buttons
| Variant | Height | Border-radius | Padding | Font |
|---|---|---|---|---|
| Standard | 36px | 4px | 9px 15px | Josefin Sans 700 uppercase 14px |
| Large | 44px | 4px | 12px 24px | Josefin Sans 700 uppercase 14px |

- **Gradient fill**: AI gradient background, white text `#FFFFFF` — ALWAYS white text on gradient
- **Ghost**: transparent bg, 1px `#8159BB` border, `#8159BB` text
- Button spacing: 10px gap between adjacent buttons

## Cards
- Background: `#FFFFFF`
- Border: 1px `#C6C9CD`
- Border-radius: 3px
- Padding: 20px
- Hover: `box-shadow: 0 4px 16px rgba(0,0,0,0.10)`, border-color `#8159BB`
- No scale or rotation transforms on hover

## Tags / Category Badges
- Font: Josefin Sans 11px uppercase
- Padding: 2px 6px
- Border-radius: 3px
- Ghost style: `#8159BB` text, 1px `#8159BB` border, no fill

## Spacing
- All margins/paddings in multiples of 10px (5px allowed for tight pairs)
- Between blocks: 20px
- Between sections: 40px
- Hero top/bottom: 60–80px
- Max content width: 1200px, centered

## Tailwind Class Examples
```
Heading font:    font-['Josefin_Sans'] font-bold uppercase tracking-wide
Body font:       font-['Open_Sans']
Brand purple:    text-[#8159BB] border-[#8159BB]
Body text:       text-[#636972]
Section heading: text-[#4B5056]
Hero H1:         text-[#2E2E2F]
Light bg:        bg-[#F4F6F8]
Card border:     border border-[#C6C9CD] rounded-[3px]
Gradient text:   bg-gradient-to-r from-[#7671FF] to-[#CB0C9F] bg-clip-text text-transparent
Gradient btn:    bg-gradient-to-r from-[#7671FF] to-[#CB0C9F] text-white
Ghost btn:       border border-[#8159BB] text-[#8159BB] bg-transparent
```

## Do's and Don'ts
- ✅ White text on gradient/solid-color buttons
- ✅ Gradient only on primary CTAs and H1 line 2
- ✅ Josefin Sans for all headings and buttons
- ✅ Open Sans for body copy
- ✅ CSS logical properties for RTL readiness
- ❌ Dark text on gradient fills
- ❌ Gradient on section backgrounds
- ❌ Inter or system fonts for headings
- ❌ Fake social proof (ratings, testimonials, counts)
- ❌ `href="#"` placeholder links
