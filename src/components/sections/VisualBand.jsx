export default function VisualBand() {
  const visuals = [
    { id: 'factory', title: 'Factory visits and supplier checks', ratio: '4x3' },
    { id: 'qc', title: 'Quality control inspection reports', ratio: '4x3' },
    { id: 'shipping', title: 'Export cartons and shipping coordination', ratio: '4x3' },
  ]

  return (
    <section className="bg-white py-16 text-slate-900 md:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-6 md:grid-cols-3">
          {visuals.map((visual) => (
            <article key={visual.id} className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
              <img
                alt={visual.title}
                className="h-64 w-full object-cover"
                data-strk-img-id={`visual-${visual.id}-ssourcing-41c8`}
                data-strk-img={`[visual-${visual.id}-title]`}
                data-strk-img-ratio={visual.ratio}
                data-strk-img-width="700"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              />
              <div className="p-5">
                <h3 id={`visual-${visual.id}-title`} className="font-bold text-slate-950">{visual.title}</h3>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
