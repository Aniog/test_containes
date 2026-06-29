const capabilities = [
  {
    title: 'Elegant engineering language',
    text: 'Clean lines, balanced spacing, and polished product presentation that reflects premium industrial standards.',
  },
  {
    title: 'User-friendly workflow',
    text: 'Interfaces and machine positioning centered around clarity, confidence, and everyday usability for operators.',
  },
  {
    title: 'Production confidence',
    text: 'A machinery profile suited to repeatable folding tasks, fabrication reliability, and practical long-term value.',
  },
]

function CapabilitiesSection() {
  return (
    <section className="bg-white py-16 text-brand-copy md:py-24">
      <div className="mx-auto grid max-w-7xl gap-10 px-6 md:px-10 lg:grid-cols-2 lg:px-16">
        <div>
          <p className="text-sm font-semibold uppercase tracking-widest text-brand-champagne-deep">
            Why ARTITECT MACHINERY
          </p>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight text-brand-copy md:text-4xl">
            Industrial machinery with a calmer, more premium customer experience.
          </h2>
          <p className="mt-5 max-w-2xl text-base leading-8 text-brand-soft md:text-lg">
            The site experience is intentionally simple: clear product naming,
            readable technical positioning, and direct pathways for buyers looking
            for folding systems they can trust.
          </p>
        </div>

        <div className="grid gap-5">
          {capabilities.map((item, index) => (
            <div
              key={item.title}
              className="rounded-3xl border border-brand-line bg-brand-mist p-6 text-brand-copy"
            >
              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-brand-ink text-sm font-semibold text-brand-champagne">
                  0{index + 1}
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-brand-copy">{item.title}</h3>
                  <p className="mt-2 text-sm leading-7 text-brand-soft md:text-base">
                    {item.text}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default CapabilitiesSection
