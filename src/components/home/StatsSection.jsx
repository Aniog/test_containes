const stats = [
  { value: '500+', label: 'Factories Verified' },
  { value: '12+', label: 'Years of Experience' },
  { value: '40+', label: 'Countries Served' },
  { value: '98%', label: 'Client Retention' },
]

export default function StatsSection() {
  return (
    <section className="py-14 bg-surface border-y border-border-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((s) => (
            <div key={s.label} className="text-center">
              <div className="text-3xl md:text-4xl font-extrabold text-primary-accent mb-1">{s.value}</div>
              <div className="text-sm text-text-secondary font-medium">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
