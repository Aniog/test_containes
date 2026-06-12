const industries = [
  'Architectural metalwork',
  'Roofing and cladding',
  'HVAC fabrication',
  'Industrial panel production',
  'Custom metal workshops',
  'Door and enclosure manufacturing',
]

const productTerms = [
  'double folding machine',
  'double folder',
  'sheet metal folder',
  'sheet metal folding machine',
  'metal folder',
  'metal folder machine',
  'metal folding machine',
]

const IndustriesSection = () => {
  return (
    <section id="industries" className="bg-white py-20 text-slate-950 md:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
          <div className="overflow-hidden rounded-[2rem] border border-slate-200 bg-slate-100 p-3 shadow-sm">
            <div
              className="min-h-[460px] rounded-[1.5rem] bg-slate-800"
              data-strk-bg-id="artitect-industries-workshop-bg-d59f13"
              data-strk-bg="[industries-subtitle] [industries-title]"
              data-strk-bg-ratio="3x4"
              data-strk-bg-width="900"
              aria-label="Sheet metal folding workshop"
            />
          </div>

          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-amber-600">Industries</p>
            <h2 id="industries-title" className="mt-4 text-3xl font-semibold tracking-tight text-slate-950 md:text-5xl">
              Practical folding equipment for modern metal shops
            </h2>
            <p id="industries-subtitle" className="mt-5 text-lg leading-8 text-slate-600">
              Our machinery supports teams that need dependable sheet forming, accurate edges, and a cleaner way to handle everyday metal folding tasks.
            </p>

            <div className="mt-9 grid gap-3 sm:grid-cols-2">
              {industries.map((industry) => (
                <div key={industry} className="rounded-2xl border border-slate-200 bg-slate-50 px-5 py-4 text-base font-semibold text-slate-800">
                  {industry}
                </div>
              ))}
            </div>

            <div className="mt-9 rounded-3xl border border-slate-200 bg-slate-950 p-6 text-white">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-amber-300">Product focus</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {productTerms.map((term) => (
                  <span key={term} className="rounded-full border border-white/10 bg-white/10 px-4 py-2 text-sm font-medium text-slate-100">
                    {term}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default IndustriesSection
