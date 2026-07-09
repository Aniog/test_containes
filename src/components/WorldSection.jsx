import { Droplets, Leaf, Bug, FlaskConical } from 'lucide-react'

const worlds = [
  {
    id: 'freshwater',
    icon: Droplets,
    title: 'Freshwater Ecosystems',
    subtitle: 'Lakes, Rivers & Ponds',
    description: 'Freshwater habitats teem with microscopic life. From the graceful paramecium to the voracious amoeba, these tiny organisms form the foundation of aquatic food webs. A single drop of pond water may contain thousands of different species.',
    color: 'cosmos',
    items: ['Paramecium', 'Vorticella', 'Hydra', 'Water Fleas'],
  },
  {
    id: 'soil',
    icon: Leaf,
    title: 'Soil Microbiome',
    subtitle: 'The Living Earth',
    description: 'Beneath our feet lies a vast network of microscopic life. Bacteria, fungi, and microscopic animals work together to decompose organic matter, cycle nutrients, and maintain soil health. One gram of soil contains more microorganisms than there are stars in the Milky Way.',
    color: 'micro',
    items: ['Mycorrhizae', 'Nematodes', 'Springtails', 'Bacteria'],
  },
  {
    id: 'ocean',
    icon: Bug,
    title: 'Ocean Depths',
    subtitle: 'Marine Microorganisms',
    description: 'The ocean is home to an incredible diversity of microscopic life. Phytoplankton produce over 50% of Earth\'s oxygen, while zooplankton form the base of the marine food chain. From coral reefs to deep-sea vents, microorganisms thrive everywhere.',
    color: 'nebula',
    items: ['Diatoms', 'Coccolithophores', 'Foraminifera', 'Radiolarians'],
  },
  {
    id: 'extreme',
    icon: FlaskConical,
    title: 'Extreme Environments',
    subtitle: 'Life at the Limits',
    description: 'Extremophiles are microorganisms that thrive in conditions once thought impossible for life. From the scorching heat of volcanic vents to the crushing pressure of the deep ocean, these resilient organisms push the boundaries of biology.',
    color: 'cosmos',
    items: ['Thermophiles', 'Halophiles', 'Acidophiles', 'Psychrophiles'],
  },
]

const colorMap = {
  cosmos: {
    bg: 'bg-cosmos-400/10',
    border: 'border-cosmos-400/20',
    text: 'text-cosmos-400',
    icon: 'bg-cosmos-400/20',
    hover: 'hover:border-cosmos-400/40',
  },
  micro: {
    bg: 'bg-micro-400/10',
    border: 'border-micro-400/20',
    text: 'text-micro-400',
    icon: 'bg-micro-400/20',
    hover: 'hover:border-micro-400/40',
  },
  nebula: {
    bg: 'bg-nebula-400/10',
    border: 'border-nebula-400/20',
    text: 'text-nebula-400',
    icon: 'bg-nebula-400/20',
    hover: 'hover:border-nebula-400/40',
  },
}

export default function WorldSection() {
  return (
    <section id="worlds" className="relative py-20 lg:py-32 bg-cosmic-gradient">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 lg:mb-20">
          <span className="inline-block px-4 py-1.5 rounded-full bg-cosmos-400/10 border border-cosmos-400/20 text-cosmos-400 text-sm font-medium mb-4">
            Microscopic Worlds
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold text-white mb-6">
            Habitats of the Invisible
          </h2>
          <p className="text-lg text-gray-400 max-w-3xl mx-auto">
            Microscopic life exists in every environment on Earth. Explore the diverse 
            worlds where these tiny organisms thrive and shape our planet.
          </p>
        </div>

        {/* Worlds Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {worlds.map((world, index) => {
            const colors = colorMap[world.color]
            
            return (
              <div
                key={world.id}
                className={`relative overflow-hidden rounded-2xl border ${colors.border} ${colors.hover} transition-all duration-300 group`}
              >
                {/* Background Image */}
                <div className="absolute inset-0 z-0">
                  <img
                    data-strk-img-id={`world-${world.id}-bg-${index}`}
                    data-strk-img={`[${world.id}-subtitle] [${world.id}-title] microscopic ecosystem`}
                    data-strk-img-ratio="16x9"
                    data-strk-img-width="800"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    alt={world.title}
                    className="w-full h-full object-cover opacity-30 group-hover:opacity-40 transition-opacity duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-br from-[#0a0a1a]/95 via-[#0a0a1a]/85 to-[#0a0a1a]/95" />
                </div>

                {/* Content */}
                <div className="relative z-10 p-8">
                  {/* Icon & Title */}
                  <div className="flex items-start gap-4 mb-6">
                    <div className={`p-3 rounded-xl ${colors.icon} flex-shrink-0`}>
                      <world.icon className={`w-6 h-6 ${colors.text}`} />
                    </div>
                    <div>
                      <h3 id={`${world.id}-title`} className="text-xl font-heading font-bold text-white mb-1">
                        {world.title}
                      </h3>
                      <span id={`${world.id}-subtitle`} className={`text-sm ${colors.text}`}>
                        {world.subtitle}
                      </span>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-gray-400 leading-relaxed mb-6">
                    {world.description}
                  </p>

                  {/* Species List */}
                  <div>
                    <h4 className="text-sm font-semibold text-white mb-3">Notable Species:</h4>
                    <div className="flex flex-wrap gap-2">
                      {world.items.map((item, i) => (
                        <span
                          key={i}
                          className={`px-3 py-1 rounded-full text-xs font-medium ${colors.bg} ${colors.text}`}
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            )
          })}
        </div>

        {/* Stats Banner */}
        <div className="mt-16 p-8 rounded-2xl bg-white/5 border border-white/10">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-micro-400 mb-1">1 Trillion</div>
              <div className="text-sm text-gray-400">Bacteria in 1g of soil</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-cosmos-400 mb-1">70%</div>
              <div className="text-sm text-gray-400">Ocean microbes</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-nebula-400 mb-1">50%</div>
              <div className="text-sm text-gray-400">Oxygen from phytoplankton</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-white mb-1">3.5 Billion</div>
              <div className="text-sm text-gray-400">Years of evolution</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}