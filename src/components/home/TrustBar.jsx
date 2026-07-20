import React from 'react'
import { Truck, RefreshCw, Gem, ShieldCheck } from 'lucide-react'

const ITEMS = [
  { icon: Truck, label: 'Free Worldwide Shipping' },
  { icon: RefreshCw, label: '30-Day Returns' },
  { icon: Gem, label: '18K Gold Plated' },
  { icon: ShieldCheck, label: 'Hypoallergenic' },
]

export default function TrustBar() {
  return (
    <section className="bg-ink text-cream border-y border-cream/10">
      <div className="container-velmora">
        <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-cream/10">
          {ITEMS.map(({ icon: Icon, label }) => (
            <div
              key={label}
              className="flex items-center justify-center gap-3 py-5 px-3 text-center"
            >
              <Icon size={18} className="text-champagne shrink-0" strokeWidth={1.5} />
              <span className="text-[11px] md:text-xs uppercase tracking-widest2 text-cream/85">
                {label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
