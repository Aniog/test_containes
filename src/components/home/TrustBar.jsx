import { Shield, Truck, RotateCcw, Sparkles } from 'lucide-react'
import { trustItems } from '@/data/products'

const icons = [Truck, RotateCcw, Sparkles, Shield]

export default function TrustBar() {
  return (
    <section className="border-b border-brand-border bg-brand-card">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="flex items-center justify-between py-3 md:py-4 overflow-x-auto gap-6 md:gap-0">
          {trustItems.map((item, i) => {
            const Icon = icons[i]
            return (
              <div key={item} className="flex items-center gap-2 text-xs md:text-sm text-brand-stone whitespace-nowrap">
                <Icon className="w-4 h-4 text-brand-gold flex-shrink-0" />
                <span className="tracking-wide">{item}</span>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}