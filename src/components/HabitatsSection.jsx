import { useEffect, useRef } from 'react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'

const habitats = [
  { id: 'hab-rainforest', name: 'Tropical Rainforest', species: '~3 million species', color: 'from-green-900/80' },
  { id: 'hab-ocean', name: 'Deep Ocean', species: '~250,000 species', color: 'from-blue-900/80' },
  { id: 'hab-savanna', name: 'African Savanna', species: '~45,000 species', color: 'from-yellow-900/80' },
  { id: 'hab-arctic', name: 'Arctic Tundra', species: '~1,700 species', color: 'from-slate-800/80' },
  { id: 'hab-coral', name: 'Coral Reef', species: '~25% of marine life', color: 'from-cyan-900/80' },
  { id: 'hab-desert', name: 'Desert', species: '~4,000 species', color: 'from-orange-900/80' },
]

const HabitatCard = ({ hab }) => (
  <div className="relative rounded-2xl overflow-hidden group cursor-pointer hover:-translate-y-1 transition-transform duration-300 h-64">
    <img
      src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
      alt={hab.name}
      className="w-full h-full object-cover"
      data-strk-img-id={`hab-img-${hab.id}`}
      data-strk-img={`[${hab.id}-name] wildlife habitat`}
      data-strk-img-ratio="3x2"
      data-strk-img-width="600"
    />
    <div className={`absolute inset-0 bg-gradient-to-t ${hab.color} to-transparent`} />
    <div className="absolute bottom-0 left-0 right-0 p-5">
      <h3 id={`${hab.id}-name`} className="text-white font-bold text-xl mb-1">{hab.name}</h3>
      <p className="text-white/70 text-sm">{hab.species}</p>
    </div>
  </div>
)

const HabitatsSection = () => {
  const containerRef = useRef(null)

  useEffect(() => {
    ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <section ref={containerRef} className="py-20 px-4 md:px-8 bg-[#1a2e1a]">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-14">
          <p className="text-amber-400 font-semibold tracking-widest uppercase text-sm mb-3">Where They Live</p>
          <h2
            className="text-3xl md:text-4xl font-bold text-[#f5f0e8]"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Natural Habitats
          </h2>
          <p className="text-[#a8a090] mt-4 max-w-xl mx-auto">
            Every habitat on Earth is home to a unique community of animals, each perfectly adapted to their environment.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {habitats.map((hab) => (
            <HabitatCard key={hab.id} hab={hab} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default HabitatsSection
