import SectionHeading from './SectionHeading'

const industries = [
  {
    title: 'HVAC and duct fabrication',
    description: 'Support repeatable folding for production environments where speed and consistency both matter.',
  },
  {
    title: 'Architectural sheet metal',
    description: 'Present machines as a refined fit for clean finishes, detail work, and high-appearance output.',
  },
  {
    title: 'Cabinet and enclosure production',
    description: 'Showcase dependable folding for manufacturers handling structured, repeatable metal components.',
  },
  {
    title: 'General metalworking shops',
    description: 'Give mixed-production businesses a clear sense of flexibility, usability, and professional capability.',
  },
]

const IndustriesSection = () => {
  return (
    <section id="industries" className="bg-brand-ink py-20 text-brand-white md:py-28">
      <div className="mx-auto max-w-7xl px-6 md:px-8">
        <SectionHeading
          eyebrow="Applications"
          title="Built to speak to the industries that depend on precise sheet metal folding"
          description="The structure below helps visitors quickly connect ARTITECT MACHINERY with real production use cases and business value."
          titleClassName="text-brand-white"
          descriptionClassName="text-brand-steel"
        />

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {industries.map((industry) => (
            <article
              key={industry.title}
              className="rounded-3xl border border-brand-white/10 bg-brand-white/5 p-8"
            >
              <p className="text-sm font-semibold uppercase tracking-widest text-brand-bronze">
                Industry Focus
              </p>
              <h3 className="mt-3 text-2xl font-semibold tracking-tight text-brand-white">
                {industry.title}
              </h3>
              <p className="mt-4 text-base leading-7 text-brand-steel">
                {industry.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default IndustriesSection
