import React from 'react'

const TrustBar = () => {
  const stats = [
    { number: '850+', label: 'Buyers Served' },
    { number: '2,400+', label: 'Factories Audited' },
    { number: '98%', label: 'On-Time Delivery' },
    { number: '12', label: 'Years Experience' },
  ]

  return (
    <div className="border-y border-slate-200 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6 py-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {stats.map((stat, index) => (
            <div key={index}>
              <div className="text-3xl font-semibold text-slate-900 tracking-tight">{stat.number}</div>
              <div className="text-sm text-slate-600 mt-1">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default TrustBar
