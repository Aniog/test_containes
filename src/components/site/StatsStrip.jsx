const items = [
  { value: 'Supplier search', label: 'Screening and shortlist support' },
  { value: 'Factory checks', label: 'Verification and audit follow-up' },
  { value: 'Quality control', label: 'Inspection before shipment' },
  { value: 'Shipping handover', label: 'Production and logistics coordination' },
]

function StatsStrip() {
  return (
    <section className="border-y border-slate-200 bg-slate-50">
      <div className="mx-auto grid max-w-7xl gap-6 px-4 py-8 sm:px-6 md:grid-cols-2 lg:grid-cols-4 lg:px-8">
        {items.map((item) => (
          <div key={item.value} className="rounded-2xl border border-slate-200 bg-white p-6">
            <p className="text-2xl font-semibold text-slate-900">{item.value}</p>
            <p className="mt-2 text-sm leading-6 text-slate-600">{item.label}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

export default StatsStrip
