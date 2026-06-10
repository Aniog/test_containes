import React from 'react'

const TrustBar = () => {
  const stats = [
    { value: '12+', label: 'Years Experience' },
    { value: '850+', label: 'Factories Audited' },
    { value: '3,200+', label: 'Orders Managed' },
    { value: '48', label: 'Countries Served' },
  ]

  return (
    <div className="bg-slate-50 border-y border-slate-200 py-8">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {stats.map((stat, index) => (
            <div key={index}>
              <div className="text-3xl font-semibold text-slate-900 tracking-tight">{stat.value}</div>
              <div className="text-sm text-slate-600 mt-1">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default TrustBar
