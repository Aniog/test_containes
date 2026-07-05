import React from 'react'
import { Truck, RotateCcw, Gem, Shield } from 'lucide-react'

const trustItems = [
  { icon: Truck, label: 'Free Worldwide Shipping' },
  { icon: RotateCcw, label: '30-Day Returns' },
  { icon: Gem, label: '18K Gold Plated' },
  { icon: Shield, label: 'Hypoallergenic' },
]

const TrustBar = () => {
  return (
    <div className="bg-warm-900 text-white">
      <div className="max-w-content mx-auto px-5 md:px-8 py-3.5">
        <div className="flex items-center justify-center gap-6 md:gap-12 flex-wrap">
          {trustItems.map((item, i) => (
            <React.Fragment key={item.label}>
              <div className="flex items-center gap-2">
                <item.icon className="w-3.5 h-3.5 text-gold flex-shrink-0" />
                <span className="text-[11px] tracking-wide font-light text-warm-400 whitespace-nowrap">
                  {item.label}
                </span>
              </div>
              {i < trustItems.length - 1 && (
                <span className="hidden md:inline text-warm-700">·</span>
              )}
            </React.Fragment>
          ))}
        </div>
      </div>
    </div>
  )
}

export default TrustBar
