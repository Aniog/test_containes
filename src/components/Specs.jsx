const rows = [
  { label: 'Maximum fold length', af: '3,200 mm', mf: '2,500 mm', tf: '4,000 mm', cf: '1,600 mm' },
  { label: 'Max. mild steel thickness', af: '2.5 mm', mf: '2.0 mm', tf: '1.5 mm', cf: '1.2 mm' },
  { label: 'Max. stainless thickness', af: '1.8 mm', mf: '1.5 mm', tf: '1.0 mm', cf: '0.8 mm' },
  { label: 'Folding angle', af: '180° up / 180° down', mf: '0–145°', tf: '0–135°', cf: '0–135°' },
  { label: 'Back-gauge drive', af: 'Servo CNC', mf: 'Manual', tf: 'Servo CNC', cf: 'Manual' },
  { label: 'Repeatability', af: '± 0.05°', mf: '± 0.1°', tf: '± 0.08°', cf: '± 0.15°' },
  { label: 'Control', af: '10" Touch HMI', mf: 'Digital readout', tf: '10" Touch HMI', cf: 'Digital readout' },
  { label: 'Drive system', af: 'Electric servo', mf: 'Electromechanical', tf: 'Electric servo', cf: 'Electromechanical' },
]

const columns = [
  { key: 'af', label: 'AF-3200', tag: 'Double folder' },
  { key: 'mf', label: 'MF-2500', tag: 'Sheet folder' },
  { key: 'tf', label: 'TF-4000', tag: 'Long-bed' },
  { key: 'cf', label: 'CF-1600', tag: 'Compact' },
]

export default function Specs() {
  return (
    <section id="specs" className="bg-stone-50 py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="max-w-3xl mb-12 md:mb-16">
          <p
            id="specs-eyebrow"
            className="text-xs uppercase tracking-[0.25em] font-medium text-amber-600 mb-4"
          >
            Specifications
          </p>
          <h2
            id="specs-title"
            className="font-serif text-3xl md:text-5xl font-medium tracking-tight text-neutral-900 leading-[1.05]"
          >
            Compare the line at a glance.
          </h2>
          <p className="mt-5 text-lg text-neutral-600 leading-relaxed">
            Every figure below is the value our machines hold under load, not
            an optimistic catalog headline.
          </p>
        </div>

        <div className="rounded-2xl border border-neutral-200 bg-white overflow-hidden">
          {/* desktop table */}
          <div className="hidden md:block overflow-x-auto">
            <table className="w-full text-left">
              <thead>
                <tr className="border-b border-neutral-200 bg-stone-50/60">
                  <th className="py-5 px-6 text-xs uppercase tracking-[0.2em] font-medium text-neutral-500">
                    Specification
                  </th>
                  {columns.map((c) => (
                    <th key={c.key} className="py-5 px-6">
                      <div className="font-serif text-lg text-neutral-900">{c.label}</div>
                      <div className="text-xs uppercase tracking-wider text-amber-600 mt-1">
                        {c.tag}
                      </div>
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {rows.map((r, idx) => (
                  <tr
                    key={r.label}
                    className={
                      idx !== rows.length - 1 ? 'border-b border-neutral-100' : ''
                    }
                  >
                    <td className="py-4 px-6 text-sm font-medium text-neutral-900">
                      {r.label}
                    </td>
                    {columns.map((c) => (
                      <td key={c.key} className="py-4 px-6 text-sm text-neutral-700">
                        {r[c.key]}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* mobile cards */}
          <div className="md:hidden divide-y divide-neutral-100">
            {columns.map((c) => (
              <div key={c.key} className="p-6">
                <div className="flex items-baseline justify-between">
                  <h3 className="font-serif text-xl text-neutral-900">{c.label}</h3>
                  <span className="text-xs uppercase tracking-wider text-amber-600">
                    {c.tag}
                  </span>
                </div>
                <dl className="mt-4 space-y-2">
                  {rows.map((r) => (
                    <div key={r.label} className="flex justify-between gap-4 text-sm">
                      <dt className="text-neutral-500">{r.label}</dt>
                      <dd className="text-neutral-900 font-medium text-right">
                        {r[c.key]}
                      </dd>
                    </div>
                  ))}
                </dl>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
