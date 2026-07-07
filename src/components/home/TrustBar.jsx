import React from 'react'
import { Truck, RotateCcw, Award, ShieldCheck } from 'lucide-react'

const trusts = [
  { icon: Truck, text: 'Free Worldwide Shipping' },
  { icon: RotateCcw, text: '30-Day Returns' },
  { icon: Award, text: '18K Gold Plated' },
  { icon: ShieldCheck, text: 'Hypoallergenic' },
]

export default function TrustBar() {
  return (
    <div className="bg-[#1C1814]">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="flex items-center justify-between py-3 md:py-4 overflow-x-auto gap-6 md:gap-0">
          {trusts.map((item) => (
            <div key={item.text} className="flex items-center gap-2 text-white/80 shrink-0">
              <item.icon className="w-3.5 h-3.5 text-[#C9A96E]" />
              <span className="font-body text-[10px] md:text-xs uppercase tracking-wider whitespace-nowrap">
                {item.text}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}