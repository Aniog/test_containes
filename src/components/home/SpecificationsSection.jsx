const specs = [
  ['Machine focus', 'Double folding machine, double folder, sheet metal folder, metal folding machine'],
  ['Applications', 'Panels, trims, flashing, covers, ducts, architectural metal profiles'],
  ['Buyer fit', 'Metal workshops, roofing fabricators, HVAC shops, and industrial production teams'],
  ['Experience', 'Clear consultation, model matching, and user-friendly product guidance'],
]

export default function SpecificationsSection() {
  return (
    <section className="bg-stone-50 py-16 text-slate-950 md:py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-xl shadow-slate-200/50">
          <div className="grid lg:grid-cols-[0.9fr_1.1fr]">
            <div className="bg-slate-900 p-8 text-white md:p-10">
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-amber-300">At a glance</p>
              <h2 className="mt-4 text-3xl font-semibold tracking-tight text-white md:text-5xl">
                A clear destination for metal folder buyers.
              </h2>
              <p className="mt-5 text-base leading-7 text-slate-300 md:text-lg">
                ARTITECT MACHINERY is designed to make serious sheet metal folding equipment feel easier to evaluate and easier to purchase.
              </p>
            </div>
            <dl className="divide-y divide-slate-200 text-slate-950">
              {specs.map(([term, description]) => (
                <div key={term} className="grid gap-3 p-6 sm:grid-cols-[0.38fr_0.62fr] md:p-8">
                  <dt className="text-sm font-semibold uppercase tracking-[0.16em] text-amber-700">{term}</dt>
                  <dd className="text-base leading-7 text-slate-700">{description}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>
    </section>
  )
}
