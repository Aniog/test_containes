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
    <div ref={ref} className={`bg-charcoal text-cream/70 transition-all duration-700 ${revealed ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
      <div className="max-w-content mx-auto px-4 md:px-8 py-3.5">
        <div className="flex items-center justify-center gap-6 md:gap-12 flex-wrap">
          {trustItems.map((item, i) => (
            <div key={i} className="flex items-center gap-2">
              <item.icon className="w-4 h-4 text-gold" />
              <span className="text-[11px] md:text-xs tracking-wide font-sans font-medium">
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
