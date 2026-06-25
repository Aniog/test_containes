const industries = [
  'Sheet metal workshops',
  'Architectural fabrication',
  'Roofing and cladding',
  'HVAC duct production',
  'Industrial enclosures',
  'Custom metal parts',
]

export default function IndustriesSection() {
  return (
    <section id="industries" className="bg-slate-950 py-16 text-white md:py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-amber-300">Industries served</p>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-white md:text-5xl">
              Built for teams that value clean bends and clear decisions.
            </h2>
          </div>
          <p className="text-lg leading-8 text-slate-200">
            Whether you call it a double folder, sheet metal folder, metal folder, or metal folding machine, the goal is the same: make accurate folds easier to produce, inspect, and repeat.
          </p>
        </div>

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {industries.map((industry) => (
            <div key={industry} className="rounded-3xl border border-white/10 bg-white/10 p-6 text-slate-100 backdrop-blur transition hover:border-amber-300/50 hover:bg-white/15">
              <span className="text-lg font-semibold text-white">{industry}</span>
              <p className="mt-3 text-sm leading-6 text-slate-300">Reliable folding equipment for precise, repeatable metalwork.</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
