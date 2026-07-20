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
  const [ref, isVisible] = useScrollReveal()

  return (
    <div ref={ref} className={`bg-cream border-y border-sand reveal-hidden ${isVisible ? 'reveal-visible' : ''}`}>
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 py-4">
        <div className="flex flex-wrap items-center justify-center gap-6 md:gap-10">
          {trustItems.map((item, i) => (
            <div key={i} className={`flex items-center gap-2 reveal-hidden ${isVisible ? 'reveal-visible' : ''} reveal-delay-${i + 1}`}>
              <item.icon className="w-4 h-4 text-gold" />
              <span className="text-[11px] uppercase tracking-[0.15em] font-medium text-warm-black">
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
