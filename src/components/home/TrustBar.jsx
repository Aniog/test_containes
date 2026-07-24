import React from 'react'
import { Truck, RotateCcw, Shield, Heart } from 'lucide-react'

const TrustBar = () => {
  const items = [
    { icon: Truck, text: 'Free Worldwide Shipping' },
    { icon: RotateCcw, text: '30-Day Returns' },
    { icon: Shield, text: '18K Gold Plated' },
    { icon: Heart, text: 'Hypoallergenic' },
  ]

  return (
    <div className="bg-foreground text-background py-4">
      <div className="container-padding">
        <div className="flex flex-wrap justify-center gap-6 md:gap-12">
          {items.map((item) => (
            <div key={item.text} className="flex items-center gap-2">
              <item.icon size={14} strokeWidth={1.5} />
              <span className="text-xs tracking-wider uppercase">{item.text}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default TrustBar
