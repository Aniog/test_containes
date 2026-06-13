export default function StatsBar() {
  const stats = [
    { value: '500+', label: 'Global Buyers Served' },
    { value: '2,000+', label: 'Factories Verified' },
    { value: '98%', label: 'Client Satisfaction Rate' },
    { value: '15+', label: 'Product Categories' },
  ]

  return (
    <section className="bg-white border-b border-neutral-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-3xl md:text-4xl font-extrabold text-primary mb-1">{stat.value}</div>
              <div className="text-sm text-neutral-500 font-medium">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
