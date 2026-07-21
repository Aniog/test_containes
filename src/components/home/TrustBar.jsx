import React from 'react'
import { Truck, RotateCcw, Gem, Shield } from 'lucide-react'
import { useScrollReveal } from '@/hooks/useScrollReveal'

const trustItems = [
  { icon: Truck, label: 'Free Worldwide Shipping' },
  { icon: RotateCcw, label: '30-Day Returns' },
  { icon: Gem, label: '18K Gold Plated' },
  { icon: Shield, label: 'Hypoallergenic' },
]

const TrustBar = () => {
  const [ref, revealed] = useScrollReveal()

  return (
    <div ref={ref} className={`bg-velmora-charcoal py-4 reveal ${revealed ? 'revealed' : ''}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3">
          {trustItems.map((item, i) => (
            <div key={i} className="flex items-center gap-2">
              <item.icon className="w-4 h-4 text-velmora-gold" />
              <span className="text-xs tracking-wider uppercase font-sans text-velmora-cream/80">{item.label}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default TrustBar
