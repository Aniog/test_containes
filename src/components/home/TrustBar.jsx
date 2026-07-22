import React from 'react'
import { Truck, RotateCcw, Shield, Sparkles } from 'lucide-react'

const trustItems = [
  { icon: Truck, label: 'Free Worldwide Shipping' },
  { icon: RotateCcw, label: '30-Day Returns' },
  { icon: Shield, label: '18K Gold Plated' },
  { icon: Sparkles, label: 'Hypoallergenic' },
]

export default function TrustBar() {
  return (
    <section className="bg-charcoal text-cream">
      <div className="max-w-8xl mx-auto px-4 md:px-6 lg:px-8">
        <div className="flex items-center justify-center gap-6 md:gap-12 py-4 md:py-5">
          {trustItems.map((item, i) => (
            <React.Fragment key={item.label}>
              <div className="flex items-center gap-2 md:gap-3">
                <item.icon className="w-4 h-4 md:w-5 md:h-5 text-gold" />
                <span className="font-sans text-xs md:text-sm tracking-ui uppercase text-cream/90">{item.label}</span>
              </div>
              {i < trustItems.length - 1 && (
                <span className="hidden md:inline text-cream/30">·</span>
              )}
            </React.Fragment>
          ))}
        </div>
      </div>
    </section>
  )
}
