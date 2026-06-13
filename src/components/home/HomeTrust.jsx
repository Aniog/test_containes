const trustPoints = [
  { value: '12+', label: 'Years in China Sourcing' },
  { value: '2,000+', label: 'Factories Audited' },
  { value: '500+', label: 'Global Buyers Served' },
  { value: '98%', label: 'On-Time Delivery Rate' },
  { value: '30+', label: 'Product Categories' },
]

export default function HomeTrust() {
  return (
    <section className="py-16 bg-brand-navy">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-8">
          {trustPoints.map((item) => (
            <div key={item.label} className="text-center">
              <div className="text-3xl sm:text-4xl font-bold text-brand-orange">{item.value}</div>
              <div className="mt-1 text-sm text-gray-300">{item.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}