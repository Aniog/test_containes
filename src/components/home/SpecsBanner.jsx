import React from 'react'
import { Zap, Target, Wrench, TrendingUp } from 'lucide-react'

const specs = [
  { icon: Zap, value: '0.1mm', label: 'Bend Accuracy' },
  { icon: Target, value: '6m', label: 'Max Folding Length' },
  { icon: Wrench, value: '4mm', label: 'Max Material Thickness' },
  { icon: TrendingUp, value: '40%', label: 'Productivity Gain' },
]

export default function SpecsBanner() {
  return (
    <section className="py-12 md:py-16 bg-[#0F1B2D]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {specs.map((spec) => {
            const Icon = spec.icon
            return (
              <div key={spec.label} className="text-center">
                <div className="w-12 h-12 rounded-lg bg-[#C8963E]/20 flex items-center justify-center mx-auto mb-3">
                  <Icon className="w-5 h-5 text-[#C8963E]" />
                </div>
                <div className="text-2xl md:text-3xl font-extrabold text-white mb-1">{spec.value}</div>
                <div className="text-xs text-white/50 uppercase tracking-wider">{spec.label}</div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
