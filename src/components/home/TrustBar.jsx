import { Truck, RotateCcw, Shield, Heart } from 'lucide-react'
import { trustItems } from '@/data/products'

const icons = [Truck, RotateCcw, Shield, Heart]

export default function TrustBar() {
  return (
    <div className="bg-[#F5F0EB] border-y border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 md:py-5">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
          {trustItems.map((item, index) => {
            const Icon = icons[index]
            return (
              <div key={item} className="flex items-center justify-center gap-2 md:gap-3">
                <Icon className="w-4 h-4 text-accent flex-shrink-0" />
                <span className="text-xs md:text-sm text-foreground/80 text-center">{item}</span>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}
