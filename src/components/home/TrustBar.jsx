import React from 'react'
import { Truck, RotateCcw, Shield, Sparkles } from 'lucide-react'

const TrustBar = () => {
  const features = [
    { icon: Truck, text: 'Free Worldwide Shipping' },
    { icon: RotateCcw, text: '30-Day Returns' },
    { icon: Shield, text: '18K Gold Plated' },
    { icon: Sparkles, text: 'Hypoallergenic' }
  ]

  return (
    <div className="bg-white border-b border-[#E8E4DF]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 py-4">
          {features.map((feature, index) => (
            <div
              key={index}
              className="flex items-center justify-center gap-2 text-xs sm:text-sm text-[#57534E]"
            >
              <feature.icon className="w-4 h-4 text-[#C9A96E] flex-shrink-0" />
              <span className="tracking-wide">{feature.text}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default TrustBar
