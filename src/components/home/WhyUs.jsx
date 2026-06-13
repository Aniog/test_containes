import React from 'react'
import { CheckCircle2 } from 'lucide-react'

const reasons = [
  'Over 20 years of specialized experience in sheet metal folding technology',
  'All machines undergo rigorous 72-hour factory acceptance testing',
  'CE, ISO 9001, and ISO 14001 certified manufacturing processes',
  'Customizable configurations to match your specific production needs',
  'Comprehensive 2-year warranty with extended service options',
  'Free operator training at our facility or on-site',
]

export default function WhyUs() {
  return (
    <section id="why-us" className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: Image Area */}
          <div className="relative">
            <div className="aspect-[4/3] rounded-xl bg-gradient-to-br from-slate-900 to-slate-700 flex items-center justify-center overflow-hidden">
              <div className="text-center p-8">
                <div className="w-20 h-20 rounded-full bg-amber-600 flex items-center justify-center mx-auto mb-6">
                  <span className="text-3xl font-bold text-white">AM</span>
                </div>
                <p className="text-white/80 text-lg font-light max-w-xs mx-auto">
                  Precision engineering for the metals industry since 2004
                </p>
              </div>
            </div>
            {/* Floating card */}
            <div className="absolute -bottom-6 -right-6 bg-amber-600 text-white rounded-xl p-6 shadow-lg max-w-[200px] hidden md:block">
              <div className="text-3xl font-bold">99.7%</div>
              <div className="text-amber-100 text-sm">Machine uptime reliability rate</div>
            </div>
          </div>

          {/* Right: Content */}
          <div>
            <span className="text-amber-600 font-semibold text-sm uppercase tracking-widest">Why ARTITECT</span>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 tracking-tight mt-3 mb-6">
              The Partner You Can Trust for Critical Metal Forming
            </h2>
            <p className="text-slate-500 leading-relaxed mb-8">
              Every machine we build reflects our commitment to precision, durability, and customer success. From compact workshops to multinational manufacturing plants, ARTITECT MACHINERY delivers solutions that perform.
            </p>

            <div className="space-y-4">
              {reasons.map((reason, idx) => (
                <div key={idx} className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-amber-600 mt-0.5 flex-shrink-0" />
                  <span className="text-slate-700">{reason}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}