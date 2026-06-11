import React from 'react'

const TrustBar = () => {
  const items = [
    'ISO 9001 Certified Processes',
    '10+ Years Experience',
    '500+ Factories Audited',
    '98% On-Time Delivery',
    'Multilingual Team',
  ]

  return (
    <div className="bg-slate-50 border-y border-slate-200 py-4">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-2 text-sm text-slate-600">
          {items.map((item, idx) => (
            <div key={idx} className="flex items-center gap-2">
              <span className="inline-block w-1.5 h-1.5 rounded-full bg-emerald-500" />
              {item}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default TrustBar