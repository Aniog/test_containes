import React from 'react'
import { Truck, RefreshCw, Shield, Sparkles } from 'lucide-react'

const items = [
  { icon: Truck, label: 'Free Worldwide Shipping' },
  { icon: RefreshCw, label: '30-Day Returns' },
  { icon: Shield, label: '18K Gold Plated' },
  { icon: Sparkles, label: 'Hypoallergenic' },
]

export default function TrustBar() {
  return (
    <div className="bg-brand-base border-y border-brand-gold-light/10">
      <div className="section-padding flex flex-wrap items-center justify-center gap-x-10 gap-y-3 py-4">
        {items.map(({ icon: Icon, label }) => (
          <div key={label} className="flex items-center gap-2.5 text-xs tracking-wide text-brand-gold-light/80">
            <Icon className="w-3.5 h-3.5 text-brand-gold" />
            <span>{label}</span>
          </div>
        ))}
      </div>
    </div>
  )
}
