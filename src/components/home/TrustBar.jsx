export default function TrustBar() {
  return (
    <section className="bg-brand-navy py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {[
            { value: '12+', label: 'Years Experience' },
            { value: '500+', label: 'Verified Suppliers' },
            { value: '3,000+', label: 'Inspections Completed' },
            { value: '50+', label: 'Countries Served' },
          ].map((stat) => (
            <div key={stat.label}>
              <p className="text-3xl font-bold text-white">{stat.value}</p>
              <p className="mt-1 text-sm text-blue-200">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}