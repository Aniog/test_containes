import React from 'react'

const stats = [
  { value: '25+', label: 'Years Experience' },
  { value: '500+', label: 'Machines Delivered' },
  { value: '30+', label: 'Countries Served' },
  { value: '99.5%', label: 'Satisfaction Rate' },
]

const StatsBar = () => {
  return (
    <section className="bg-navy-900 py-12 md:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-3xl md:text-4xl font-extrabold text-gold-500">{stat.value}</div>
              <div className="mt-1 text-sm text-slate-400 font-medium">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default StatsBar
