import React from 'react'
import { Truck, RotateCcw, Gem, Shield } from 'lucide-react'

const items = [
  { icon: Truck, label: 'Free Worldwide Shipping' },
  { icon: RotateCcw, label: '30-Day Returns' },
  { icon: Gem, label: '18K Gold Plated' },
  { icon: Shield, label: 'Hypoallergenic' },
]

export default function TrustBar() {
  return (
    <div className="bg-brand-charcoal text-brand-cream/80">
      <div className="max-w-7xl mx-auto section-padding py-4">
        <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-2">
          {items.map(({ icon: Icon, label }, i) => (
            <React.Fragment key={label}>
              <div className="flex items-center gap-2.5">
                <Icon className="w-4 h-4 text-brand-gold/80" />
                <span className="text-[11px] tracking-[0.1em] uppercase font-sans font-light">{label}</span>
              </div>
              {i < items.length - 1 && (
                <span className="hidden md:inline text-brand-cream/15">|</span>
              )}
            </React.Fragment>
          ))}
        </div>
      </div>
    </div>
  )
}
