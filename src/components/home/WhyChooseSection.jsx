const reasons = [
  {
    title: 'Clarity for buyers',
    description: 'The page structure guides visitors from brand understanding to product interest with minimal friction.',
  },
  {
    title: 'Premium visual language',
    description: 'Stone, slate, and amber tones create a polished industrial identity that feels elegant instead of harsh.',
  },
  {
    title: 'Strong product relevance',
    description: 'Every featured term directly supports the machinery categories you provided, keeping the message tightly aligned.',
  },
]

const WhyChooseSection = () => {
  return (
    <section id="why-artitect" className="border-b border-slate-200 bg-stone-50">
      <div className="mx-auto max-w-7xl px-6 py-20 md:px-10 md:py-28">
        <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
          <div>
            <p className="text-xs font-medium uppercase tracking-[0.32em] text-slate-500">
              Why ARTITECT
            </p>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-slate-950 md:text-4xl">
              Created to feel sophisticated, reliable, and easy to trust.
            </h2>
            <p className="mt-5 max-w-2xl text-base leading-7 text-slate-700 md:text-lg">
              This site direction gives ARTITECT MACHINERY a professional first impression while keeping the experience user friendly for distributors, fabricators, and manufacturing decision-makers.
            </p>
          </div>

          <div className="grid gap-5">
            {reasons.map((reason) => (
              <article key={reason.title} className="rounded-[1.75rem] border border-slate-200 bg-white p-6 shadow-sm md:p-8">
                <h3 className="text-2xl font-semibold tracking-tight text-slate-950">{reason.title}</h3>
                <p className="mt-3 text-base leading-7 text-slate-700">{reason.description}</p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default WhyChooseSection
