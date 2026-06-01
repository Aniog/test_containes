# Memory Archive — Design System

## Concept
A deep-space, cosmic aesthetic evoking the vastness of time and the intimacy of human memory. Dark backgrounds with luminous accents, as if memories are stars scattered across the void.

## Color Palette
- **Background Deep**: `#020817` (near-black space blue) — `bg-[#020817]`
- **Background Mid**: `#0a1628` (dark navy) — `bg-[#0a1628]`
- **Background Card**: `#0d1f3c` (deep navy card) — `bg-[#0d1f3c]`
- **Background Elevated**: `#112240` (elevated surface) — `bg-[#112240]`
- **Primary Glow**: `#7c9ef8` (soft blue-violet) — `text-[#7c9ef8]`
- **Primary Bright**: `#a5b4fc` (indigo-200) — `text-indigo-300`
- **Accent Gold**: `#f0c060` (warm amber/gold) — `text-[#f0c060]`
- **Accent Teal**: `#5eead4` (teal-300) — `text-teal-300`
- **Accent Rose**: `#fb7185` (rose-400) — `text-rose-400`
- **Accent Violet**: `#c084fc` (purple-400) — `text-purple-400`
- **Text Primary**: `#e2e8f0` (slate-200) — `text-slate-200`
- **Text Secondary**: `#94a3b8` (slate-400) — `text-slate-400`
- **Text Muted**: `#475569` (slate-600) — `text-slate-600`
- **Border Subtle**: `rgba(124,158,248,0.15)` — `border-[rgba(124,158,248,0.15)]`
- **Border Glow**: `rgba(124,158,248,0.4)` — `border-[rgba(124,158,248,0.4)]`

## Typography
- **Font**: "Cinzel" for headings (serif, classical/cosmic feel), "Inter" for body
- **Display**: `text-5xl md:text-7xl font-cinzel font-bold tracking-wide`
- **Heading 1**: `text-3xl md:text-4xl font-cinzel font-semibold`
- **Heading 2**: `text-xl md:text-2xl font-cinzel`
- **Body**: `text-base text-slate-200 leading-relaxed`
- **Caption**: `text-sm text-slate-400`
- **Label**: `text-xs uppercase tracking-widest text-slate-500`

## Spacing
- Section padding: `py-20 px-6 md:px-12`
- Card padding: `p-6`
- Gap between cards: `gap-6`
- Max content width: `max-w-7xl mx-auto`

## Borders & Shadows
- Card border: `border border-[rgba(124,158,248,0.15)] rounded-xl`
- Hover border: `hover:border-[rgba(124,158,248,0.4)]`
- Glow shadow: `shadow-[0_0_30px_rgba(124,158,248,0.1)]`
- Hover glow: `hover:shadow-[0_0_40px_rgba(124,158,248,0.2)]`

## Emotion Color Mapping
- Joy: `#f0c060` (gold)
- Grief: `#7c9ef8` (blue)
- Love: `#fb7185` (rose)
- Wonder: `#5eead4` (teal)
- Fear: `#c084fc` (violet)
- Nostalgia: `#a78bfa` (purple)
- Pride: `#34d399` (emerald)
- Longing: `#93c5fd` (light blue)

## Do's
- Use dark backgrounds exclusively — this is a night-sky interface
- Use glowing, luminous text for headings
- Animate subtly: slow pulses, gentle floats, constellation twinkles
- Use backdrop-blur on overlays and cards
- Layer translucent cards over dark backgrounds

## Don'ts
- No white or light backgrounds
- No harsh borders — keep them subtle and glowing
- No flat, non-glowing buttons — always add glow on hover
- No dense text blocks — use generous line-height and spacing
