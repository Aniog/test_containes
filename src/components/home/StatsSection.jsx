const StatsSection = () => {
  const stats = [
    { value: '8.7M', label: 'Estimated species on Earth', accent: 'text-emerald-400' },
    { value: '99%', label: 'Of life is microscopic', accent: 'text-cyan-400' },
    { value: '39T', label: 'Bacteria in the human body', accent: 'text-purple-400' },
    { value: '0.2μm', label: 'Smallest known bacteria', accent: 'text-amber-400' },
  ]

  return (
    <section className="py-20 md:py-28 bg-slate-900/30 border-y border-slate-800/50">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <p className={`text-3xl md:text-5xl font-bold ${stat.accent} mb-2`}>
                {stat.value}
              </p>
              <p className="text-slate-400 text-sm md:text-base">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default StatsSection
