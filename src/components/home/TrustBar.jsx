import React from 'react'
import { Truck, RotateCcw, Sparkles, ShieldCheck } from 'lucide-react'

const items = [
  { icon: Truck, label: 'Free Worldwide Shipping' },
  { icon: RotateCcw, label: '30-Day Returns' },
  { icon: Sparkles, label: '18K Gold Plated' },
  { icon: ShieldCheck, label: 'Hypoallergenic' },
]

export function TrustBar() {
  return (
    <section className="border-b border-velmora-border bg-velmora-surface">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-velmora-border">
          {items.map(({ icon: Icon, label }) => (
            <div
              key={label}
              className="flex items-center justify-center gap-3 py-4 md:py-5 px-2"
            >
              <Icon size={18} className="text-velmora-gold shrink-0" strokeWidth={1.5} />
              <span className="text-[11px] md:text-xs uppercase tracking-wider font-medium text-velmora-charcoal">
                {label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
