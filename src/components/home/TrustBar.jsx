import React from 'react'
import { Truck, RotateCcw, ShieldCheck, Sparkles } from 'lucide-react'

const ITEMS = [
  { Icon: Truck, label: 'Free Worldwide Shipping' },
  { Icon: RotateCcw, label: '30-Day Returns' },
  { Icon: Sparkles, label: '18K Gold Plated' },
  { Icon: ShieldCheck, label: 'Hypoallergenic' },
]

export function TrustBar() {
  return (
    <section
      aria-label="Trust and quality"
      className="bg-cream border-y border-taupe/40"
    >
      <div className="container-page py-5 md:py-6">
        <ul className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3 md:gap-x-14">
          {ITEMS.map(({ Icon, label }) => (
            <li
              key={label}
              className="flex items-center gap-2.5 text-[11px] md:text-xs tracking-eyebrow uppercase font-sans text-deep/85"
            >
              <Icon className="w-4 h-4 text-gold" strokeWidth={1.5} />
              <span>{label}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
