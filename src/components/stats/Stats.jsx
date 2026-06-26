const stats = [
  { value: '2,500+', label: 'Machines Installed', description: 'Across 45 countries worldwide' },
  { value: '25+', label: 'Years Experience', description: 'Precision engineering since 1998' },
  { value: '99.7%', label: 'Uptime Rate', description: 'Industry-leading reliability' },
  { value: '0.01mm', label: 'Bending Accuracy', description: 'Consistent precision results' },
]

export default function Stats() {
  return (
    <section className="bg-white py-16 md:py-20 border-y border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-primary mb-2">
                {stat.value}
              </div>
              <div className="text-base font-semibold text-charcoal mb-1">{stat.label}</div>
              <div className="text-sm text-muted">{stat.description}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
