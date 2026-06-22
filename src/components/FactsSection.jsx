const facts = [
  {
    id: 'fact-weight',
    number: '2 kg',
    label: 'Weight of bacteria in your body',
    desc: 'The average human carries about 2 kilograms of microorganisms',
  },
  {
    id: 'fact-species',
    number: '1 Trillion',
    label: 'Estimated microbial species',
    desc: 'Scientists believe there are over a trillion species of microbes on Earth',
  },
  {
    id: 'fact-age',
    number: '3.8 Billion',
    label: 'Years of microbial life',
    desc: 'Microorganisms have existed on Earth for 3.8 billion years',
  },
  {
    id: 'fact-ocean',
    number: '90%',
    label: 'Ocean biomass is microbial',
    desc: 'Microbes make up 90% of all living biomass in the oceans',
  },
]

const FactsSection = () => {
  return (
    <section className="py-20 md:py-28 relative overflow-hidden">
      <div
        className="absolute inset-0 opacity-20"
        data-strk-bg-id="facts-bg-x4y7z1"
        data-strk-bg="[facts-section-desc] [facts-section-title]"
        data-strk-bg-ratio="16x9"
        data-strk-bg-width="1600"
      />
      <div className="absolute inset-0 bg-cosmos-dark/90" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <p className="text-cosmos-accent uppercase tracking-widest text-xs font-semibold mb-3">
            By the Numbers
          </p>
          <h2
            id="facts-section-title"
            className="font-heading text-3xl md:text-5xl font-bold text-white mb-4"
          >
            Astonishing Facts
          </h2>
          <p id="facts-section-desc" className="text-gray-400 max-w-2xl mx-auto text-lg">
            The microscopic world is full of mind-blowing statistics that reveal just how important these tiny organisms are.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {facts.map((fact) => (
            <div
              key={fact.id}
              className="text-center p-6 rounded-2xl border border-white/10 bg-cosmos-card/50 backdrop-blur-sm"
            >
              <p className="font-heading text-3xl md:text-4xl font-bold text-cosmos-accent mb-2">
                {fact.number}
              </p>
              <p className="text-white font-medium text-sm mb-2">{fact.label}</p>
              <p className="text-gray-400 text-xs leading-relaxed">{fact.desc}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="rounded-2xl overflow-hidden border border-white/10 h-64">
            <img
              alt="Microscope laboratory research"
              data-strk-img-id="facts-img1-a2b5c8"
              data-strk-img="[facts-section-desc] [facts-section-title] microscope laboratory"
              data-strk-img-ratio="4x3"
              data-strk-img-width="500"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="rounded-2xl overflow-hidden border border-white/10 h-64">
            <img
              alt="Virus particles electron microscope"
              data-strk-img-id="facts-img2-d6e9f3"
              data-strk-img="[facts-section-title] virus particles electron microscope"
              data-strk-img-ratio="4x3"
              data-strk-img-width="500"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="rounded-2xl overflow-hidden border border-white/10 h-64">
            <img
              alt="Fluorescent cells under microscope"
              data-strk-img-id="facts-img3-g1h4j7"
              data-strk-img="[facts-section-title] fluorescent cells microscope glowing"
              data-strk-img-ratio="4x3"
              data-strk-img-width="500"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default FactsSection
