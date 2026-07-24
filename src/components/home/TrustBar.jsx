import React from 'react'
import { Truck, RotateCcw, Shield, Heart } from 'lucide-react'

export default function TrustBar() {
  const features = [
    { icon: Truck, text: 'Free Shipping' },
    { icon: RotateCcw, text: '30-Day Returns' },
    { icon: Shield, text: '18K Gold Plated' },
    { icon: Heart, text: 'Hypoallergenic' },
  ]

  return (
    <div className="bg-foreground text-background py-3 md:py-4">
      <div className="container-padding">
        <div className="flex flex-wrap justify-center gap-4 md:gap-8 lg:gap-12">
          {features.map((feature, index) => (
            <div key={index} className="flex items-center gap-1.5 md:gap-2">
              <feature.icon className="w-3.5 h-3.5 md:w-4 md:h-4 flex-shrink-0" />
              <span className="text-[10px] md:text-xs tracking-wider uppercase">{feature.text}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
