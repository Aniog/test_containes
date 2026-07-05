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
    <div ref={ref} className={`bg-velmora-charcoal text-white py-4 sr-hidden ${revealed ? 'sr-visible' : ''}`}>
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="flex flex-wrap items-center justify-center gap-6 md:gap-12">
          {trustItems.map((item) => (
            <div key={item.label} className="flex items-center gap-2">
              <item.icon className="w-4 h-4 text-velmora-gold" />
              <span className="text-[11px] md:text-xs font-medium uppercase tracking-nav text-stone-300">
                {item.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default TrustBar
