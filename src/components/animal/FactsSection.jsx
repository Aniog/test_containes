const facts = [
  {
    icon: '🦋',
    number: '8.7M',
    label: 'Species on Earth',
    description: 'Scientists estimate there are around 8.7 million species of animals on our planet, with millions yet to be discovered.',
  },
  {
    icon: '🐋',
    number: '30m',
    label: 'Blue Whale Length',
    description: 'The blue whale is the largest animal ever known to have existed, reaching up to 30 meters in length.',
  },
  {
    icon: '🐜',
    number: '10¹⁶',
    label: 'Ants on Earth',
    description: 'There are an estimated 10 quadrillion ants on Earth — more than any other animal species by biomass.',
  },
  {
    icon: '🦅',
    number: '320km/h',
    label: 'Peregrine Falcon Speed',
    description: 'The peregrine falcon is the fastest animal on Earth, reaching speeds of over 320 km/h in a dive.',
  },
  {
    icon: '🐢',
    number: '200yrs',
    label: 'Tortoise Lifespan',
    description: 'Giant tortoises can live for over 200 years, making them one of the longest-lived animals on Earth.',
  },
  {
    icon: '🦑',
    number: '13m',
    label: 'Giant Squid Tentacles',
    description: 'The giant squid can grow up to 13 meters long and has the largest eyes of any living animal.',
  },
];

export default function FactsSection() {
  return (
    <section id="facts" className="py-24 bg-stone-100">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-amber-600 uppercase tracking-[0.3em] text-xs font-semibold mb-3" style={{ fontFamily: 'Inter, sans-serif' }}>
            Did You Know?
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-stone-800 mb-4" style={{ fontFamily: 'Playfair Display, serif' }}>
            Incredible Animal Facts
          </h2>
          <p className="text-stone-500 max-w-xl mx-auto text-base leading-relaxed" style={{ fontFamily: 'Inter, sans-serif' }}>
            The animal kingdom is full of astonishing records, adaptations, and surprises that continue to amaze scientists.
          </p>
        </div>

        {/* Facts grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {facts.map((fact) => (
            <div
              key={fact.label}
              className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow duration-300 border border-stone-100"
            >
              <div className="text-4xl mb-4">{fact.icon}</div>
              <div className="text-3xl font-bold text-stone-800 mb-1" style={{ fontFamily: 'Playfair Display, serif' }}>
                {fact.number}
              </div>
              <div className="text-amber-600 text-xs uppercase tracking-wider font-semibold mb-3" style={{ fontFamily: 'Inter, sans-serif' }}>
                {fact.label}
              </div>
              <p className="text-stone-500 text-sm leading-relaxed" style={{ fontFamily: 'Inter, sans-serif' }}>
                {fact.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
