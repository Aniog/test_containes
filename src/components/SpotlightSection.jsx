import { useEffect, useRef } from 'react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'

const spotlightAnimals = [
  {
    id: 'sp-snow-leopard',
    name: 'Snow Leopard',
    scientific: 'Panthera uncia',
    habitat: 'Himalayas & Central Asia',
    status: 'Vulnerable',
    statusColor: 'text-amber-400',
    description:
      'The elusive ghost of the mountains, snow leopards are perfectly adapted to life in the cold, rugged terrain of Central Asia. Their thick fur and wide paws allow them to navigate deep snow with ease.',
    facts: ['Can leap up to 15 meters', 'Cannot roar — only purr', 'Solitary and nocturnal'],
  },
  {
    id: 'sp-blue-whale',
    name: 'Blue Whale',
    scientific: 'Balaenoptera musculus',
    habitat: 'All Oceans',
    status: 'Endangered',
    statusColor: 'text-red-400',
    description:
      'The largest animal ever known to have existed on Earth, the blue whale can reach lengths of up to 30 meters. Despite their enormous size, they feed almost exclusively on tiny krill.',
    facts: ['Heart weighs ~180 kg', 'Calls heard 1,600 km away', 'Lives up to 90 years'],
  },
  {
    id: 'sp-chameleon',
    name: 'Panther Chameleon',
    scientific: 'Furcifer pardalis',
    habitat: 'Madagascar',
    status: 'Least Concern',
    statusColor: 'text-green-400',
    description:
      'Masters of disguise, panther chameleons can change their skin color in seconds. This ability is used not just for camouflage, but also for communication and temperature regulation.',
    facts: ['Eyes move independently', 'Tongue is 1.5× body length', 'Over 200 color variants'],
  },
]

const SpotlightCard = ({ animal, reverse }) => (
  <div className={`flex flex-col ${reverse ? 'md:flex-row-reverse' : 'md:flex-row'} gap-8 items-center`}>
    {/* Image */}
    <div className="w-full md:w-1/2 rounded-2xl overflow-hidden shadow-2xl">
      <img
        src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
        alt={animal.name}
        className="w-full h-72 md:h-96 object-cover"
        data-strk-img-id={`spotlight-img-${animal.id}`}
        data-strk-img={`[${animal.id}-name] [${animal.id}-habitat]`}
        data-strk-img-ratio="4x3"
        data-strk-img-width="800"
      />
    </div>

    {/* Text */}
    <div className="w-full md:w-1/2">
      <div className="flex items-center gap-3 mb-2">
        <span className={`text-xs font-bold uppercase tracking-widest ${animal.statusColor}`}>
          ● {animal.status}
        </span>
      </div>
      <h3
        id={`${animal.id}-name`}
        className="text-3xl font-bold text-[#f5f0e8] mb-1"
        style={{ fontFamily: "'Playfair Display', serif" }}
      >
        {animal.name}
      </h3>
      <p className="text-amber-400/80 italic text-sm mb-4">{animal.scientific}</p>
      <p id={`${animal.id}-habitat`} className="text-[#a8a090] text-sm mb-4">
        📍 {animal.habitat}
      </p>
      <p className="text-[#d4cfc5] leading-relaxed mb-6">{animal.description}</p>
      <ul className="space-y-2">
        {animal.facts.map((fact, i) => (
          <li key={i} className="flex items-center gap-3 text-[#d4cfc5]">
            <span className="w-2 h-2 rounded-full bg-amber-400 flex-shrink-0" />
            {fact}
          </li>
        ))}
      </ul>
    </div>
  </div>
)

const SpotlightSection = () => {
  const containerRef = useRef(null)

  useEffect(() => {
    ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <section ref={containerRef} className="py-20 px-4 md:px-8 bg-[#1a2e1a]">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-amber-400 font-semibold tracking-widest uppercase text-sm mb-3">Featured</p>
          <h2
            className="text-3xl md:text-4xl font-bold text-[#f5f0e8]"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Animal Spotlight
          </h2>
          <p className="text-[#a8a090] mt-4 max-w-xl mx-auto">
            A closer look at some of the most fascinating creatures on our planet.
          </p>
        </div>

        <div className="space-y-20">
          {spotlightAnimals.map((animal, i) => (
            <SpotlightCard key={animal.id} animal={animal} reverse={i % 2 !== 0} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default SpotlightSection
