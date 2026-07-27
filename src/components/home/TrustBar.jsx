const stats = [
  { value: '500+', label: 'Factory audits completed' },
  { value: '30+', label: 'Countries served' },
  { value: '8 yrs', label: 'Average team experience' },
  { value: '24 h', label: 'Response time, business days' },
]

const TrustBar = () => {
  return (
    <section className="border-b border-line bg-paper">
      <div className="mx-auto grid max-w-7xl grid-cols-2 gap-8 px-4 py-10 sm:px-6 md:grid-cols-4 lg:px-8">
        {stats.map((stat) => (
          <div key={stat.label} className="text-center">
            <p className="text-3xl font-bold text-brand-600 md:text-4xl">{stat.value}</p>
            <p className="mt-1 text-sm text-slate-500">{stat.label}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

export default TrustBar
