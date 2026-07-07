import React from 'react'
import { Truck, RefreshCw, CircleDot, ShieldCheck } from 'lucide-react'

const items = [
  { icon: Truck, label: 'Free Worldwide Shipping' },
  { icon: RefreshCw, label: '30-Day Returns' },
  { icon: CircleDot, label: '18K Gold Plated' },
  { icon: ShieldCheck, label: 'Hypoallergenic' },
]

export function TrustBar() {
  return (
    <section className="border-b border-velmora-border bg-velmora-ivory">
      <div className="mx-auto max-w-7xl px-4 py-4 sm:px-6 lg:px-8">
        <ul className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 md:gap-x-12">
          {items.map((item) => (
            <li key={item.label} className="flex items-center gap-2 text-xs font-medium uppercase tracking-wider text-velmora-text-muted">
              <item.icon size={16} strokeWidth={1.5} className="text-velmora-gold" />
              {item.label}
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
