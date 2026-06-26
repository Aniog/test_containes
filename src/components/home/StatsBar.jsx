const stats = [
  { value: '25+', label: 'Years of Experience' },
  { value: '3,000+', label: 'Machines Installed' },
  { value: '45+', label: 'Countries Served' },
  { value: '24/7', label: 'Technical Support' },
]

export default function StatsBar() {
  return (
    <section className="relative z-20 -mt-16 px-4 sm:px-6 lg:px-8 xl:px-16">
      <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
        {stats.map((stat) => (
          <div
            key={stat.label}
            className="bg-am-surface border border-white/10 rounded-2xl p-6 text-center hover:border-am-gold/30 transition-colors"
          >
            <div className="text-3xl md:text-4xl font-extrabold text-am-gold mb-1">
              {stat.value}
            </div>
            <div className="text-sm text-am-muted">{stat.label}</div>
          </div>
        ))}
      </div>
    </section>
  )
}
