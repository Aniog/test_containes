const environments = [
  {
    id: 'pond-water',
    title: 'Pond Water',
    desc: 'A single drop of pond water contains thousands of microscopic organisms living in complex ecosystems',
    imgId: 'env-pond-b3c6f9',
    titleId: 'env-pond-water-title',
    descId: 'env-pond-water-desc',
  },
  {
    id: 'ocean-depths',
    title: 'Ocean Depths',
    desc: 'Deep sea microorganisms thriving near hydrothermal vents in extreme pressure and temperature',
    imgId: 'env-ocean-e7g1j4',
    titleId: 'env-ocean-depths-title',
    descId: 'env-ocean-depths-desc',
  },
  {
    id: 'soil-ecosystem',
    title: 'Soil Ecosystem',
    desc: 'Billions of bacteria and fungi in every gram of soil forming underground networks of life',
    imgId: 'env-soil-h2k5m8',
    titleId: 'env-soil-ecosystem-title',
    descId: 'env-soil-ecosystem-desc',
  },
  {
    id: 'human-body',
    title: 'Human Microbiome',
    desc: 'Trillions of microorganisms living inside the human body outnumbering our own cells',
    imgId: 'env-body-l6n9p3',
    titleId: 'env-human-body-title',
    descId: 'env-human-body-desc',
  },
  {
    id: 'hot-springs',
    title: 'Hot Springs',
    desc: 'Extremophile bacteria creating vibrant colors in boiling geothermal pools',
    imgId: 'env-springs-q1s4v7',
    titleId: 'env-hot-springs-title',
    descId: 'env-hot-springs-desc',
  },
  {
    id: 'ice-crystals',
    title: 'Frozen Worlds',
    desc: 'Psychrophilic microbes surviving in Antarctic ice and permafrost for millennia',
    imgId: 'env-ice-t5w8z2',
    titleId: 'env-ice-crystals-title',
    descId: 'env-ice-crystals-desc',
  },
]

const EnvironmentsSection = () => {
  return (
    <section className="py-20 md:py-28 bg-cosmos-surface">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <p className="text-cosmos-violet uppercase tracking-widest text-xs font-semibold mb-3">
            Habitats
          </p>
          <h2
            id="env-section-title"
            className="font-heading text-3xl md:text-5xl font-bold text-white mb-4"
          >
            Where They Live
          </h2>
          <p id="env-section-desc" className="text-gray-400 max-w-2xl mx-auto text-lg">
            Microscopic life thrives in every environment on Earth — from boiling hot springs to frozen Antarctic ice.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {environments.map((env) => (
            <div
              key={env.id}
              className="group rounded-2xl overflow-hidden border border-white/10 bg-cosmos-card hover:border-cosmos-violet/30 transition-all duration-300"
            >
              <div className="h-52 overflow-hidden">
                <img
                  alt={env.title}
                  data-strk-img-id={env.imgId}
                  data-strk-img={`[${env.descId}] [${env.titleId}] [env-section-title]`}
                  data-strk-img-ratio="16x9"
                  data-strk-img-width="600"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="p-5">
                <h3 id={env.titleId} className="font-heading text-white font-semibold text-lg mb-2">
                  {env.title}
                </h3>
                <p id={env.descId} className="text-gray-400 text-sm leading-relaxed">
                  {env.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default EnvironmentsSection
