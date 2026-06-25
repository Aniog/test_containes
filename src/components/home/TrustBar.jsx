import React from 'react'
import { Truck, RotateCcw, Gem, ShieldCheck } from 'lucide-react'
import { trustBar } from '@/data/products'

const icons = [Truck, RotateCcw, Gem, ShieldCheck]

export function TrustBar() {
  return (
    <section className="border-b border-sand bg-cream">
      <div className="mx-auto grid max-w-7xl grid-cols-2 divide-x divide-sand px-5 md:grid-cols-4 md:px-8">
        {trustBar.map((item, i) => {
          const Icon = icons[i] || Truck
          return (
            <div key={item.label} className="flex items-center justify-center gap-2.5 px-3 py-5 text-center md:py-6">
              <Icon size={18} className="shrink-0 text-gold" strokeWidth={1.5} />
              <span className="text-[10px] uppercase tracking-[0.18em] text-ink md:text-[11px]">
                {item.label}
              </span>
            </div>
          )
        })}
      </div>
    </section>
  )
}

export default TrustBar
