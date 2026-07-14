import React from 'react'
import { Truck, RotateCcw, Gem, Shield } from 'lucide-react'
import { useScrollAnimation } from '@/hooks/useScrollAnimation'

const trustItems = [
  { icon: Truck, label: 'Free Worldwide Shipping' },
  { icon: RotateCcw, label: '30-Day Returns' },
  { icon: Gem, label: '18K Gold Plated' },
  { icon: Shield, label: 'Hypoallergenic' },
]

const TrustBar = () => {
  const [ref, isVisible] = useScrollAnimation({ threshold: 0.3 })

  return (
    <div ref={ref} className="bg-charcoal text-white py-4 border-y border-white/5">
      <div className="max-w-container mx-auto px-6">
        <div className={`flex flex-wrap items-center justify-center gap-6 md:gap-12 transition-all duration-500 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
          {trustItems.map((item) => (
            <div key={item.label} className="flex items-center gap-2">
              <item.icon className="w-4 h-4 text-gold-light" />
              <span className="text-[11px] md:text-xs font-sans font-medium tracking-wide uppercase text-stone-300">
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
