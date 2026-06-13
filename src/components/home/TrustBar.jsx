export default function TrustBar() {
  const stats = [
    { value: '500+', label: 'Buyers Served' },
    { value: '2,000+', label: 'Factories Verified' },
    { value: '$50M+', label: 'Products Sourced' },
    { value: '98%', label: 'Client Satisfaction' },
  ]

  return (
    <section className="bg-white py-10 md:py-12">
      <div className="container-main">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <p className="text-2xl md:text-3xl font-extrabold text-[#c4951a]">
                {stat.value}
              </p>
              <p className="text-sm text-[#64748b] mt-1">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
